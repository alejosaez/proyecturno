
import IAppointment from "../interfaces/IAppointment";
import { getConnection } from 'typeorm';
import { Turn } from "../entities/appointmentEntities" 
import { getRepository } from 'typeorm';
import { reSendNewTurn } from "./email/reSendNewTurn";
import { getUserByIdService } from "./usersServices";




const turns: IAppointment[] = [];
let id: number = 1;


export const getTurnsService = async (): Promise<IAppointment[]> => {
  try {
    
    const appointments = await getConnection().getRepository(Turn).find();

    
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





export const getTurnByUserIdService = async (userId: number): Promise<IAppointment[] | undefined> => {
  try {
    const turnRepository = getRepository(Turn);

   
    const turns = await turnRepository.find({ where: { id_user: userId } });

    return turns || [];
  } catch (error) {
    console.error('Error al buscar los turnos por ID de usuario:', error);
    return undefined;
  }
};



export const getTurnByIdService = async (turnId: number): Promise<IAppointment | undefined> => {
  try {
    const turnRepository = getRepository(Turn);

   
    const turn = await turnRepository.findOne({ where: { id_turns: turnId } });

    return turn || undefined; 
  } catch (error) {
    console.error('Error al buscar turno por ID:', error);
    return undefined; 
  }
};;

export const cancelTurnService = async (turnId: number): Promise<void> => {
  try {
      const turnRepository = getRepository(Turn);

     
      const turn = await turnRepository.findOne({ where: { id_turns: turnId } });
      if(!turn){
        throw new Error("No existe un turno con ese id")
      }

     
      turn.status = 'cancelled';

      
      await turnRepository.save(turn);
  } catch (error) {
      
      console.error('Error al cancelar turno en el servicio:', error);
      throw new Error('Error al cancelar turno en el servicio.');
  }
};




export const createTurnService = async (turnData: Omit<IAppointment, "id">): Promise<IAppointment | undefined> => {
  try {
     
      const turnRepository=getRepository( Turn)
      const newTurn= turnRepository.create(turnData)
      await turnRepository.save(newTurn)
      const user = await getUserByIdService(turnData.id_user);
      if (user) {
        await reSendNewTurn(user.email, turnData.date, turnData.time, turnData.observation, turnData.medical_specialty, turnData.phone_number, user.name);
      } else {
        console.error("User not found for turn creation");
      }
  
      return newTurn;

      return newTurn;
  } catch (error) {
      console.error("Error al crear el turno:", error);
      throw new Error("Error al crear el turno");
  }
};


