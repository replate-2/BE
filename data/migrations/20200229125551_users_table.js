
exports.up = function(knex) {
    return knex.schema.createTable('businesses', tbl => {
        tbl.increments();

        tbl
            .string('username', 128)
            .index()
            .notNullable()
            .unique()
        tbl.string('password', 128).notNullable();
        tbl
            .string('businessName', 200)
            .index()
            .notNullable()
            .unique()
        tbl.string('businessAddress').notNullable();
        tbl.string('businessPhone', 10).notNullable();
    })
    .createTable('volunteers', tbl => {
        tbl.increments();

        tbl
            .string('username', 128)
            .index()
            .notNullable()
            .unique()
        tbl.string('password', 128).notNullable();
        tbl
            .string('name', 200)
            .index()
            .notNullable()
        tbl.string('phoneNumber', 10).notNullable();
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
            .inTable('businesses')
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
            .inTable('volunteers')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('pickupRequests')
        .dropTableIfExists('food')
        .dropTableIfExists('volunteers')
        .dropTableIfExists('businesses')
};
