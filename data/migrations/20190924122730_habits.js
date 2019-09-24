exports.up = function (knex) {
    return knex.schema
        .createTable('habits', habits => {
            habits.increments();
            habits.string('habit_text', 512).notNullable();
            habits.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('habits')
};