// /appointments

// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.

// GET /appointment => Obtener el detalle de un turno específico.

// POST /appointment/schedule => Agendar un nuevo turno.

// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”
import { Router } from "express";
import { getAllAppointments, searchAppointmentById, createAppointment, upDateAppointment } from "../controllers/turnsController";

const routerAppointment: Router = Router();

routerAppointment.get("/", getAllAppointments);
routerAppointment.get("/:id", searchAppointmentById);
routerAppointment.post("/register", createAppointment);
routerAppointment.put("/", upDateAppointment);

export default routerAppointment;
