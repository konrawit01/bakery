import React from 'react'
import approve from '../../../assets/images/plus.png'
import cancel from '../../../assets/images/cancel.png'
import plus2 from '../../../assets/images/plus2.png'
import delete2 from '../../../assets/images/delete2.png';

function ManageProductPopupList({ popuptItem, setPopuptItem }) {
    return (
        <div className="justify-center py-5 text-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none w-full h-full bg-[#C4C4C4] bg-opacity-70">
            <div className="bg-[rgb(98,171,185)] text-white px-8 py-5 rounded h-max w-[70%]">
                <div className='grid justify-items-center'>
                    <div className='w-[75%] h-80 my-5 bg-orange-400'>รูปนะจ๊ะ</div>
                </div>
                <div className='mb-5 text-2xl'>ชื่อเมนูอาหาร</div>
                <div className='flex px-48 mb-5 justify-between'>
                    <button className=''>
                        <img src={delete2} />
                    </button>
                    <div className='text-2xl mt-3'>1</div>
                    <button className=''>
                        <img src={plus2} />
                    </button>
                </div>
                <div className='flex px-16 mb-5 justify-between'>
                    <button onClick={() => setPopuptItem(!popuptItem)} className='flex space-x-2'>
                        <img src={cancel} />
                        <h1 className='text-red-600 space-x-2 mt-2'>ยกเลิก</h1>
                    </button>
                    <button className='flex space-x-2'>
                        <img src={approve} />
                        <h1 className='text-lime-400 mt-2'>ยืนยัน</h1>
                    </button>
                </div>

            </div>

        </div>

    )
}

export default ManageProductPopupList