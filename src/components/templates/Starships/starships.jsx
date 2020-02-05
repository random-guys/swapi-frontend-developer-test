import React from 'react';
import StarwarsCard from '../../molecules/StarwarsCard/StarwarsCard';
import ContentTitle from '../../atoms/ContentTitle/contentTitle';
import { popularStarShips } from '../../../utils/strings';

const Starships = () => {
  return (
    <>
      <ContentTitle title={popularStarShips} />
      <div className="starships">
        <StarwarsCard />
        <StarwarsCard />
        <StarwarsCard />
        <StarwarsCard />
        <StarwarsCard />
        <StarwarsCard />
      </div>
    </>
  );
};

export default Starships;
