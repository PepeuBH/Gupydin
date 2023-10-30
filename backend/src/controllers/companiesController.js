const connection = require("../database/connection");

module.exports = {
  async index(req, res, next) {
    try {
      const results = await connection("companies");
      return res.json(results);
    } catch (error) {
      next(error);
    }
  },

  async getCompanyByID(req, res, next) {
    try {
      const { id } = req.params;
      const result = await connection("companies").where("id", id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { company_name, company_email, password } = req.body;
      await connection("companies").insert({
        company_name,
        company_email,
        password,
      });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const company = await connection("companies")
        .where("id", id)
        .select("id")
        .first()
        .delete();
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { company_name, company_email, password } = req.body;
      await connection("companies").where({ id }).update({
        company_name,
        company_email,
        password,
      });
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  },
};
