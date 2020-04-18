const express = require('express');
const router = require('express').Router();
const db = require('../../models/index');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');
const { jwtSecret } = require('../../utils/utils');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.route('/')
 .post(expressJwt({ secret: jwtSecret }), async (req, res) => {
        try {
            await db.Likes.create({ ...req.body, author: req.user.userId });
            res.status(201).json({});
        } catch (err) {
            console.log("FAIL post a reaction");
            res.status(500).send(err);
        }
    });

module.exports = router;