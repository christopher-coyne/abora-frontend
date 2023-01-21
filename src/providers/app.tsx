import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import { BrowserRouter as Router } from 'react-router-dom';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Router>{children}</Router>
    </ThemeProvider>
  );
};
