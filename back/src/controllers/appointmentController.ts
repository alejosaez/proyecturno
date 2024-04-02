// router.get("/appointments",getAllAppointments) // mas q n elemento devolves un arreglo
// router.get("/appointments/:id",searcAppointmentById) // devolver un objeto el id se recupera query.params
// router.post("/appointments/register",createAppointment) // recibo por query.body en objeto a almacenar
// router.put("/appointment",upDateAppointment)
import { Request,Response } from "express";
import{getTurnsService,createTurnService,getTurnByIdService,cancelTurnService} from "../services/appointmentServices"
import IAppointment from "../interfaces/IAppointment"
import { log } from "console";


export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        // Llamar al servicio para obtener todos los turnos
        const appointments = await getTurnsService();

        // Si se encontraron turnos, devolver el código 200 y la lista de turnos
        if (appointments.length > 0) {
        
            return res.status(200).json(appointments);
        } else {
            // Si no se encontraron turnos, devolver el código 404
            return res.status(404).json({ error: "No se encontraron turnos" });
        }
    } catch (error) {
        // Manejar errores
        console.error("Error al obtener los turnos:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};








// export const getAllAppointments=async (req:Request, res:Response)=>{
//     res.status(200).json("Se muestran todos los turnos");
// // TO DO:
// // - **Descripción:** Obtiene todos los turnos.

// // - **Respuesta:**
// //   - 200: Si los turnos fueron encontrados.
// //   - 404: Si no se encontraron turnos.

// 
export const searchAppointmentById= async (req: Request, res: Response) => {
    const turnId: number = parseInt(req.params.id, 10); // Obtener el ID del usuario de los parámetros de la solicitud
    try {
        if (isNaN(turnId)) { // Comprobar si el ID del usuario es un número válido
            throw new Error("El ID del turno no pudo ser encontrado");
        }
        console.log("en id que resivo a");

        const turn = await getTurnByIdService(turnId);
        if (!turn) {
            throw new Error("No se encontró el turno con el ID");
        }
        res.status(200).json(turn);
    } catch (error) {
        console.error("Error al obtener el turno", error);
        res.status(404).json({ error: "el turno no fue encontrado" });
    }
};

// export const searchAppointmentById= async (req:Request, res:Response)=>{
//     res.status(200).json("buscar el turno");

// //     TO DO:

// //     - **Descripción:** Obtiene el detalle de un turno.

// // - **Parámetros:** id: id del turno.

// // - **Respuesta:**
// //   - 200: Si el turno fue encontrado.
// //   - 404: Si el turno no fue encontrado.



// }


export const createAppointment = async (req: Request, res: Response) => {
    const { id_turns, date, time, observation, medical_specialty, phone_number, id_user, status } = req.body;
    try {
        // Suponiendo que createTurnService devuelve un objeto que cumple con el tipo IAppointment
        const newAppointment:IAppointment|undefined = await createTurnService({ id_turns, date, time, observation, medical_specialty, phone_number, id_user, status });
        return res.status(201).json(newAppointment);
    } catch (error) {
        return res.status(400).json({ error: "Los datos son incorrectos" });
    }
}








export const upDateAppointment = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        // Obtener el turno por su ID
        const turn = await getTurnByIdService(parseInt(id, 10));

        if (!turn) {
            // Si no se encuentra el turno, devolver un error 404
            return res.status(404).json({ error: "El turno no fue encontrado." });
        }

        // Actualizar el estado (status) del turno a "cancelled"
        await cancelTurnService(turn.id_turns);

        // Respuesta exitosa
        return res.status(200).json({ message: "El turno fue cancelado exitosamente." });
    } catch (error) {
        // Manejo de errores
        console.error('Error al cancelar turno:', error);
        return res.status(500).json({ error: "Error interno del servidor." });
    }
};
// export const upDateAppointment=async (req:Request, res:Response)=>{
//     res.status(200).json("Se actualiza el turno")

//     - **Descripción:** Cancela un turno.
// - **Parámetros:** id: id del turno.

// - **Respuesta:**
//   - 200: Si el turno fue cancelado.
//   - 404: Si el turno no fue encontrado.

