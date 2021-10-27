import React, {useState, useEffect} from 'react'
import api from '../../api'

export default function InspectionTaskItem(props) {
    const [status, setStatus] = useState('In Progress');
    const [disabled, setDisabled] = useState(false);
    function handleDelete(id){
        api.deleteTask(id)
        .then((response) => {
            console.log(response.data);
            props.onRemove();
        })
        .catch((error) => {
            alert("Oops! An error has occurred :(");
        });
    }

    function handleMarkDone(id){
        api.markTaskDone(id)
        .then((response) => {
            console.log(response.data);
            setStatus('Done');
            setDisabled(true);
        })
        .catch((error) => {
            alert("Oops! An error has occurred :(");
        });
    }

    useEffect(() =>{
        setStatus(props.task.status.status);
        props.task.status.id === 6 ? setDisabled(true) : setDisabled(false);
    }, [])
    return (
        <tr id={props.task.id}>
        <td>{props.task.vehicle.registration_code}</td>
        <td>{props.task.driver.first_name + ' ' + props.task.driver.last_name}</td>
        <td>{props.task.inspection_type? 'Maintenance': 'Safety Inspection'}</td>
        <td>{status}</td>
        <td>
            <a href="#" className="btn btn-success btn-circle mr-1" onClick={()=>{handleMarkDone(props.task.id)}} disabled={disabled}>
                <i className="fas fa-check"></i>
            </a>
            <a href="#" className="btn btn-danger btn-circle ml-1" onClick={()=>{handleDelete(props.task.id)}}>
                <i className="fas fa-trash"></i>
            </a>
        </td>
    </tr>
    )
}
