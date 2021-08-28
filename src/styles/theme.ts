export interface Colors {
  primary: string;
  secondary: string;
  bg: string;
  text: string;
}

interface ColorScheme {
  dark: {
    colors: Colors;
  };

  light: {
    colors: Colors;
  };
}

export const colorScheme: ColorScheme = {
  dark: {
    colors: {
      primary: '#896ceb',
      secondary: '#1f1e25',
      bg: '#121015',
      text: '#ffffff',
    },
  },
  light: {
    colors: {
      primary: '#896ceb',
      bg: '#fff',
      secondary: '#DCDCDC',
      text: '#121015',
    },
  },
};
