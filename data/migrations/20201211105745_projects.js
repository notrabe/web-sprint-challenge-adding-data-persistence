
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', (tbl) => { //project table
        tbl.increments()
        tbl.string('name')
            .notNullable()
        tbl.string('description')
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false)
    })
    .createTable('tasks', (tbl) => { //task table
        tbl.increments()
        tbl.string('description')
            .notNullable()
        tbl.text('notes')
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false)
        tbl.integer('projects_id')
            .unsigned()
            .notNullable()
            .references('id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('resources', (tbl) => { //resource table
        tbl.increments()
        tbl.string('name')
            .notNullable()
        tbl.string('description')
    })
    .createTable('project_resources', (tbl) => {
        tbl.increments()
        tbl.integer('projects_id')
            .unsigned()
            .notNullable()
            .references('projects.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resources.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('projects')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
};
