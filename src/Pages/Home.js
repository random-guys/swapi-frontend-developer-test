import React from 'react';
import Title from '../components/title';
import Header from '../components/templates/Header/header';
import Starships from '../components/templates/Starships/starships';

const Home = () => (
  <>
    <Title page="Home" />
    <Header />
    <Starships />
  </>
);

export default Home;
