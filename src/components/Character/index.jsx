import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';
import imageGen from '../../helpers/imageGen';
import loadPage from '../../helpers/loadPage';
import slugGen from '../../helpers/slugGen';

class Character extends React.Component {
  render() {
    const imageUrl = imageGen('character');
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, url, history  } = this.props;
    
    const slug = slugGen(name);
    let genderRef;

    if (gender === 'male') {
      genderRef = 'He';
    } else {
      genderRef = 'She';
    }

    const character = { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, url  };

    return (
      <div className="char card-wrapper col-12 col-md-6">
        <div className="d-flex container-fluid card character">
          <div className="row no-gutters char-row">
            <div className="col-7 col-md-7">
            <img src={ imageUrl } className="character-image" alt="..." />
            </div>
            <div className="col-5 col-md-5 card-body px-2 px-md-4 py-0">
              <div className="card-body-char">
                <h5 className="card-title">{ name }</h5>
                <p className="sub-title"><i>Son of { name.split(' ')[1] }</i></p>
                <p className="card-text">
                 {
                   `Born in the year ${ birth_year }, ${ name } is...
                   `
                 }
                <a className="more-link" onClick={() => loadPage(url, 'character', character, slug, history )}>Read more</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Character);
