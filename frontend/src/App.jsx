import { BrowserRouter, Routes, Route, } from "react-router-dom";

import { RequireToken } from "./routers/Auth_Usermember";
import { RequireTokenEmployee } from "./routers/Auth_Employee";
import { RequireTokenAdmin } from "./routers/Auth_Admin";

{/* -------------------- Route Login_homepage ------------------- */}
import Home from "./components/page/usermember/Home";
{/* -------------------- Route Login_usermember ------------------- */}
import LoginUsermember from './components/page/usermember/LoginUsermember';
import Homeusermember from './components/page/usermember/HomeUsermember';
import Signup_usermember from './components/page/usermember/Signup_usermember';

{/* -------------------- Route employee ------------------- */}
import LoginEmployee from "./components/page/employee/LoginEmployee";
import HomeSale from './components/page/employee/HomeSale';

{/* -------------------- Route admin ------------------- */}
import LoginAdmin from './components/page/admin/LoginAdmin';
import AdminDashboard from './components/page/admin/AdminDashboard';

function App() {
  return (
   
      <BrowserRouter>
        {/* <RequireToken> */}
        <Routes>
          {/* -------------------- Route Login_homepage ------------------- */}
          <Route path="/" element={<Home />} />
          {/* -------------------- Route Login_usermember ------------------- */}
          <Route path="/LoginUsermember" element={<LoginUsermember />} />
          <Route path="/Signup_usermember" element={<Signup_usermember />} />
          <Route path="/Home" element={<RequireToken> <Homeusermember /> </RequireToken> } />

          {/* -------------------- Route employee ------------------- */}
          <Route path="/LoginEmployee" element={<LoginEmployee />} />
          <Route path="/HomeSale" element={<RequireTokenEmployee> <HomeSale /> </RequireTokenEmployee> } />

          {/* -------------------- Route admin ------------------- */}
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/AdminDashboard" element={<RequireTokenAdmin> <AdminDashboard /> </RequireTokenAdmin> } />
          

        </Routes>
        {/* </RequireToken> */}

      </BrowserRouter>

  );
}

export default App;
