import React, {useState} from 'react'
import api from '../api';
export default function NotificationItem(props) {
    const [isRead, setIsRead] = useState(props.is_read);

    function handleRead(id){
        api.markRead(id)
        .then(response => {
            console.log(response.data);
            setIsRead(1);
          })
          .catch(error => {
              console.log(error);
          });
    }
    return (
        <a className="dropdown-item d-flex align-items-center" href="#" onClick={()=>handleRead(props.id)}>
            <div className="mr-3">
                <div className="icon-circle bg-my-primary">
                    <i className="fas fa-file-alt text-white"></i>
                </div>
            </div>
            <div>
                <div className="text-gray-500">{props.title}</div>
                    <span id={props.id} className={props.is_read?"":"font-weight-bold"}>{props.body}</span>
            </div>
        </a>
    )
}
