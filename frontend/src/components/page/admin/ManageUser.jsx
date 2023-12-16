import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import Buy from "../../../assets/images/buy.png";
import { FiMenu } from "react-icons/fi";
import NavbarAdmin from "./NavbarAdmin";

function ManageUser() {
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

      <div className="grid grid-cols-3 min-h-screen mt-6 grid-flow-row">
        <div className="col-span-2">

          <div className="bg-slate-400 px-10 space-x-10 flex items-center justify-items-center h-24">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                class="relative m-0 mt-4 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-500 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="ค้นหาชื่อสมาชิก"
                aria-label="Search"
                aria-describedby="button-addon3" />
              <button
                className="relative mt-4 z-[2] bg-slate-200 rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                type="button"
                id="button-addon3"
                data-te-ripple-init>
                ค้นหา
              </button>
            </div>
            <div className="">
              <button className=" h-9 w-24  bg-[#1DF659]">
                เพิ่มสมาชิก
              </button>
            </div>
          </div>

          <div className="w-full text-center bg-bakery bg-no-repeat bg-contain bg-center h-screen overflow-y-scroll">
            <table class="table-fixed w-full">
              <thead className="h-14 bg-[#C4C4C4]">
                <tr>
                  <th>ลำดับ</th>
                  <th>ชื่อ</th>
                  <th>ประเภท</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="h-10 backdrop-blur-sm bg-white/50 hover:bg-slate-200">
                  <td>1</td>
                  <td>Malcolm Lockyer</td>
                  <td>พนักงาน</td>
                </tr>
                <tr className="h-10 backdrop-blur-sm bg-white/50 hover:bg-slate-200">
                  <td>2</td>
                  <td>Witchy Woman</td>
                  <td>พนักงาน</td>
                </tr>
                <tr className="h-10 backdrop-blur-sm bg-white/50 hover:bg-slate-200">
                  <td>3</td>
                  <td>Witchy Woman</td>
                  <td>พนักงาน</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-1">
          <div className="p-5 h-screen">
            <div className="grid justify-items-center mt-5">
              <img src={Logo} alt="" />
            </div>

            <div className="grid justify-items-center mt-10">
              <p className="font-bold text-white">แก้ไขสมาชิก</p>
            </div>

            <div className="text-white text-sm font-bold">
              <form action="">
                <div className="w-full px-14 mt-14 ">
                  <div className="mb-1">
                    <label htmlFor="">ชื่อผู้ใช้งาน</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="rounded-sm mb-5 h-8 w-full px-2"
                      placeholder="ชื่อผู้ใช้"
                    />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="">รหัสผ่าน</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="rounded-sm mb-5 h-8 px-2 w-full"
                      placeholder="โต๊ะ01"
                    />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="">ประเภทผู้ใช้งาน</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="rounded-sm mb-5 h-8 px-2 w-full"
                      placeholder="สมาชิก"
                    />
                  </div>

                  <div className="flex space-x-4 justify-between mt-2">
                    <button className="bg-[#D30202] w-20 h-9">ลบ</button>
                    <button className="bg-[#1D8EF6] w-20 h-9">บันทึก</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ManageUser;