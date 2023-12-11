import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Signup() {
    
    const [a_username, setUsername] = useState('');
    const [a_password, setPassword] = useState('');
    const [Loading, setLoading] = useState('');


    const handleSignup = (e) => {
        e.preventDefault();
        const jsonData = {
            a_username: a_username,
            a_password: a_password
        }
        // console.log('jsonData', jsonData)
        axios.post('http://localhost:5000/usermember/signup', jsonData,)
            .then(res => {
                if (res.data.status == 'ok') {
                    alert('Signup success')
                    window.location = '/';
                } else {
                    alert('Signup failed')
                }
            })
            .catch(err => {
                console.log('error', err)
            });
    }
  return (
    <div>
      <div>
            <div className="login-wrapper">
                <h1>Sign up</h1>
                <form onSubmit={handleSignup}>
                    <label>
                        <p>Username</p>
                        <input type="text" name='a_username' onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" name='a_password' onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
