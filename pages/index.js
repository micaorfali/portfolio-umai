import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import Hero from '../components/Hero/Hero';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';
import Subtitle from '../components/Subtitle/Subtitle';
import Grid from '../components/Grid/Grid';
import About from '../components/About/About';
import { FavContext } from '../contexts/FavContext';
import { useContext } from 'react';
import ColumnNosotros from '../components/ColumnNosotros/ColumnNosotros';
import { ThemeContext } from '../contexts/ThemeContext';
import Button from '../components/Button/Button';

export default function Home() {
  const { fav, setFav } = useContext(FavContext);
  const { theme, changeTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      {/* 
    {fav.map((item) => (
        <p key={item.id}>{item.name} </p>
    ))} 
    */}
      <NavBar></NavBar>
      <Hero></Hero>
      <Title>Bienvenidos</Title>
      <span>{theme ? 'esDark' : 'esLight'}</span>
      <button onClick={changeTheme}>Cambiar modo</button>
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
