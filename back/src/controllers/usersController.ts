import IUser from "../interfaces/IUser";
import { createUserService,getUsersService,deleteUserService,userControllerId } from "../services/usersServices"
import { Request,Response } from "express";

export const createUser=async(req:Request,res:Response)=>{
    const {name, email, active}=req.body;
    const newUser: IUser= await createUserService({name,email,active})
    res.status(201).json(newUser)
     
}


export const getUsers=async()=> {}

export const deleteUser =async()=>{}

export const searchUserbyId = async (req: Request, res: Response) => {
    const userId = req.params.id;

    try {
        // Llamar al servicio para obtener los datos del usuario por su ID
        const user = await userControllerId(userId);

        if (!userId) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Enviar los datos del usuario como respuesta
        res.json(user);
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}