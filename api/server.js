const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const BusAuthRouter = require('../auth/business-auth-router');
const VolAuthRouter = require('../auth/volunteer-auth-router');
const businessRouter = require('../users/businesses/business-router');
const volunteerRouter = require('../users/volunteers/volunteer-router');
const foodRouter = require('../food/food-router');
const pickupRouter = require('../food/pickups-router');
const restricted = require('../auth/restricted-middleware');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth/business', BusAuthRouter)
server.use('/api/auth/volunteer', VolAuthRouter)
server.use('/api/users/business', restricted, businessRouter)
server.use('/api/users/volunteer', restricted, volunteerRouter)
server.use('/api/food', restricted, foodRouter)
server.use('/api/pickups', restricted, pickupRouter)

server.get('/', (req, res) => {
    res.send('Server is running');
})

module.exports = server;