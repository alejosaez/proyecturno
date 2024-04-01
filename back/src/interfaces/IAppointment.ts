interface IAppointment {
    id_turns: number;
    date: Date;
    time: string;
    observation: string;
    medical_specialty: string;
    phone_number: string;
    id_user: number;
    status: 'active' | 'cancelled';
}
export default IAppointment

