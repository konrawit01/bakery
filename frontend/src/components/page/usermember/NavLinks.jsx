import React from 'react'

const NavLinks = () => {

    const HeaderLink = [
        {
            name: "หน้าหลัก",
            href: "/",
            current: false,
            // icon: <TiShoppingCart />,
        },
        {
            name: "สรุปรายการสั่งชื้อ",
            href: "/OrderSummary",
            current: false,
            // icon: <MdSell />
        },
        {
            name: "รายการสินค้า",
            href: "/ProductList",
            current: false,
            // icon: <FaWarehouse />,
        }
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