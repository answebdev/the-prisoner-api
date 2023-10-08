const express = require('express');
const router = express.Router();
const items = require('./db.json');

// Get Episodes
router.get('/', async (req, res) => {
    try {
        res.json(items);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Server error');
    }
});

// Get by episode id
router.get(`/:id`, (req, res) => {
    let items = episodes;
    let data = items.find((item) => item.id == req.params.id);
    res.json(data);
});

module.exports = router;