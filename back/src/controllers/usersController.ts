import { isNumberObject } from "util/types";
import IUser from "../interfaces/IUser";
import { createUserService,deleteUserService,getUserByIdService,getUsersService} from "../services/usersServices"
import {createCredential} from "../services/credentialsServervice"
import { Request,Response } from "express";
import ICredential from "../interfaces/ICredentail"

export const createUser=async(req:Request,res:Response)=>{
    const {id, name, email, birthdate, dni,credentialsId } = req.body;
    const newCredential:ICredential=await createCredential(email)
    const newUser: IUser = await createUserService({ id,name, email, birthdate, dni,credentialsId});


//     TO DO:
//     - **Descripción:** Crea un nuevo usuario.
// - **Parámetros:**
//   - name: nombre del usuario.
//   - email: email del usuario.
//   - birthdate: fecha de nacimiento del usuario.
//   - nDni: número de DNI del usuario.
//   - username: nombre de usuario.
//   - password: contraseña del usuario.

// - **Respuesta:**
//   - 201: Si el usuario fue creado.
//   - 400: Si los datos son incorrectos.

    res.status(201).json(newUser)
    //  vamos a crear un usuario que tenga un id, emial, direccion,nombre, Fecha de naciomieno.
    // tomar los datos del usuario de la body request
    //  vamos a llamar a la funcion correspondiente de servicio para el nuevo usuario
}

export const getUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getUsersService();
        res.json(users);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export const deleteUser =async()=>{}

export const searchUserbyId = async (req: Request, res: Response) => {
    // const userId = req.params.id;

//  TO DO:- **Descripción:** Obtiene un usuario por su id junto con sus turnos.
// - **Parámetros:** id: id del usuario.

// - **Respuesta:**
//   - 200: Si el usuario fue encontrado.
//   - 404: Si el usuario no fue encontrado.} 
    try {
        // Llamar al servicio para obtener los datos del usuario por su ID
        // const user = await getUserByIdService(userId);

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

// TO DO:


// - **Descripción:** Inicia sesión de un usuario.
// - **Parámetros:**
//   - username: nombre de usuario.
//   - password: contraseña del usuario.

// - **Respuesta:**
//   - 200: Si el usuario fue logueado.
//   - 400: Si los datos son incorrectos.
}