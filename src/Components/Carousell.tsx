import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import frame from '../Assets/Group 5.png';
const Carousell: React.FC = () => {
  return (
    <div className='container mt-5'>
      <Carousel interval={3000}>
        <Carousel.Item>
          <div className='Carousel container text-white p-3 p-md-5 text-center'>
            <h1 className='mb-4'>What our customers are saying</h1>
            <hr className='hr' />
            <div className='row align-items-center justify-content-center'>
              <div className='col-md-4'>
                <img src={frame} alt="Customer" className='img-fluid' />
              </div>
              <div className='col-md-8 mt-4 mt-md-0'>
                <h5>Edward Newgate</h5>
                <p>Founder Circle</p>
                <p className='mt-3'>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely”</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='Circle container text-white p-3 p-md-5 text-center'>
            <h1 className='mb-4'>What our customers are saying</h1>
            <hr className='hr' />
            <div className='row align-items-center justify-content-center'>
              <div className='col-md-4'>
                <img src={frame} alt="Customer" className='img-fluid' />
              </div>
              <div className='col-md-8 mt-4 mt-md-0'>
                <h5>Edward Newgate</h5>
                <p>Founder Circle</p>
                <p className='mt-3'>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely”</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousell;
