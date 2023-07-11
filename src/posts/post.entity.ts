/* eslint-disable prettier/prettier */
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tittle: string

    @Column()
    constent: string

    @Column()
    authorId: number
    
    @ManyToOne(() => User, user => user.post)
    author: User;

}