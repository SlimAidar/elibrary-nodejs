import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isbn: string;

    @Column()
    title: string;

    @Column('simple-array')
    authors: string[];

}