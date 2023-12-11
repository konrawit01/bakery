import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';

function HomeSale() {

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('TokenEmployee')
        window.location = '/';
    }
    const HeaderLink = [
        {
            name: "หน้าแรก",
            href: "/HomeSale",
            current: false,
            // icon: <TiShoppingCart />,
        },
        {
            name: "จัดการโปรไฟล์",
            href: " ",
            current: false,
            // icon: <MdSell />
        },
        {
            name: "แก้ไขรหัสผ่าน",
            href: "/OU/Stock",
            current: false,
            // icon: <FaWarehouse />,
        },
        {
            name: "รวมสรุปรายงาน",
            href: "/OU/Save_Expenses",
            current: false,
            // icon: <BiSave />,
        },
    ];
    const [open, setOpen] = useState(true)
    return (
        <div className='flex'>
            <div className={`bg-[#211e1e] min-h-screen relative ${open ? "w-52" : "w-12"} text-white duration-500 p-2`}>
                <div className=' flex justify-end'>
                    <FiMenu size={26} className={`'text-white cursor-pointer' ${
                        !open && "rotate-180"
                    }`} onClick={() => setOpen(!open)} />
                </div>
<div className='inline-flex'>
<FiMenu className='bg-orange-400'/>
</div>
            </div>
            <div className=''>
                HOME STFF
            </div>

        </div>

    )
}

export default HomeSale
