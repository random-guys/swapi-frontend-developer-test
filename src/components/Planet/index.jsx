import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';
import imageGen from '../../helpers/imageGen';
import loadPage from '../../helpers/loadPage';
import slugGen from '../../helpers/slugGen';

const Planet =  (props) => {
  const imageUrl = imageGen('planet');

  const { name, rotation_period, orbital_period, diameter,
  climate, gravity, terrain, surface_water, population, url, history } = props;

  const slug = slugGen(name);
  const planet = {
    name, rotation_period, orbital_period, diameter,
    climate, gravity, terrain, surface_water, population, url
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 card-wrapper">
      <a className="planet-link" onClick={() => loadPage(url, 'planet', planet, slug, history ) }>
        <div className="card planet-card">
          <img src={ imageUrl } className="card-img-top" alt="..." />
          <div className="planet">
            <h5 className="planet-title">{ name }</h5>
          </div>
        </div>
      </a>
    </div>
  );
};

export default withRouter(Planet);
