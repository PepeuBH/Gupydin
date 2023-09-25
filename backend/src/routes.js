const express = require("express");
const routes = express.Router();
// const connection = require("./database/connection");

routes.get("/", (req, res) => {
  res.send("Hello World") 
});

module.exports = routes;
