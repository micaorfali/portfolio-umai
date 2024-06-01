import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Hero from '../components/Hero/Hero';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import Subtitle from '../components/Subtitle/Subtitle';
import Grid from '../components/Grid/Grid';
import About from '../components/About/About';
import { useContext } from 'react';
import ColumnNosotros from '../components/ColumnNosotros/ColumnNosotros';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Home() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Title>Bienvenidos</Title>
      <span>{theme ? 'esLight' : 'esDark'}</span>
      <About />
      <Subtitle>UMAI</Subtitle>
      <Title>Proyectos</Title>
      <Grid />
      <Subtitle>Conocenos</Subtitle>
      <Title>Nosotros</Title>
      <ColumnNosotros />
      <Footer></Footer>
    </>
  );
}
