import React from 'react';
import { images } from '../../constants';
import "./BusinessServices.scss";

const BusinessServices = () => {
  return (
    <div className="service">
      <div className="serviceContent">
        <div className="service__leftSide">
          <div className="scroll__indicator">
            <div className="scroll__indicatorChild"></div>
          </div>
          <div className="scrollIndicator__Item">
            <div className="scroll__FirstItem">
              <h2>Payment</h2>
              <p>
                No more checks, no more envelopes and stamps,you<br/>
                can pay your employees anytime, anywhere
              </p>
            </div>
            <div className="scroll__SecondItem">
              <h2>Payroll</h2>
              <p>
                End-to-end automation of payroll management for<br/>
                organizations, complying with Nigerian tax law and tax<br/>
                optimizations for the user.
              </p>
            </div>
            <div className="scroll__ThirdItem">
              <h2>Payslip</h2>
              <p>
                Generates automated TaxiTPaySlip email notifications<br/>
                for each employee/user.
              </p>
            </div>
            <div className="scroll__FourthItem">
              <h2>Reports</h2>
              <p>
                Generates relevant reports, such as PAYE Returns for<br/>
                easy compliance with filing obligations.
              </p>
            </div>
          </div>
        </div>
        <div className="service__rightSide">
          <img src={images.serviceBusinessImage} alt="" className="imageServices" />
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

export default BusinessServices
