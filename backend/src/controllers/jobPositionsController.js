const connection = require("../database/connection");

module.exports = {
  async create(req, res, next) {
    try {
      //   const  = req.headers.authorization;
      const { company_id, title, description } = req.body;
      console.log(title);
      await connection("job_positions").insert({
        company_id,
        title,
        description,
      });
      return res.status(201).json({ message: "Vaga criada com sucesso" });
    } catch (error) {
      next(error);
    }
  },

  async getPositionPerCompany(req, res, next) {
    try {
      const { company_id } = req.params;
      const result = await connection("job_positions").where(
        "company_id",
        company_id
      );
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async getAllJobPositions(req, res, next) {
    try {
      const results = await connection("job_positions");
      return res.json(results);
    } catch (error) {
      next(error);
    }
  },

//   async delete(req, res, next) {
//     try {
//       const { id } = req.params;
//       const { company_id } = req.headers.authorization;

//       const result = await connection("job_positions").where(id);
//       console.log(result);

//       return res.status(204).send();
//     } catch (error) {
//       next(error);
//     }
//   },
};
