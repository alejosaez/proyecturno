
import IAppointment from "../interfaces/IAppointment";
import { getConnection } from 'typeorm';
import { Turn } from "../entities/appointmentEntities" 
import { getRepository } from 'typeorm';

const turns: IAppointment[] = [];
let id: number = 1;


export const getTurnsService = async (): Promise<IAppointment[]> => {
  try {
    // Obtener todos los turnos de la base de datos utilizando TypeORM
    const appointments = await getConnection().getRepository(Turn).find();

    // Mapear los turnos a un formato que coincide con la interfaz IAppointment
    const appointmentsFormatted: IAppointment[] = appointments.map(appointment => ({
      id_turns: appointment.id_turns,
      date: appointment.date,
      time: appointment.time,
      observation: appointment.observation,
      medical_specialty: appointment.medical_specialty,
      phone_number: appointment.phone_number,
      id_user: appointment.id_user,
      status: appointment.status,
    }));

    return appointmentsFormatted;
  } catch (error) {
    console.error("Error al obtener los turnos:", error);
    throw new Error("Error al obtener los turnos");
  }
};








// export const getTurnByIdService = async (turnId: number): Promise<IAppointment| undefined> => {
//   return turns.find(turn => turn.id === turnId);
// };

export const createTurnService = async (turnData: Omit<IAppointment, "id">): Promise<IAppointment | undefined> => {
  try {
      // Crear una nueva instancia de la entidad Turn con los datos proporcionados
      const newTurn = new Turn();
      newTurn.date = turnData.date;
      newTurn.time = turnData.time;
      newTurn.observation = turnData.observation;
      newTurn.medical_specialty = turnData.medical_specialty;
      newTurn.phone_number = turnData.phone_number;
      newTurn.status = turnData.status;
      // No necesitamos establecer el id_user aquí, ya que se establece en el controlador antes de llamar a este servicio

      // Guardar el nuevo turno en la base de datos
      await getRepository(Turn).save(newTurn);

      return newTurn;
  } catch (error) {
      console.error("Error al crear el turno:", error);
      throw new Error("Error al crear el turno");
  }
};

// export const cancelTurnService = async (turnId: number): Promise<void> => {
//   // const turn = turns.find(turn => turn.id === turnId);
//   if (turn) {
//     turn.status = "cancelled";
//   }
// };
