import { DataSource } from "typeorm";
import IUser from "../interfaces/IUser";

import  AppDataSource from "../config/data-source";
import { User } from "../entities/UserEntities";
import { getRepository } from "typeorm"

const users: IUser[] = [];
let id: number = 1;

export const getUsersService = async () => {
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  return users;
};

export const getUserByIdService = async (userId: number): Promise<IUser | undefined> => {
  return users.find(user => user.id === userId);
};

export const createUserService = async (userData: IUser) => {
  const userRepository = getRepository(User); // Obtener el repositorio de User
  const newUser = userRepository.create(userData); // Crear una nueva instancia de User
  await userRepository.save(newUser); // Guardar el nuevo usuario en la base de datos
  return newUser;
};

 


export const deleteUserService = async (userId: number): Promise<void> => {
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
  }
};
