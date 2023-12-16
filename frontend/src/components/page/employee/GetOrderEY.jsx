import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import Logo from '../../../assets/images/logo.png'
import NavLinks from '../usermember/NavLinks';

function GetOrderEY() {

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
                <div className='container overflow-y-scroll mt-10 px-10 text-center'>
                    <h1 className='mx-4 my-4 text-white text-4xl'>โต๊ะ 1</h1>
                    <table className="table-fixed w-full bg-gray-400 text-white border border-slate-300 border-collapse">
                        <thead className='bg-slate-600'>
                            <tr className='h-12'>
                                <th className='border border-gray-800'>ชื่อเมนูอาหาร</th>
                                <th className='border border-gray-800'>จำนวน</th>
                                <th className='border border-gray-800'>ราคา</th>
                                <th className='border border-gray-800'>{" "}</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className='hover:bg-slate-300 border border-gray-800 h-10'>
                                <td className=''>ลาบปลาตอง</td>
                                <td className=''>2</td>
                                <td className=''>500</td>
                                <td className='space-x-5'>
                                    <button className='h-7 w-24 rounded-lg bg-red-600'>ยกเลิก</button>
                                </td>
                            </tr>
                            <tr className='hover:bg-slate-300 border border-gray-800 h-10'>
                                <td className=''>ป่นบักเขื่อ</td>
                                <td className=''>1</td>
                                <td className=''>1500</td>
                                <td className='space-x-5'>
                                    <button className='h-7 w-24 rounded-lg bg-red-600'>ยกเลิก</button>
                                </td>
                            </tr>
                            <tr className='hover:bg-slate-300 border border-gray-800 h-10'>
                                <td className=''>ต้มไก่ใส่ใบกระท่อม</td>
                                <td className=''>2</td>
                                <td className=''>500000</td>
                                <td className='space-x-5'>
                                    <button className='h-7 w-24 rounded-lg bg-red-600'>ยกเลิก</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <div className='grid justify-items-end'>
                    <button className='h-14 w-48 m-4 mr-10 text-white bg-[#50C818]'>กดรับออเดอร์ทั้งหมด</button>
                    </div>

                    <div className='grid grid-cols-3 text-lg font-semibold items-center justify-items-center bg-slate-50 h-12'>
                        <div className='pr-28'>
                            <button className=''>ย้อนกลับ</button>
                        </div>
                        <div className='flex space-x-2'>
                            <h1>ยอดรวม</h1>
                            <button className='h-7 w-24 border border-slate-950'>500</button>
                        </div>
                        <div className='pl-28'>
                            <button className=''><a href="/TotalSummary">ชำะเงิน</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetOrderEY