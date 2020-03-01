const router = require('express').Router();

const Pickups = require('./pickups-model');

router.get('/', (req, res) => {
    Pickups.find()
    .then(pickups => {
        res.status(200).json(pickups)
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Pickups.findById(id)
    .then(pickups => {
        if (pickups) {
            res.status(200).json(pickups)
        } else {
            res.status(404).json({message: 'Could not find pickups with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.get('/volunteer/:id', (req, res) => {
    const id = req.params.id;

    Pickups.findByVol(id)
        .then(pickups => {
            if (pickups) {
                res.status(200).json(pickups)
            } else {
                res.status(404).json({message: 'Unable to find requests for that volunteer id'})
            }
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

router.post('/', (req, res) => {
    const pickupsInfo = req.body;

    Pickups.add(pickupsInfo)
    .then(pickups => {
        res.status(201).json(pickups)
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Pickups.findById(id)
    .then(pickups => {
        if (pickups) {
            Pickups.update(changes, id)
            .then(updatedInfo => {
                res.status(201).json(updatedInfo)
            })
        } else {
            res.status(404).json({message: 'Unable to find pickups with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Pickups.remove(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({removed: deleted})
            } else {
                res.status(404).json({message: 'Could not find pickups with that id'});
            }
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

module.exports = router;