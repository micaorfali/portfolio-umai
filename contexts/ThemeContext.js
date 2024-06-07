import { useState, useEffect, createContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);  // true for light mode, false for dark mode

  useEffect(() => {
    const rootElement = document.documentElement;
    if (theme) {
      rootElement.classList.add('has-background-light', 'has-text-dark');
      rootElement.classList.remove('has-background-dark', 'has-text-light');
    } else {
      rootElement.classList.add('has-background-dark', 'has-text-light');
      rootElement.classList.remove('has-background-light', 'has-text-dark');
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
