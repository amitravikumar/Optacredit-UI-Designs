import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoticeScreen from './components/NoticeScreen';
import CoLender from './components/CoLender';
import ContractList from './components/ContractList';
import api from '../src/api/contract';
import Login from './components/Login';
import EmiDetails from './components/EmiDetails';
function App() {

    const [contracts, setContract] = useState([]);
    const [emiDetails, setEmiDetails] = useState([]);



    const retrieveContracts = async() => {
      const response = await api.get("/contracts");
      console.log(response.data)
      return response.data;
    }

    const retrieveEmiDetails = async() => {
      const response = await api.get("/emiDetails");
      console.log(response.data);
      return response.data
    }

    useEffect(() => {
      const getAllContracts = async () => {
        const allContracts = await retrieveContracts();
        if(allContracts) setContract(allContracts);
      }
      getAllContracts();
    }, []);

    useEffect(() => {
      const getAllEmiDetails = async () => {
        const allEmiDetails = await retrieveEmiDetails();
        if(allEmiDetails) setEmiDetails(allEmiDetails);
      }
      getAllEmiDetails();
    }, []);
    const contractDetailsAll = contracts.contracts;
    const emiDetailsAll = emiDetails.emiDetails;

    
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={NoticeScreen} />
          </Switch>
          <Switch>
            <Route path="/login" component={Login}/>
          </Switch>
          <Switch>
            <Route path="/contract" render={(props) => (<ContractList contractDetailsAll={contractDetailsAll} />)} />
          </Switch>
          <Switch>
            <Route path="/colender" component={CoLender} />
          </Switch>
          <Switch>
            <Route path="/emi" render={(props) => (<EmiDetails emiDetailsAll={emiDetailsAll}/>)} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;