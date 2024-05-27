import { Priority } from '../../createTaskForm/enums/priority';

export const renderPriorityBorderColor = (priority: string): string => {
  switch (priority) {
    case Priority.low:
      return 'info.light';
    case Priority.high:
      return 'error.light';
    case Priority.normal:
      return 'grey.900';
    default:
      return 'grey.900';
  }
};
