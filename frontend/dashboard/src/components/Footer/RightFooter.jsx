import React from 'react';
import './Footer.css';
import Check from '../icons/check.svg';
import Pending from '../icons/pending.svg';

const RightFooter = () => {
  return (
    <div className='right-footer'>
        <div className="right-footer-heading">
            Disbursals
        </div>
        <div className="right-footer-columns-headings">
            <div className="heading">Date</div>
            <div className="heading">Amount</div>
            <div className="heading">Status</div>
        </div>
        <span className="line-break"></span>
        <div className="right-footer-columns">
            <div className="right-footer-column1">
            <div className="right-footer-column1-item">July 11,2023</div>
            <div className="right-footer-column1-item">July 10,2023</div>
            <div className="right-footer-column1-item">July 9,2023</div>
            <div className="right-footer-column1-item">July 8,2023</div>
            </div>
            
            <div className="right-footer-column2">
                <div className="right-footer-column2-item">5,03,123</div>
                <div className="right-footer-column2-item">5,03,123</div>
                <div className="right-footer-column2-item">5,03,123</div>
                <div className="right-footer-column2-item">5,03,123</div>
            </div>

            <div className="right-footer-column3">
                <div className="right-footer-column3-item">
                    <span className="icon">
                    <img src={Pending} alt="" />
                    </span>
                    <span className="text">Pending</span>
                </div>
                <div className="right-footer-column3-item">
                    <span className="icon"><img src={Check} alt="" /></span>
                    <span className="text">Successful</span>
                </div>
                <div className="right-footer-column3-item">
                <span className="icon"><img src={Check} alt="" /></span>
                    <span className="text">Successful</span>
                </div>
                <div className="right-footer-column3-item">
                <span className="icon"><img src={Check} alt="" /></span>
                    <span className="text">Successful</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightFooter