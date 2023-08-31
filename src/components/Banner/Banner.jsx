import React from 'react';
import './Banner.scss';
import { images } from '../../constants';

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div>
          <p>
            <span>Send funds</span> <br /> Remit taxes <br /> Buy utilities
          </p>
          <div className="banner__button">
            <a href="">Get started</a>
          </div>
        </div>
        <div><img src={images.bannerImage} alt="" /></div>
      </div>
    </div>
  );
};

export default Banner;
