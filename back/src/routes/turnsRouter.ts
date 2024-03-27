// /appointments

// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.

// GET /appointment => Obtener el detalle de un turno específico.

// POST /appointment/schedule => Agendar un nuevo turno.

// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”
import { Router } from "express";
import { getAllAppointments,searcAppointmentById,createAppointment,upDateAppointment } from "../controllers/turnsController";
const router: Router =Router();

router.get("/appointments",getAllAppointments) // mas q n elemento devolves un arreglo
router.get("/appointments/:id",searcAppointmentById) // devolver un objeto el id se recupera query.params
router.post("/appointments/register",createAppointment) // recibo por query.body en objeto a almacenar
router.put("/appointment",upDateAppointment)

export default router;