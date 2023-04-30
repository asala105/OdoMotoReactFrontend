import React, { useState } from 'react'
import { api } from '../../api'
import { useSelector } from 'react-redux';

export default function AttendanceItem(props) {
    const [status, setStatus] = useState(props.status);
    // const user = useSelector((statPe) => state?.user);
    function handleReject(id) {
        api.rejectAttendance(id)
            .then((response) => {
                console.log(response.data);
                setStatus('Rejected');
            })
            .catch((error) => {
                alert("Oops! An error has occurred!");
            });
    }

    function handleAccept(id) {
        // if (user.userProfile.user_type_id === 1) {
        //     api.acceptAttendanceByManager(id)
        //         .then((response) => {
        //             console.log(response.data);
        //             setStatus('Sent to HR');
        //         })
        //         .catch((error) => {
        //             alert("Oops! An error has occurred!");
        //         });
        // } else {
        //     api.acceptAttendanceByHR(id)
        //         .then((response) => {
        //             console.log(response.data);
        //             setStatus('Approved');
        //         })
        //         .catch((error) => {
        //             alert("Oops! An error has occurred!");
        //         });
        // }
        console.log('accept');
    }
    return (
        <tr id={props.id}>
            <td>{props.driver}</td>
            <td>{props.date}</td>
            <td>{props.from}</td>
            <td>{props.till}</td>
            <td>{status}</td>
            <td>
                <button className="btn btn-success btn-circle mr-1" onClick={() => handleAccept(props.id)}>
                    <i className="fas fa-check"></i>
                </button>
                <a className="btn btn-danger btn-circle ml-1" onClick={() => handleReject(props.id)} disabled={status === 'Rejected' ? true : false}>
                    <i className="fas fa-times"></i>
                </a>
            </td>
        </tr>
    )
}
