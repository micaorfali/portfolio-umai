import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import Hero_4 from '../components/Hero_4/Hero_4';
import GridDisenio from '../components/GridDisenio/GridDisenio';

export default function Diseno() {
  return (
    <>
      <NavBar></NavBar>
      <Hero_4></Hero_4>
      <Title>Diseño</Title>
      <GridDisenio></GridDisenio>
      <Footer></Footer>
    </>
  );
}
