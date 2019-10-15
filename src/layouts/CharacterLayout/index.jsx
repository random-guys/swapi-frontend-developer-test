import React from 'react';
import Character from '../../components/Character';
import Title from '../../components/Title';
import LoadMore from '../../components/LoadMore';
import './index.css';

const CharacterLayout = (props) => {
  const { dataList, show, title } = props;
  let x = 1;
  return (
    <div className="container-fluid mb-5 px-2">
      <Title text={ title || `Popular Characters`}></Title>
      <div className="row mx-0">
        {
          dataList.map((data) =>
          <Character { ...data } key={ x++ }>
          </Character>)
        }
      </div>
      <LoadMore show={ show } onClick={() => props.onClick()} ></LoadMore>
    </div>
  );
};

export default CharacterLayout;
