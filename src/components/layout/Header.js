import React from 'react';
import logo_small from '../../images/logo-small.png';

const Header = () => {
  return (
    <div>
      <img src={logo_small} alt="logo" className="logo-small" />
      <h1>This is the Header</h1>
    </div>
  );
};

export default Header;
