import React from 'react';
import './Service.scss';
import { images } from '../../constants';    

const Service = () => {
  return (
    <div className="service">
      <div className="serviceContent">
        <div className="service__leftSide">
          <div className="scroll__indicator">
            <div className="scroll__indicatorChild"></div>
          </div>
          <div className="scrollIndicator__Item">
            <div className="scroll__FirstItem">
              <h2>Pay bills</h2>
              <p>Paying your bills has never been so easy</p>
            </div>
            <div className="scroll__SecondItem">
              <h2>Buy Airtime & Data</h2>
              <p>Never get caught with low airtime and data again!</p>
            </div>
            <div className="scroll__ThirdItem">
              <h2>Money Transfer</h2>
              <p>Transferring money is now hassle-free</p>
            </div>
            <div className="scroll__FourthItem">
              <h2>Pay Toll Fee</h2>
              <p>Never worry about getting a toll ticket again</p>
            </div>
          </div>
        </div>
        <div className="service__rightSide">
          <img src={images.serviceImage} alt="" className="imageServices" />
          <img src={images.serviceSvgOne} alt="" className="imgServiceSvgOne" />
          <img src={images.serviceSvgTwo} alt="" className="imgServiceSvgTwo" />
        </div>
      </div>
      <div className="feature">
        <div className="imagesPhone">
          <img src={images.phoneImage} alt="" />
        </div>
        <div className="feature__rightSide">
          <div>
            <h2>Transact on the go </h2>
            <p>
              Stay on top of your business with our easy
              <br />
              -to-use app
            </p>
          </div>
          <div className="feature__button">
            <a href="">Get started</a>
          </div>
          <div className="feature__store">
            <div className="feature__button_AppStore">
              <a href="">
                <img src={images.appleStoreIcon} alt="" />
                <h4>
                  Download on the <br /> <span>App Store</span>
                </h4>
              </a>
            </div>
            <div className="feature__button_GooglePlay">
              <a href="">
                <img src={images.playStoreIcon} alt="" />
                <h4>
                  GET IT ON <br /> <span>GooglePlay</span>
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
