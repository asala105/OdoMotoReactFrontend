import React, {useState, useEffect} from 'react'
import api from '../../api'
import DriverItem from './DriverItem';

export default function UsersTable() {
    const [users, setUsers] = useState([]);
    function get_data(){
        api.userData().then(function(response){
            setUsers(response.data.data);
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
    <div className="table-responsive text-nowrap">
        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
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
                {users.map(user => 
                    <DriverItem key={user.id}
                    onRemove={removeRow}
                     id={user.id} 
                        name ={user.first_name + ' ' + user.last_name}
                        email ={user.email}
                        dob = {user.date_of_birth}
                        phone = { user.phone_nb}
                        rank = { user.rank}
                        department = { user.department.name}
                        manager = { user.manager!==null? user.manager.first_name + ' ' + user.manager.last_name: " "}
                />)}
            </tbody>
        </table>
    </div>
    )
}
