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


