import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata" 
import AppDataSource from "./config/data-source"

async function startServer() {
    try {
        await AppDataSource;
        console.log("Conexión a la base de datos realizada con éxito");
        server.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error("Error al establecer conexión a la base de datos:", error);
    }
}

startServer();
