import { Router } from "express";
import { createUser,getUsers,deleteUser,searchUserbyId } from "../controllers/usersController";
const router: Router =Router();

router.get("/users",getUsers) // mas q n elemento devolves un arreglo
router.get("/users/:id",searchUserbyId) // devolver un objeto el id se recupera query.params
router.post("/users/register",createUser) // recibo por query.body en objeto a almacenar
router.post("/users/login")
router.delete("/users")

export default router;





// Rutas / endpoints a crear:

// /users

// GET /users => Obtener el listado de todos los usuarios.

// GET /users/:id => Obtener el detalle de un usuario específico.

// POST /users/register => Registro de un nuevo usuario.

// POST /users/login => Login del usuario a la aplicación.