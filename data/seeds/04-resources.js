
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'foo', description: 'bar'},
        {id: 2, name: 'foo foo', description: 'bar bar'},
        {id: 3, name: 'foo three', description: 'bar three'},
        {id: 4, name: 'foo x4', description: 'bar x4'},
        {id: 5, name: 'foo fivers', description: 'bar bar bar bar bar'},
      ])
    })
}
