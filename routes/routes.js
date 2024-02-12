const express = require("express");
const todoList = require("../models/todo");
const routes = express.Router();
routes.post("/addTodo", async (req, res) => {
    console.log(req.body)
   
  const savedResult = await todoList.create({
    title: req.body.title,
    data: req.body.data,
  });
  res.status(200).json(savedResult)
});
module.exports = routes;
