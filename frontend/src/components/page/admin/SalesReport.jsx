import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { FiMenu } from "react-icons/fi";
import NavbarAdmin from "./NavbarAdmin";
function SalesReport() {
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
          <NavbarAdmin />
          </ul>
          <ul
            className={`fixed top-0 z-50 bg-white w2/3 h-screen shadow-2xl md:hidden flex-col gap-10 text-medium p-7 pt-6 duration-500
          ${open ? "left-0" : "left-[100%]"}`}
          >
           <NavbarAdmin />
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

      {/* Select Date */}
      <div className="grid justify-center bg-bkpage">
        <div className="flex">
            <label className="text-white mt-1 mr-2">เลือกวันที่</label>
            <input type="date" className="bg-[#D9D9D9] w-52 px-2 rounded-md" />
            <button className="bg-green-400 ml-2 text-black w-16 h-8 rounded-md">เรียกดู</button>
        </div>
      </div>
      <div className="bg-bkpage h-screen grid justify-items-center py-4">
        {/* Table */}
        <div className="">
          <div className="">
            <div className="flex py-2 w-full justify-center items-center bg-[#35b7b7] text-white text-lg text-transparent">
                รายการขาย
            </div>
            <table className=" min-w-full border">
              <thead className="text-white">
                <tr>
                  <th className="py-2 px-20 bg-[#ACAEAE]">เวลา/วัน/เดือน/ปี</th>
                  <th className="py-2 px-20 bg-[#ACAEAE]">ชื่อเมนูอาหาร</th>
                  <th className="py-2 px-20 bg-[#ACAEAE]">จำนวน</th>
                  <th className="py-2 px-20 bg-[#ACAEAE]">ราคา</th>
                </tr>
              </thead>
              <tbody className="border-b h-8 bg-[#ffffff] text-black">
                <tr>
                  <td className="py-3 px-24">00:00</td>
                  <td className="py-3 px-24">00/00/0000</td>
                  <td className="py-3 px-24">เมนูอาหาร</td>
                  <td className="py-3 px-24">จำนวน</td>
                </tr>
              </tbody>
              {/* <thead className="border-b h-8 bg-[#707D80]">
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
              </tbody> */}
            </table>

            {/* <div className="bg-[#D9D9D9] font-bold">
              <button className="px-10 py-4">ย้อนกลับ</button>
              <label className="pl-52">ยอดรวม</label>
              <input
                type="text"
                className="ml-1 w-20 border placeholder-red-500 border-black px-2"
                placeholder="ราคา"
              />
              <button className="ml-60">เสร็จสิ้น</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesReport;