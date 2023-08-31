import React from 'react';
import './CoreValue.scss';
import { images } from '../../constants';

const CoreValue = () => {
  return (
    <div>
      <div className="coreValue_Header">
        <h1>Payments tools designed for you</h1>
        <h4>
          Explore payment features that provides you with every possible
          solution
        </h4>
      </div>
      <div className="coreValue_Content">
        <div className="coreValue_Content_item">
          <img src={images.paymentSvgOne} alt="" />
          <h4>User Friendly</h4>
          <p>
            Highly responsive and easy to <br />
            navigate
          </p>
        </div>
        <div className="coreValue_Content_item">
          <img src={images.paymentSvgTwo} alt="" />
          <h4>Secure</h4>
          <p>
            Your data is secure. It is continuously
            <br />
            monitored, audited, and stored in an <br />
            encrypted form.
          </p>
        </div>
        <div className="coreValue_Content_item">
          <img src={images.paymentSvgThree} alt="" />
          <h4>Fast</h4>
          <p>
            Transacting takes only a few <br />
            seconds - it&apos;s convenient and safe
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoreValue