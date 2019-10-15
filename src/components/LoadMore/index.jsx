import React from 'react';
import './index.css';

const LoadMore = (props) => {
  const { show } = props;
  const showClass = show ? 'show-modal' : 'hide-modal';
  return (
    <div className={`row justify-content-center ${showClass}`}>
      <div className="load-more">
        <button type="button" className="load-more__button" onClick={() => props.onClick() }>
          view more
        </button>
      </div>
    </div>
  );
};

export default LoadMore;
