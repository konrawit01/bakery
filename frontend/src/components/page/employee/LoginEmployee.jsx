import  React,{ useState } from 'react'
import axios from 'axios';
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
            <div className="">
                {/* {token ? (
                    <Navigate to='/Home_Sale' state={{ from: location }} />
                ) : ( */}
                    <>
                        <h1>Please Log employee</h1><form>
                            <label>
                                <p>Username</p>
                                <input type="text" onChange={e => setUsername(e.target.value)} />
                            </label>
                            <label>
                                <p>Password</p>
                                <input type="password" onChange={e => setPassword(e.target.value)} />
                            </label>
                            <div>
                                <button type="submit" onClick={handleLogin}>Submit</button>
                            </div>
                        </form>
                    </>
                {/* )} */}
            </div>
        </div>
    )
}

export default LoginEmployee
