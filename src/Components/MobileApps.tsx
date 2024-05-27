import React from 'react';
import image from '../Assets/Frame4.png';
import { Button } from 'primereact/button';
const MobileApps: React.FC = () => {
  return (
    <div className="container d-flex justify-content-around app">
      <div className="row">
        <div className="col-md-6">
          <div className=" mobile-apps mt-5">
            <h1>Download our<br/>mobile apps </h1>
            <hr className='hr1' />
            <p>Our dedicated patient engagement app and<br/> web portal allow you to access information<br/> instantaneously (no tedeous form, long calls,<br/> or administrative hassle) and securely</p>
            <Button className='btn btn-outline-primary justify-content-center' label="Download" />
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid " src={image} alt="" />
        </div>
      </div>
    </div>
  );
};
export default MobileApps;
