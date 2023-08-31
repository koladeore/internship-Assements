import React from 'react';
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div>
          <img src={images.logo} alt="logo" />
        </div>
        <div className="socialMedia">
          <img src={images.instagramLogo} alt="" />
          <img src={images.facebookLogo} alt="" />
          <img src={images.twitterLogo} alt="" />
        </div>
        <p>2015-2022 Taxaide Technologies Limited. All rights reserved</p>
      </div>
      <div className="footerNavLink">
        <div>
          <p>About Us</p>
          <div className="footer_aboutLink">
            <a href="">About</a>
            <a href="">Legal & privacy</a>
          </div>
        </div>
        <div>
          <p>Products</p>
          <div className="footer_productLink">
            <a href="">TBook®</a>
            <a href="">TaxiTWithhold®</a>
            <a href="">TaxiTPayroll®</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;