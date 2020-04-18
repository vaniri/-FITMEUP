const express = require('express');
const router = require('express').Router();
const db = require('../../models/index');
const { handleUpDelRes, checkDupErr } = require('./utils/utils.js');
const argon2 = require('argon2');
const { generateToken } = require('../../utils/utils');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
    try {
        req.body.password = await argon2.hash(req.body.password);
        let result = await db.User.create(req.body);
        let userId = result.id;
        res.status(201).json({ result, userId, token: generateToken(userId) });
    } catch (err) {
        checkDupErr(err, res);
        console.log(err);
    }
});

router.route('/:id')
    .get(async (req, res) => {
        try {
            let user = await db.User.findOne({ _id: req.params.id }).lean();
            delete user.password;
            res.json({ user });
        } catch (err) {
            res.status(500).send(err);
        }
    })
    .patch(async (req, res) => {
        try {
            await handleUpDelRes(db.User.findByIdAndUpdate(req.params.id, req.body), res);
        } catch (err) {
            checkDupErr(err, res);
        }
    })
    .delete(async (req, res) => {
        try {
            await handleUpDelRes(db.User.findByIdAndDelete(req.params.id), res);
        } catch (err) {
            res.status(500).send(err);
        }
    });

router.post('/login', async (req, res) => {
    try {
        let userRecord = await db.User.findOne({ email: req.body.email });
        if (!userRecord) {
            console.log("User not found");
            res.status(401).send();
            return;
        }

        let correctPassword = await argon2.verify(userRecord.password, req.body.password);
        if (!correctPassword) {
            console.log("Incorrect password");
            res.status(401).send();
            return;
        }

        console.log("Login Successful!");
        res.status(200).json({ userId: userRecord.id, token: generateToken(userRecord.id), username: userRecord.username, userImg: userRecord.image });
    } catch (err) {
        console.log("Error logging in: ", err);
        res.status(401).send(err);
    }
});

module.exports = router;
