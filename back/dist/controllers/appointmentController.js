"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upDateAppointment = exports.createAppointment = exports.searchAppointmentById = exports.getAllAppointments = void 0;
const appointmentServices_1 = require("../services/appointmentServices");
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Llamar al servicio para obtener todos los turnos
        const appointments = yield (0, appointmentServices_1.getTurnsService)();
        // Si no se encontraron turnos, devolver el código 404
        if (appointments.length === 0) {
            return res.status(404).json({ error: "No se encontraron turnos" });
        }
        // Si hay más de un turno, devolver el arreglo de turnos
        if (appointments.length > 1) {
            return res.status(200).json(appointments);
        }
        // Si hay un solo turno, devolver el objeto de turno
        return res.status(200).json(appointments[0]);
    }
    catch (error) {
        // Manejar errores
        console.error("Error al obtener los turnos:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.getAllAppointments = getAllAppointments;
// export const getAllAppointments=async (req:Request, res:Response)=>{
//     res.status(200).json("Se muestran todos los turnos");
// // TO DO:
// // - **Descripción:** Obtiene todos los turnos.
// // - **Respuesta:**
// //   - 200: Si los turnos fueron encontrados.
// //   - 404: Si no se encontraron turnos.
// 
const searchAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turnId = parseInt(req.params.id, 10); // Obtener el ID del usuario de los parámetros de la solicitud
    try {
        if (isNaN(turnId)) { // Comprobar si el ID del usuario es un número válido
            throw new Error("El ID del turno no pudo ser encontrado");
        }
        console.log("en id que resivo a");
        const turn = yield (0, appointmentServices_1.getTurnByIdService)(turnId);
        if (!turn) {
            throw new Error("No se encontró el turno con el ID");
        }
        res.status(200).json(turn);
    }
    catch (error) {
        console.error("Error al obtener el turno", error);
        res.status(404).json({ error: "el turno no fue encontrado" });
    }
});
exports.searchAppointmentById = searchAppointmentById;
// export const searchAppointmentById= async (req:Request, res:Response)=>{
//     res.status(200).json("buscar el turno");
// //     TO DO:
// //     - **Descripción:** Obtiene el detalle de un turno.
// // - **Parámetros:** id: id del turno.
// // - **Respuesta:**
// //   - 200: Si el turno fue encontrado.
// //   - 404: Si el turno no fue encontrado.
// }
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_turns, date, time, observation, medical_specialty, phone_number, id_user, status } = req.body;
    try {
        // Suponiendo que createTurnService devuelve un objeto que cumple con el tipo IAppointment
        const newAppointment = yield (0, appointmentServices_1.createTurnService)({ id_turns, date, time, observation, medical_specialty, phone_number, id_user, status });
        return res.status(201).json(newAppointment);
    }
    catch (error) {
        return res.status(400).json({ error: "Los datos son incorrectos" });
    }
});
exports.createAppointment = createAppointment;
const upDateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // Obtener el turno por su ID
        const turn = yield (0, appointmentServices_1.getTurnByIdService)(parseInt(id, 10));
        if (!turn) {
            // Si no se encuentra el turno, devolver un error 404
            return res.status(404).json({ error: "El turno no fue encontrado." });
        }
        // Actualizar el estado (status) del turno a "cancelled"
        yield (0, appointmentServices_1.cancelTurnService)(turn.id_turns);
        // Respuesta exitosa
        return res.status(200).json({ message: "El turno fue cancelado exitosamente." });
    }
    catch (error) {
        // Manejo de errores
        console.error('Error al cancelar turno:', error);
        return res.status(500).json({ error: "Error interno del servidor." });
    }
});
exports.upDateAppointment = upDateAppointment;
// export const upDateAppointment=async (req:Request, res:Response)=>{
//     res.status(200).json("Se actualiza el turno")
//     - **Descripción:** Cancela un turno.
// - **Parámetros:** id: id del turno.
// - **Respuesta:**
//   - 200: Si el turno fue cancelado.
//   - 404: Si el turno no fue encontrado.
