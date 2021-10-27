import React, {useState, useEffect} from 'react'
import api from '../../api';

export default function AddUserForm() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(null);
    const [phone, setPhone] = useState('');
    const [rank, setRank] = useState(0);
    const [userType, setUserType] = useState(4);
    const [manager, setManager] = useState(null);
    const [department, setDepartment] = useState(null);
    const [managerList, setManagerList] = useState([]);
    const [departmentList, setDepartmentList] = useState([]);
    const [error, setError] = useState('');

    function handleSubmit(){
        console.log('Submit');
        if(fname === '' || lname === '' || email === '' 
        || phone === '' || email === '' || date === null
        || rank === 0 || manager === null || department === null){
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
                console.log('Added successfully')
            })
            .catch((error) => {
                console.log(error);
            });
            console.log(dataToSend);
        }
    }
    function getData(){
        api.userData()
        .then(function(response){
            setManagerList(response.data.data);
        })
        .catch((error)=>{
            console.log('error', error);
        })

        api.departmentData()
        .then(function(response){
            setDepartmentList(response.data.data);
        })
        .catch((error)=>{
            console.log('error', error);
        })
    }

    useEffect(() => {
        getData();
    },[])

    return (
        <form className="user">
            <div className="form-group">
                <label for="fname" style={{ padding: 10 }}>First Name</label>
                <input type="text" className="form-control"
                    id="fname" placeholder="First Name" onChange={(event)=>{setFname(event.target.value)}}/>
            </div>
            <div className="form-group">
                <label for="lname" style={{ padding: 10 }}>Last Name</label>
                <input type="text" className="form-control"
                    id="lname" placeholder="Last Name" onChange={(event)=>{setLname(event.target.value)}}/>
            </div>
            <div className="form-group">
                <label for="email" style={{ padding: 10 }}>Email</label>
                <input type="email" className="form-control"
                    id="email" placeholder="Enter the employee's email address" onChange={(event)=>{setEmail(event.target.value)}}/>
            </div>
            <div className="form-group">
                <label for="dob" style={{ padding: 10 }}>Date of Birth</label>
                <input type="date" className="form-control"
                    id="dob" onChange={(event)=>{setDate(event.target.value)}}/>
            </div>
            <div className="form-group">
                <label for="phone_nb" style={{ padding: 10 }}>Phone Number</label>
                <input type="text" className="form-control"
                    id="phone_nb" placeholder="Enter the employee's phone number" onChange={(event)=>{setPhone(event.target.value)}}/>
            </div>
            <div className="form-group">
                <label for="rank" style={{ padding: 10 }}>Rank</label>
                <input type="text" className="form-control"
                    id="rank" placeholder="Enter the employee's phone number" onChange={(event)=>{setRank(event.target.value)}}/>
            </div>
            <div className="form-group">
                <label for="date" style={{ padding: 10 }}>User Type</label>
                <div className="btn-secondary btn-group btn-group-toggle btn-block" data-toggle="buttons" onChange={(event)=>{setUserType(event.target.value)}}>
                    <label className="btn btn-secondary active">
                        <input type="radio" name="options" id="option1" value='1'/> Admin
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2" value='2'/> HR
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2" value='3'/> Driver
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2" value='4' checked/> Employee
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label for="date" style={{ padding: 10 }}>Department</label>
                <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event)=>{setDepartment(event.target.value)}}>
                    <option value={null} selected>Select the department name</option>
                    {departmentList.map((department)=>
                        <option value={department.id}>{department.name}</option>
                    )}
                </select>
            </div>
            <div className="form-group">
                <label for="date" style={{ padding: 10 }}>Manager</label>
                <select className="form-select form-control form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event)=>{setManager(event.target.value)}}>
                    <option value={null} selected>Select the employee's manager name</option>
                    {managerList.map((manager)=>
                        <option value={manager.id}>{manager.first_name + ' ' + manager.last_name}</option>
                    )}
                </select>
            </div>
            <a className="btn btn-my-primary btn-block" onClick={handleSubmit}>
                Save
            </a>
        </form>
    )
}
