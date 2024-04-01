import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({ name: 'turns' })
export class Turn extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_turns: number;

    @Column({ type: 'date' })
    date: Date;

    @Column({ type: 'time' })
    time: string;

    @Column({ type: 'text', nullable: true })
    observation: string;

    @Column({ type: 'text' })
    medical_specialty: string;

    @Column({ type: 'varchar', length: 15 })
    phone_number: string;

    @Column({ type: 'integer' })
    id_user: number;
}
