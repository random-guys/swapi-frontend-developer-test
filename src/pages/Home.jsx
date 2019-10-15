import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader';
import ShipLayout from '../layouts/ShipLayout';
import PlanetLayout from '../layouts/PlanetLayout';
import CharacterLayout from '../layouts/CharacterLayout';
import Footer from '../components/Footer';
import ShipActions from '../actions/ship.action';
import PlanetActions from '../actions/planet.action';
import CharacterActions from '../actions/character.action';
import resetState from '../actions';
import './index.css';

const { getShips } = ShipActions;
const { getPlanets } = PlanetActions;
const { getCharacters } = CharacterActions;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentShipFetch: {},
      currentPlanetFetch: {},
      currentCharacterFetch: {},
      shipArray: [],
      planetArray: [],
      characterArray: [],
      loading: false
    };
  }

  componentDidMount() {
    const { getShips, getPlanets, getCharacters, resetState } = this.props;
    resetState();
    getShips();
    getPlanets();
    getCharacters();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      const { data } = this.props;
      const { ships, planets, characters, currentShips, currrentPlanets, currentCharacters } = data;
      this.setState(
        {
          shipArray: [...ships],
          planetArray: [...planets],
          characterArray: [...characters],
          currentShipFetch: { ...currentShips },
          currentPlanetFetch: { ...currrentPlanets },
          currentCharacterFetch: { ...currentCharacters }
        }
      );
    }
  }

  loadMore(type) {
    const { getShips, getCharacters } = this.props;
    const { currentShipFetch, currentCharacterFetch } = this.state;
    
    switch (type) {
      case 'ship':
        const { next } = currentShipFetch;
        getShips(next);
        break;
      
      case 'character':
        const { next: nextPage } = currentCharacterFetch;
        getCharacters(nextPage);
        break;
      
      default:
        return undefined;
    }
  }

  render() {
    const { loading, shipArray, planetArray, characterArray, currentShipFetch, currentPlanetFetch, currentCharacterFetch } = this.state;

    if (loading || !currentCharacterFetch.results) {
      return (
        <Loader></Loader>
      );
    }


    return (
      <div className="container-fluid main-wrapper">
        <div className="container-fluid banner mb-5">
        <div className="row banner-top">
          <div className="col-12 py-5 pl-5">
            <Link to="/"><img className="logo" src="https://res.cloudinary.com/free-spirit/image/upload/v1570701743/logo.png" alt=""/></Link>
          </div>
        </div>
        <div className="row banner-bottom justify-content-center">
          <div className="col-12 col-md-8 py-3 py-md-5 d-flex flex-column">
            <div className="banner-content title-box pb-3">
              <img className="logo" src="https://res.cloudinary.com/free-spirit/image/upload/v1570701743/logo.png" alt=""/>
              <h1 className="banner-title ml-2 ml-md-4 mb-0">Directory</h1>
            </div>
            <div className="py-2 py-md-4 justify-content-center banner-content banner-text__wrapper">
              <p className="banner-text">Find your favorite Characters, Films, Species, Starships and Planets</p>
            </div>
            <div className="justify-content-center banner-content banner-input__box">
              <div className="input-group mb-3 banner-input__wrapper">
                <div className="input-group-prepend">
                  <span className="input-group-text px-3 px-md-4">
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                  </span>
                </div>
                <input type="text" className="form-control banner-input" aria-label="Search term" placeholder="Enter a search term"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid section-wrapper">
        <ShipLayout dataList={shipArray} onClick={() => this.loadMore('ship')} show={currentShipFetch.next}></ShipLayout>
        <PlanetLayout dataList={planetArray}></PlanetLayout>
        <CharacterLayout dataList={characterArray} onClick={() => this.loadMore('character')} show={currentCharacterFetch.next}></CharacterLayout>
        
      </div>
      <Footer></Footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { data } = state;
  return {
    data: { ...state.data }
  };
};

export default connect(mapStateToProps, { resetState, getShips, getPlanets, getCharacters })(Home);
