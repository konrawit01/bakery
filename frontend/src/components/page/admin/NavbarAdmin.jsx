import React from 'react'

function NavbarAdmin() {

    const HeaderLink = [
        {
            name: "หน้าหลัก",
            href: "/AdminDashboard",
            current: false,
            // icon: <TiShoppingCart />,
        },
        {
            name: "ดูสรุปรายงานการขาย",
            href: "/SalesReport",
            current: false,
            // icon: <MdSell />
        },
        {
            name: "จัดการสินค้า",
            href: "/ManageProduct",
            current: false,
            // icon: <FaWarehouse />,
        },
        {
            name: "จัดการสมาชิก",
            href: "/ManageUser",
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