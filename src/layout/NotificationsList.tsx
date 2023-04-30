import { useState, useEffect } from 'react'
import { api } from '../api'
import NotificationItem from '../components/NotificationItem';

type Notification = {
    id: string;
    title: string;
    body: string;
    is_read: boolean;
}

interface Response {
    data: {
        notifications: Notification[];
    }
}
export function NotificationsList() {
    const [notifications, setNotifications] = useState<Notification[] | []>([]);

    function allNotifications() {
        // api.getNotifications()
        // .then(response => {
        //     setNotifications(response.data.notifications);
        //   })
        //   .catch(error => {
        //       console.log('Error');
        //   });
        return
    }
    useEffect(() => {
        allNotifications();
    }, []);
    return (
        <div>
            <div className="row" style={{ marginLeft: 10, marginRight: 10 }}>
                <div className="col">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <div className="d-sm-flex align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-my-primary">Notifications</h6>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive text-nowrap">
                                {notifications.map((item) =>
                                    <NotificationItem key={item.id} id={item.id} title={item.title} body={item.body} is_read={item.is_read} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
