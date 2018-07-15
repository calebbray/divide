import React from 'react';
import logo from '../../images/logo-main.png';

const Intro = () => {
  return (
    <div className="intro margin-top grid">
      <div className="image-container">
        <img src={logo} alt="main logo" className="logo-main" />
      </div>
      <div className="intro-content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          dignissimos repellendus sequi tempora minus cumque sit cum ipsam
          minima nemo. Quo, officiis et repudiandae laborum doloribus distinctio
          magnam ipsa hic eius illum odit consequuntur molestiae voluptatem
          reiciendis voluptate atque vel.
        </p>
      </div>
    </div>
  );
};

export default Intro;
