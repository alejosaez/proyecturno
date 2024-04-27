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
export const getUserByIdService = async (userId: number): Promise<User | null> => {
  try {
   
    const userRepository = getRepository(User);

    
    const user = await userRepository.findOne({ where: { id: userId } });


    return user ?? null; 
  } catch (error) {
    console.error('Error al buscar usuario por ID:', error);
    return null;
  }
};

export const createUserService = async (userData: IUser) => {
  try {
    const userRepository = getRepository(User); 
    const newUser = userRepository.create(userData); 
    await userRepository.save(newUser); 
    return newUser;
  } catch (error) {
    
    throw new Error("Error al crear el usuario");
  }
};

 


export const deleteUserService = async (userId: number): Promise<void> => {
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
  }
};
