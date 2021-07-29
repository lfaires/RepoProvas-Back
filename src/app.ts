import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database/database'

import * as instructorController from './controllers/instructorsController'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/instructors',  instructorController.getAllInstructors)


export async function init () {
    await connectDatabase();
}

export default app;