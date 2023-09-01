/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 *
 */
const bcrypt = require('bcrypt')

exports.up = function (knex) {
  return knex.schema
    .createTable('admin', function (table) {
      table.increments('id').primary()
      table.string('username')
      table.string('password')
      table.boolean('isAuthenticated').defaultTo(true)
    })
    .then(async () => {
      const hashedPassword = await bcrypt.hash('admin_password', 10)
      return knex('admin').insert({
        username: 'adminName',
        password: hashedPassword,
        isAuthenticated: true,
      })
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('admin')
}
