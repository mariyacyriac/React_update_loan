import React from 'react';
import './App.css';
import UpdateForm from './updatecomponent/UpdateForm';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

function App() {

  const loandetails = {
    loanAmount: 80000,
    loanTerm: 1.5,
    lienType: 'lien type A',
    lienId: 567,
    loanNumber: '123',
    borrowerName : 'abcd',
    addressLine1 : 'street 122',
    addressLine2 : 'house number 1',
    city : 'bangalore',
    zipCode : '90893',
    legalDocuments : 'doc1 , doc 2 , doc3',

  }

  return (

    <Router>
      <div className="App">


        <Link to={
          {
            pathname: "/update",
           // query: {
              loanDetailProps: {loandetails}
           // }
          }
        }>
          Go to updtae
        </Link>

        <Switch>
          <Route path="/update" component={UpdateForm} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
