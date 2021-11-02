import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from '../../layout/LoginPage';
import React from 'react';

export default function AuthPages(){
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage}/>
      </Switch>
    </Router>
  );
}