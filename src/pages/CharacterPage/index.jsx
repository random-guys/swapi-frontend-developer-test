import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import simplestorage from 'simplestorage.js';
import Loader from 'react-loader';
import CharacterLayout from '../../layouts/CharacterLayout';
import Footer from '../../components/Footer';
import CharacterActions from '../../actions/character.action';
import imageGen from '../../helpers/imageGen';
import '../index.css';
import './index.css';

const { getCharacter } = CharacterActions;

class CharacterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCharacter: {},
      characterArray: [],
      loading: false,
      recentlyViewed: []
    };
  }

  componentDidMount() {
    const { data, history, getCharacter } = this.props;
    const m = history.location.pathname.match(/\b(\/(\d+)\/)\B.*/g);
    const url = `https://swapi.co/api/people${m}`;
    getCharacter(url);
    const recentlyViewed = simplestorage.get('characters');
    const { loading, current } = data;
    this.setState({
      currentCharacter: current,
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
          currentCharacter: current,
          loading
        }
      );
    }

    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      const { history, getCharacter } = this.props;
      const m = history.location.pathname.match(/\b(\/(\d+)\/)\B.*/g);
      const url = `https://swapi.co/api/people${m}`;
      getCharacter(url);
      const recentlyViewed = simplestorage.get('characters');
      const { data } = this.props;
      const { current, loading } = data;
      this.setState(
        {
          currentCharacter: current,
          loading,
          recentlyViewed
        }
      );
    }
  }

  render() {
    const { loading, currentCharacter, recentlyViewed } = this.state;

    let viewedCharacters = '';
    if (recentlyViewed && recentlyViewed.length > 0) {
      const dataArray = _.filter(recentlyViewed, (character) => character.name !== currentCharacter.name);
      if (dataArray.length > 0) {
        viewedCharacters = <CharacterLayout title="Recently viewed characters" dataList={ dataArray }></CharacterLayout>;
      }
    }

    if (loading || !currentCharacter.name) {
      return (
        <Loader></Loader>
      );
    }

    const imageUrl = imageGen('character');
    const { name, height, mass, hair_color,
      skin_color, eye_color, birth_year, gender, url
    } = currentCharacter;

    let genderRef;

    if (gender === 'male') {
      genderRef = 'He';
    } else {
      genderRef = 'She';
    }

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
              `Born in the year ${ birth_year }, ${ name } is a highly skilled
              veteran who fought in the old wars. ${ genderRef } has a height of ${ height } meters,
              a mass of ${ mass } kilograms, ${ skin_color } skin colour. ${ genderRef } has eyes
              the colour of ${ eye_color } and hair the colour of ${ hair_color }.
              `
            }
            </p>
          </div>
        </div>

        {
          viewedCharacters
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
    data: { ...data }
  };
};

export default connect(mapStateToProps, { getCharacter })(withRouter(CharacterPage));
