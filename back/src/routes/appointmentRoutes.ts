
import { Router } from "express";
import { getAllAppointments, createAppointment,searchAppointmentById ,upDateAppointment  } from "../controllers/appointmentController";

const routerAppointment: Router = Router();

routerAppointment.get("/all", getAllAppointments);
routerAppointment.get("/:id",searchAppointmentById);
routerAppointment.post("/schedule", createAppointment);
routerAppointment.put("/cancel/:id", upDateAppointment);


export default routerAppointment;
