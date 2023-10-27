"use client"

import Link from "next/link";
// import { AiOutlineClose } from 'react-icons/ai';
import { LuSearch } from 'react-icons/lu';
import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useState } from 'react';



const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(true);

    function handleMenuAnimate() {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="my-[10px] py-[10px] relative z-50">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <Link href="/" className="text-black text-xl font-semibold">LOGO</Link>
                <div className="">
                    <div className={`transition ease-in-out duration-300 sm:scale-100 sm:opacity-100 ${menuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
                        <div className="absolute right-0 top-[100%] mt-7 border shadow flex bg-white p-3 rounded-md sm:relative sm:mt-0 sm:shadow-none sm:border-none flex-row items-center">
                            <ul className="">
                                <li><Link href={'/'} className="text-gray-900 text-base font-semibold">Home</Link></li> 
                            </ul>
                            <button type="button" className="ml-3">
                                <LuSearch size={20}/>
                            </button>
                        </div>
                    </div>
                    <button type="buttom" className="sm:hidden" onClick={() => handleMenuAnimate()}>
                        <GiHamburgerMenu size={22}/>
                    </button>
                </div>
            </div>
        </nav>
    );
}
 
export default Nav;