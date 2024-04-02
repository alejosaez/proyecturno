
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








export const getTurnByIdService = async (turnId: number): Promise<IAppointment | undefined> => {
  try {
    const turnRepository = getRepository(Turn);

    // Buscar el turno por su ID 
    const turn = await turnRepository.findOne({ where: { id_turns: turnId } });

    return turn || undefined; // Devolver undefined si el turno no se encuentra
  } catch (error) {
    console.error('Error al buscar turno por ID:', error);
    return undefined; // Devolver undefined en caso de error
  }
};

export const cancelTurnService = async (turnId: number): Promise<void> => {
  try {
      const turnRepository = getRepository(Turn);

      // Obtener el turno por su ID
      const turn = await turnRepository.findOne({ where: { id_turns: turnId } });
      if(!turn){
        throw new Error("No existe un turno con ese id")
      }

      // Actualizar el estado del turno a "cancelled"
      turn.status = 'cancelled';

      // Guardar los cambios en la base de datos
      await turnRepository.save(turn);
  } catch (error) {
      // Manejo de errores
      console.error('Error al cancelar turno en el servicio:', error);
      throw new Error('Error al cancelar turno en el servicio.');
  }
};




export const createTurnService = async (turnData: Omit<IAppointment, "id">): Promise<IAppointment | undefined> => {
  try {
      // Crear una nueva instancia de la entidad Turn con los datos proporcionados
      const turnRepository=getRepository( Turn)
      const newTurn= turnRepository.create(turnData)
      await turnRepository.save(newTurn)

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
