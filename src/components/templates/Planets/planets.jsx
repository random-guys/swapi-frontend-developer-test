import React, { useState, useEffect } from 'react';
import WindowSizeListener from 'react-window-size-listener';
import Slider from 'react-slick';
import PlanetCard from '../../molecules/PlanetCard/planetCard';
import ContentTitle from '../../atoms/ContentTitle/contentTitle';
import { popularPlanets } from '../../../utils/strings';

const Planets = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [slides, setSlides] = useState(3);
  const settings = {
    className: 'planets',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: slides
  };

  useEffect(() => {
    if (screenWidth <= 560) {
      setSlides(1);
    } else if (screenWidth <= 965) {
      setSlides(2);
    } else if (screenWidth > 965) {
      setSlides(3);
    }
  }, [screenWidth]);

  return (
    <>
      <WindowSizeListener
        onResize={windowSize => {
          setScreenWidth(windowSize.windowWidth);
        }}
      />
      <ContentTitle title={popularPlanets} />
      <Slider {...settings}>
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
      </Slider>
    </>
  );
};

export default Planets;
