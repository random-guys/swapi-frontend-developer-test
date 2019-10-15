import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import simplestorage from 'simplestorage.js';
import Loader from 'react-loader';
import ShipLayout from '../../layouts/ShipLayout';
import ShipActions from '../../actions/ship.action';
import Footer from '../../components/Footer';
import imageGen from '../../helpers/imageGen';
import '../index.css';
import './index.css';

const { getShip } = ShipActions;

class ShipPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentShip: {},
      shipArray: [],
      loading: false,
      recentlyViewed: []
    };
  }

  componentDidMount() {
    const { data, history, getShip } = this.props;
    const m = history.location.pathname.match(/\b(\/(\d+)\/)\B.*/g);
    const url = `https://swapi.co/api/starships${m}`;
    getShip(url);
    const recentlyViewed = simplestorage.get('ships');
    const { loading, current } = data;
    this.setState({
      currentShip: current,
      loading,
      recentlyViewed
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      const { data } = this.props;
      const { current, loading } = data;
      this.setState(
        {
          currentShip: current,
          loading
        }
      );
    }

    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      const { history, getShip } = this.props;
      const m = history.location.pathname.match(/\b(\/(\d+)\/)\B.*/g);
      const url = `https://swapi.co/api/starships${m}`;
      getShip(url);
      const recentlyViewed = simplestorage.get('ships');
      const { data } = this.props;
      const { current, loading } = data;
      this.setState(
        {
          currentShip: current,
          loading,
          recentlyViewed
        }
      );
    }
  }

  render() {
    const { loading, currentShip, recentlyViewed } = this.state;

    let viewedShips = '';
    if (recentlyViewed && recentlyViewed.length > 0) {
      const dataArray = _.filter(recentlyViewed, (ship) => ship.name !== currentShip.name);
      if (dataArray.length > 0) {
        viewedShips = <ShipLayout title="Recently viewed starships" dataList={ dataArray } onClick={() => {}} show={ false }></ShipLayout>;
      }
    }

    if (loading || !currentShip.name) {
      return (
        <Loader></Loader>
      );
    }

    const imageUrl = imageGen('ship');
    const { name, crew, passengers, cargo_capacity,
      hyperdrive_rating, length, cost_in_credits,
      manufacturer, model, consumables
    } = currentShip;

    return (
      <div className="container-fluid main-wrapper">
        <div className="container-fluid banner mb-5">
        <div className="row banner-top">
          <div className="col-12 py-5 pl-5">
            <Link to="/"><img className="logo" src="https://res.cloudinary.com/free-spirit/image/upload/v1570701743/logo.png" alt=""/></Link>
          </div>
        </div>
        <div className="row banner-bottom justify-content-center single-image__wrapper">
          <div className="col-8 py-5 d-flex flex-column">
            <img src={ imageUrl } className="single-image mb-3 mb-md-5" alt="..." />
          </div>
          <div className="single-image__title-box">
            <h1 className="single-image__title">
             { name }
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid section-wrapper">
        <div className="row justify-content-center">
          <div className="col-10 col-md-6 single-content__text-box">
            <h1 className="single-content__title">{ name }</h1>
            <p className="single-content__text">
            {
              `Manned by a crew of ${ crew } stalwart soldiers and ${ passengers } passengers,
              the ${ name } is a legendary starship. It also has a cargo capacity of ${ cargo_capacity },
              a hyperdrive rating of ${ hyperdrive_rating }, a length of ${ length } and costs ${ cost_in_credits }
              credits. The legacy ${ model } model manufactured by the ${ manufacturer }, has a proven rugged lifespan of ${ consumables }.`
            }
            </p>
          </div>
        </div>

        {
          viewedShips
        }
        
      </div>
      <Footer></Footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { data } = state;
  return {
    data
  };
};

export default connect(mapStateToProps, { getShip })(withRouter(ShipPage));
