"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const UserEntities_1 = require("../entities/UserEntities");
const credentialEntities_1 = require("../entities/credentialEntities");
const appointmentEntities_1 = require("../entities/appointmentEntities");
const AppDataSource = (0, typeorm_1.createConnection)({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "15.ALEJOsaez",
    database: "appointment",
    synchronize: true,
    logging: true,
    entities: [UserEntities_1.User, credentialEntities_1.Credential, appointmentEntities_1.Turn],
    subscribers: [],
    migrations: [],
}).then(connection => {
    console.log("Conexión a la base de datos establecida correctamente");
    return connection; // Devuelve la conexión establecida
}).catch(error => {
    console.log("Error al establecer conexión a la base de datos:", error);
    throw error; // Lanza el error para que se maneje en otro lugar
});
exports.default = AppDataSource;
