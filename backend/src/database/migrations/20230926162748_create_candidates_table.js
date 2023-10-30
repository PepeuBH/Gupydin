/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("candidates", function (table) {
    table.increments("id").primary(),
      table.string("username").unique().notNullable(),
      table.string("password").notNullable(),
      table.string("email").unique().notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("candidates");
};
