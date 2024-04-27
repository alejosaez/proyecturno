import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: "credentials"
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
