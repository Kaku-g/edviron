import React from 'react';
import './Data.css';

const Data = () => {
  return (
    <div className='data'>
        <div className="data-item">
             <div className="data-heading">Students</div>
             <div className="data-value">1,049</div>
        </div>
        <div className="data-item">
             <div className="data-heading">Sections</div>
             <div className="value-items">
             <div className="data-value">18</div>
             <div className='data-value-sub'>in 12 classes</div>
             </div>
             
        </div>
        <div className="data-item">
             <div className="data-heading">Collection this month</div>
             <div className="data-value">₹90.56L</div>
        </div>
        <div className="data-item">
             <div className="data-heading">Fine Collected till date</div>
             <div className="data-value">₹11.20L</div>
        </div>
    </div>
  )
}

export default Data