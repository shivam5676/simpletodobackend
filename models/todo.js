const sequelize = require("sequelize");
const Sequelize = require("../util/database");
const todoList = Sequelize.define("todoList", {
  id: {
    type: sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: { type: sequelize.STRING, allowNull: false },
  data: { type: sequelize.STRING(4000), allowNull: false },
});
module.exports=todoList
