import React from 'react';
import { Link } from 'react-router-dom';
import { planets } from '../../../utils/strings';

const PlanetCard = () => {
  return (
    <Link className="planetCard" to="/">
      <img className="planetCard-image" src={planets[0]} alt="planets" />
      <h1 className="planetCard-name">Planet Name</h1>
    </Link>
  );
};

export default PlanetCard;
