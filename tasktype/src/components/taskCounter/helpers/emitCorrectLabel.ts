import { Status } from '../../createTaskForm/enums/status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const emitCorrectLabel = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return `Todo's`;
    case Status.inProgress:
      return 'In progress';
    case Status.completed:
      return 'Completed';
  }
};
