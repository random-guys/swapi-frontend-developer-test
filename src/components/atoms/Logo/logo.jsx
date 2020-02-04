import React from 'react';
import PropTypes from 'prop-types';
import { appName, logo } from '../../../utils/strings';

const Logo = ({ className }) => (
  <img className={className} src={logo} alt={appName} />
);

Logo.propTypes = {
  className: PropTypes.string.isRequired
};

export default Logo;
