import IUser from "../interfaces/IUser";
import { createCredential } from "./credentialsServervice";

const users: IUser[] = [];
let id: number = 1;

export const getUsersService = async (): Promise<IUser[]> => {
  return users;
};

export const getUserByIdService = async (userId: number): Promise<IUser | undefined> => {
  return users.find(user => user.id === userId);
};

export const createUserService = async (userData: Omit<IUser, "id" | "credentialsId"> & { password: string }): Promise<IUser> => {
  // Generar las credenciales para el nuevo usuario
  const credentialsId = await createCredential(userData.name, userData.password);

  // Crear el nuevo usuario con las credenciales generadas
  const newUser: IUser = {
    id: id++,
    credentialsId: credentialsId,
    name: userData.name,
    email: userData.email,
    birthdate: userData.birthdate,
    dni: userData.dni
  };

  users.push(newUser);

  return newUser;
};

export const deleteUserService = async (userId: number): Promise<void> => {
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
  }
};
