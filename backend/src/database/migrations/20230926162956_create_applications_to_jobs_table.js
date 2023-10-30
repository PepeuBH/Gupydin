const { application } = require("express");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("applications_to_jobs", function (table) {
    table.increments("id").primary();
    table.integer("candidate_id").unsigned().notNullable();
    table.foreign("candidate_id").references("candidates.id");
    table.integer("job_position_id").notNullable();
    table.foreign("job_position_id").references("job_positions.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("applications_to_jobs");
};
