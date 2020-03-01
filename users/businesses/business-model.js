const db = require('../../data/dbConfig');

module.exports = {
    find,
    findBy,
    findById,
    update,
    remove
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