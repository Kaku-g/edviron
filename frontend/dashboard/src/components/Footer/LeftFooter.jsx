import React from 'react';
import './Footer.css';

const LeftFooter = () => {
  return (
    <div className='left-footer'>
        <div className="left-footer-heading">
            Admins
        </div>
        <div className="columns-heading">
        <div className="column1-heading">Name</div>
        <div className="column2-heading">
                    Role
                </div>
        </div>
        <span className='line-break'></span>
        <div className="columns">
            <div className="column1">
           
                <div className="column1-item">Prashant Kumar</div>
                <div className="column1-item">Jasraj Singh Bhatia</div>
                <div className="column1-item">Tarun Kheria</div>
                <div className="column1-item">Aditya Mullay</div>
            </div>
            <div className="column2">
                
               
                <div className="column2-item">Super Admin</div>
                <div className="column2-item">Admin</div>
                <div className="column2-item">Admin</div>
                <div className="column2-item">Management Staff</div>
            </div>
        </div>
    </div>
  )
}

export default LeftFooter