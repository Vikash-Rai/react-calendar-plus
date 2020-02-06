import React, { ReactNode } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

//TODO Add types
const basetheme = {
  header: {
    backgroundColor: '#333',
  },
};

const BaseTheme: React.FunctionComponent = (props) => {
  return <ThemeProvider theme={basetheme}>{props.children}</ThemeProvider>;
};

export default BaseTheme;