import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


Entity('exams')
export default class Exams {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {length: 100})
    name: string;

    @Column('text')
    link: string;

    
}