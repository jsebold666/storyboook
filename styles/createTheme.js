import colors from './colors';

function createTheme(options = {}) {
  const theme = {
    ...colors,
    ...options
  };

  return theme;
}

export default createTheme;
