import { Router } from "express";
import routerUser from "./userRouter";
import routerAppointment from "./appointmentRoutes";

const router = Router();

router.use("/appointments", routerAppointment);
router.use("/users", routerUser);

export default router; // Cambia module.exports por export default
