import { body, ValidationChain } from 'express-validator';
import { Priority } from '../enums/priority';
import { Status } from '../enums/status';

export const creatValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('The task title is mandatory')
    .trim()
    .isString()
    .withMessage('Title needs to be in text format'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('The task date is mandatory')
    .isString()
    .withMessage('Date needs to be in a valid date format'),
  body('description')
    .trim()
    .isString()
    .withMessage('description needs to be in text format'),
  body('priority')
    .trim()
    .isIn([Priority.high, Priority.low, Priority.normal])
    .withMessage('Priority can be normal, high, low'),
  body('status')
    .trim()
    .isIn([Status.completed, Status.inProgress, Status.todo])
    .withMessage('Status can be completed, in progress, todo'),
];

export const updateValidator = [
  body('id')
    .not()
    .isEmpty()
    .withMessage('The task id is mandatory')
    .trim()
    .isString()
    .withMessage('Id needs to be in valid uuid format'),
  body('status')
    .trim()
    .isIn([Status.completed, Status.inProgress, Status.todo])
    .withMessage('Status can be completed, in progress, todo'),
];
