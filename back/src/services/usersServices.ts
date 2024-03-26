import IUser from "../interfaces/IUser"
import UserDto from "../dto/UserDto";

const users:IUser[]=[]
let id: number=1;
export const createUserService=async(userData:UserDto):Promise <IUser>=>{
// recibir los datos del usuario 
// crear un nuevo usuario
// incluir el nuevo usuario dentro del arreglo
// retornar el objeto creado 
const newUser:IUser={
    id,
    name:userData.name,
    email:userData.email,
    active:userData.active

}
users.push(newUser)
id++;
return newUser


}

 export const userControllerId=async(userId)=>{
// buscar en la BD el usuario con esa id sea igual a userid
// si se encontro, voy a tener que retornar el objeto de ese usuario 
// si no existe el usuario con ese userId lo que hago es devolver un objeto vacio o un string/ undefaind

 } 
export const getUsersService=async()=> {}

export const deleteUserService =async()=>{}