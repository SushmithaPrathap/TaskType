// const express = require('express');
import express, { Express } from 'express'; //these are the interfaces that will help define types for our app
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import { DataSource } from 'typeorm';
import { Task } from './src/tasks/task.entity';
import { taskRouter } from './src/tasks/task.router';

//Steps:
//Instantiate express app
//Define a server port
//Create default route for the application
//Start listening to the requests on the defined port

//Instantiate express app
const app: Express = express();

//parse the req body

app.use(bodyParser.json()); //parse the body to json object tot the req.body

app.use(cors()); //avoud cross-origin errors

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true, //create and delete tables in db. Only use this during devlopemnt. During prod the typeorm uses somthing called table migration which is versioned
  entities: [Task],
});

//Define a server port
const port = process.env.PORT;

//Create default route for the application
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + Typescript server');
// });

AppDataSource.initialize()
  .then(() => {
    //Start listening to the requests on the defined port
    app.listen(port);
    console.log('DataSource has been initialized!');
  })
  .catch((err) => {
    console.error('Error during data source initialization', err);
  });

app.use('/', taskRouter);
