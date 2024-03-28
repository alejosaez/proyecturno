import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name:"users"
})
export class User{
    @PrimaryGeneratedColumn()

 id: number

 @Column(
    {length:150}
 )
 name: string

 @Column()  
 email: string

 @Column("date")  
 birthdate: Date
 @Column()
dni: number

@Column()
credentialsId: number
}








// import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// @Entity()
// export class User {
//     @PrimaryGeneratedColumn()
//     id: number

//     @Column()
//     firstName: string

//     @Column()
//     lastName: string

//     @Column()
//     isActive: boolean
// }







// id: number;
// name: string;
// email: string;
// birthdate: Date;
// dni: number;
// credentialsId: number;
// }