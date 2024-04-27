
import morgan from "morgan";
import express from "express";
import router from "./routes/index"
import cors from  "cors"

const server=express();
server.use(cors())
server.use(express.json())
server.use(morgan("dev"));
server.use(router)
export default server; 