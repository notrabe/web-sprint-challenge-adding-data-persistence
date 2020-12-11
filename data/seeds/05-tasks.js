
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, description: 'foo', notes:'bar', completed: true, project_id: '1'},
        {id: 1, description: 'foofoo', notes:'barbar', completed: true, project_id: '1'},
        {id: 1, description: 'foofoofoo', notes:'barbarbarbar', completed: true, project_id: '1'},
        {id: 1, description: 'foofoofoofoo', notes:'barbarbarbar', completed: true, project_id: '2'},
        {id: 1, description: 'foofoofoofoofoo', notes:'barbarbarbarbar', completed: true, project_id: '2'},
        {id: 1, description: 'foofoofoofoofoofoo', notes:'barbarbarbarbarbar', completed: true, project_id: '3'},
      ])
    })
}
