const express = require('express');
const router = require('express').Router();
const db = require('../../models/index');
const { handleUpDelRes, checkDupErr } = require('./utils/utils.js');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
    try {
        await db.User.create(req.body);
        res.status(201).json({});
    } catch (err) {
        checkDupErr(err, res);
    }
});

router.route('/:id')
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

module.exports = router;