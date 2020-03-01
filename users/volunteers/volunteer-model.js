const db = require('../../data/dbConfig');

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove
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

function add(volunteer) {
    return db('volunteers')
        .insert(volunteer, 'id')
        .then(ids => {
            return findById(ids);
        })
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