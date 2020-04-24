const express   = require('express');
const router    = express.Router();
const Data      = require('../models/MaterialInventory');
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
            material_id:    req.body.material_id,
            storage_id:     req.body.storage_id,
            quantity:       req.body.quantity,
            in:             req.body.in,
            created:        date,
            updated:        date
        });
        const saved = await data.save();
        res.json(saved)
    } catch (e) {
        res.status(400).send(e)
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updated = await Data.updateOne(
            { _id: req.params.id },
            { $set: {
                    material_id:    req.body.material_id,
                    storage_id:     req.body.storage_id,
                    quantity:       req.body.quantity,
                    in:             req.body.in,
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