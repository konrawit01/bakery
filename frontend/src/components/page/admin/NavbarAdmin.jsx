import React from 'react'

function NavbarAdmin() {

    const HeaderLink = [
        {
            name: "หน้าหลัก",
            href: "/####",
            current: false,
            // icon: <TiShoppingCart />,
        },
        {
            name: "ดูสรุปรายงานการขาย",
            href: "/#####",
            current: false,
            // icon: <MdSell />
        },
        {
            name: "จัดการสินค้า",
            href: "/######",
            current: false,
            // icon: <FaWarehouse />,
        },
        {
            name: "จัดการสมาชิก",
            href: "/######",
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

export default NavbarAdmin