import React, { useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import Logo from "../../../assets/images/logo.png";

const LoginUsermember = () => {
  const [a_username, setUsername] = useState("");
  const [a_password, setPassword] = useState("");
  // const location = useLocation();
  const token = localStorage.getItem("TokenUsermember");
  // const [Loading, setLoading] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (a_username === "" && a_password === "") {
      return;
    } else {
      axios
        .post("http://localhost:5000/usermember/login", {
          a_username: a_username,
          a_password: a_password,
        })
        .then((res) => {
          console.log("res", res.data);
          if (res.data.a_level === "usermember") {
            // alert('login success')
            localStorage.setItem("TokenUsermember", res.data.token);
            window.location = "/Home";
          } else {
            alert("login failed");
          }
        })
        .catch((error) => {
          console.log("error", error);
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
                  for="username"
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
                  for="password"
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
        {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account Usermember
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        onChange={e => setUsername(e.target.value)}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input
                                        onChange={e => setPassword(e.target.value)}
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    onClick={handleLogin}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                    </div>
                </div> */}
      </div>
    </div>
  );
};
export default LoginUsermember;
