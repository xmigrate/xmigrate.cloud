"use client";

// import { React, useState } from 'react'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className='flex flex-row justify-between items-center sm:px-[120px] pl-[20px] py-6 w-full'>
      <div id="home"className="text-violet-300 text-[32.24px] font-semibold">
        xmigrate
      </div >
      <div onClick={handleNav} className='lg:hidden pr-10'>
        <AiOutlineMenu size={25} />
      </div>
      <div className={
        menuOpen ? "fixed z-30 left-0 top-0 w-[80%] sm:hidden h-screen  bg-gradient-to-t from-blue-500 to-purple-500 shadow-md backdrop-blur-lg backdrop-filter p-10 ease-in duration-500 bg-grad-3" : "fixed left-[-100%] top-0 bottom-0 p-10 ease-in duration-500"
      }>
        <div className='flex-col py-8'>
          <ul>
            <Link href="#">
              <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer text-indigo-300 text-3xl font-bold text-center '>
                About
                {/* <hr className=" h-[5px] mx-[60px] border-0 my-1 bg-gray-800 " /> */}
              </li>
            </Link>
            <Link href="#">
              <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer text-indigo-300 text-3xl font-bold text-center'>
                Docs
                {/* <hr className=" h-[5px] mx-[70px] border-0 my-1 bg-gray-800 " /> */}
              </li>
            </Link>
            <Link href="#">
              <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer text-indigo-300 text-3xl font-bold text-center'>
                Features
                {/* <hr className=" h-[5px] mx-[40px] border-0 my-1 bg-gray-800 " /> */}
              </li>
            </Link>
            <Link href="#">
              <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer text-indigo-300 text-3xl font-bold text-center'>
                Contact
                {/* <hr className=" h-[5px] mx-[50px] border-0 my-1 bg-gray-800 " /> */}
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className=" rounded-[60px] border border-indigo-300 border-opacity-20 hidden lg:block hover:p">
        <div className="w-[420px] h-[55.19px] relative bg-white bg-opacity-[0.01] rounded-[60px] shadow-inner backdrop-blur-[0px]">
          <div className="w-[43.47px] h-[19.19px] left-[30px] top-[18px] absolute justify-center items-center inline-flex">
            <a href="#about" className="w-[43.67px] h-[19px] text-violet-300 text-[14.88px] leading-tight tracking-tight hover:text-violet-200">About</a>
          </div>
          <div className="w-1 h-1 left-[100px] top-[25.59px] absolute bg-indigo-300 rounded" />
          <div className="w-[49.75px] h-[19.19px] left-[130px] top-[18px] absolute justify-center items-center inline-flex">
            <a href="https://docs.xmigrate.cloud/en/latest/" target='_blank' className="w-[49.95px] h-[19px] text-violet-300 text-sm leading-tight tracking-tight hover:text-violet-200">Docs</a>
          </div>
          <div className="w-1 h-1 left-[190px] top-[25.59px] absolute bg-indigo-300 rounded" />
          <div className="w-[62.28px] h-[19.19px] left-[220px] top-[18px] absolute justify-center items-center inline-flex">
            <Link href='#features' className="w-[62.48px] h-[19px] text-violet-300 text-sm leading-tight tracking-tight hover:text-violet-200">Features</Link>
          </div>
          <div className="w-1 h-1 left-[300px] top-[25.59px] absolute bg-indigo-300 rounded" />
          <div className="w-[57.28px] h-[19.19px] left-[330px] top-[18px] absolute justify-center items-center inline-flex">
            <Link  href='#contact' className="w-[57.48px] h-[19px] text-violet-300 text-sm leading-tight tracking-tight hover:text-violet-200">Contact</Link>
          </div>
          {/* <div className="w-[594.38px] h-[55.19px] left-0 top-0 absolute rounded-[60px] border border-indigo-300 border-opacity-10" /> */}
        </div>
      </div>
      <div className='hidden lg:block'>
        <div className="max-w-[240px] grow h-[55px] rounded-[56px] border border-indigo-300 border-opacity-20 flex flex-row items-center px-[27px] py-[17px] bg-veil">
          <Link href='#contact' className="text-violet-300 text-base font-normal leading-tight ">Get Started</Link>
          <div className="w-1 h-1 bg-indigo-300 rounded mx-[10px]" />
          <div className=" text-indigo-300 text-opacity-60 text-[15px] leading-tight">its free</div>
          <div className="relative flex-col justify-start items-start inline-flex ml-1" />
          <Image
            src='/icons/arrow.svg'
            alt='logo'
            width={18}
            height={18}
            className='object-contain'
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar