// const express=  require("express");
// const server = express();
// module.exports= serv
import morgan from "morgan";
import express from "express";
import router from "./routes/indexRouter";
import turnsRouters from "./routes/turnsRouter"


const server=express();
server.use(express.json())
server.use(morgan("dev"));
server.use(router)
server.use(turnsRouters)
export default server;