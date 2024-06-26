import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Priority } from '../createTaskForm/enums/priority';
import { Status } from '../createTaskForm/enums/status';
import PropTypes from 'prop-types';
import { renderPriorityBorderColor } from './helper/renderPriorityBorderColor';

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    id,
    title = 'Default title',
    priority = Priority.normal,
    status = Status.completed,
    date = new Date(),
    description = 'SOme Text',
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      flexDirection="column"
      width="100%"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        id={id}
        status={status}
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  date: PropTypes.instanceOf(Date),
  priority: PropTypes.string,
  status: PropTypes.string,
};
