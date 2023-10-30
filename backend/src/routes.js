const express = require("express");
const routes = express.Router();

const connection = require('./database/connection')

const CandidatesController = require("./controllers/candidatesController");
const CompaniesController = require("./controllers/companiesController");
const ApplicationsController = require("./controllers/applicationsController");
const JobPositionsController = require("./controllers/jobPositionsController");


//CANDIDATES ROUTES <===
routes.post("/newcandidate", CandidatesController.create);
routes.get("/candidates", CandidatesController.index);
routes.delete("/candidate/:id", CandidatesController.delete);
routes.get("/candidate/:id", CandidatesController.getUserByID);
routes.put("/candidate/:id", CandidatesController.update);

//COMPANIES ROUTES <===
routes.get("/companies", CompaniesController.index)
routes.post("/newcompany", CompaniesController.create)
routes.delete("/company/:id", CompaniesController.delete)
routes.get("/company/:id", CompaniesController.getCompanyByID)
routes.put("/company/:id", CompaniesController.update)



module.exports = routes;
