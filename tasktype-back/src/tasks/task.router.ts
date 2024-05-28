import { Router } from 'express';
import { taskController } from './task.controller';
import { creatValidator, updateValidator } from './task.validator';

//Fire the router function to craete a new router

export const taskRouter: Router = Router();

taskRouter.get('/task', taskController.getAll);

//need to validate the request - express validator package - essentially creates a middleware
//middlewares are fires before it reaches the controller
taskRouter.post('/task', creatValidator, taskController.create);
taskRouter.put('/task', updateValidator, taskController.update);
