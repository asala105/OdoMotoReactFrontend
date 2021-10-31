import React from 'react'
import api from '../../api'

export default function AttendanceItem(props) {
    // function handleUpdate(id){
    //     api.rejectAttendance(id)
    //     .then((response) => {
    //         props.onUpdate();
    //     })
    //     .catch((error) => {
    //         alert("Oops! An error has occurred!");
    //     });
    // }
    return (
        <tr id={props.id}>
            <td>{props.driver}</td>
            <td>{props.date}</td>
            <td>{props.from}</td>
            <td>{props.till}</td>
            <td>{props.status}</td>
            <td>
                <button className="btn btn-success btn-circle mr-1">
                    <i className="fas fa-check"></i>
                </button>
                <a className="btn btn-danger btn-circle ml-1">
                    <i className="fas fa-times"></i>
                </a>
            </td>
        </tr>
    )
}
