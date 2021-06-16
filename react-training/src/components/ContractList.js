import React from 'react';
import '../assets/css/contractlist.css';
import ContractDetailCard from './ContractDetailCard';
import Navigation from './Navigation';

const ContractList = (props) => {
  console.log(props);
  const allContracts = props.contractDetailsAll;
  // const renderContractList = props.contracts.map((contract) => {
  //   return (
  //     <ContractDetailCard 
  //       contract={contract}
  //       key={contract.contractid}
  //     />
  //   )
  // })
  return (
    <div>
      <Navigation />
      <div className="navbar navbar-expand-lg contract-navigation">
        <h5>List of All Contract</h5>
        {/* <form className="form-inline my-2 my-lg-0 contract-nav-secondary">
          <input className="form-control mr-sm-2 " type="search" placeholder="Search..." aria-label="Search"/>
          <i className="material-icons floating-btn visible-xs">sort</i>
          <p>Sort By</p>
          <ul className="">
            <li className="nav-item dropdown">
              <p className="nav-link dropdown-toggle nav-toggle-button" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Recently created
              </p>
            </li>
          </ul>
        </form> */}
      </div>
      <div className="row contract-button-nav">
        <p className="col contract-selected">All</p>
        <p className="col">Approved</p>
        <p className="col">Rejected</p>
        <p className="col">Inreview</p>
        <p className="col">Disbursed</p>
      </div>
      <div className="contract-container">
          <table className="table">
            <thead className="table-header-container">
              <th scope="col">Contract ID</th>
              <th scope="col">Amount</th>
              <th scope="col">Contract</th>
              <th scope="col">Loan Amount</th>
              <th scope="col">Term</th>
              <th scope="col">Assigned to</th>
              <th scope="col">Status</th>
              <th scope="col">PV Status</th>
              <th scope="col">Created On</th>
              <th scope="col">DMI ID</th>
              <th scope="col">Disbursed On</th>
            </thead>
            <tbody>
            {allContracts && allContracts.map((allContract => {
                return (
                    <ContractDetailCard allContract={allContract} />
                )
            }))}
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default ContractList;
