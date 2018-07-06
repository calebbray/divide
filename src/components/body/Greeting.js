import React from 'react';
// import { Link } from 'react-router-dom';

const Greeting = ({ classes, name, nickname, content, beforeOrAfter }) => {
  return (
    <div className={classes}>
      <p className={beforeOrAfter}>Meet {name}</p>
      <p className="greeting-content">{content}</p>
      <a href="#" className="btn btn-block">
        Meet {nickname ? nickname : name}
      </a>
    </div>
  );
};

export default Greeting;
