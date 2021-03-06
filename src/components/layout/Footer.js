import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-light text-center mt-5">
      <p>
        <a href="mailto:dividedesigndevelopment@gmail.com">
          DIVIDEDESIGNDEVELOPMENT@GMAIL.COM
        </a>
      </p>
      <p>A Company based in Pullman, WA</p>
      <small>
        &copy; Divide Design &amp; Development {new Date().getFullYear()}
      </small>
    </div>
  );
};

export default Footer;
