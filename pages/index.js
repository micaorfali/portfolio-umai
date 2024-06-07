import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Hero from '../components/Hero/Hero';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import Subtitle from '../components/Subtitle/Subtitle';
import Grid from '../components/Grid/Grid';
import About from '../components/About/About';
import ColumnNosotros from '../components/ColumnNosotros/ColumnNosotros';

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Title>Bienvenidos</Title>
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
