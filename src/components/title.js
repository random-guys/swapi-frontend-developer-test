import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { appName } from '../utils/strings';

const Title = ({ page }) => (
  <Helmet>
    <title>
      {appName} | {page}
    </title>
  </Helmet>
);

Title.propTypes = {
  page: PropTypes.string.isRequired
};

export default Title;
