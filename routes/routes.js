const express = require("express");
const todoList = require("../models/todo");
const routes = express.Router();
routes.post("/addTodo", async (req, res) => {
  console.log(req.body);
try{
  const savedResult = await todoList.create({
    title: req.body.title,
    data: req.body.data,
  });
  return res.status(200).json(savedResult);  
}catch(err){
    return res.status(400).json("todo not added..try again")
}
  
});
routes.post("/deleteTodo", async (req, res) => {
  const delId = req.query.delId;
  console.log(delId)
  
  try{
      const todoFind = await todoList.findOne({ where: { id: delId } });
  const deletedTodo=await todoFind.destroy()
  console.log(deletedTodo)
  return res.status(200).json({msg:"todo deleted",deletedTodo})
  }
  catch(err){
    return res.status(400).json("todo not deleted..try again")
}

});
module.exports = routes;
