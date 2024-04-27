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
exports.deleteUserService = exports.createUserService = exports.getUserByIdService = exports.getUsersService = void 0;
const UserEntities_1 = require("../entities/UserEntities");
const typeorm_1 = require("typeorm");
const users = [];
let id = 1;
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = (0, typeorm_1.getRepository)(UserEntities_1.User);
    const users = yield userRepository.find();
    return users;
});
exports.getUsersService = getUsersService;
const getUserByIdService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener el repositorio de usuarios
        const userRepository = (0, typeorm_1.getRepository)(UserEntities_1.User);
        // Buscar el usuario por su ID 
        const user = yield userRepository.findOne({ where: { id: userId } });
        return user !== null && user !== void 0 ? user : null; // Devolver null si el usuario no se encuentra
    }
    catch (error) {
        console.error('Error al buscar usuario por ID:', error);
        return null; // Devolver null en caso de error
    }
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRepository = (0, typeorm_1.getRepository)(UserEntities_1.User); // Obtener el repositorio de User
        const newUser = userRepository.create(userData); // Crear una nueva instancia de User
        yield userRepository.save(newUser); // Guardar el nuevo usuario en la base de datos
        return newUser;
    }
    catch (error) {
        // Si ocurre un error, lo capturamos aquí
        throw new Error("Error al crear el usuario");
    }
});
exports.createUserService = createUserService;
const deleteUserService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users.splice(index, 1);
    }
});
exports.deleteUserService = deleteUserService;
