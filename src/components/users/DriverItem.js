import React from 'react'
import api from '../../api'

export default function DriverItem(props) {
    function handleDelete(id){
        api.deleteUser(id)
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
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
            <td>{props.phone}</td>
            <td>{props.rank}</td>
            <td>{props.manager}</td>
            <td>{props.department}</td>
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
