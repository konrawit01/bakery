import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png'
import Buy from '../../../assets/images/buy.png'
import { FiMenu } from "react-icons/fi";
import NavLinks from './NavLinks';

function Home() {

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="bg-bkpage min-h-screen">
        <div className='flex items-center justify-around'>
          <img src={Logo} alt='logo' className='h-10 w-24 cursor-pointer md:flex hidden  ' />
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
            <button className='text-white p-2 px-4'>
              <a href='/LoginUsermember'>Login</a>
            </button>
            <button className='text-white p-1 px-4 rounded-md bg-slate-600'>
              Signup
            </button>
          </div>
        </div>
        <div className='w-full h-full'>
          <div className="bg-bakery bg-center bg-no-repeat ">
            <div className=''>
              <h1 className='text-white text-9xl text-center p-4  font-extrabold '>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
                  Easy Bakery
                </span>
              </h1>
            </div>
            <div className="flex flex-col px-28">
              <div className="text-xl p-2 py-1 mt-8">
                เลือกดูรายการอาหารเพื่อสั่งซื้อ
              </div>
              <div className='h-full relative  text-white p-2'>
                <div className='flex items-center'>
                  <img src={Buy} alt='buy' className=" bg-[#1DF659] cursor-pointer h-14 border-2  border-neutral-950 " />
                  <button className="bg-[#3bcb5f] text-xl px-6 h-14 border-2 border-neutral-950">เลือกซื้อ</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home