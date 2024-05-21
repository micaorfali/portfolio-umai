import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
//import Hero_5 from '../components/Hero_5/Hero_5';
import Hero_3 from '../components/Hero_3/Hero_3';
import GridProgramacion from '../components/GridProgramacion/GridProgramacion';

export default function Programacion() {
  return (
    <>
      <NavBar></NavBar>
      <Hero_3></Hero_3>
      <Title>Programación</Title>
      <GridProgramacion/>
      <Footer></Footer>
    </>
  );
}
