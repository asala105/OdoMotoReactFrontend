import React from 'react'
import api from '../../api'
import { useSelector } from 'react-redux';

export default function LeavesItem(props) {
    const user = useSelector((state) => state?.user);
    function handleReject(id){
        api.rejectLeave(id)
        .then((response) => {
            props.onRemove(props.id);
        })
        .catch((error) => {
            alert("Oops! An error has occurred!");
        });
    }

    function handleAccept(id){
        if (user.userProfile.user_type_id === 1){
        api.acceptLeaveByManager(id)
        .then((response) => {
            console.log(response.data);
            props.onRemove(props.id);
        })
        .catch((error) => {
            alert("Oops! An error has occurred!");
        });
    }else {
        api.acceptLeaveByHR(id)
        .then((response) => {
            console.log(response.data);
            props.onRemove(props.id);
        })
        .catch((error) => {
            alert("Oops! An error has occurred!");
        });
    }
    }
    return (
        <tr id={props.id}>
            <td>{props.driver}</td>
            <td>{props.from}</td>
            <td>{props.till}</td>
            <td>{props.type}</td>
            <td>
                {props.status === 2 ?<>
                <a href="#" className="btn btn-success btn-circle mr-1" onClick={()=>handleAccept(props.id)}>
                    <i className="fas fa-check"></i>
                </a>
                <a href="#" className="btn btn-danger btn-circle ml-1" onClick={()=>handleReject(props.id)}>
                    <i className="fas fa-times"></i>
                </a></>
                :null
                }
            </td>
        </tr>
    )
}
