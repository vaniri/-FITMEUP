const express = require('express');
const router = require('express').Router();
const db = require('../../models/index');
const { handleUpDelRes } = require('./utils/utils.js');
const expressJwt = require('express-jwt');
const { jwtSecret } = require('../../utils/utils');
const mongoose = require('mongoose');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', expressJwt({ secret: jwtSecret }),
    async (req, res) => {
        try {
            let result = await db.Post.create({ ...req.body.data, author: req.body.userId });
            res.status(201).json({ postId: result._id });
        } catch (err) {
            res.status(500).send(err);
        }
    });

router.get('/all', async (req, res) => {
    try {
        let posts = await db.Post.find().populate("author").lean();
        res.status(200).json({ posts });
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/byuser/:id', async (req, res) => {
    try {
        let posts = await db.Post.find({ author: req.params.id }).populate("author").lean();
        res.status(200).json({ posts });
    } catch (err) {
        res.status(500).send(err);
    }
});

router.route('/byid/:id')
    .patch(expressJwt({ secret: jwtSecret }), async (req, res) => {
        try {
            await handleUpDelRes(db.Post.findfindByIdAndUpdate(req.params.id, req.body), res);
        } catch (err) {
            res.status(500).send(err);
        }
    })
    .delete(expressJwt({ secret: jwtSecret }), async (req, res) => {
        try {
            let post = await db.Post.findById(req.params.id);
            if (post.author == req.user.userId) {
                await handleUpDelRes(db.Post.findByIdAndDelete(req.params.id), res);
            } else {
                res.status(403).send();       
            }
        } catch (err) {
            res.status(500).send(err);
        }
    })
    .get(async (req, res) => {
        try {
            let post = await db.Post.findOne({ "_id": req.params.id }).populate("author").lean();
            let comments = await db.Comment.find({ postItem: req.params.id }).populate("author").lean();
            let likes = await db.Likes.aggregate([
                { $match: { postItem: mongoose.Types.ObjectId(req.params.id) } },
                { $group: { _id: '$type', count: { $sum: 1 } } }
            ]);
            let likesObj = {};
            likes.forEach(el => { likesObj[el._id] = el.count });
            res.status(200).json({ ...post, comments, likesObj });
        } catch (err) {
            console.log("Error find post or comments", err);
            res.status(500).send(err);
        }
    })

router.get('/subs', expressJwt({ secret: jwtSecret }),
    async (req, res) => {
        try {
            let rawFriends = await db.Subs.find({ srcUser: req.user.userId }).lean();
            let friends = rawFriends.map(({ tgtUser }) => tgtUser);
            let friendsPosts = await db.Post.find({'author': { $in: friends }}).populate('author').lean();
            res.status(200).json(friendsPosts);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
})

module.exports = router;