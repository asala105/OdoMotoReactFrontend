import Navbar from './Navbar';
import SideBar from './SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import InspectionSchedule from '../../layout/InspectionSchedule';
import LeavesRequests from '../../layout/LeavesRequests';
import AttendanceRecord from '../../layout/AttendanceRecord';
import Vehicles from '../../layout/Vehicles';
import DriverList from '../../layout/DriverList';
import FuelAndOdometerData from '../../layout/FuelAndOdometerData';
import AddUser from '../../layout/AddUser';
import AddVehicle from '../../layout/AddVehicle';
import Dashboard from '../../layout/Dashboard';
import React, {useState} from 'react';
import MovementPlan from '../../layout/MovementPlan';

export default function AppPages(){
  return(    <>    
          <Route exact path="/OdoMotoReactFrontend" component={Dashboard}/>
          <Route exact path="/OdoMotoReactFrontend/inspection" component={InspectionSchedule}/>
          <Route exact path="/OdoMotoReactFrontend/leaves_requests" component={LeavesRequests}/>
          <Route exact path="/OdoMotoReactFrontend/attendance_record" component={AttendanceRecord}/>
          <Route exact path="/OdoMotoReactFrontend/vehicles_list" component={Vehicles}/>
          <Route exact path="/OdoMotoReactFrontend/drivers_list" component={DriverList}/>
          <Route exact path="/OdoMotoReactFrontend/fuel_and_odometer_data" component={FuelAndOdometerData}/>
          <Route exact path="/OdoMotoReactFrontend/add_user" component={AddUser}/>
          <Route exact path="/OdoMotoReactFrontend/add_vehicle" component={AddVehicle}/>
</>
  );
}