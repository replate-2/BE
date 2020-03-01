const router = require('express').Router();

const Food = require('./food-model');

router.get('/', (req, res) => {
    Food.find()
    .then(food => {
        res.status(200).json(food)
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Food.findById(id)
    .then(food => {
        if (food) {
            res.status(200).json(food)
        } else {
            res.status(404).json({message: 'Could not find food with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.post('/', (req, res) => {
    const foodInfo = req.body;

    Food.add(foodInfo)
    .then(food => {
        res.status(201).json(food)
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Food.findById(id)
    .then(food => {
        if (food) {
            Food.update(changes, id)
            .then(updatedInfo => {
                res.status(201).json(updatedInfo)
            })
        } else {
            res.status(404).json({message: 'Unable to find food with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Food.remove(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({removed: deleted})
            } else {
                res.status(404).json({message: 'Could not find food with that id'});
            }
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

module.exports = router;