/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity( { name: 'user_profile' })
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string
    
    @Column()
    lastName: string
    
    @Column({ nullable:true })
    age: number    
}