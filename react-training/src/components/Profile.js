import React from 'react'
import '../assets/css/profile.css';
import userImg from '../assets/images/navigation/user.png';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-info">
        <img className="profile-pic center" src={userImg} alt="profile-pic" />
        <p>Ajesh Sinu</p>
      </div>
      <hr/>
      <div className="client-detail">
        <p>App - 123456787</p>
        <p>P1650</p>
        <p className="loan-type">Personal Loan <span className="loan-status">Inprogress</span></p>
      </div>
      <div className="loan-allotment">
        <p className="loan-allowance">Required Loan Amount</p>
        <p className="loan-amount">Rs 3,00,000</p>
      </div>
      <ul>
        <div className="selected">
          <li className="menu">Details</li>
        </div>
        <br/>
        <ul className="item-details">
          <li>Parties</li>
          <hr/>
          <li>Pre Paid Fee</li>
          <hr/>
          <li>Refinance transactions</li>
          <hr/>
          <li>Disbursement Schedule</li>
          <hr/>
          <li>Payoff Quotes</li>
          <hr/>
          <li>Automated payslip setups</li>
          <hr/>
          <li>Spread Setup</li>
          <hr/>
          <li>periodic fast setup</li>
          <br />
        </ul>
        <li className="menu">Repayment Schedule</li>
        <hr/>
        <li className="menu">Schedules</li>
        <hr/>
        <li className="menu">Transactions</li>
        <hr/>
        <li className="menu">Notes and Attachments</li>
        <hr/>
        <li className="menu">Amortize Balances</li>
      </ul>
    </div>
  )
}

export default Profile
