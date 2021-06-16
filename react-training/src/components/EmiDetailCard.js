import React from 'react';

const EmiDetailCard = (props) => {
  const {emimonth, principal, amountpaid, emiStatus, paymentdate, advanceemi, emiprincipal, interestemi} = props.allDetail;
  console.log(props);
  return (
    <tr className="table-detail">
        <td>{emimonth}</td>
        <td>{principal}</td>
        <td>{amountpaid}</td>
        <td>{emiStatus}</td>
        <td>{paymentdate}</td>
        <td>{advanceemi}</td>
        <td>{emiprincipal}</td>
        <td>{interestemi}</td>
    </tr>
  )
}

export default EmiDetailCard;
