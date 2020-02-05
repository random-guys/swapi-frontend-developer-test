import React from 'react';
import { Link } from 'react-router-dom';
import { starships } from '../../../utils/strings';

const dummy =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aut libero neque deserunt, voluptates illo dolores? Veniam, reiciendis aliquid. Accusantium iure inventore dolores nobis possimus ex consequuntur voluptas sed aut.';

const StarwarsCard = () => (
  <div className="starwarsCard">
    <div className="starwarsCard__image">
      <img className="starwarsCard__image-photo" src={starships[0]} alt="" />
    </div>
    <div className="starwarsCard__content">
      <div className="starwarsCard__content-wrapper">
        <h1 className="starwarsCard__content-title">Title</h1>
        <p className="starwarsCard__content-desc">{dummy.substring(0, 110)}</p>
        <Link to="/planet/3" className="starwarsCard__content-link">
          Read More
        </Link>
      </div>
    </div>
  </div>
);

export default StarwarsCard;
