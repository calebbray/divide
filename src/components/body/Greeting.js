import React from 'react';
// import { Link } from 'react-router-dom';

const Greeting = ({ classes, name, nickname, content, beforeOrAfter, br }) => {
  return (
    <div className={classes}>
      <p className={beforeOrAfter}>
        Meet{br ? <br /> : ' '}
        {name}
      </p>
      <div className="greeting-container">
        <p className="greeting-content">{content}</p>
        <a href="#" className="btn btn-block">
          Meet {nickname ? nickname : name}
        </a>
      </div>
    </div>
  );
};

export default Greeting;
