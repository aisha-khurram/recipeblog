"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlinePinterest } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

export default function Header () {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-purple-400 border-gray-200 dark:bg-gray-900">
        <div className='max-w-screen-1440px flex flex-wrap items-center justify-between mx-auto p-4'>
            <div className='flex items-center'>
                <Image
                src="/images/logo.png"
                alt="logo"
                width={78.7}
                height={78.7}
                />
            </div>
            <nav className='hidden md:flex space-x-8 items-center'>
                <a href="#" className='text-slate-800 font-bold text-base hover:text-black'>Home</a>
                <a href="#" className='text-slate-800 font-bold text-base hover:text-black'>Recipes</a>
                <a href="#" className='text-slate-800 font-bold text-base hover:text-black'>About</a>
               
                
            </nav>
            <div className='flex items-center space x-6 gap-2'>
              
                <FaFacebookMessenger className="text-xl mt-2 rounded-sm"/>
               <FaInstagramSquare className='text-xl mt-2 rounded-sm' />
               <AiOutlinePinterest className='text-xl mt-2 rounded-sm' />
               <BiLogoGmail className='text-xl mt-2 rounded-sm' />
        </div>
      
    </div>
    </div>
    );
};

