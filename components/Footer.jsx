"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const { ref: t1, inView: footerVisible1 } = useInView();
    return (
        <div className="flex flex-row items-stretch  justify-center sm:justify-between gap-4 px-4 max-md:flex-wrap mt-[50px] mx-[40px] sm:mx-[120px] pb-6 select-none">
            <div className=' flex flex-row gap-3'>
            <motion.a ref={t1} initial={{ opacity: 0, x: -50 }} animate={footerVisible1 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 0.8 }} href='https://twitter.com/xmigrateOSS' target='_blank' className="w-[50px] h-[50px] justify-center items-center inline-flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900 hover:w-[60px] hover:h-[55px]">
                <Image
                    src='/icons/x.svg'
                    alt='logo'
                    width={20}
                    height={20}
                    className='object-contain'
                />
            </motion.a>
            <motion.a ref={t1} initial={{ opacity: 0, x: -70 }} animate={footerVisible1 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 0.6 }} href='https://www.linkedin.com/company/xmigrateoss/posts/?feedView=all' target='_blank' className="w-[50px] h-[50px] justify-center items-center inline-flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900 hover:w-[60px] hover:h-[55px]">
                <Image
                    src='/icons/linkedin.svg'
                    alt='logo'
                    width={20}
                    height={20}
                    className='object-contain'
                />
            </motion.a>
            </div>
            {/* <motion.a ref={t1} initial={{ opacity: 0, x: -60 }} animate={footerVisible1 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 0.7 }} href='#fb' target='_blank' className="w-[55px] h-[50px] justify-center items-center inline-flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900 hover:w-[60px] hover:h-[55px]">
                <Image
                    src='/icons/fb.svg'
                    alt='logo'
                    width={20}
                    height={20}
                    className='object-contain'
                />
            </motion.a> */}
            
            {/* <motion.a ref={t1} initial={{ opacity: 0, x: -80 }} animate={footerVisible1 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 0.5 }} href='#ig' target='_blank' className="w-[55px] h-[50px] justify-center items-center inline-flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900 hover:w-[60px] hover:h-[55px]">
                <Image
                    src='/icons/ig.svg'
                    alt='logo'
                    width={20}
                    height={20}
                    className='object-contain'
                />
            </motion.a> */}
            <div className=" text-center pt-2 sm:pt-0 text-indigo-300 text-opacity-70 text-sm leading-6 tracking-wide whitespace-nowrap my-auto ">
                2023 All rights reserved
            </div>
        </div>
    )
}

export default Footer