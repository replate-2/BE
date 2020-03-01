const db = require('../data/dbConfig');

module.exports = {
    find,
    findByBus,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('food')
}

function findByBus(businessId) {
    return db('food')
        .where({businessId})
}

function findById(id) {
    return db('food')
        .where({id})
        .first()
}

function add(food) {
    return db('food')
        .insert(food, 'id')
        .then(ids => {
            return findById(ids);
        })
}

function update(changes, id) {
    return db('food')
        .where({id})
        .update(changes);
}

function remove(id) {
    return db('food')
        .where({id})
        .del();
}