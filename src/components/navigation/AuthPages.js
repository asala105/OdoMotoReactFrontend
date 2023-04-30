import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from '../../layout/LoginPage';

export default function AuthPages(){
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage}/>
      </Switch>
    </Router>
  );
}