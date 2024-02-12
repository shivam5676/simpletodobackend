const sequelize=require("sequelize")
const dotenv= require("dotenv").config()
const Sequelize=new sequelize(process.env.MYSQL_SCHEMA,process.env.MYSQL_USERNAME,process.env.MYSQL_PASSWORD,{
    dialect:"mysql",    
    host:process.env.MYSQL_HOST
})
module.exports=Sequelize