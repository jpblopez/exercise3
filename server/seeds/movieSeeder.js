/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('movies').del();
  await knex('movies').insert([
    { description: 'Cat movie is back ~' },
    { description: 'Another cat movie in the making :3' },
    { description: 'Best cat movie there is!' },
  ]);
};
