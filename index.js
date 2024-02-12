const express = require("express");
const cors = require("cors");
const bodyParser=require("body-parser")
const routes = require("./routes/routes");
const Sequelize = require("./util/database");
const todoList = require("./models/todo");
const dotenv= require("dotenv").config()

const app = express();
app.use(cors());
app.use(bodyParser.json({extended:false}))
app.use(routes);

Sequelize.sync()
  .then(() => app.listen(process.env.PORT))
  .catch((err) => console.log(err));
