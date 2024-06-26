import { Task } from './task.entity';
import { AppDataSource } from '../../index';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { UpdateResult } from 'typeorm';

class TaskController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    //declare a variable to hold all tasks
    //fetch all task using the repo
    //convert the task instance to an array of obj

    let allTasks: Task[];

    try {
      allTasks = await AppDataSource.getRepository(Task).find({
        order: {
          date: 'ASC',
        },
      });
      allTasks = instanceToPlain(allTasks) as Task[];

      return res.json(allTasks).status(200);
    } catch (_err) {
      //   console.log(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //carete a new instance of a task
    const newTask = new Task();
    newTask.title = req.body.title;
    newTask.date = req.body.date;
    newTask.description = req.body.description;
    newTask.priority = req.body.priority;
    newTask.status = req.body.status;

    let craetedTask: Task;
    try {
      craetedTask = await AppDataSource.getRepository(Task).save(newTask);
      craetedTask = instanceToPlain(craetedTask) as Task;

      return res.json(craetedTask).status(201);
    } catch (errors) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    //Add all the req propties
    //save the new created task to db
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Try to find if the tasks exists
    let task: Task | null;

    try {
      task = await AppDataSource.getRepository(Task).findOne({
        where: { id: req.body.id },
      });
    } catch (errors) {
      return res.json({ error: 'Internal Server Error' }).status(500);
    }

    // Return 400 if task is null
    if (!task) {
      return res.status(404).json({
        error: 'The task with given ID does not exist',
      });
    }

    // Declare a variable for updatedTask
    let updatedTask: UpdateResult;

    // Update the task
    try {
      updatedTask = await AppDataSource.getRepository(Task).update(
        req.body.id,
        plainToInstance(Task, {
          //craete a partial instance of the task as typeorm only deals with instance of the object and not the obj
          status: req.body.status,
        }),
      );

      // Convert the updatedTask instance to an object
      updatedTask = instanceToPlain(updatedTask) as UpdateResult;

      return res.json(updatedTask).status(200);
    } catch (errors) {
      return res.json({ error: 'Internal Server Error' }).status(500);
    }
  }
}

export const taskController = new TaskController();
