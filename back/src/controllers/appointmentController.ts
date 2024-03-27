// router.get("/appointments",getAllAppointments) // mas q n elemento devolves un arreglo
// router.get("/appointments/:id",searcAppointmentById) // devolver un objeto el id se recupera query.params
// router.post("/appointments/register",createAppointment) // recibo por query.body en objeto a almacenar
// router.put("/appointment",upDateAppointment)
import { Request,Response } from "express";
// import { createUserService,getUsersService,deleteUserService,userControllerId } from "../services/usersServices"

export const getAllAppointments=async (req:Request, res:Response)=>{
    res.status(200).json("Se muestran todos los turnos");
}

export const searchAppointmentById= async (req:Request, res:Response)=>{
    res.status(200).json("buscar el turno");

}
export const createAppointment=async(req:Request,res:Response)=>{
    res.status(200).json("se crea un turno ")
}
export const upDateAppointment=async (req:Request, res:Response)=>{
    res.status(200).json("Se actualiza el turno")
}