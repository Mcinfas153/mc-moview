import React from 'react'
import { Link } from 'react-router-dom'
import './css/login.css'

export default function Login() {
    return (
        <div className="login">
            <div className="m-auto col-md-5 col-12">
                <div className="login__boxWrapper card">
                    <h1 className="login__title">Mac Movies</h1>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Enter your password" />
                    </div>

                    <button className="btn btn-primary btn-sm">Login</button>

                </div>
                <div className="signup__wrapperBox text-center">
                    <p className="mt-3 text-dark">If you don't have an account, register here,</p>
                    <div className="m-auto col-md-6 col-12">
                        <Link to="/register"><button className="btn btn-success btn-sm btn-block register__btn">Register</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
