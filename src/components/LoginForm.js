import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import api from '../api';
import {updateToken} from '../redux/slices/tokenSlice';
import {updateUserProfile} from '../redux/slices/userSlice';
import { store } from '../redux/store';
import { useDispatch } from "react-redux";


export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    function handleLogin(event) {
        event.preventDefault();
        const loginData = {
        email: email,
        password: password,
        };
        api.Login(loginData, {
            headers: {
            Accept: "application/json",
            "content-type": "application/json",
        },
        })
        .then((response) => {
            if (response.data.user.user_type_id === 1) {
            localStorage.setItem("access_token", response.data.access_token);
            }
            store.dispatch(updateToken({ tokenVal: {
                tokenV: response.data.access_token,
            }}));
            store.dispatch(updateUserProfile({ userProfile: {
                date_of_birth: response.data.user.date_of_birth,
                department: response.data.user.department!==null?response.data.user.department.name:null,
                email: response.data.user.email,
                first_login: response.data.user.first_login,
                first_name: response.data.user.first_name,
                id: response.data.user.id,
                last_name: response.data.user.last_name,
                manager: response.data.user.manager!==null?response.data.user.manager.first_name + ' ' + response.data.user.manager.last_name:null,
                phone_nb: response.data.user.phone_nb,
                rank: response.data.user.rank,
                user_type_id: response.data.user.date_of_birth
            }}));
            history.replace('/OdoMotoReactFrontend')
        })
        .catch((error) => {
            console.log(error.response.data.errors);
            if (email === "" || password === "") {
                setErrors(error.response.data.errors);
            } else {
                alert("incorrect username or password");
            }
        });
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <form className="user" onSubmit={handleLogin}>
            <div className="form-group">
                <input type="email" className="form-control"
                    id="exampleInputEmail" aria-describedby="emailHelp"
                    placeholder="Enter Email Address..." value={email}
                    onChange={handleEmailChange}/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control"
                id="exampleInputPassword" placeholder="Password"
                value={password}
                onChange={handlePasswordChange}/>
            </div>
            <input
                name="login"
                id="login"
                className="btn btn-my-primary btn-block"
                type="submit"
                defaultValue="Login"
              />

        </form>
    )
}
