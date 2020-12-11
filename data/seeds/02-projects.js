
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'Graduate from Lambda', description: 'finish lambda school', completed: false},
        {id: 2, name: 'Graduate from APU', description: 'finish my bachelors in Programming', completed: false},
        {id: 3, name: 'Live for 23 years', description: 'survive on planet earth for at least 8395 days', completed: true}
      ]);
    });
};
