"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const routerUser = (0, express_1.Router)();
routerUser.get("/", usersController_1.getUsersController);
routerUser.get("/:id", usersController_1.searchUserById);
routerUser.post("/register", usersController_1.createUser);
routerUser.post("/login", usersController_1.loginController);
routerUser.delete("/", usersController_1.deleteUser);
exports.default = routerUser;
// Rutas / endpoints a crear:
// /users
// GET /users => Obtener el listado de todos los usuarios.
// GET /users/:id => Obtener el detalle de un usuario específico.
// POST /users/register => Registro de un nuevo usuario.
// POST /users/login => Login del usuario a la aplicación.
