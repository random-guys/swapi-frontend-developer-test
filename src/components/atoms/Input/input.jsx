import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, className, name, placeholder, onChange }) => (
  <input
    type={type}
    className={className}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
