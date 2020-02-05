import React from 'react';
import Title from '../components/title';
import Header from '../components/templates/Header/header';
import Starships from '../components/templates/Starships/starships';
import Planets from '../components/templates/Planets/planets';

const Home = () => (
  <>
    <Title page="Home" />
    <Header />
    <Starships />
    <Planets />
  </>
);

export default Home;
