import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './Footer.module.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`${theme ? styles.footercomlight : styles.footercom}`}>
      <nav
        className={`navbar ${styles.footercontent} ${
          theme ? styles.light : styles.dark
        }`}
      >
        <div className={`navbar-brand ${styles.footerbrand}`}>
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
                src="/assets/logo.svg"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width={112}
                height={28}
              />
            </a>
          </Link>
        </div>
        <div id="navbarExampleTransparentExample" className={`navbar-menu`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link href="https://www.instagram.com/multimedia.umai/">
                    <a
                      className={`bd-tw-button button ${styles.footerbutton}`}
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        src="/assets/Instagram.svg"
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        width={20}
                        height={20}
                        className={`${styles.img}`}
                      />
                    </a>
                  </Link>
                </p>
                <p className="control">
                  <Link href="https://www.youtube.com/multimediaumai">
                    <a
                      className={`bd-tw-button button ${styles.footerbutton}`}
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        src="/assets/YouTube.svg"
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        width={20}
                        height={20}
                        className={`${styles.img}`}
                      />
                    </a>
                  </Link>
                </p>
                <p className="control">
                  <Link href="https://twitter.com/MultimediaUMAI">
                    <a
                      className={`bd-tw-button button ${styles.footerbutton}`}
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        src="/assets/Twitter.svg"
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        width={20}
                        height={20}
                        className={`${styles.img}`}
                      />
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
