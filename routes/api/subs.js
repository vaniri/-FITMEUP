const express = require('express');
const router = require('express').Router();
const db = require('../../models/index');
const expressJwt = require('express-jwt');
const { jwtSecret } = require('../../utils/utils');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.route('/')
    .post(expressJwt({ secret: jwtSecret }), async (req, res) => {
        try {
            await db.Subs.create({ ...req.body, author: req.user.userId });
            res.status(201).json({});
        } catch (err) {
            console.log("FAIL subs");
            res.status(500).send(err);
        }
    })
    .get(expressJwt({ secret: jwtSecret }), async (req, res) => {
        try {
            let rawFriends = await db.Subs.find({ srcUser: req.user.userId }).lean();
            let friends = rawFriends.map(({ tgtUser }) => tgtUser);
            let friendsData = await db.User.find({ _id: friends }).lean();
            res.status(201).json({ friendsData });
        } catch (err) {
            console.log("FAIL get friends data");
            res.status(500).send(err);
        }
    }
    )

module.exports = router;


