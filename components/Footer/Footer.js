import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`footer ${
        theme ? styles['footercomlight'] : styles['footercom']
      }`}
    >
      <nav className={`navbar ${styles['footercontent']}`}>
        <div className={`navbar-brand ${styles['footerbrand']}`}>
          <Link href="/">
            <a className="navbar-item" href="https://bulma.io">
              <Image
                src="/assets/logo.svg"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width={112}
                height={28}
              />{' '}
            </a>
          </Link>
        </div>
        <div
          id="navbarExampleTransparentExample"
          className={`navbar-menu ${styles['footernavbar']}`}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link
                    href="https://www.instagram.com/multimedia.umai/"
                    passHref
                  >
                    <a
                      className={`bd-tw-button button ${styles['footerbutton']}`}
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        src="/assets/Instagram.svg"
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        width={20}
                        height={20}
                        className={`${styles['img']}`}
                      />
                    </a>
                  </Link>
                </p>
                <p className="control">
                  <Link href="https://www.youtube.com/multimediaumai" passHref>
                    <a
                      className={`bd-tw-button button ${styles['footerbutton']}`}
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        src="/assets/YouTube.svg"
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        width={20}
                        height={20}
                        className={`${styles['img']}`}
                      />
                    </a>
                  </Link>
                </p>
                <p className="control">
                  <Link href="https://twitter.com/MultimediaUMAI" passHref>
                    <a
                      className={`bd-tw-button button ${styles['footerbutton']}`}
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        src="/assets/Twitter.svg"
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        width={20}
                        height={20}
                        className={`${styles['img']}`}
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
