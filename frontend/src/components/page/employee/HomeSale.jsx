import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import Logo from '../../../assets/images/logo.png'
import NavLinks from '../usermember/NavLinks';

function HomeSale() {

    const [open, setOpen] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('TokenEmployee')
        window.location = '/';
    }

    return (
        <div className="grid">
            <div className="bg-bkpage">
                <div className='flex items-center justify-around'>
                    <div className="">
                        <img src={Logo} alt='logo' className='h-16 w-24  md:flex hidden  ' />
                    </div>
                    <ul className='md:flex hidden uppercase items-center gap-8 text-white px-4'>
                        <NavLinks />
                    </ul>
                    <ul className={`fixed top-0 z-50 bg-white w2/3 h-screen shadow-2xl md:hidden flex-col gap-10 text-medium p-7 pt-6 duration-500
            ${open ? 'left-0' : 'left-[100%]'}`}>
                        <NavLinks />
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
            <div className="grid place-items-center bg-bkpage h-screen">
                <div className=' bg-bakery bg-cover h-full'>
                    <h1 className='text-white text-9xl text-center font-extrabold '>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
                            Easy Bakery
                        </span>
                    </h1>
                </div>
            </div>
        </div>

    )
}

export default HomeSale