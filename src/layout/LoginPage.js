import React from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import SvgComponent2 from '../components/loginLogo';

export default function LoginPage() {
    return (
        <div className="Login-component" 
        style={{ backgroundImage: `url("bg3.png")`, marginLeft:10, marginRight:10 }}>
        <div className="container" >
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 my-5" style={{ backgroundColor: 'rgba(246, 246, 247, 0.5)'}}>
                        <div className="card-body p-0">
                        <div className="row justify-content-center">
                            <SvgComponent2/>
                        </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Login</h1>
                                        </div>
                                        <LoginForm />
                                        <hr/>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">New Here! Create Account</h1>
                                        </div>
                                        <RegisterForm />
                                        <hr/>
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
