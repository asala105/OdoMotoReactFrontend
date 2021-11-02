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

function App() {
  return (
    <Provider store={store}>
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <RouteSwitcher exact path="/OdoMotoReactFrontend">
        <Dashboard/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/OdoMotoReactFrontend/inspection">
        <InspectionSchedule />
      </RouteSwitcher>
      <RouteSwitcher exact path="/OdoMotoReactFrontend/leaves_requests">
        <LeavesRequests/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/OdoMotoReactFrontend/attendance_record">
        <AttendanceRecord/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/OdoMotoReactFrontend/vehicles_list">
        <Vehicles/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/OdoMotoReactFrontend/drivers_list">
        <DriverList/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/OdoMotoReactFrontend/fuel_and_odometer_data">
        <FuelAndOdometerData/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/OdoMotoReactFrontend/add_user">
        <AddUser/>
      </RouteSwitcher>
      <RouteSwitcher exact path="/OdoMotoReactFrontend/add_vehicle">
        <AddVehicle/>
      </RouteSwitcher>
    </Switch>
  </Provider>
  );
}

export default App;