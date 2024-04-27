"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const appointmentRoutes_1 = __importDefault(require("./appointmentRoutes"));
const router = (0, express_1.Router)();
router.use("/appointments", appointmentRoutes_1.default);
router.use("/users", userRouter_1.default);
exports.default = router; // Cambia module.exports por export default
