const db = require('../data/dbConfig');

module.exports = {
    find,
    findByVol,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('pickupRequests as p')
        .join('food as f', 'p.foodId', 'f.id')
        .join('volunteers as v', 'p.volunteerId', 'v.id')
        .select('p.id', 'f.foodType', 'f.lbsOfFood', 'f.preferredPickupTime', 'p.completed', 'p.volunteerId', 'v.name')
}

function findByVol(volunteerId) {
    return db('pickupRequests as p')
    .join('food as f', 'p.foodId', 'f.id')
    .join('volunteers as v', 'p.volunteerId', 'v.id')
    .select('p.id', 'f.foodType', 'f.lbsOfFood', 'f.preferredPickupTime', 'p.completed', 'p.volunteerId', 'v.name')
    .where({volunteerId})
}

function findById(id) {
    return db('pickupRequests as p')
    .join('food as f', 'p.foodId', 'f.id')
    .join('volunteers as v', 'p.volunteerId', 'v.id')
    .select('p.id', 'f.foodType', 'f.lbsOfFood', 'f.preferredPickupTime', 'p.completed', 'p.volunteerId', 'v.name')
        .where('p.id', id)
        .first()
}

function add(pickupRequests) {
    return db('pickupRequests')
        .insert(pickupRequests, 'id')
        .then(ids => {
            return findById(ids);
        })
}

function update(changes, id) {
    return db('pickupRequests')
        .where({id})
        .update(changes);
}

function remove(id) {
    return db('pickupRequests')
        .where({id})
        .del();
}