import React from 'react';
import Illustration from '../Assets/illustration.png';
import { Button } from 'primereact/button';
const Healthcare: React.FC = () => {
  return (
    <div className="container d-flex justify-content-between apps">
      <div className="row">
        <div className="col-md-6">
          <div className=" heathcare mt-5">
            <h1>Virtual healthcare<br/> for you</h1>
            <p>Trafalgar provides progressive, and affordable<br/> healthcare, accessible on mobile and online<br/> for everyone</p>
            <Button className="btn btn-primary">Consult today</Button>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid " src={Illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
