import React, {useState, useEffect} from 'react'
import api from '../../api'
import DriverItem from './DriverItem';

export default function DriversTable() {
    const [drivers, setDrivers] = useState([]);
    function get_data(){
        api.driverData().then(function(response){
            console.log(response);
            setDrivers(response.data.data);
        }).catch((error)=>{
            console.log(error);
        })
    }

    function removeRow(id) {
        document.getElementById(id).remove();
    }

    useEffect(() => {
        get_data()
    }, []
    )
    return (
    <div className="table-responsive">
        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of birth</th>
                    <th>Phone Number</th>
                    <th>Rank</th>
                    <th>Manager</th>
                    <th>Department</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {drivers.map(driver => 
                    <DriverItem
                    onRemove={function decline() {
                        removeRow(driver.id);
                      }}
                     id={driver.id} 
                        name ={driver.first_name + ' ' + driver.last_name}
                        email ={driver.email}
                        dob = {driver.date_of_birth}
                        phone = { driver.phone_nb}
                        rank = { driver.rank}
                        department = { driver.department.name}
                        manager = { driver.manager!==null? driver.manager.first_name + ' ' + driver.manager.last_name: " "}
                />)}
            </tbody>
        </table>
    </div>
    )
}
