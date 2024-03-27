import IUser from "../interfaces/IUser";
import { createUserService,getUsersService,deleteUserService,userControllerId } from "../services/usersServices"
import { Request,Response } from "express";

export const createUser=async(req:Request,res:Response)=>{
    const {id,name, email, birthdate,dni}=req.body;
    const newUser: IUser= await createUserService({id, name,email,birthdate,dni})
    res.status(201).json(newUser)
    //  vamos a crear un usuario que tenga un id, emial, direccion,nombre, Fecha de naciomieno.
    // tomar los datos del usuario de la body request
    //  vamos a llamar a la funcion correspondiente de servicio para el nuevo usuario
}

export const getUsers = async (req: Request, res: Response) => {
    res.status(200).json("Se devuelven los usuarios");
}

export const deleteUser =async()=>{}

export const searchUserbyId = async (req: Request, res: Response) => {
    // const userId = req.params.id;

    try {
        // Llamar al servicio para obtener los datos del usuario por su ID
        // const user = await userControllerId(userId);

        // if (!userId) {
        //     return res.status(404).json({ error: 'Usuario no encontrado' });
        // }

        // Enviar los datos del usuario como respuesta
        // res.json(user);

        res.status(200).json("Se devuelve el usuario con id");

    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const loginController= async (req: Request,res:Response)=>{
    res.status(200).json("se devulve el login del usuario")
}