const express = require('express');

const router = express.Router();
const db = knex(knexConfig.development);

router.get('/', (req, res) => {
    res.status(200).json({ api: 'up'})
})

router.get('/friends', (req, res) => {
    db('Friends')
        .then(results => {
            res.json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/friends/:id', (req, res) => {
    db('Friends')
        .where({ id: req.params.id })
        .first()
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.post('/friends', (req, res) => {
    db('Friends')
        .insert(req.body, 'id')
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.put('/friends', (req, res) => {
    db('Friends')
    .where({ id: req.params.id })
    .update(req.body)
    .then(result => {
        res.json(result)
    })
    .catch(result => {
        res.status(500).json(result)
    })
})
