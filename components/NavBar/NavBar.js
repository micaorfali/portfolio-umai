import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './NavBar.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav
      className={`navbar is-fixed-top ${
        theme
          ? 'has-background-light has-text-dark'
          : 'has-background-dark has-text-light'
      }`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
          <a
            className="navbar-item"
            style={{
              backgroundColor: '#aeaeae',
              margin: '0.5em',
              borderRadius: '10px',
            }}
          >
            <Image
              className={`${styles.img}`}
              src="/assets/logo.svg"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width={124}
              height={40}
            />
          </a>
        </Link>
        <div
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          data-target="navbarExampleTransparentExample"
          onClick={handleBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        id="navbarExampleTransparentExample"
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
      >
        <div className="navbar-end pr-6 navbar-item-custom-hover">
          <Link href="/disenio">
            <a
              className={`navbar-item has-text-weight-bold ${
                theme ? 'has-text-dark' : 'has-text-light'
              }`}
            >
              Diseño
            </a>
          </Link>
          <Link href="/programacion">
            <a
              className={`navbar-item has-text-weight-bold ${
                theme ? 'has-text-dark' : 'has-text-light'
              }`}
            >
              Programación
            </a>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
