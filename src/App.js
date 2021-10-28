import './App.css';

import Navbar from './components/navigation/Navbar';
import Dashboard from './layout/Dashboard';
import SideBar from './components/navigation/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import InspectionSchedule from './layout/InspectionSchedule';
import LeavesRequests from './layout/LeavesRequests';
import AttendanceRecord from './layout/AttendanceRecord';
import Vehicles from './layout/Vehicles';
import DriverList from './layout/DriverList';
import FuelAndOdometerData from './layout/FuelAndOdometerData';
import AddUser from './layout/AddUser';
import AddVehicle from './layout/AddVehicle';
import LoginPage from './layout/LoginPage';
import React, {useState} from 'react';


function AppPages(){
  return(
    <Router>
    <Switch>
    <div id="wrapper">
    <SideBar />
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <Navbar />
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/inspection" component={InspectionSchedule}/>
            <Route exact path="/leaves_requests" component={LeavesRequests}/>
            <Route exact path="/attendance_record" component={AttendanceRecord}/>
            <Route exact path="/vehicles_list" component={Vehicles}/>
            <Route exact path="/drivers_list" component={DriverList}/>
            <Route exact path="/fuel_and_odometer_data" component={FuelAndOdometerData}/>
            <Route exact path="/add_user" component={AddUser}/>
            <Route exact path="/add_vehicle" component={AddVehicle}/>
        </div>
    </div>
    </div>
    </Switch>
    </Router>
  );
}

function Auth(){
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage}/>
      </Switch>
    </Router>
  );
}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Switch>
        {isLoggedIn?
            <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/inspection" component={InspectionSchedule}/>
                    <Route exact path="/leaves_requests" component={LeavesRequests}/>
                    <Route exact path="/attendance_record" component={AttendanceRecord}/>
                    <Route exact path="/vehicles_list" component={Vehicles}/>
                    <Route exact path="/drivers_list" component={DriverList}/>
                    <Route exact path="/fuel_and_odometer_data" component={FuelAndOdometerData}/>
                    <Route exact path="/add_user" component={AddUser}/>
                    <Route exact path="/add_vehicle" component={AddVehicle}/>
                </div>
            </div>
            </div>
        :
        <Route exact path="/login" component={LoginPage}/>
        }
      </Switch>
    </Router>
  );
}

export default App;
