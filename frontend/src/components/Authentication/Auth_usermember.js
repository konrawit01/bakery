// import {useEffect} from 'react'
// import axios from "axios";
// export function RequireToken({ children }) {

//     const token = localStorage.getItem('TokenUser')
//     useEffect(() => {
//         axios
//             .post("http://localhost:5000/usermember/Authentication", {
//                 token: token,
//             })
//             .then((resp) => {
//                 // console.log("resp:", resp.data)
//                 if (resp.data.status === "ok") {
//                     console.log("------------------ Pass!! --------------------")
//                 } else {
//                     localStorage.removeItem('TokenUserMember')
//                     // localStorage.clear()
//                     alert("Token Error!!")
//                     window.location = "/"
//                 }
//             })
//             .catch((err) => console.log(err));

//         if (!token) {
//             localStorage.clear()
//             window.location = "/"
//         }

//     }, [token]);


//     return children;
// }


