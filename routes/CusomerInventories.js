const express   = require('express');
const router    = express.Router();
const Data      = require('../models/CustomerInventory');
const date      = new Date();

router.get('/', async (req, res) => {
    try {
        const data = await Data.find().sort({"_id": -1});
        res.json(data);
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        res.json(data)
    } catch (e) {
        res.status(400).send(e)
    }
});

router.post('/', async (req, res) => {
    try {
        const data = new Data({
            product_id: req.body.product_id,
            location:   req.body.location,
            created:    date,
            updated:    date
        });
        const saved = await data.save();
        res.json(saved)
    } catch (e) {
        res.status(400).send(e)
    }
});

router.patch('/:id/in', async (req, res) => {
    try {
        const updated = await Data.updateOne(
            { _id: req.params.id },
            { $set: {
                    in:         req.body.in,
                    updated:    date
                }
            }
        );
        res.json(updated);
    } catch (e) {
        res.status(400).send(e)
    }
});

router.patch('/:id/out', async (req, res) => {
    try {
        const updated = await Data.updateOne(
            { _id: req.params.id },
            { $set: {
                    in:         req.body.out,
                    updated:    date
                }
            }
        );
        res.json(updated);
    } catch (e) {
        res.status(400).send(e)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const removed = await Data.remove({_id: req.params.id});
        res.json(removed)
    } catch (e) {
        res.status(400).send(e)
    }
});

module.exports = router;