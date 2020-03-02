const db = require('../../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
}

function add(volunteer) {
    return db('volunteers')
        .insert(volunteer, 'id')
        .then(ids => {
            return findById(ids);
        })
}

function find() {
    return db('volunteers')
}

function findBy(filter) {
    return db('volunteers')
        .select('*')
        .where(filter);
}

function findById(id) {
    return db('volunteers')
        .where({id})
        .first()
}

function update(changes, id) {
    return db('volunteers')
        .where({id})
        .update(changes);
}

function remove(id) {
    return db('volunteers')
        .where({id})
        .del();
}