import React from 'react';
import Planet from '../../components/Planet';
import Title from '../../components/Title';

const PlanetLayout = ({ dataList, title }) => {
  let x=1;
  return (
    <div className="container-fluid">
      <Title text={ title || `Popular Planets`}></Title>
      <div className="row">
        {
          dataList.map((data) =>
          <Planet { ...data } key={ x++ }>
          </Planet>)
        }
      </div>
    </div>
  );
};

export default PlanetLayout;
