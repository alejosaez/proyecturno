import { Router } from "express";
import { createUser,  getUsersController, deleteUser, searchUserById, loginController,getCredentialByEmail } from "../controllers/usersController";

const routerUser: Router = Router();

routerUser.get("/",  getUsersController);
routerUser.get("/:id", searchUserById);
routerUser.post("/register", createUser);
routerUser.post("/login", loginController);
routerUser.delete("/", deleteUser);
routerUser.get("/reset-password/:email",getCredentialByEmail);
export default routerUser;





