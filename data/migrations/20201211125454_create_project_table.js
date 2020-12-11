
exports.up = function(knex) {
    return knex.schema
    .createTable('project', (tbl) => {
        tbl
            .increments('id')
        tbl
            .string('name')
            .notNullable()
        tbl
            .string('description')
        tbl
            .boolean('completed')
            .notNullable()
            .defaultTo(false)
    })
    .createTable('task', (tbl) => {
        tbl
            .increments('id')
        tbl
            .string('description')
            .notNullable()
        tbl
            .text('notes')
        tbl
            .boolean('completed')
            .notNullable().
            defaultTo(false)
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('projects.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('resources', (tbl) => {
        tbl
            .increments('id')
        tbl
            .string('name')
            .notNullable()
            .unique()
        tbl
            .string('description')
    })
    .createTable('project_resources', (tbl) => {
        tbl
            .increments('id')
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('projects.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resources.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
}


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('task')
    .dropTableIfExists('project')
}