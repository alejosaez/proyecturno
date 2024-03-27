// const express=  require("express");
// const server = express();
// module.exports= serv
import morgan from "morgan";
import express from "express";
import router from "./routes/index"


const server=express();
server.use(express.json())
server.use(morgan("dev"));
server.use(router)

export default server;