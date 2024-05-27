import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import SearchDoctor from '../Assets/Group.png';
import OnlinePharmacy from '../Assets/Frame.png';
import Consultation from '../Assets/Frame1.png';
import DetailsInfo from '../Assets/Frame2.png';
import EmergencyCare from '../Assets/Frame3.png';
import Tracking from '../Assets/Group1.png';
const Cards: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <img src={SearchDoctor} alt="Search Doctor" />
            <h2>Search doctor</h2>
            <p>Choose your doctor from thousands of specialists, general, and trusted hospitals</p>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <img src={OnlinePharmacy} alt="Online Pharmacy" />
            <h2 className="mt-1">Online pharmacy</h2>
            <p>Buy your medicines with our mobile application with a simple delivery system</p>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <img src={Consultation} alt="Consultation" />
            <h2>Consultation</h2>
            <p>Free consultation with our trusted doctors and get the best recommendations</p>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <img src={DetailsInfo} alt="Details Info" />
            <h2>Details info</h2>
            <p>Free consultation with our trusted doctors and get the best recommendations</p>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <img src={EmergencyCare} alt="Emergency Care" />
            <h2 className="mt-4">Emergency care</h2>
            <p>You can get 24/7 urgent care for yourself or your children and your lovely family</p>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <img src={Tracking} alt="Tracking" />
            <h2>Tracking</h2>
            <p>Track and save your medical history and health data</p>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <Button className="learn-btn btn btn-outline-primary mt-5" label="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
