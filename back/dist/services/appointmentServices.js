"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTurnService = exports.cancelTurnService = exports.getTurnByIdService = exports.getTurnsService = void 0;
const typeorm_1 = require("typeorm");
const appointmentEntities_1 = require("../entities/appointmentEntities");
const typeorm_2 = require("typeorm");
const turns = [];
let id = 1;
const getTurnsService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener todos los turnos de la base de datos utilizando TypeORM
        const appointments = yield (0, typeorm_1.getConnection)().getRepository(appointmentEntities_1.Turn).find();
        // Mapear los turnos a un formato que coincide con la interfaz IAppointment
        const appointmentsFormatted = appointments.map(appointment => ({
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
    }
    catch (error) {
        console.error("Error al obtener los turnos:", error);
        throw new Error("Error al obtener los turnos");
    }
});
exports.getTurnsService = getTurnsService;
const getTurnByIdService = (turnId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turnRepository = (0, typeorm_2.getRepository)(appointmentEntities_1.Turn);
        // Buscar el turno por su ID 
        const turn = yield turnRepository.findOne({ where: { id_turns: turnId } });
        return turn || undefined; // Devolver undefined si el turno no se encuentra
    }
    catch (error) {
        console.error('Error al buscar turno por ID:', error);
        return undefined; // Devolver undefined en caso de error
    }
});
exports.getTurnByIdService = getTurnByIdService;
const cancelTurnService = (turnId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turnRepository = (0, typeorm_2.getRepository)(appointmentEntities_1.Turn);
        // Obtener el turno por su ID
        const turn = yield turnRepository.findOne({ where: { id_turns: turnId } });
        if (!turn) {
            throw new Error("No existe un turno con ese id");
        }
        // Actualizar el estado del turno a "cancelled"
        turn.status = 'cancelled';
        // Guardar los cambios en la base de datos
        yield turnRepository.save(turn);
    }
    catch (error) {
        // Manejo de errores
        console.error('Error al cancelar turno en el servicio:', error);
        throw new Error('Error al cancelar turno en el servicio.');
    }
});
exports.cancelTurnService = cancelTurnService;
const createTurnService = (turnData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Crear una nueva instancia de la entidad Turn con los datos proporcionados
        const turnRepository = (0, typeorm_2.getRepository)(appointmentEntities_1.Turn);
        const newTurn = turnRepository.create(turnData);
        yield turnRepository.save(newTurn);
        return newTurn;
    }
    catch (error) {
        console.error("Error al crear el turno:", error);
        throw new Error("Error al crear el turno");
    }
});
exports.createTurnService = createTurnService;
// export const cancelTurnService = async (turnId: number): Promise<void> => {
//   // const turn = turns.find(turn => turn.id === turnId);
//   if (turn) {
//     turn.status = "cancelled";
//   }
// };
