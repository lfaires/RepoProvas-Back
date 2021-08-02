import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


Entity('instructors')
export default class Instructors {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {length: 100})
    name: string;
}