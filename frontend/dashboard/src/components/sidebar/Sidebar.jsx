import React from 'react';
import './Sidebar.css';
import Logo from '../icons/logo.svg';
import Quest from '../icons/quest.svg';
import Promo from '../icons/prom.svg';
import Wallet from '../icons/wallet.svg';
import User from '../icons/user.svg';
import Cube from '../icons/cube.svg';
import Key from '../icons/key-square.svg'

const Sidebar = () => {
  return (
    <div className="side-menu">

<div className="logo-container">
              <div className="logo-content">
              <img className="logo-img" alt="Setting" src={Logo} />
                <div className="logo-text">Edviron</div>
                <div className="logo-v">v.01</div>
              </div>
              
            </div>
          <div className="overlap-3">
            <div className="list-menu-wrapper">
              <div className="list-menu active">
                <img
                  className="img-2"
                  alt="Icon outline key"
                  src={Key}
                />
                <div className="side-text-wrapper">Dashboard</div>
              </div>
            
            <div className="list-menu">
              <img className="img-2" alt="Element square" src={Cube} />
              <div className="sidebar-text-wrapper">Fee Management</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src="https://c.animaapp.com/LNadpEK0/img/chevron-right-2-4.svg"
              />
            </div>
            <div className="list-menu">
              <img className="img-2" alt="User square" src={User} />
              <div className="sidebar-text-wrapper">Students</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src="https://c.animaapp.com/LNadpEK0/img/chevron-right-2-4.svg"
              />
            </div>
            <div className="list-menu">
              <img className="img-2" alt="Wallet money" src={Wallet} />
              <div className="sidebar-text-wrapper">Disbursal</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src="https://c.animaapp.com/LNadpEK0/img/chevron-right-2-4.svg"
              />
            </div>
            <div className="list-menu">
              <img
                className="img-2"
                alt="Discount shape"
                src={Promo}
              />
              <div className="sidebar-text-wrapper">Promote</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src="https://c.animaapp.com/LNadpEK0/img/chevron-right-2-4.svg"
              />
            </div>
            <div className="list-menu">
              <img
                className="img-2"
                alt="Message question"
                src={Quest}
              />
              <div className="sidebar-text-wrapper">Help</div>
              <img
                className="chevron-right"
                alt="Chevron right"
                src="https://c.animaapp.com/LNadpEK0/img/chevron-right-2-4.svg"
              />
            </div>
            <div className='sidebar-footer'>
            <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/LNadpEK0/img/ellipse-8@2x.png" />
            <div className="group-3">
              <div className="overlap-group-3">
                <div className="text-wrapper-18">Prashant Kumar</div>
                <div className="sidebar-footer-subheading">Super Admin</div>
              </div>
            </div>
            <img
              className="chevron-down"
              alt="Chevron down"
              src="https://c.animaapp.com/LNadpEK0/img/chevron-down-2.svg"
            />
            </div>
            
           
            </div> 
          </div>
        </div>
  )
}

export default Sidebar