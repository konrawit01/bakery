import { useEffect } from 'react'
import axios from "axios";

export function RequireToken({ children }) {

    const token = localStorage.getItem('TokenUsermember')
    useEffect(() => {
        axios.post('http://localhost:5000/usermember/authentication', token, {
            headers: {
                "Authorization": "Bearer " + token,
            }
        })
            .then((res) => {
                console.log("res:usermember", res.data)
                if (res.data.decoded.a_level === "usermember") {
                    console.log("------------------ Passsssssss!! --------------------")
                } else {
                    localStorage.removeItem('TokenUsermember')
                    alert("Token Error!!")
                    window.location = "/"
                }
            })
            .catch((err) => console.log(err));

        if (!token) {
            localStorage.clear()
            window.location = "/"
        }

    }, [token]);


    return children;
}