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
    return db('food as f')
        .join('businesses as b', 'b.id', 'f.businessId')
        .select('f.id', 'f.foodType', 'f.lbsofFood', 'f.preferredPickupTime', 'businessName', 'businessAddress', 'businessPhone')
}

function findByBus(businessId) {
    return db('food as f')
        .join('businesses as b', 'b.id', 'f.businessId')
        .select('f.id', 'f.foodType', 'f.lbsofFood', 'f.preferredPickupTime', 'businessName', 'businessAddress', 'businessPhone')
        .where('f.businessId', businessId)
}

function findById(id) {
    return db('food as f')
        .join('businesses as b', 'b.id', 'f.businessId')
        .select('f.id', 'f.foodType', 'f.lbsofFood', 'f.preferredPickupTime', 'businessName', 'businessAddress', 'businessPhone')
        .where('f.id', id)
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