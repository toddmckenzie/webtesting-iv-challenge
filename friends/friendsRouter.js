
const router = require('express').Router();
const fm = require('./friendsModel.js');


// router.get('/', (req, res) => {
//     res.status(200).json({ api: 'up'})
// })

router.get('/', (req, res) => {
    fm.find()
        .then(results => {
            res.json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/:id', (req, res) => {
   fm.findById(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'err'})
        })
});

router.post('/', (req, res) => {
    fm.add(req.body)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'err'})
        })
});

router.put('/:id', (req, res) => {
    fm.update(req.body)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.status(500).json({ message: 'err'})
    })
})

router.delete('/:id', (req, res) => {
    fm.remove(req.params.id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({ message: 'err'})
    })
})


module.exports = router;

