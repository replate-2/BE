
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl
            .string('username', 128)
            .index()
            .notNullable()
            .unique()
        tbl.string('password', 128).notNullable();
        tbl.integer('phoneNumber', 10).notNullable();
        tbl.string('role').notNullable();
    })
    .createTable('businessProfile', tbl => {
        tbl.increments();

        tbl
            .string('businessName', 200)
            .index()
            .notNullable()
            .unique()
        tbl.string('businessAddress').notNullable();
        tbl.integer('businessPhone', 10).notNullable();

        tbl.integer('userId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('volunteerProfile', tbl => {
        tbl.increments();

        tbl
            .string('volunteerName', 200)
            .index()
            .notNullable()
        tbl.integer('phoneNumber', 10).notNullable();

        tbl.integer('userId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('food', tbl => {
        tbl.increments();

        tbl.string('foodType').notNullable();
        tbl.integer('lbsOfFood').notNullable();
        tbl.datetime('preferredPickupTime').notNullable();

        tbl.integer('businessId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('businessProfile')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('pickupRequests', tbl => {
        tbl.increments();

        tbl.boolean('completed').defaultTo(false);

        tbl.integer('foodId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('food')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl.integer('volunteerId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('volunteerProfile')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('pickupRequests')
        .dropTableIfExists('food')
        .dropTableIfExists('volunteerProfile')
        .dropTableIfExists('businessProfile')
        .dropTableIfExists('users')
};
