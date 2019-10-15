import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import imageGen from '../../helpers/imageGen';
import slugGen from '../../helpers/slugGen';
import loadPage from '../../helpers/loadPage';
import ShipActions from '../../actions/ship.action';
import './index.css';

const { getShip } = ShipActions;

const Ship =  (props) => {
  const {
    name, crew, passengers, cargo_capacity,
    hyperdrive_rating, length, cost_in_credits,
    manufacturer, model, consumables, url, history, getShip
  } = props;

  const ship = {
    name, crew, passengers, cargo_capacity,
    hyperdrive_rating, length, cost_in_credits,
    manufacturer, model, consumables, url
  };

  const imageUrl = imageGen('ship');
  const slug = slugGen(name);
  return (
    <div className="card-wrapper col-12 col-md-6 col-lg-4">
      <div className="card">
        <img src={ imageUrl } className="card-img-top" alt="..." />
        <div className="card-body__wrapper">
          <div className="card-body ship">
            <h5 className="card-title">{ name }</h5>
            <p className="card-text ship-text">
              { 
                `Manned by a crew of ${ crew } stalwart soldiers and ${ passengers } passengers,
                the ${ name } is a legendary starship...`
              }
            </p>
            <a className="btn btn-primary ship-read-more" onClick={() => loadPage(url, 'ship', ship, slug, history, getShip)}>Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { getShip })(withRouter(Ship));
