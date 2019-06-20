
const db = require('../database/dbConfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('Friends')
}

function findById(id) {
    return db('Friends').where({ id });
}

function add(friend) {
    return db('Friends').insert(friend)
}

function update(id, changes) {
    return db('Friends').where({ id }).update(changes)
}

function remove(id){
    return db('Friends').where({ id }).del();
}


