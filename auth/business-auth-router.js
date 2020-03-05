const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Businesses = require('../users/businesses/business-model');
const {jwtSecret} = require('../config/secrets');

router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Businesses.add(user)
        .then(newUser => {
            res.status(201).json(newUser);
        })
        .catch(err => {
            res.status(500).json({message: err});
        })
})

router.post('/login', (req, res) => {
    const {username, password} = req.body;

    Businesses.findBy({username})
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token,
                    id: user.id
                })
            } else {
                res.status(401).json({message: 'You shall not pass!'})
            }
        })
        .catch(err => {
            res.status(500).json({message: err});
        })
})

function generateToken(user) {
    const payload = {
        username: user.username,
        id: user.id
    }

    const options = {
        expiresIn: '7d'
    }

    return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;