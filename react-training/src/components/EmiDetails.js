import React from 'react';
import Profile from './Profile';
import EmiDetailCard from './EmiDetailCard';
import Navigation from './Navigation';
import '../assets/css/emiDetails.css';

const EmiDetails = (props) => {
  console.log(props.emiDetailsAll);
  let allDetails = props.emiDetailsAll;
  return (
    <div>
    <Navigation />
      <Profile />
      <div className="contract-info">
        <p className="contract-det">Contract-OC/LMS/MUM/2019/03/00823</p>
      </div>
      <div className="emi-container">
        <table className="table">
          <thead className="emi-table-header">
            <th>EMI MONTH</th>
            <th>EMI OST PRINCIPAL AMOUNT</th>
            <th>AMOUNT PAID</th>
            <th>EMI STATUS</th>
            <th>PAYMENT DATE</th>
            <th>ADVANCE EMI</th>
            <th>EMI PRINCIPAL AMOUNT</th>
            <th>EMI INTEREST AMOUNT</th>
          </thead>
          <tbody>
          {allDetails && allDetails.map((allDetail => {
            return (
                <EmiDetailCard allDetail={allDetail} />
              )
          }))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmiDetails;
