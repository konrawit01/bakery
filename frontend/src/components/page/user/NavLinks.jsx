import React from 'react'

const NavLinks = () => {

    const HeaderLink = [
        {
            name: "รายการสินค้า",
            href: "/",
            current: false,
            // icon: <MdSell />
        },
        {
            name: "สรุปรายการสั่งซื้อ",
            href: "/",
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