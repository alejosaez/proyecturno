// /appointments

// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.

// GET /appointment => Obtener el detalle de un turno específico.

// POST /appointment/schedule => Agendar un nuevo turno.a

// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”
import { Router } from "express";
import { getAllAppointments, createAppointment,searchAppointmentById ,upDateAppointment  } from "../controllers/appointmentController";
// searchAppointmentById
const routerAppointment: Router = Router();

routerAppointment.get("/all", getAllAppointments);
routerAppointment.get("/:id",searchAppointmentById);
routerAppointment.post("/schedule", createAppointment);
routerAppointment.put("/cancel/:id", upDateAppointment);


export default routerAppointment;
