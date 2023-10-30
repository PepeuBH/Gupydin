/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("job_positions", function (table) {
    table.increments("id").primary(),
      table.string("title").notNullable(),
      table.string("description").notNullable(),
      table.integer("company_id").notNullable(),
      table.foreign("company_id").references("companies.id");
  });
};

/**
 *
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("job_positions");
};
