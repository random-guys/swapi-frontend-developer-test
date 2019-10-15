import React from 'react';
import './index.css';

const Title = ({ text }) => (
  <div className="row my-4 my-md-5">
    <div className="col-12">
      <h1 className="title mb-3">{ text }</h1>
      <div className="title-border"></div>
    </div>
  </div>
);

export default Title;
