import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import Logo from '../../../assets/images/logo.png'
import ChooseImage from '../../../assets/images/ChooseImage.png'
import NavbarAdmin from './NavbarAdmin';
import LogoPlus from '../../../assets/images/plus.png'
import ManageProductPopupList from './ManageProducPopuptList';

function ManageProduct( ) {

    const [open, setOpen] = useState(false);
    // const [popupPlusProductItem, setPopupPlusProductItem] = useState(true);
    const [popuptItem, setPopuptItem] = useState(true);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('TokenAdmin')
        window.location = '/';
    }

    const popupEdits = () => {
        setPopuptItem(!popuptItem)
    }


    return (
        <div className="w-full ">

            {!popuptItem ?
                <ManageProductPopupList popuptItem={popuptItem} setPopuptItem={setPopuptItem} />
                : null
            }

            {/* ////----------------------------- ตัวอย่าง popup ------------------------------//// */}

            {/* {!popupChoosePackage ?
                <PopupChoosePackage popupChoosePackage={popupChoosePackage} setPopupChoosePackage={setPopupChoosePackage} id_package={id_package} dataUser={dataUser} dataPainter={dataPainter} />
                : null
            } */}



            <div className="">
                <div className='flex items-center justify-around'>
                    <div className="">
                        <img src={Logo} alt='logo' className='h-16 w-24  md:flex hidden  ' />
                    </div>
                    <ul className='md:flex hidden uppercase items-center gap-8 text-white px-4'>
                        <NavbarAdmin />
                    </ul>
                    <ul className={`fixed top-0 z-50 bg-white w2/3 h-screen shadow-2xl md:hidden flex-col gap-10 text-medium p-7 pt-6 duration-500
                                ${open ? 'left-0' : 'left-[100%]'}`}>
                        <NavbarAdmin />
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

            <div className='mx-32 h-screen'>
                <div className="mb-6 mt-8 mx-4">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                            type="search"
                            className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-500 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            placeholder="กรอกเพื่อค้นหาชื่อของสินค้า"
                            aria-label="Search"
                            aria-describedby="button-addon3" />
                        <button
                            className="relative z-[2] bg-slate-200 rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-blue-200 hover:bg-opacity-3 focus:outline-none focus:ring-0"
                            type="button"
                            id="button-addon3"
                            data-te-ripple-init>
                            ค้นหา
                        </button>
                    </div>
                </div>

                <div className='grid h-auto'>
                    <div className='grid gap-10 grid-cols-3 mb-10 mx-10'>
                        <div className='bg-gradient-to-r from-gray-400 to-white w-full '>
                            <form>
                                <div className='h-40 px-5'>
                                    <img src={ChooseImage} className='w-72 px-5 h-48' />
                                </div>
                                <div className='text-white mx-5 my-6 text-lg'>
                                    <input
                                        type="text"
                                        className="block border border-grey-light w-full h-10 p-3 rounded mb-4"
                                        // name="name"
                                        // value={createUser.name}
                                        // onChange={onChangeUser}
                                        placeholder="กรอกชื่อของสินค้า" />

                                </div>
                                <div className='flex space-x-8 text-white mx-5 text-lg'>
                                    <input
                                        type="text"
                                        className="block border border-grey-light w-full h-10 p-3 rounded mb-4"
                                        // name="name"
                                        // value={createUser.name}
                                        // onChange={onChangeUser}
                                        placeholder="ราคา" />
                                    <input
                                        type="text"
                                        className="block border border-grey-light w-full h-10 p-3 rounded mb-4"
                                        // name="name"
                                        // value={createUser.name}
                                        // onChange={onChangeUser}
                                        placeholder="จำนวน" />

                                </div>
                                <div className='flex justify-center bg-gray-500'>
                                    <button className='flex h-10 space-x-1 text-center text-black text-lg'>
                                        <div className='mt-1'>+ เพิ่มรายการใหม่</div>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='bg-gradient-to-r from-gray-400 to-white w-full '>
                            <div className='text-center mx-5 my-5 bg-emerald-400 rounded-lg h-40'>รูปภาพ</div>
                            <div className='text-white mx-5 my-4 text-lg'>ชื่อเมนูอาหาร xxx</div>
                            <div className='text-sky-700 mx-5 my-4 text-lg'>จำนวน xxx</div>
                            <div className='flex mx-5 my-4 justify-between'>
                                <h1 className='text-red-600 mt-1 text-base'>ราคา xxx บาท</h1>
                                <button onClick={() => popupEdits()} className='flex space-x-1 text-green-400 text-lg'>
                                    <img src={LogoPlus} />
                                    <div className='mt-1'>แก้ไข</div>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageProduct