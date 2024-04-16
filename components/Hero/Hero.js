import React from 'react';
import styles from '../Hero/Hero.module.css';

const imagenesHero = [
  'hero.png',
  'herodiseño.png',
  'heroprog.png',
  'herofavoritos.png',
];
const Hero = () => {
  return (
    <section
      className={`hero is-large ${styles['container']}`}
      style={{ backgroundImage: `url(/assets/${imagenesHero[0]})` }}
    >
      <div className="hero-body"></div>
    </section>
  );
};

export default Hero;
