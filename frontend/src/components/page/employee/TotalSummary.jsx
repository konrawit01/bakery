import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { FiMenu } from "react-icons/fi";
import NavLinks from "../usermember/NavLinks";

function TotalSummary() {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid">
      <div className="bg-bkpage">
        <div className="flex items-center justify-around">
          <div className="">
            <img
              src={Logo}
              alt="logo"
              className="h-16 w-24  md:flex hidden  "
            />
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 text-white px-4">
            <NavLinks />
          </ul>
          <ul
            className={`fixed top-0 z-50 bg-white w2/3 h-screen shadow-2xl md:hidden flex-col gap-10 text-medium p-7 pt-6 duration-500
          ${open ? "left-0" : "left-[100%]"}`}
          >
            <NavLinks />
          </ul>
          <ul
            className="text-2xl md:hidden z-50 text-white"
            onClick={() => setOpen(!open)}
          >
            <FiMenu />
          </ul>
          <div className="p-2">
            <button className="text-white p-2 px-4">
              <a href="/LoginUsermember">Login</a>
            </button>
            <button className="text-white p-1 px-4 rounded-md bg-slate-600">
              Signup
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-bkpage h-screen grid justify-items-center">
        {/* <div className='grid grid-rows-6 bg-[#405255] mt-3 w-[60%]'>
            <div className='mx-10 h-10'>
              <img src={Printer} alt="printer" className='h-8' />
            </div>
            <div className='grid grid-cols-4 justify-items-center bg-[#707D80] h-9 py-10'>
                <p>ลำดับ</p>
                <p>เมนูอาหาร</p>
                <p>จำนวน</p>
                <p>ราคา</p>

            </div>
            <div className='grid grid-cols-4 justify-items-center bg-[#ffffff]'>
                <p>00</p>
                <p>xxx</p>
                <p>00</p>
                <p>0000</p>

                <p>00</p>
                <p>xxx</p>
                <p>00</p>
                <p>0000</p>
            </div>
            <div className='grid grid-cols-4 justify-items-center bg-[#707D80]'>
                <p>ลำดับ</p>
                <p>เมนูส่วนลด</p>
                <p>จำนวน</p>
                <p>ราคา</p>
            </div>
            <div className='grid grid-cols-4 justify-items-center'>
                <p>00</p>
                <p>xxx</p>
                <p>00</p>
                <p>0000</p>
            </div>

            <div className='grid grid-cols-3 bg-[#D9D9D9] h-15'>
                <button>ย้อนกลับ</button>
                <div>
                    <label>ยอดรวม</label>
                    <input type="text" />
                </div>
                <button>เสร็จสิ้น</button>
            </div>
        </div> */}
        <div className="">
          <div className="">
            <table className="text-white min-w-full border bg-[#405255]">
              {/* <thead>
                <tr className="border-b">
                  <img src={Printer} alt="printer" className="h-8" />
                </tr>
              </thead> */}
              <thead className="border-b h-8">
                <tr>
                  <th className="py-2 px-20 border border-black">ลำดับ</th>
                  <th className="py-4 px-24 border border-black">เมนูอาหาร</th>
                  <th className="py-4 px-24 border border-black">จำนวน</th>
                  <th className="py-4 px-24 border border-black">ราคา</th>
                </tr>
              </thead>
              <tbody className="border-b h-8 bg-[#ffffff] text-black">
                <tr>
                  <td className="py-4 px-24 border border-black">00</td>
                  <td className="py-4 px-24 border border-black">00</td>
                  <td className="py-4 px-24 border border-black">0000</td>
                  <td className="py-4 px-24 border border-black">0000</td>
                </tr>
              </tbody>
              <thead className="border-b h-8 bg-[#707D80]">
                <tr>
                  <th className="py-4 px-20 border border-black">ลำดับ</th>
                  <th className="py-4 px-24 border border-black">เมนูส่วนลด</th>
                  <th className="py-4 px-24 border border-black">จำนวน</th>
                  <th className="py-4 px-24 border border-black">ราคา</th>
                </tr>
              </thead>
              <tbody className="border-b h-8 bg-[#ffffff] text-black">
                <tr className="">
                  <td className="py-4 px-24 border border-black">00</td>
                  <td className="py-4 px-24 border border-black">00</td>
                  <td className="py-4 px-24 border border-black">0000</td>
                  <td className="py-4 px-24 border border-black">0000</td>
                </tr>
              </tbody>
            </table>

            <div className="bg-[#D9D9D9] font-bold">
              <button className="px-10 py-4">ย้อนกลับ</button>
                  <label className="pl-52">ยอดรวม</label>
                  <input type="text" className="ml-1 w-20 border placeholder-red-500 border-black px-2" placeholder="ราคา" />
                  <button className="ml-60">เสร็จสิ้น</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalSummary;