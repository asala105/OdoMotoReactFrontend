import React from 'react'
import api from '../../api'

export default function FleetItem(props) {
    function handleDelete(id){
        api.deleteVehicle(id)
        .then((response) => {
            console.log(response.data);
            props.onRemove();
        })
        .catch((error) => {
            alert("Oops! An error has occurred :(");
        });
    }
    return (
        <tr id={props.id}>
            <td>{props.department}</td>
            <td>{props.date}</td>
            <td>{props.start}</td>
            <td>{props.end}</td>
            <td>{props.purpose}</td>
            <td>{props.from}</td>
            <td>{props.to}</td>
            <td>{props.vehicle}</td>
            <td>{props.driver}</td>
            <td>
                <a href="#" className="btn btn-success btn-circle mr-1">
                    <i className="fas fa-edit"></i>
                </a>
                <a href="#" className="btn btn-danger btn-circle ml-1" onClick={()=> handleDelete(props.id)}>
                    <i className="fas fa-times"></i>
                </a>
            </td>
        </tr>
    )
}
