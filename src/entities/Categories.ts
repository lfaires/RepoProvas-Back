import { Entity, PrimaryGeneratedColumn, Column, ManyToOne  } from "typeorm";
import Exams from "./Exams";

@Entity('categories')
export default class Categories {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {length: 15})
    name: string;
}