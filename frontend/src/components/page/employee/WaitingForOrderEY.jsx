import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import Logo from '../../../assets/images/logo.png'
import NavLinks from '../usermember/NavLinks';

function WaitingForOrderEY() {

    const [open, setOpen] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('TokenEmployee')
        window.location = '/';
    }

    return (
        <div className="grid">
            <div className="">
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

            <div className="grid justify-items-center bg-bkpage h-screen">
                <div className='container mt-10 px-10 text-center'>
                    <table className="table-fixed w-full bg-gray-400 text-white border border-slate-300 border-collapse">
                        <thead className='bg-slate-600'>
                            <tr className='h-12'>
                                <th className='border border-gray-800'>หมายเลขโต๊ะ</th>
                                <th className='border border-gray-800'>สถานะ</th>
                                <th className='border border-gray-800'>{" "}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='hover:bg-slate-300 border border-gray-800 h-10'>
                                <td className=''>โต๊ะที่ 1</td>
                                <td className='grid h-full items-center justify-items-center'>
                                    <div className='h-7 w-28 mt-1 rounded-lg bg-red-600'>
                                        รอรับออเดอร์
                                    </div>
                                </td>
                                <td className=''>
                                    <button className='h-7 w-28 rounded-lg bg-cyan-600'>รับ</button>
                                </td>
                            </tr>

                            <tr className='hover:bg-slate-300 border border-gray-800 h-10'>
                                <td className=''>โต๊ะที่ 2</td>
                                <td className='grid h-full items-center justify-items-center'>
                                    <div className='h-7 w-28 mt-1 rounded-lg bg-lime-600'>
                                        รับออเดอร์แล้ว
                                    </div>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default WaitingForOrderEY