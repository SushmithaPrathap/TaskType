import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import { TaskArea } from '../../components/taskArea/taskarea';
import { SideBar } from '../../components/sideBar/sidebar';

export const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <SideBar />
    </Grid>
  );
};
