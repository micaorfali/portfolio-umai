import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
// import styles from './NavBar.module.css';

function ThemeToggle() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <button onClick={changeTheme}>
      {theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default ThemeToggle;
