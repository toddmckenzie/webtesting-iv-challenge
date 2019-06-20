const db = require('../database/dbConfig');

module.exports = {
    getAll,
    add,
    remove,
    update,
    find

}
async function insert(friend) {
    return db('Friends').insert(friend).then(ids => {
      return db('Friends')
      .where({ id: ids[0] })
      .first()
    });
  }
  
  async function update(id, changes) {
    return null;
  }
  
  function remove(id) {
    return db('Friends').where({ id }).del()
  }
  
  function getAll() {
    return db('Friends');
  }
  
  function findById(id) {
    return db('Friends').where({ id })
