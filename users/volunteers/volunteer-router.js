const router = require('express').Router();

const Volunteers = require('./volunteer-model');

router.get('/', (req, res) => {
    Volunteers.find()
    .then(volunteers => {
        res.status(200).json(volunteers)
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Volunteers.findById(id)
    .then(volunteer => {
        if (volunteer) {
            res.status(200).json(volunteer)
        } else {
            res.status(404).json({message: 'Could not find Volunteer with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.post('/', (req, res) => {
    const volunteerInfo = req.body;

    Volunteers.add(volunteerInfo)
    .then(volunteer => {
        res.status(201).json(volunteer)
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Volunteers.findById(id)
    .then(volunteer => {
        if (volunteer) {
            Volunteers.update(changes, id)
            .then(updatedInfo => {
                res.status(201).json(updatedInfo)
            })
        } else {
            res.status(404).json({message: 'Unable to find Volunteer with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Volunteers.remove(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({removed: deleted})
            } else {
                res.status(404).json({message: 'Could not find Volunteer with that id'});
            }
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

module.exports = router;