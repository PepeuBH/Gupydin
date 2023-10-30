const connection = require("../database/connection");

module.exports = {
  async index(req, res, next) {
    try {
      const results = await connection("candidates");
      return res.json(results);
    } catch (error) {
      next(error);
    }
  },

  async getUserByID(req, res, next) {
    try {
      const { id } = req.params;
      const result = await connection("candidates").where("id", id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { username, email, password } = req.body;
      await connection("candidates").insert({
        username,
        email,
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
      const candidade = await connection("candidates")
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
      const { username, email, password } = req.body;
      await connection("candidates").where({ id }).update({
        username,
        email,
        password,
      });
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  },
};
