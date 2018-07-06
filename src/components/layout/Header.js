import React from 'react';
import logo_small from '../../images/logo-small.png';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="navigator flex">
      <img src={logo_small} alt="logo" className="logo-small" />
      <Navigation />
    </div>
  );
};

export default Header;
