"use strict";
// /appointments
Object.defineProperty(exports, "__esModule", { value: true });
// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
// GET /appointment => Obtener el detalle de un turno específico.
// POST /appointment/schedule => Agendar un nuevo turno.a
// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”
const express_1 = require("express");
const appointmentController_1 = require("../controllers/appointmentController");
// searchAppointmentById
const routerAppointment = (0, express_1.Router)();
routerAppointment.get("/all", appointmentController_1.getAllAppointments);
routerAppointment.get("/:id", appointmentController_1.searchAppointmentById);
routerAppointment.post("/schedule", appointmentController_1.createAppointment);
routerAppointment.put("/cancel/:id", appointmentController_1.upDateAppointment);
exports.default = routerAppointment;
