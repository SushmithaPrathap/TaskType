import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material'; //cssbaseline resets the css
import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/Dashboard/dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ComposeContext from './context/compose.context';
import { rootContext } from './context/root.context';

//craete a queryClient

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        {/* setting the to false open this in a minimize state */}
      </ComposeContext>
    </QueryClientProvider>
  );
};

export default App;
