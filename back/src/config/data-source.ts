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
    return connection; 
}).catch(error => {
    console.log("Error al establecer conexión a la base de datos:", error);
    throw error; 
});

export default AppDataSource;
