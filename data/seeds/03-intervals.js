
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("intervals").then(function () {
    // Inserts seed entries
    return knex("intervals").insert([
      {
        interval_type_name: "daily",
      },
      {
        interval_type_name: "weekly",
      },
      {
        interval_type_name: "monthly",
      },
    ]);
  });
};