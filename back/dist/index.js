"use strict";
// const express = require("express");
// require("dotenv").config()
// const PORT=process.env.PORT
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const server=express();
// server.listen(PORT, ()=> {
//     console.log("server listening on port 3001")
// })
const server_1 = __importDefault(require("./server"));
server_1.default.listen(3001, () => {
    console.log("server listening on port 3001");
});
