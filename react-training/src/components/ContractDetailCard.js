import React from 'react';
import '../assets/css/contractdetailcard.css';

const ContractDetailCard = (props) => {
  const {account, assigned, contact, contractid, createdon, disbursed, dmiid, loanamount, pvstatus, status, term} = props.allContract;
  console.log(props);
  return (
    <tr className="table-detail">
      <td>{contractid}</td>
      <td>{account}</td>
      <td>{contact}</td>
      <td>{loanamount}</td>
      <td>{term}</td>
      <td>{assigned}</td>
      <td>{status}</td>
      <td>{pvstatus}</td>
      <td>{createdon}</td>
      <td>{dmiid}</td>
      <td>{disbursed}</td>
    </tr>
  )
}

export default ContractDetailCard
