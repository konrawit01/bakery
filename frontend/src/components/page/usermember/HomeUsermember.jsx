import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';


function Home() {

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('TokenUsermember')
    window.location = '/';
  }
  const HeaderLink = [
    {
        name: "หน้าแรก",
        href: "/Home",
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
    <>
            <section className='flex gap-6'>
                <div className={`bg-[#0e0e0e] min-h-screen ${open ? "w-52" : "w-12"} text-gray-100 duration-500 p-2 `}>
                    <div className=' flex justify-end'>
                        <FiMenu size={26} className='cursor-pointer' onClick={() => setOpen(!open)} />
                    </div>
                    <div className='mt-4 flex flex-col gap-4 relative'>
                        {HeaderLink.map((data, index) => (
                            <Link to={data.href} key={index} className="flex items-center text-sm gap-3.5 p-2 hover:bg-gray-800" >
                                <div>{data.icon ? data.icon : <FiMenu size={20}/>}</div>
                               
                                <h2
                                    // style={{
                                    //     transitionDelay: `${index + 3}00ms`
                                    // }}
                                    className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{data.name}</h2>
                            </Link>
                        ))}
                        <button className='flex items-center text-sm gap-3.5 p-2 hover:bg-gray-800 ' onClick={handleLogout}>
                            <div><FiMenu  size={20}/></div>
                            <h2
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>Logout</h2>
                        </button>
                    </div>
                </div>
                <div className=''>
                    HOME usermember
                </div>
            </section>
            
            {/* <div className='flex flex-row flex-auto bg-orange-300  rounded-tl-xl border-l shadow-xl'>
                <div className='flex flex-col w-1/5'>
                    <div className='flex-none h-24 bg-red-100'>
                        top
                    </div>
                    <div className='flex-auto overflow-y-auto'>
                       
                        <a className='black h-16 border-b p-2'>
                            <div className='border-l-2 border-blue'>
                                card
                            </div>
                        </a>
                    </div>
                </div>
                
            </div> */}
        </>
  )
}

export default Home
