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

function add(business) {
    return db('businesses')
        .insert(business, 'id')
        .then(ids => {
            return findById(ids);
        })
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