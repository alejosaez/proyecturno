

import IAppointment from "../interfaces/IAppointment";

const turns: IAppointment[] = [];
let id: number = 1;

export const getTurnsService = async (): Promise<IAppointment[]> => {
  return turns;
};

export const getTurnByIdService = async (turnId: number): Promise<IAppointment| undefined> => {
  return turns.find(turn => turn.id === turnId);
};

export const createTurnService = async (turnData: Omit<IAppointment, "id"> & { userId: number }): Promise<IAppointment | undefined> => {
    if (!turnData.userId) {
      throw new Error("El turno debe estar asociado a un usuario.");
    }
  
    const newTurn: IAppointment = {
      id: id++,
      ...turnData
    };
  
    turns.push(newTurn);
  
    return newTurn;
  };

export const cancelTurnService = async (turnId: number): Promise<void> => {
  const turn = turns.find(turn => turn.id === turnId);
  if (turn) {
    turn.status = "cancelled";
  }
};
