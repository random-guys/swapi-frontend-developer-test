import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import simplestorage from 'simplestorage.js';
import Loader from 'react-loader';
import PlanetLayout from '../../layouts/PlanetLayout';
import PlanetActions from '../../actions/planet.action';
import Footer from '../../components/Footer';
import imageGen from '../../helpers/imageGen';
import '../index.css';
import './index.css';

const { getPlanet } = PlanetActions;

class PlanetPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlanet: {},
      planetArray: [],
      loading: false,
      recentlyViewed: []
    };
  }

  componentDidMount() {
    const { data, history, getPlanet } = this.props;
    const m = history.location.pathname.match(/\b(\/(\d+)\/)\B.*/g);
    const url = `https://swapi.co/api/planets${m}`;
    getPlanet(url);
    const recentlyViewed = simplestorage.get('planets');
    const { loading, current } = data;
    this.setState({
      currentPlanet: current,
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
          currentPlanet: current,
          loading
        }
      );
    }

    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      const { history, getPlanet } = this.props;
      const m = history.location.pathname.match(/\b(\/(\d+)\/)\B.*/g);
      const url = `https://swapi.co/api/planets${m}`;
      getPlanet(url);
      const recentlyViewed = simplestorage.get('planets');
      const { data } = this.props;
      const { current, loading } = data;
      this.setState(
        {
          currentPlanet: current,
          loading,
          recentlyViewed
        }
      );
    }
  }

  render() {
    const { loading, currentPlanet, recentlyViewed } = this.state;

    let viewedPlanets = '';
    if (recentlyViewed && recentlyViewed.length > 0) {
      const dataArray = _.filter(recentlyViewed, (planet) => planet.name !== currentPlanet.name);
      if (dataArray.length > 0) {
        viewedPlanets = <PlanetLayout title="Recently viewed planets" dataList={ dataArray }></PlanetLayout>;
      }
    }

    if (loading || !currentPlanet.name) {
      return (
        <Loader></Loader>
      );
    }

    const imageUrl = imageGen('planet');
    const { name, rotation_period, orbital_period, diameter,
      climate, gravity, terrain, surface_water, population
    } = currentPlanet;

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
          <div className="col-12 col-md-6 single-content__text-box">
            <h1 className="single-content__title">{ name }</h1>
            <p className="single-content__text">
            {
              `The planet ${ name } is a distant outland star of the Dernighian galaxy. With a diameter of ${ diameter }, ${ name } has a rotation
              period of ${ rotation_period } and an orbital period of ${ orbital_period }. The climate is ${ climate } and the gravity is
              ${ gravity } on the average Porcuscine-Dernighian scale. It's terrain comprises mainly of ${ terrain }, with a surface water of
              ${ surface_water }. The average population of species on ${ name } is about ${ population }.`
            }
            </p>
          </div>
        </div>

        {
          viewedPlanets
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

export default connect(mapStateToProps, { getPlanet })(withRouter(PlanetPage));
