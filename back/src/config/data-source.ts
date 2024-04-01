import { createConnection } from "typeorm";
import { User  } from "../entities/UserEntities";
import { Credential } from "../entities/credentialEntities";
import{Turn} from "../entities/appointmentEntities"

const AppDataSource = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "15.ALEJOsaez",
    database: "appointment",
    synchronize: true,
    logging: true,
    entities: [User,Credential,Turn],
    subscribers: [],
    migrations: [],
}).then(connection => {
    console.log("Conexión a la base de datos establecida correctamente");
    return connection; // Devuelve la conexión establecida
}).catch(error => {
    console.log("Error al establecer conexión a la base de datos:", error);
    throw error; // Lanza el error para que se maneje en otro lugar
});

export default AppDataSource;
