const express = require("express");
const routes = require("./routes");
// const cors = require("cors");

const app = express();
const port = 3333;

// app.use(cors());

app.use(express.json());

app.use(routes);

//catch all
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({error: error.message})
})

app.listen(port, () => {
  console.log(`Servidor rodando na URL: http://localhost:${port}`);
});



