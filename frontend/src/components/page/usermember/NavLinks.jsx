import React from 'react'

const NavLinks = () => {

    const HeaderLink = [
        {
            name: "หน้าหลัก",
            href: "/HomeSale",
            current: false,
            // icon: <TiShoppingCart />,
        },
        {
            name: "รับออเดอร์",
            href: "/WaitingForOrderEY",
            current: false,
            // icon: <MdSell />
        },
        {
            name: "ดูรายการสินค้า",
            href: "/ListProductEY",
            current: false,
            // icon: <FaWarehouse />,
        },
    ];
    return (
        <>
            {HeaderLink.map((data, index) => (
                <li key={index} className="hover:text-gray-400 py-4 px-3 inline-block">
                    <a href={data.href}>{data.name}</a>
                </li>
            ))}
        </>
    )
}

export default NavLinks