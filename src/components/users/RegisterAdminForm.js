import React, {useState, useEffect} from 'react'
import api from '../../api';
import {useHistory} from 'react-router-dom'

export default function RegisterAdminForm(props) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(null);
    const [phone, setPhone] = useState('');
    const [rank, setRank] = useState(0);
    const [userType, setUserType] = useState(1);
    const [manager, setManager] = useState(null);
    const [department, setDepartment] = useState(props.department);
    const [error, setError] = useState('');
    const history = useHistory();

    function handleSubmit(){
        console.log('Submit');
        if(fname === '' || lname === '' || email === '' 
        || phone === '' || email === '' || date === null
        || rank === 0 || department === null){
            setError('All fields are required');
        }
        else{
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
            };
            api.RegisterUser(dataToSend)
            .then((response) => {
                console.log('Added successfully');
                history.push('/');
            })
            .catch((error) => {
                console.log(error);
            });
            console.log(dataToSend);
        }
    }

    useEffect(() => {
        console.log(props.department);
    },[])

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
            <button className="btn btn-my-primary btn-block" onClick={handleSubmit}>
                Save
            </button>
        </form>
    )
}
