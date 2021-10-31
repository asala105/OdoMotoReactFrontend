import React from 'react';
import SvgComponent from './logo';

export default function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <SvgComponent style={{marginTop: 40, marginBottom:5}}/>
            </a>

            <hr className="sidebar-divider my-0 mt-5"/>

            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Interface
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-calendar-alt"></i>
                    <span>Attendance and leaves</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Attendance and leaves:</h6>
                        <a className="collapse-item" href="/attendance_record">Attendance Records</a>
                        <a className="collapse-item" href="/leaves_requests">Leaves Requests</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-briefcase"></i>
                    <span>Users</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Users</h6>
                        
                        <a className="collapse-item" href="/add_user">Add User</a>
                        <a className="collapse-item" href="/drivers_list">Drivers List</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-car"></i>
                    <span>Vehicles</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Vehicles</h6>
                        <a className="collapse-item" href="/add_vehicle">Add Vehicle</a>
                        <a className="collapse-item" href="/vehicles_list">Vehicles List</a>
                        <a className="collapse-item" href="/inspection">Inspection Schedule</a>
                        <a className="collapse-item" href="/fuel_and_odometer_data">Fuel and Odometer Records</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/movement_plan">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Generate Movement Plan</span></a>
            </li>

            <hr className="sidebar-divider d-none d-md-block"/>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    );
}