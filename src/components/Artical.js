import React from 'react';
import { Button } from 'primereact/button';
import laboratory from '../Assets/image 2.png';
import medicines from '../Assets/image 3.png';
import Facial from '../Assets/image 4.png';
import Arrow from '../Assets/arrow.png';
import { Card } from 'primereact/card';
const Artical = () => {
  return (
    <div className='container mt-5'>
      <div className='mt-5 text-center'>
        <h2>Check out our latest articles</h2>
        <hr className='hr' />
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <Card className="card1">
            <img className='img-fluid' src={laboratory} alt="" />
            <h5>Disease detection, check up in the laboratory</h5>
            <p>In this case, the role of the health laboratory is very important to do a disease detection...</p>
            <div className='button d-flex'><p>Read More</p><img src={Arrow} alt="" /></div>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="card1">
            <img className='img-fluid' src={medicines} alt="" />
            <h5>Herbal medicines that are safe for consumption</h5>
            <p>Herbal medicine is very widely used at this time because of its very good for your health...</p>
            <div className='button d-flex'><p>Read More</p><img src={Arrow} alt="" /></div>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="card1">
            <img className='img-fluid' src={Facial} alt="" />
            <h5>Natural care for healthy facial skin</h5>
            <p>A healthy lifestyle should start from now and also for your skin health. There are some...</p>
            <div className='button d-flex'><p>Read More</p><img src={Arrow} alt="" /></div>
          </Card>
        </div>
      </div>
      <div className='view text-center mt-5'>
        <Button className=' btn btn-outline-primary justify-content-center' label="View All" />
      </div>
    </div>
  );
};
export default Artical;
