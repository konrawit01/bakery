// import { useLocation,Navigate } from "react-router-dom"

// export const setToken = (token)=>{

//     localStorage.setItem('TokenAdmin', token)
// }

// export const LinkTokenAdmin = () =>{

//     return localStorage.getItem('TokenAdmin')
// }

// export function RequireTokenAdmin({children}){

//     let auth = LinkTokenAdmin()
//     let location = useLocation()

//     if(!auth){

//         return <Navigate to='/LoginAdmin' state ={{from : location}}/>;
//     }

//     return children;
// }
import { useEffect } from 'react'
import axios from "axios";

export function RequireTokenAdmin({ children }) {

    const token = localStorage.getItem('TokenAdmin')
    useEffect(() => {
        axios.post('http://localhost:5000/admin/authentication', token, {
            headers: {
                "Authorization": "Bearer " + token,
            }
        })
            .then((res) => {
                console.log("res:admin", res.data.decoded)
                if (res.data.decoded.a_level === "admin") {
                    console.log("------------------ Passsssssss!! --------------------")
                } else {
                    localStorage.removeItem('TokenAdmin')
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