import React from 'react';
import { images } from '../../constants';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav className="app__navbar">
        <div className="app__navbar-leftSide">
          <img src={images.logo} alt="logo" />
          <ul className="app__navbar-links">
            <li>
              <Link to="./">For Individuals</Link>
              <div className="hover_link"></div>
            </li>
            <li>
              <Link to="./business">For Business</Link>
              <div className="hover_link"></div>
            </li>
          </ul>
        </div>
        <ul className="app__navbar-rightSide">
          <li>
            <a href="">About Us</a>
            <div className="hover_link"></div>
          </li>
          <li>
            <a href="">Contact</a>
            <div className="hover_link"></div>
          </li>
          <div className="vertical-line"></div>
          <li>
            <a href="">Login</a>
            <div className="hover_link"></div>
          </li>
          <div className="header__button">
            <a href="">Create free account</a>
          </div>
        </ul>
      </nav>
      <div className="header__content">
        <div className="headerContent_leftSide">
          <h2>
            Secure & seamless <br />
            online transactions
          </h2>
          <h3>Providing you with the best online payment experience</h3>
          <div className="headerContent__button">
            <a href="">Create free account</a>
          </div>
        </div>
        <div className="headerContent_rightSide">
          <div className="faceImageOne">
            <img src={images.faceImageOne} alt="" />
          </div>
          <div className="faceImageTwo">
            <img src={images.faceImageTwo} alt="" />
          </div>
          <div className="faceImageThree">
            <img src={images.faceImageThree} alt="" />
          </div>
          <div>
            <div className="faceImageSvgOne">
              <img src={images.faceImageSvgOne} alt="" />
            </div>
          </div>
          <div className="faceImageSvgTwo">
            <img src={images.faceImageSvgTwo} alt="" />
          </div>
          <div className="faceImageSvgThree">
            <img src={images.faceImageSvgThree} alt="" />
          </div>
          <div className="faceImageSvgFour">
            <img src={images.faceImageSvgFour} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;