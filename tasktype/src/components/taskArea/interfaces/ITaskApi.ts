import { Priority } from '../../createTaskForm/enums/priority';
import { Status } from '../../createTaskForm/enums/status';

export interface ITaskApi {
  id: string;
  date: string;
  description: string;
  title: string;
  status: `${Status}`; //take all the values from the status enum and craete a union of those values
  priority: `${Priority}`; //take all the values from the priority enum and craete a union of those values
}
