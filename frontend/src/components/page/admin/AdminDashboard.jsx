import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import Logo from '../../../assets/images/logo.png'
import NavbarAdmin from './NavbarAdmin';

function AdminDashboard() {

    const [open, setOpen] = useState(true)


    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('TokenAdmin')
        window.location = '/';
    }




    return (
        <div className="w-full ">

            {/* {!popupPlusProduct ?
                <PopupPlusProduct popupPlusProduct={popupPlusProduct} setPopupPlusProduct={setPopupPlusProduct} />
                : null
            } */}

            {/* ////----------------------------- ตัวอย่าง popup ------------------------------//// */}

            {/* {!popupChoosePackage ?
                <PopupChoosePackage popupChoosePackage={popupChoosePackage} setPopupChoosePackage={setPopupChoosePackage} id_package={id_package} dataUser={dataUser} dataPainter={dataPainter} />
                : null
            } */}



            <div className="">
                <div className='flex items-center justify-around'>
                    <div className="">
                        <img src={Logo} alt='logo' className='h-16 w-24  md:flex hidden  ' />
                    </div>
                    <ul className='md:flex hidden uppercase items-center gap-8 text-white px-4'>
                        <NavbarAdmin />
                    </ul>
                    <ul className={`fixed top-0 z-50 bg-white w2/3 h-screen shadow-2xl md:hidden flex-col gap-10 text-medium p-7 pt-6 duration-500
                                ${open ? 'left-0' : 'left-[100%]'}`}>
                        <NavbarAdmin />
                    </ul>
                    <ul className='text-2xl md:hidden z-50 text-white' onClick={() => setOpen(!open)}>
                        <FiMenu />
                    </ul>
                    <div className='p-2'>
                        <button onClick={handleLogout} className='text-white p-1 px-4 rounded-md bg-slate-600'>
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            
        </div>

    )
}

export default AdminDashboard
