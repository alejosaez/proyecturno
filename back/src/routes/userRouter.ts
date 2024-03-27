import { Router } from "express";
import { createUser, getUsers, deleteUser, searchUserbyId } from "../controllers/usersController";

const routerUser: Router = Router();

routerUser.get("/", getUsers);
routerUser.get("/:id", searchUserbyId);
routerUser.post("/register", createUser);
routerUser.post("/login");
routerUser.delete("/");

export default routerUser;





// Rutas / endpoints a crear:

// /users

// GET /users => Obtener el listado de todos los usuarios.

// GET /users/:id => Obtener el detalle de un usuario específico.

// POST /users/register => Registro de un nuevo usuario.

// POST /users/login => Login del usuario a la aplicación.