import React, {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import SvgComponent2 from '../components/loginLogo';
import RegisterAdminForm from '../components/users/RegisterAdminForm';
import { useLocation } from "react-router-dom";


export default function RegisterAdmin() {

    return (
        <div className="Login-component" 
        style={{ backgroundImage: `url("bg3.jpg")`, marginLeft:10, marginRight:10 }}>
        <div className="container" >
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 mt-3" style={{ backgroundColor: 'rgba(246, 246, 247, 0.5)'}}>
                        <div className="card-body p-0">
                        <div className="row justify-content-center">
                            <SvgComponent2/>
                        </div>
                            <div className="row">
                                <div className="col">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Register An Admin Account</h1>
                                        </div>
                                        <RegisterAdminForm/>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>  
                </div>
            </div>
        </div>
        </div>
    )
}
