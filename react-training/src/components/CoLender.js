import React from 'react';
import '../assets/css/colender.css';
import Navigation from './Navigation';
import userImg from '../assets/images/navigation/user.png';

const CoLender = () => {
  return (
    <div>
      <Navigation />
      <div className="colender-page-heading">
        <h5>List of Co-Lenders</h5>
        <p className="colender-add-new">Add New <i className="material-icons floating-btn visible-xs addNew-icon">add</i></p>
      </div>
      <div className="vertical-line"></div>
      <div className="horizontal-line"></div>
      <div className="colender-container">
        <div className="container">
            <div className="row">
            <div className="col-2">
              <div className="col colender-details">
                <img src={userImg} alt="user profile" />
                <p style={{fontWeight: "600"}}>Ashokan CV</p>
                <p>+91 95874 58142</p>
                <br />
              </div>
              <hr />
              <div className="col ">
                  <p style={{fontWeight: "600"}}>E-MAIL</p>
                  <p>jessica@gmail.com</p>
                  <br />
                  <p style={{fontWeight: "600"}}>ADDRESS</p>
                  <p>58/43C, Mission Hill,</p>
                  <p>Chennai 643102</p>
              </div>
            </div>
            <div className="col-10">
              <div className="row">
                <p className="loan-details">Loan Details</p>
                <div class="colender-actions">
                    <p>Edit <i className="material-icons floating-btn visible-xs" style={{fontSize:"14px", marginRight: "10px"}}>edit</i></p>
                    <p className="small-vertical-line"></p>
                    <p>Active <p className="colender-action-yes">Yes</p></p>
                </div>
                <br />
                <br />
              </div>
              <div className="row">
                  <div className="col colender-input-container">
                      <label className="colender-label">Income Range <input className="colender-input" placeholder="Rs 1,00,000 to Rs 4,00,000" /></label>
                      <label className="colender-label">Income Range <input className="colender-input" placeholder="Rs 30,000 to Rs 50,000" /></label>
                      <label className="colender-label">Share <input className="colender-input" placeholder="50/50" /></label>
                  </div>
                  <div className="col colender-input-container">
                      <label className="colender-label">EMI to Income Ratio <input className="colender-input" placeholder="1:6" /></label>
                      <label className="colender-label">Age <input className="colender-input" placeholder="25 to 50" /></label>
                  </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CoLender
