import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children }) => (
  <button type="submit" className={className}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default Button;
