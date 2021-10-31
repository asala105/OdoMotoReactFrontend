import React, {useState, useEffect} from 'react';
import api from '../../api'

export default function AttendanceForm(props) {

    const [drivers, setDrivers] = useState([]);
    const [filter, setFilter] = useState('');
    const [driver, setDriver] = useState('');

    function getData(){
        api.driverData()
        .then(function(response){
            setDrivers(response.data.data);
        })
    }

    function getFormData(){
        let dataToSend = {
            driver_id: driver,
            filter: filter,
        };
        if (driver!=="" && filter!==""){
        props.onSend(dataToSend);
    }
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <form className="user">
            <div className="form-group">
                <label htmlFor="dnme" className="label">Attendance Filters</label>
                <div className="btn-secondary btn-group btn-group-toggle btn-block rounded" data-toggle="buttons" onClick={(event)=>{setFilter(event.target.value)}}>
                    <label className="btn btn-secondary active" style={{ width:'50%' }}>
                        <input type="radio" name="options" id="option1" value={1}/> Attendance
                    </label>
                    <label className="btn btn-secondary" style={{ width:'50%' }}>
                        <input type="radio" name="options" id="option2" value={2}/> Leaves
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="date" className="label">Driver's Name</label>
                <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event)=>{setDriver(event.target.value)}}>
                    <option value={null}>Select the driver's name</option>
                    {drivers.map((driver)=>
                    <option key={driver.id} value={driver.id}>{driver.first_name + " " + driver.last_name}</option>
                    )}
                </select>
            </div>
            <a className="btn btn-my-primary btn-block" onClick={getFormData}>
                View Record
            </a>
        </form>
    )
}
