// import React from 'react'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
  const newsletterRef = useRef();

  useEffect(() => {
    const handleScrollToNewsletter = () => {
      if (newsletterRef.current) {
        newsletterRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Attach the event listener for the Contact link
    const contactLink = document.getElementById('contact-link');
    if (contactLink) {
      contactLink.addEventListener('click', handleScrollToNewsletter);
    }

    // Remove the event listener when the component is unmounted
    return () => {
      if (contactLink) {
        contactLink.removeEventListener('click', handleScrollToNewsletter);
      }
    };
  }, []);
  return (
    <nav className='flex flex-row justify-between items-center sm:px-[120px] px-[40px] py-6 w-full'>
      <div id="home"className="text-violet-300 text-[32.24px] font-semibold">
        xmigrate
      </div >
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
      <div className='hidden sm:block'>
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