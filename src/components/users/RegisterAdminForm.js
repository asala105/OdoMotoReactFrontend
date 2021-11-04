import React, {useState, useEffect} from 'react'
import api from '../../api';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RegisterAdminForm() {
    const org = useSelector((state) => state?.org);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(null);
    const [phone, setPhone] = useState('');
    const [rank, setRank] = useState(0);
    const [userType, setUserType] = useState(1);
    const [manager, setManager] = useState(null);
    const [department, setDepartment] = useState(org?.RegOrgVals?.depId? org.RegOrgVals.depId : null);
    const [organization, setOrganization] = useState(org?.RegOrgVals?.orgId? org.RegOrgVals.orgId : null);
    const [error, setError] = useState('');
    const history = useHistory();
    
    function handleSubmit(){
        console.log('Submit');
            let dataToSend = {
                first_name: fname,
                last_name: lname,
                email: email,
                date_of_birth: date,
                phone_nb: phone,
                rank: rank,
                user_type_id: userType,
                manager_id: manager,
                department_id: department,
                organization_id: organization,
            };
            console.log(dataToSend);
            api.RegisterAdmin(dataToSend)
            .then((response) => {
                console.log(response.data);
                history.push('/login');
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <form className="user">
            <div className="row">
            <div className="form-group col">
                <label htmlFor="fname" className="label">First Name</label>
                <input type="text" className="form-control"
                    id="fname" placeholder="First Name" onChange={(event)=>{setFname(event.target.value)}} required/>
            </div>
            <div className="form-group col">
                <label htmlFor="lname" className="label">Last Name</label>
                <input type="text" className="form-control"
                    id="lname" placeholder="Last Name" onChange={(event)=>{setLname(event.target.value)}}required/>
            </div>
            </div>
            <div className="row">
            <div className="form-group col">
                <label htmlFor="email" className="label">Email</label>
                <input type="email" className="form-control"
                    id="email" placeholder="Enter the employee's email address" onChange={(event)=>{setEmail(event.target.value)}} required/>
            </div>
            <div className="form-group col">
                <label htmlFor="dob" className="label">Date of Birth</label>
                <input type="date" className="form-control"
                    id="dob" onChange={(event)=>{setDate(event.target.value)}} required/>
            </div>
            </div>
            <div className="row">
            <div className="form-group col">
                <label htmlFor="phone_nb" className="label">Phone Number</label>
                <input type="text" className="form-control"
                    id="phone_nb" placeholder="Enter the employee's phone number" onChange={(event)=>{setPhone(event.target.value)}} required/>
            </div>
            <div className="form-group col">
                <label htmlFor="rank" className="label">Rank</label>
                <input type="text" className="form-control"
                    id="rank" placeholder="Enter the employee's rank" onChange={(event)=>{setRank(event.target.value)}} required/>
            </div>
            </div>
            <a className="btn btn-my-primary btn-block" onClick={handleSubmit}>
                Save
            </a>
        </form>
    )
}
