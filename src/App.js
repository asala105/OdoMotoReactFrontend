import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Route, Switch } from "react-router-dom";
import RouteSwitcher from './components/navigation/RouteSwitcher';
import { Provider } from 'react-redux'
import store from './redux/store';
import AuthPages from './components/navigation/AuthPages';
import Dashboard from "./layout/Dashboard";
import InspectionSchedule from "./layout/InspectionSchedule";
import LeavesRequests from "./layout/LeavesRequests";
import AttendanceRecord from "./layout/AttendanceRecord";
import Vehicles from "./layout/Vehicles";
import DriverList from "./layout/DriverList";
import FuelAndOdometerData from "./layout/FuelAndOdometerData";
import AddUser from "./layout/AddUser";
import AddVehicle from "./layout/AddVehicle";
import LoginPage from "./layout/LoginPage";
import MovementPlan from "./layout/MovementPlan";

function App() {
  return (
    <Provider store={store}>
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <RouteSwitcher exact path="/">
        <Dashboard/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/inspection">
        <InspectionSchedule />
      </RouteSwitcher>
      <RouteSwitcher exact path="/leaves_requests">
        <LeavesRequests/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/attendance_record">
        <AttendanceRecord/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/vehicles_list">
        <Vehicles/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/drivers_list">
        <DriverList/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/fuel_and_odometer_data">
        <FuelAndOdometerData/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/add_user">
        <AddUser/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/add_vehicle">
        <AddVehicle/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/movement_plan">
        <MovementPlan/>
      </RouteSwitcher>
    </Switch>
  </Provider>
  );
}

export default App;