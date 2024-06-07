import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

function ThemeToggle() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <button onClick={changeTheme}>
      {theme ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}

export default ThemeToggle;
