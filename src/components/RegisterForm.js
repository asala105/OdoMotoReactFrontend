import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import api from '../api';

export default function RegisterForm() {
    const [department, setDepartment] = useState('');
    const [organization, setOrganization] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    function handleRegister(event) {
        event.preventDefault();
        const registerOrganizationData = {
            //email: email,
        };
        const registerDepartmentData = {
            //email: email,
            };
        api.registerOrganization(registerOrganizationData, {
            headers: {
            Accept: "application/json",
            "content-type": "application/json",
        },
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.response.data.errors);
        });
    }

    function handleDepChange(event) {
        setOrganization(event.target.value);
    }

    function handleOrgChange(event) {
        setDepartment(event.target.value);
    }

    return (
        <form className="user">
            <div className="form-group">
                <input type="text" className="form-control"
                    id="org"
                    placeholder="Enter the name of your organization..." onChange={(event)=>{handleOrgChange(event)}}/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control"
                id="dep" placeholder="Department" onChange={(event)=>{handleDepChange(event)}}/>
            </div>
            <a className="btn btn-my-primary btn-block" onClick={handleRegister}>
                Register
            </a>
        </form>
    )
}
