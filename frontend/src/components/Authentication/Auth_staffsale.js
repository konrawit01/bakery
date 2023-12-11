// import {useEffect} from 'react'
// import axios from "axios";

// export function RequireTokenPainter({ children }) {
//     const token = localStorage.getItem('TokenPainter')

//     useEffect(() => {
//         axios
//             .post("http://localhost:5000/employee/Authentication", {
//                 token: token,
//             })
//             .then((resp) => {
//                 if (resp.data.status === "ok") {
//                     console.log("------------------ Pass!! --------------------")
//                 } else {
//                     localStorage.removeItem('Tokenemployee')
//                     // localStorage.clear()
//                     alert("Token Error!!")
//                     window.location = "/Login_employee"
//                 }
//             })
//             .catch((err) => console.log(err));

//         if (!token) {
//             window.location = "/Login_employee"
//         }

//     }, [token]);


//     return children;
// }