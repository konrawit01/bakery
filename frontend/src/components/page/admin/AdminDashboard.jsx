import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { BsChevronDown } from "react-icons/bs";

function AdminDashboard() {

    const [open, setOpen] = useState(true)

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('TokenAdmin')
        window.location = '/';
    }

    const HeaderLink = [
        {
            name: "หน้าแรก",
            href: "/admin",
            current: false,
            // icon: <TiShoppingCart />,
        },
        {
            name: "จัดการสมาชิก",
            href: " ",
            current: false,
            // icon: <MdSell />
        },
        {
            name: "จัดการพนักงาน",
            href: "",
            current: false,
            // icon: <FaWarehouse />,
        },
        {
            name: "จัดการประเภทสินค้า",
            href: "",
            current: false,
            // icon: <BiSave />,
        },
        {
            name: "จัดการเมนูขนม",
            href: "",
            current: false,
            // icon: <BiSave />,
        },
        {
            name: "รวมสรุปรายงาน",
            href: "",
            current: false,
            submenu: true,
            submenuItems: [
                {
                    subname: "รายงานยอดขายรายวัน",
                    subhref: "/OU/Save_Expenses"
                },
                {
                    subname: "รายงานยอดขายรายเดือน",
                    subhref: "/OU/Save_Expenses"
                },
                {
                    subname: "รายงานยอดขายรายปี",
                    subhref: "/OU/Save_Expenses"
                },
                {
                    subname: "รายงานสต๊อก-รายการขนม",
                    subhref: "/OU/Save_Expenses"
                },


            ]
        },
        {
            name: "จัดการสถานะ",
            href: "",
            current: false,
            // icon: <BiSave />,
        },
        {
            name: "จัดการแจ้งเตือน",
            href: "",
            current: false,
            // icon: <BiSave />,
        },

    ];

    const [submenuOpne, setSubmenuOpne] = useState(false);


    return (
        <>
            <section className='flex gap-6'>
                <div className={`bg-[#0e0e0e] min-h-screen ${open ? "w-52" : "w-12"} text-white duration-500 p-2`}>
                    <div className=' flex justify-end'>
                        <FiMenu size={26} className='cursor-pointer' onClick={() => setOpen(!open)} />
                    </div>
                    <div className='mt-4 flex flex-col gap-4 relative'>
                        {HeaderLink.map((data, index) => (
                            <Link to={data.href} key={index} className="flex items-center text-sm gap-3.5 p-2 hover:bg-gray-800" >
                                <div>{data.icon ? data.icon : <FiMenu size={20} />}</div>
                                <h2 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{data.name}</h2>
                                
                                {data.submenu && (
                                <BsChevronDown className={`${submenuOpne && "rotate-180"}`} onClick={() => {setSubmenuOpne(submenuOpne)}} />
                                )}

                                {data.submenu  && submenuOpne && (
                                            <ui>
                                                {data.submenuItems.map((submenuItems, i) => (
                                                    <li key={i} className='text-gray-300 flex items-center gap-x5 cursor-pointer p-2 px-5 hover:bg-sky-400'>
                                                        <a to={submenuItems.subhref}>{submenuItems.subname}</a>
                                                       
                                                    </li>
                                                ))}
                                                
                                            </ui>
                                )}
                            </Link>
                        ))}
                        <button className='flex items-center text-sm gap-3.5 p-2 hover:bg-gray-800 ' onClick={handleLogout}>
                            <div><FiMenu size={20} /></div>
                            <h2
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>ออกจากระบบ</h2>
                        </button>
                    </div>
                </div>
                <div className=''>
                    HOME admin
                </div>
            </section>
        </>

    )
}

export default AdminDashboard
