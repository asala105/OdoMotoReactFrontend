import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import api from '../api';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
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
            history.replace("/");
            window.location.reload();
            console.log('logged in successfully')
            }
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
