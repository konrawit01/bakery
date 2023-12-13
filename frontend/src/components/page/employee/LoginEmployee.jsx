import React, { useState } from 'react'
import axios from 'axios';
import Logo from "../../../assets/images/logo.png";
// import { Navigate, useLocation } from "react-router-dom";

function LoginEmployee() {

    const [a_username, setUsername] = useState('');
    const [a_password, setPassword] = useState('');
    // const location = useLocation();
    const token = localStorage.getItem('TokenELoginEmployee')
    // const [Loading, setLoading] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if ((a_username === "") && (a_password === "")) {
            return;
        } else {
            axios.post('http://localhost:5000/employee/login', {
                a_username: a_username,
                a_password: a_password
            })
                .then(res => {
                    if (res.data.a_level === 'employee') {
                        // alert('login success')
                        localStorage.setItem('TokenEmployee', res.data.token)
                        window.location = '/HomeSale';
                    } else {
                        alert('login failed')
                    }
                })
                .catch(error => {
                    console.log('error', error)
                });
        }
    };

    return (
        <div>
            <div className="bg-bkpage min-h-screen">
                {/* {token ? (
                    <Navigate to='/Home' state={{ from: location }} />
                ) : ( 
                 )} */}
                <div className="flex">
                    <div className="flex-1 w-8/12">
                        <div className="grid min-h-screen">
                            <div className="grid ">
                                <h1 className="text-white text-7xl text-center p-4  font-extrabold  place-self-center mb-52 ">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
                                        Easy Bakery
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1  w-4/12 bg-gradient-to-r from-[#bfbdbd] to-[#00181C]">
                        <div className="flex flex-col space-y-16 text-center py-4 ">
                            <div className="flex mt-14 justify-center">
                                <img src={Logo} alt="logo" />
                            </div>
                            <div className="text-2xl text-white py-2 p-4 ">ยินดีต้อนรับ</div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="username"
                                >
                                    Username
                                </label>
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    placeholder="Username"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="x">
                                <button
                                    type="submit"
                                    onClick={handleLogin}
                                    className="button">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginEmployee