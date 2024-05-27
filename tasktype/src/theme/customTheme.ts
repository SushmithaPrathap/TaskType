import { createTheme, ThemeOptions } from '@mui/material';

//createTheme = lets overide the values of the theme and lets us use some values on the theme. Inherit the default theme and then pverride the theme

//ThemeOptions: interface givue sthe typesafety they creating a new theme

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: 'rgba(168,85,247,.80)',
      main: 'rgba(168,85,247,.65)',
      dark: 'rgba(168,85,247,.28)',
    },
    background: {
      paper: '#151515',
      default: 'rgba(0,0,0,.96)',
    },
  },
});
