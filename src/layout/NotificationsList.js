import React, {useState, useEffect} from 'react'
import api from '../api'
import FleetItem from '../components/Fleet/FleetItem';
import LeavesTable from '../components/AttendanceRecords/LeavesTable'
import SideBar from '../components/navigation/SideBar'
import Navbar from '../components/navigation/Navbar'
import NotificationItem from '../components/NotificationItem';

export default function NotificationsList() {
    const [notifications, setNotifications] = useState([]);

    function allNotifications() {
        api.getNotifications()
        .then(response => {
            setNotifications(response.data.notifications);
          })
          .catch(error => {
              console.log('Error');
          });
    }
    useEffect(() => {
        allNotifications();
    },[]);
    return (
<div id="wrapper">
    <SideBar />
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <Navbar />
            <div className="row" style={{ marginLeft:10, marginRight:10 }}>
                <div className="col">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <div className="d-sm-flex align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-my-primary">Notifications</h6>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive text-nowrap">
                                {notifications.map((item)=>
                                <NotificationItem id={item.id} title={item.title} body={item.body} is_read={item.is_read}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div> 
    )
}
