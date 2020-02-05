import React from 'react';
import PropTypes from 'prop-types';

const ContentTitle = ({ title }) => (
  <div className="content">
    <h1 className="content-title">{title}</h1>
    <div className="content-line"></div>
  </div>
);

ContentTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default ContentTitle;
