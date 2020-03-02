const db = require('../../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
}

function add(business) {
    return db('businesses')
        .insert(business, 'id')
        .then(ids => {
            return findById(ids);
        })
}

function find() {
    return db('businesses')
}

function findBy(filter) {
    return db('businesses')
        .select('*')
        .where(filter);
}

function findById(id) {
    return db('businesses')
        .where({id})
        .first()
}

function update(changes, id) {
    return db('businesses')
        .where({id})
        .update(changes);
}

function remove(id) {
    return db('businesses')
        .where({id})
        .del();
}