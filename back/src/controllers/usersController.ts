import { isNumberObject } from "util/types";
import IUser from "../interfaces/IUser";
import { createUserService,deleteUserService, getUserByIdService,getUsersService} from "../services/usersServices"
import {createCredentialService,loginService } from "../services/credentialsServervice"
import { Request,Response } from "express";
import ICredential from "../interfaces/ICredentail"
import { Console } from "console";



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

export const createUser = async (req: Request, res: Response) => {
    const { id, name, email, birthdate, dni } = req.body;
    try {
        // Crear una nueva credencial
        const newCredential: ICredential = await createCredentialService(email);

        // Obtener el ID de la nueva credencial
        const credentialsId = newCredential.id;

        // Crear un nuevo usuario utilizando el ID de la credencial
        const newUser: IUser = await createUserService({ id, name, email, birthdate, dni, credentialsId });

        // Retornar el nuevo usuario creado
        return res.status(201).json(newUser);
    } catch (error) {
        // Manejar errores
        return res.status(400).json({ error: "Internal server error" });
    }
};

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


export const searchUserById = async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.id, 10); // Obtener el ID del usuario de los parámetros de la solicitud
    try {
        if (isNaN(userId)) { // Comprobar si el ID del usuario es un número válido
            throw new Error("El ID del usuario no es un número válido");
        }
        console.log("en id que resivo a");

        const user = await getUserByIdService(userId);
        if (!user) {
            throw new Error("No se encontró el usuario con el ID");
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(404).json({ error: "Error interno del servidor" });
    }
};


// export const searchUserbyId = async (req: Request, res: Response) => {
    // const userId = req.params.id;

//  TO DO:- **Descripción:** Obtiene un usuario por su id junto con sus turnos.
// - **Parámetros:** id: id del usuario.

// - **Respuesta:**
//   - 200: Si el usuario fue encontrado.
//   - 404: Si el usuario no fue encontrado.} 
    // try {
        // Llamar al servicio para obtener los datos del usuario por su ID
        // const user = await getUserByIdService(userId);

        // if (!userId) {
        //     return res.status(404).json({ error: 'Usuario no encontrado' });
        // }

        // Enviar los datos del usuario como respuesta
        // res.json(user);

//         res.status(200).json("Se devuelve el usuario con id");

//     } catch (error) {
//         console.error('Error al obtener el usuario:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     }
// }

export const loginController = async (req: Request, res: Response) => {
    const { username, password } = req.body; // Suponiendo que los datos del usuario se envían en el cuerpo de la solicitud

    try {
        const userId = await loginService(username, password);
        if (userId !== null) {
            res.status(200).json({ id: userId }); // Devuelve el ID si las credenciales son válidas
        } else {
            res.status(400).json({ error: 'Credenciales incorrectas' }); // Devuelve un error si las credenciales son inválidas
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' }); // Devuelve un error si ocurre un error interno en el servidor
    }
};