import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import BaseUrl from './../axios'
import './css/register.css'

export default function Register() {

    let history = useHistory();

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

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
    });

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        registerUser(data)
        setLoading(true)
    };

    async function registerUser(data) {
        let response = await axios({
            method: 'post',
            url: `${BaseUrl}/register`,
            headers: { 'Content-Type': 'application/json' },
            data: data
        })
            .then(function (response) {
                if (response.status === 201) {
                    setLoading(false);
                    localStorage.setItem('user', JSON.stringify(response.data));
                    history.push("/login");
                } else {
                    console.log('Something wrong')
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div className="register">
            <BeatLoader loading={loading} size={20} css={override} color={color} />
            <div className="m-auto col-md-5 col-12">
                <div className="register__boxWrapper card">
                    <h1 className="login__title">Mac Movies</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter your name" {...register("name", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            <p>{errors.name?.message}</p>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Enter your email" {...register("email", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            <p>{errors.email?.message}</p>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Enter your password" {...register("password", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            <p>{errors.password?.message}</p>
                        </div>
                        <input className="btn btn-success btn-block" type="submit" />
                    </form>

                </div>
                <div className="signup__wrapperBox text-center">
                    <p className="mt-3 text-dark">If you don't have an account, register here,</p>
                    <div className="m-auto col-md-6 col-12">
                        <Link to="/login"><button className="btn btn-primary btn-sm btn-block login__btn">Login</button></Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
