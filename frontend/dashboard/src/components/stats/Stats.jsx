import React from 'react';
import './Stats.css';
import Wallet from '../icons/wallet-blue.svg';
import Money from '../icons/money.svg';
import Icon from '../icons/Icon.svg';

const Stats = () => {
  return (
    <div className="stats">
   
  
          <div className="stats-item">
            <div className="stats-icon">
            <img
                            className="money-icon"
                            alt="Money recive"
                            src={Money}
                          />
            </div>
            <div className="stats-text">

               <div className="stats-heading">Collection till date</div>
                 <div className="stats-count">₹5.34Cr</div>
                    <div className="stats-change"><span style={{color:'green',fontWeight:700}}>⬆ 10%</span> in last 30 days</div>
            </div>
          
          </div>
          <div className="stats-item">
            <div className="stats-icon">
            <img
                            className="wallet-icon"
                            alt="Wallet money"
                            src={Wallet}
                          />
            </div>
            <div className="stats-text">

               <div className="stats-heading">Balance</div>
                 <div className="stats-count">₹2.4L</div>
                    <div className="stats-change"></div>
            </div>
          
          </div>
          <div className="stats-item">
            <div className="stats-icon">
            <img className="icon" alt="Icon" src={Icon} />
            </div>
            <div className="stats-text">

               <div className="stats-heading">Defaulters</div>
                 <div className="stats-count">11 <span style={{marginTop:'20px',fontSize:'10px'}}>/1049 students</span></div>
                    <div className="stats-change"><span style={{color:'red',fontWeight:700}}>↓ 11%</span> in last 30 days</div>
            </div>
          
          </div>
       
  </div>
  )
}

export default Stats