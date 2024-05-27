import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material'; //cssbaseline resets the css
import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/Dashboard/dashboard';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
