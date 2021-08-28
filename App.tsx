import React from 'react';
import {StatusBar} from 'react-native';
import {Home} from './src/pages/Home';

import ThemeProvider from './src/contexts/ThemeProvider';

export default () => (
  <ThemeProvider>
    <StatusBar barStyle="light-content" />
    <Home />
  </ThemeProvider>
);
