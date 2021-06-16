import React from 'react';
import '../assets/css/NoticeScreen.css';
import Navigation from './Navigation';
import Profile from './Profile';
import styled from 'styled-components';

const noticesDiv = styled.div``;
const NoticeScreen = () => {
  return (
    <>
    <Navigation />
    <Profile />
      <div className="contract-info">
        <p className="contract-det">Contract-OC/LMS/MUM/2019/03/00823</p>
        <button className="notice-save">Save</button>
        <button className="notice-cancel">Cancel</button>
      </div>
      <div className="contract-detail">
        <p className="contract-detail-text">DETAILS</p>
      </div>
      <noticesDiv className="notice-container">
        <div>
          <h5 className="notice-heading" style={{textDecoration: "underline"}}>NOTICES</h5>
        </div>
        <div className="container notice-view-container" style={{maxWidth: "1100px"}}>
          <div className="row notice-top-container">
            <div className="col">
              <p className="notice-heading-top">Today's Payoff(approx.)</p>
              <p className="notice-heading-amount">0.00</p>
            </div>
            <div className="col">
              <p className="notice-heading-top">Amount to current</p>
              <p className="notice-heading-amount">0.00</p>
            </div>
            <div className="col">
              <p className="notice-heading-top">Oldest Unpaid Due Date</p>
              <p className="notice-heading-amount">0.00</p>
            </div>
            <div className="col">
              <p className="notice-heading-top">Payment Amount</p>
              <p className="notice-heading-amount">0.00</p>
            </div>
            <div className="col">
              <p className="notice-heading-top">Status</p>
              <p className="notice-heading-amount">Completed</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col notice-detail-cont">
                <p className="notice-heading-top notice-penalty">Prepayment penalty indicator</p>
                <p className="notice-spacing-text"></p>
                <hr className="notice-hr" />
                <p className="notice-heading-top">Prepayment penalty value</p>
                <p>0.00</p>
                <hr className="notice-hr"/>
                <p className="notice-heading-top">Genesis Product</p>
                <p>Accounts receivable financing</p>
                <hr className="notice-hr" />
            </div>
            <div className="col">
            <p className="notice-heading-top notice-penalty">Prepaid Penalty Method</p>
                <p className="notice-spacing-text"></p>
                <hr className="notice-hr" />
                <p className="notice-heading-top">Insured Amount</p>
                <p>481.50</p>
                <hr className="notice-hr"/>
                <p className="notice-heading-top">Collection Due Date</p>
                <p>10/05/2019</p>
                <hr className="notice-hr" />
            </div>
            <div className="col notice-last-cont">
              <p className="notice-heading-top notice-penalty">Prepayment Penalty Periods</p>
                  <p className="notice-spacing-text"></p>
                  <hr className="notice-hr" />
                  <p className="notice-heading-top">Insurance Premium Percentage</p>
                  <p>0.00</p>
                  <hr className="notice-hr"/>
              </div>
          </div>
        </div>
      </noticesDiv>
    </>
  )
}

export default NoticeScreen
