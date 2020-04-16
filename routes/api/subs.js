const express = require('express');
const router = require('express').Router();
const db = require('../../models/index');
const expressJwt = require('express-jwt');
const { jwtSecret } = require('../../utils/utils');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', expressJwt({ secret: jwtSecret }),
    async (req, res) => {
        try {
            await db.Subs.create({ ...req.body, author: req.user.userId });
            res.status(201).json({});
        } catch (err) {
            console.log("FAIL subs");
            res.status(500).send(err);
        }
    });

module.exports = router;


