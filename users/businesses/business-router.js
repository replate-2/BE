const router = require('express').Router();

const Businesses = require('./business-model');

router.get('/', (req, res) => {
    Businesses.find()
    .then(businesses => {
        res.status(200).json(businesses)
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Businesses.findById(id)
    .then(business => {
        if (business) {
            res.status(200).json(business)
        } else {
            res.status(404).json({message: 'Could not find Businesses with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.post('/', (req, res) => {
    const businessInfo = req.body;

    Businesses.add(businessInfo)
    .then(business => {
        res.status(201).json(business)
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Businesses.findById(id)
    .then(business => {
        if (business) {
            Businesses.update(changes, id)
            .then(updatedInfo => {
                res.status(201).json(updatedInfo)
            })
        } else {
            res.status(404).json({message: 'Unable to find Businesses with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Businesses.remove(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({removed: deleted})
            } else {
                res.status(404).json({message: 'Could not find Businesses with that id'});
            }
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

module.exports = router;