import React, { useState, useEffect } from 'react';
import SvgComponent from './logo';
import { Link } from 'react-router-dom';

export default function SideBar() {
    const mediaQuery = window.matchMedia("(min-width: 42rem)");
    const [query, setQuery] = useState(mediaQuery);

    React.useEffect(() => {
        mediaQuery.addEventListener("change", (mquery) => {
            setQuery(mquery);
        });
        return () => mediaQuery.removeEventListener("change", (mquery) => { setQuery(mquery) });
    }, [mediaQuery]);

    const [expanded, setExpanded] = React.useState(query.matches);
    useEffect(() => {
        setExpanded(query.matches);
    }, [query]);
    return (
        expanded ?
            (<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion collapse show" id="accordionSidebar" >
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <SvgComponent style={{ marginTop: 40, marginBottom: 5 }} />
                </Link>
                <hr className="sidebar-divider my-0 mt-5" />
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Interface
                </div>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-calendar-alt"></i>
                        <span>Attendance and leaves</span>
                    </Link>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Attendance and leaves:</h6>
                            <Link className="collapse-item" to="/attendance_record">Attendance Records</Link>
                            <Link className="collapse-item" to="/leaves_requests">Leaves Requests</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-briefcase"></i>
                        <span>Users</span>
                    </Link>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Users</h6>

                            <Link className="collapse-item" to="/add_user">Add User</Link>
                            <Link className="collapse-item" to="/users_list">Users List</Link>
                            <Link className="collapse-item" to="/drivers_list">Drivers List</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-car"></i>
                        <span>Vehicles</span>
                    </Link>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Vehicles</h6>
                            <Link className="collapse-item" to="/add_vehicle">Add Vehicle</Link>
                            <Link className="collapse-item" to="/vehicles_list">Vehicles List</Link>
                            <Link className="collapse-item" to="/inspection">Inspection Schedule</Link>
                            <Link className="collapse-item" to="/fuel_and_odometer_data">Fuel and Odometer Records</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/movement_plan">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Generate Movement Plan</span></Link>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            )
            : null
    );
}