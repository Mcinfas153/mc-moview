import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import BeatLoader from "react-spinners/BeatLoader";
import BaseUrl from './../axios'
import { Alert } from 'react-bootstrap';
import { css } from "@emotion/react";
import './css/login.css'

const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
});


export default function Login(props) {

    const history = useHistory();

    const override = css`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #000000;
    z-index: 1000;
    opacity: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("red");

    const [alertVariant, setAlertVariant] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        setLoading(true);
        handleLogin(data);
    }

    async function handleLogin(data) {
        let response = await axios({
            method: 'post',
            url: `${BaseUrl}/login`,
            headers: { 'Content-Type': 'application/json' },
            data: data
        })
            .then(function (response) {
                if (response.data.id) {
                    setLoading(false)
                    setShowAlert(true)
                    setAlertVariant('success')
                    setAlertMessage('Successfully login')
                    localStorage.setItem('user', JSON.stringify(response.data));
                    history.push('/dashboard')
                } else {
                    setLoading(false)
                    setShowAlert(true)
                    setAlertVariant('danger')
                    setAlertMessage('Login Failed')
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        localStorage.getItem('user') && history.push('dashboard')
    }, []);

    return (
        <div className="login">
            <BeatLoader loading={loading} size={20} css={override} color={color} />
            <div className="m-auto col-md-5 col-12">
                {
                    showAlert &&
                    <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                        {alertMessage}
                    </Alert>
                }

                <div className="login__boxWrapper card">
                    <h1 className="login__title">Mac Movies</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="email"{...register("email")} className="form-control" placeholder="Enter your email" />
                            <p className="error__msg">{errors.email?.message}</p>
                        </div>
                        <div className="form-group">
                            <input type="password" {...register("password")} className="form-control" placeholder="Enter your password" />
                            <p className="error__msg">{errors.password?.message}</p>
                        </div>

                        <button type="submit" className="btn btn-primary btn-sm btn-block">Login</button>
                    </form>

                </div>
                <div className="signup__wrapperBox text-center">
                    <p className="mt-3 text-dark">If you don't have an account, register here,</p>
                    <div className="m-auto mb-5 col-md-6 col-12">
                        <Link to="/register"><button className="btn btn-success btn-sm btn-block register__btn">Register</button></Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
