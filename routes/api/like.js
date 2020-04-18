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
    })
// .get(expressJwt({ secret: jwtSecret }), async (req, res) => {
//     try {
//         let likes = await db.Likes.aggregate([
//             { $lookup: { from: 'Like', localField: 'postItem', foreignField: '_id', as: 'matchingPost' } },
//             { $match: { "matchingPost.author": mongoose.Types.ObjectId(req.user.userId) } },
//             { $group: { _id: '$type', count: { $sum: 1 } } }
//         ]);
//         console.log(likes)
//         let likesObj = {};
//         likes.forEach(el => { likesObj[el._id] = el.count });
//         console.log(likesObj);
//         res.status(201).json({ likesObj });
//     } catch (err) {
//         console.log("FAIL get a reaction");
//         res.status(500).send(err);
//         console.log(err)
//     }
// })

module.exports = router;