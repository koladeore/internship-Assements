import React from 'react'
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import "./BusinessHeader.scss";

const BusinessHeader = () => {
  return (
    <div className="header">
      <nav className="app__navbar">
        <div className="app__navbar-leftSide">
          <img src={images.logo} alt="logo" />
          <ul className="app__navbar-links">
            <li>
              <Link to="/">For Individuals</Link>
              <div className="hover_link"></div>
            </li>
            <li>
              <Link to="/business">For Business</Link>
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
      <div className="BusinessHeader__content">
        <h2>
          Manage payroll, compliance
          <br />
          <span>& HR in real time</span>
        </h2>
        <p>
          Make income tax remittances to the state internal revenue
          <br />
          <span>service for your employees.</span>
        </p>
        <div className="headerContent__button">
          <a href="">Create free account</a>
        </div>
      </div>
    </div>
  );
}

export default BusinessHeader