import React, {useState, useEffect, createContext} from 'react';
import {Appearance} from 'react-native';

import {colorScheme, Colors} from '../styles/theme';

export enum Theme {
  dark = 'dark',
  light = 'light',
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: Colors;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: Appearance.getColorScheme() === 'dark' ? Theme.dark : Theme.light,
  toggleTheme: () => console.warn('No theme provider'),
  colors: {},
});

export default function ThemeProvider({children}: any) {
  const [theme, setTheme] = useState<Theme>(
    Appearance.getColorScheme() === 'dark' ? Theme.dark : Theme.light,
  );

  const [colors, setColors] = useState<Colors>(colorScheme[theme].colors);
  function toggleTheme() {
    setTheme(old => (old === Theme.dark ? Theme.light : Theme.dark));
  }

  useEffect(() => {
    setColors(colorScheme[theme].colors);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, colors, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
