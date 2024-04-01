// router.get("/appointments",getAllAppointments) // mas q n elemento devolves un arreglo
// router.get("/appointments/:id",searcAppointmentById) // devolver un objeto el id se recupera query.params
// router.post("/appointments/register",createAppointment) // recibo por query.body en objeto a almacenar
// router.put("/appointment",upDateAppointment)
import { Request,Response } from "express";
import{getTurnsService,createTurnService} from "../services/appointmentServices"
import IAppointment from "../interfaces/IAppointment"


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

export const searchAppointmentById= async (req:Request, res:Response)=>{
    res.status(200).json("buscar el turno");

//     TO DO:

//     - **Descripción:** Obtiene el detalle de un turno.

// - **Parámetros:** id: id del turno.

// - **Respuesta:**
//   - 200: Si el turno fue encontrado.
//   - 404: Si el turno no fue encontrado.



}

export const createAppointment = async (req: Request, res: Response) => {

const {id_turns,date,time,observation,medical_specialty,phone_number,id_user,status}= req.body;
try{
    const newAppointment=IAppointment =await createTurnService({id_turns,date,time,observation,medical_specialty,phone_number,id_user,status})
    return res.status(201).json(newAppointment)

} catch(error){
    return res.status(400).json({ error: "Los datos son incorrectos" });
}


}








// TO DO:
// - **Descripción:** Crea un nuevo turno.
// - **Parámetros:**
//   id_turns: number;
//     date: 
//     time: 
//     observation: 
//     medical_specialty: 
//     phone_number: 
//     id_user:
//     status:
// // 
// 

// - **Respuesta:**
//     - 201: Si el turno fue creado.
//     - 400: Si los datos son incorrectos.



export const upDateAppointment=async (req:Request, res:Response)=>{
    res.status(200).json("Se actualiza el turno")

//     - **Descripción:** Cancela un turno.
// - **Parámetros:** id: id del turno.

// - **Respuesta:**
//   - 200: Si el turno fue cancelado.
//   - 404: Si el turno no fue encontrado.

}