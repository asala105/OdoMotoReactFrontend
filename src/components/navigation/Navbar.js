import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import api from '../../api';
import {Link} from 'react-router-dom';
import NotificationItem from '../NotificationItem';
import {deleteToken} from '../../redux/slices/tokenSlice';
import {deleteUser} from '../../redux/slices/userSlice';
import { store } from '../../redux/store';

export default function Navbar() {
    const user = useSelector((state) => state?.user);
    const [notifications, setNotifications] = useState([]);
    const [counter,setCount] = useState(0);
    const [items,setItems] = useState([]);
    function allNotifications() {
        api.getNotifications()
        .then(response => {
            setNotifications(response.data.notifications.slice(0,6));
            setCount(response.data.unread);
          })
          .catch(error => {
              console.log('Error');
          });
    }
    function handleLogout(){
        api.Logout()
        .then(response => {
            store.dispatch(deleteToken());
            store.dispatch(deleteUser());
            localStorage.clear();
        })
        .catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        allNotifications();
    },[]);
    return (
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <button 
                     id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bell fa-fw"></i>
                                <span className="badge badge-danger badge-counter">{counter}</span>
                            </a>
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 className="dropdown-header">
                                    Alerts Center
                                </h6>
                                {notifications.map((item)=>
                                <NotificationItem id={item.id} title={item.title} body={item.body} is_read={item.is_read}/>
                                )}
                                <Link className="dropdown-item text-center small text-gray-500" to="/notifications">Show All Alerts</Link>
                            </div>
                        </li>

                        <div className="topbar-divider d-none d-sm-block"></div>

                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user.userProfile.first_name + ' ' + user.userProfile.last_name}</span>
                                <i className="fas fa-user"></i>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <Link className="dropdown-item" to="profile">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </Link>
                                <div className="dropdown-divider"></div>
                                <a onClick={handleLogout} className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
    );
}
