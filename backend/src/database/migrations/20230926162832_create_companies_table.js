/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("companies", function (table) {
    table.increments("id").primary();
    table.string("company_name").unique().notNullable(),
      table.string("company_email").unique().notNullable(),
      table.string("password").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("companies");
};
