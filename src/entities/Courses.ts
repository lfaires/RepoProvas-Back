import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


Entity('courses')
export default class Courses {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {length: 100})
    name: string;
}