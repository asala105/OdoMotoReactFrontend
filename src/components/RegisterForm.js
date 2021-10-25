import '../App.css';
import React from 'react'

export default function RegisterForm() {
    return (
        <form className="user">
            <div className="form-group">
                <input type="email" className="form-control"
                    id="exampleInputEmail" aria-describedby="emailHelp"
                    placeholder="Enter the name of your organization..."/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control"
                id="exampleInputPassword" placeholder="Department"/>
            </div>
            <a href="#" className="btn btn-my-primary btn-block">
                Register
            </a>
        </form>
    )
}
