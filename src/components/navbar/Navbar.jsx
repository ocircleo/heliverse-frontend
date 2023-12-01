import React, { useState } from 'react';
import NavbarLinks from '../navbarLinks/NavbarLinks';
import { FiMenu } from "react-icons/fi";
import SidebarIcons from '../sidbarIcons/SidebarIcons';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const links = [
        {
            path: '/',
            title: "home",

        },
        {
            path: '/search',
            title: "search",

        },
        {
            path: '/groups',
            title: "groups",

        },
        {
            path: '/make-group',
            title: "make group",

        },
    ]

    return (
        <>
            <nav className="w-full lg:hidden h-12 bg-white shadow flex items-center justify-between ">
                <p className="text-xl text-start px-2 text-indigo-500 font-semibold ">Heliverse</p>
                <div className=' hidden min-[450px]:flex h-full w-full items-center gap-2 sm:gap-3 justify-end pr-2'>
                    {
                        links.map(ele => <NavbarLinks key={ele.path} data={ele}></NavbarLinks>)
                    }
                </div>
                <button onClick={() => setNav(!nav)} className='mr-3'>
                    <FiMenu className='min-[450px]:hidden text-2xl'/>
                </button>

            </nav>
            <div className={`h-screen w-full fixed bg-white gap-2 p-4 text-center duration-100 flex flex-col z-20 top-12 ${nav ? 'left-0' : "left-full"}`}>
                {

                    links.map(ele => <SidebarIcons key={ele.path} data={ele} nav={nav} setNav={setNav}></SidebarIcons>)

                }

            </div>
        </>
    );
};

export default Navbar;