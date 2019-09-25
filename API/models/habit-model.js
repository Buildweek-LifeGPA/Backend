// Files
const db = require('../../data/dbConfig')

module.exports = {
    add,
    find,
    findById,
    findByUserId,
    remove
}

function find() {
    return db('habits');
}

async function add(habit) {
    const [id] = await db('habits').insert(habit)
    return findById(id);
}

function findById(id) {
    return db('habits')
        .where({ id })
        .first();
}

function findByUserId(user_id) {
    return db('habits')
        .leftJoin('habit_dates', 'habits.id', 'habit_dates.habit_id')
        .where('user_id', user_id)
}

function remove(id) {
    return db('habits')
        .where('id', id)
        .del();
}

