const express = require("express");
const routes = express.Router();

const connection = require("./database/connection");

const CandidatesController = require("./controllers/candidatesController");
const CompaniesController = require("./controllers/companiesController");
const ApplicationsController = require("./controllers/applicationsController");
const JobPositionsController = require("./controllers/jobPositionsController");

//CANDIDATES ROUTES <===
routes
  .post("/newcandidate", CandidatesController.create)
  .get("/candidates", CandidatesController.index)
  .delete("/candidate/:id", CandidatesController.delete)
  .get("/candidate/:id", CandidatesController.getUserByID)
  .put("/candidate/:id", CandidatesController.update)

  //COMPANIES ROUTES <===
  .get("/companies", CompaniesController.index)
  .post("/newcompany", CompaniesController.create)
  .delete("/company/:id", CompaniesController.delete)
  .get("/company/:id", CompaniesController.getCompanyByID)
  .put("/company/:id", CompaniesController.update)

  //JOB POSITIONS
//   .post("/newjobposition", JobPositionsController.create)
  .post("/newjobposition", JobPositionsController.create)
  .get("/jobposition/:company_id", JobPositionsController.getPositionPerCompany)
  .get("/jobpositions", JobPositionsController.getAllJobPositions)
//   .delete("/deletejobposition/:id", JobPositionsController.delete)


module.exports = routes;
