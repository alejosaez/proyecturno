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
exports.loginController = exports.searchUserById = exports.deleteUser = exports.getUsersController = exports.createUser = void 0;
const usersServices_1 = require("../services/usersServices");
const credentialsServervice_1 = require("../services/credentialsServervice");
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
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, email, birthdate, dni } = req.body;
    try {
        // Crear una nueva credencial
        const newCredential = yield (0, credentialsServervice_1.createCredentialService)(email);
        // Obtener el ID de la nueva credencial
        const credentialsId = newCredential.id;
        // Crear un nuevo usuario utilizando el ID de la credencial
        const newUser = yield (0, usersServices_1.createUserService)({ id, name, email, birthdate, dni, credentialsId });
        // Retornar el nuevo usuario creado
        return res.status(201).json(newUser);
    }
    catch (error) {
        // Manejar errores
        return res.status(400).json({ error: "Internal server error" });
    }
});
exports.createUser = createUser;
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, usersServices_1.getUsersService)();
        res.json(users);
    }
    catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
exports.getUsersController = getUsersController;
const deleteUser = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteUser = deleteUser;
const searchUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id, 10); // Obtener el ID del usuario de los parámetros de la solicitud
    try {
        if (isNaN(userId)) { // Comprobar si el ID del usuario es un número válido
            throw new Error("El ID del usuario no es un número válido");
        }
        console.log("en id que resivo a");
        const user = yield (0, usersServices_1.getUserByIdService)(userId);
        if (!user) {
            throw new Error("No se encontró el usuario con el ID");
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(404).json({ error: "Error interno del servidor" });
    }
});
exports.searchUserById = searchUserById;
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
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body; // Suponiendo que los datos del usuario se envían en el cuerpo de la solicitud
    try {
        const userId = yield (0, credentialsServervice_1.loginService)(username, password);
        if (userId !== null) {
            res.status(200).json({ id: userId }); // Devuelve el ID si las credenciales son válidas
        }
        else {
            res.status(400).json({ error: 'Credenciales incorrectas' }); // Devuelve un error si las credenciales son inválidas
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' }); // Devuelve un error si ocurre un error interno en el servidor
    }
});
exports.loginController = loginController;
