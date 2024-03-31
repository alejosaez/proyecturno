// router.get("/appointments",getAllAppointments) // mas q n elemento devolves un arreglo
// router.get("/appointments/:id",searcAppointmentById) // devolver un objeto el id se recupera query.params
// router.post("/appointments/register",createAppointment) // recibo por query.body en objeto a almacenar
// router.put("/appointment",upDateAppointment)
import { Request,Response } from "express";
// import { createUserService,getUsersService,deleteUserService,userControllerId } from "../services/usersServices"

export const getAllAppointments=async (req:Request, res:Response)=>{
    res.status(200).json("Se muestran todos los turnos");
// TO DO:
// - **Descripción:** Obtiene todos los turnos.

// - **Respuesta:**
//   - 200: Si los turnos fueron encontrados.
//   - 404: Si no se encontraron turnos.

}

export const searchAppointmentById= async (req:Request, res:Response)=>{
    res.status(200).json("buscar el turno");

//     TO DO:

//     - **Descripción:** Obtiene el detalle de un turno.

// - **Parámetros:** id: id del turno.

// - **Respuesta:**
//   - 200: Si el turno fue encontrado.
//   - 404: Si el turno no fue encontrado.



}
export const createAppointment=async(req:Request,res:Response)=>{
    res.status(200).json("se crea un turno ")

// TO DO:
// - **Descripción:** Crea un nuevo turno.
// - **Parámetros:**
//   - date: fecha del turno.
//   - time: hora del turno.
//   - userId: id del usuario.

// - **Respuesta:**
//     - 201: Si el turno fue creado.
//     - 400: Si los datos son incorrectos.


}
export const upDateAppointment=async (req:Request, res:Response)=>{
    res.status(200).json("Se actualiza el turno")

//     - **Descripción:** Cancela un turno.
// - **Parámetros:** id: id del turno.

// - **Respuesta:**
//   - 200: Si el turno fue cancelado.
//   - 404: Si el turno no fue encontrado.

}