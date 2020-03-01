const db = require('../data/dbConfig');

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('food')
}

function findBy(filter) {
    return db('food')
        .select('*')
        .where(filter);
}

function findById(id) {
    return db('food as f')
        .join('businessProfile as b', 'f.businessId', 'b.id')
        .select('id', 'f.foodType', 'f.lbsofFood', 'f.preferredPickupTime', 'b.businessName')
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