import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsNotEmpty, Length} from "class-validator";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    @Length(12, 12)
    isbn: string;

    @Column()
    @IsNotEmpty()
    @Length(3, 50)
    title: string;

    @Column('simple-array')
    authors: string[];

}