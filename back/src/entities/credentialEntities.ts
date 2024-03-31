import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: "credentials" // Nombre de la tabla en la base de datos
})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 150
    })
    username: string;

    @Column()
    password: string;
}
