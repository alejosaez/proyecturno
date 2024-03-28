import { DataSource } from "typeorm"
import { User } from "../entities/UserEntities"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "15.ALEJOsaez",
    database: "appointment",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})