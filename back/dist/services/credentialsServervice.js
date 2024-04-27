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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCredentialService = exports.loginService = exports.createCredentialService = exports.getCredentialsService = void 0;
const typeorm_1 = require("typeorm");
const credentialEntities_1 = require("../entities/credentialEntities");
const password_generator_1 = __importDefault(require("password-generator"));
// Obtener todas las credenciales
const getCredentialsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const credentialRepository = (0, typeorm_1.getRepository)(credentialEntities_1.Credential);
    const credentials = yield credentialRepository.find();
    return credentials;
});
exports.getCredentialsService = getCredentialsService;
// // Obtener una credencial por su ID
const createCredentialService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const username = email.split('@')[0]; // Extraer el nombre de usuario del email
    const password = (0, password_generator_1.default)(8, false); // Generar una contraseña aleatoria de 8 caracteres sin caracteres especiales
    console.log("crendecialserviceemail", username);
    console.log("crendecialserviceemail", password);
    const credentialRepository = (0, typeorm_1.getRepository)(credentialEntities_1.Credential);
    const newCredential = credentialRepository.create({ username, password });
    yield credentialRepository.save(newCredential);
    console.log("nueva credential", newCredential);
    return newCredential; // Devolver la credencial completa
});
exports.createCredentialService = createCredentialService;
const loginService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialRepository = (0, typeorm_1.getRepository)(credentialEntities_1.Credential);
    const credential = yield credentialRepository.findOne({ where: { username, password } });
    if (credential) {
        return credential.id; // Devuelve el ID si se encuentra una credencial que coincida
    }
    else {
        return null; // Devuelve null si no se encuentran credenciales coincidentes
    }
});
exports.loginService = loginService;
// Eliminar una credencial por su ID
const deleteCredentialService = (credentialId) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialRepository = (0, typeorm_1.getRepository)(credentialEntities_1.Credential);
    yield credentialRepository.delete(credentialId);
});
exports.deleteCredentialService = deleteCredentialService;
