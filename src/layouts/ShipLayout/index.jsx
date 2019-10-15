import React from 'react';
import Ship from '../../components/Ship';
import Title from '../../components/Title';
import LoadMore from '../../components/LoadMore';

const ShipLayout = (props) => {
  const { dataList, title, show } = props;
  let x=1;
  return (
    <div className="container-fluid">
      <Title text={ title || 'Popular Ships'}></Title>
      <div className="row">
        {
          dataList.map((data) =>
          <Ship { ...data } key={ x++ }>
          </Ship>)
        }
      </div>
      <LoadMore onClick={ () => props.onClick() } show={ show }></LoadMore>
    </div>
  );
};

export default ShipLayout;
