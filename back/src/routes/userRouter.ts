import { Router } from "express";
import { createUser,  getUsersController, deleteUser, searchUserbyId, loginController } from "../controllers/usersController";

const routerUser: Router = Router();

routerUser.get("/",  getUsersController);
routerUser.get("/:id", searchUserbyId);
routerUser.post("/register", createUser);
routerUser.post("/login", loginController);
routerUser.delete("/", deleteUser);

export default routerUser;





// Rutas / endpoints a crear:

// /users

// GET /users => Obtener el listado de todos los usuarios.

// GET /users/:id => Obtener el detalle de un usuario específico.

// POST /users/register => Registro de un nuevo usuario.

// POST /users/login => Login del usuario a la aplicación.