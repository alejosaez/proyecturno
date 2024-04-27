
import { Request,Response } from "express";
import{getTurnsService,createTurnService,getTurnByUserIdService, getTurnByIdService,cancelTurnService} from "../services/appointmentServices"
import IAppointment from "../interfaces/IAppointment"
import { log } from "console";

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        
        const appointments = await getTurnsService();

        
        if (appointments.length === 0) {
            return res.status(404).json({ error: "No se encontraron turnos" });
        }
        
        
        if (appointments.length > 1) {
            return res.status(200).json(appointments);
        }

        
        return res.status(200).json(appointments[0]);
    } catch (error) {
        
        console.error("Error al obtener los turnos:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};


export const searchAppointmentById= async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.id, 10); 
    try {
        if (isNaN(userId)) { 
            throw new Error("El ID del turno no pudo ser encontrado");
        }
        console.log("en id que resivo a");

        const turn = await getTurnByUserIdService(userId);
        if (!turn) {
            throw new Error("No se encontró el turno con el ID");
        }
        res.status(200).json(turn);
    } catch (error) {
        console.error("Error al obtener el turno", error);
        res.status(404).json({ error: "el turno no fue encontrado" });
    }
};



export const createAppointment = async (req: Request, res: Response) => {
    const { id_turns, date, time, observation, medical_specialty, phone_number, id_user, status } = req.body;
    try {
        
        const newAppointment:IAppointment|undefined = await createTurnService({ id_turns, date, time, observation, medical_specialty, phone_number, id_user, status });
        return res.status(201).json(newAppointment);
    } catch (error) {
        return res.status(400).json({ error: "Los datos son incorrectos" });
    }
}








export const upDateAppointment = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        
        const turn = await getTurnByIdService(parseInt(id, 10));

        if (!turn) {
           
            return res.status(404).json({ error: "El turno no fue encontrado." });
        }

        
        await cancelTurnService(turn.id_turns);

        
        return res.status(200).json({ message: "El turno fue cancelado exitosamente." });
    } catch (error) {
        
        console.error('Error al cancelar turno:', error);
        return res.status(500).json({ error: "Error interno del servidor." });
    }
};

