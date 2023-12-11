import { useEffect } from 'react'
import axios from "axios";

export function RequireTokenEmployee({ children }) {

    const token = localStorage.getItem('TokenEmployee')
    useEffect(() => {
        axios.post('http://localhost:5000/employee/authentication', token, {
            headers: {
                "Authorization": "Bearer " + token,
            }
        })
            .then((res) => {
                console.log("res:employee", res.data.decoded)
                if (res.data.decoded.a_level === "employee") {
                    console.log("------------------ Passsssssss!! --------------------")
                } else {
                    localStorage.removeItem('TokenEmployee')
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