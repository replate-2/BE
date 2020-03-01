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
    return db('pickupRequests')
        
}

function findByVol(volunteerId) {
    return db('pickupRequests')
        .where({volunteerId})
}

function findById(id) {
    return db('pickupRequests')
        .where({id})
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