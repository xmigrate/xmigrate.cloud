"use client";

import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
//import { Link } from 'react-scroll'
import Link from 'next/link';

const About = () => {
    const { ref: t1, inView: aboutVisible1 } = useInView();
    const { ref: t2, inView: aboutVisible2 } = useInView();
    const { ref: t3, inView: aboutVisible3 } = useInView();
    const { ref: t4, inView: aboutVisible4 } = useInView();
    const { ref: t5, inView: aboutVisible5 } = useInView();
    const { ref: t6, inView: aboutVisible6 } = useInView();
    return (
        <div>
            <div className="flex flex-row items-stretch justify-between gap-5 px-5 max-md:flex-wrap max-md:justify-between mx-0 sm:mx-[125px] mt-[200px] select-none">
                <div className="flex basis-[0%] flex-col items-stretch self-start">
                    <motion.div ref={t1} initial={{ opacity: 0, y: -40 }} animate={aboutVisible1 ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ duration: 0.6 }} className="justify-center text-xl leading-8 tracking-wide bg-clip-text whitespace-nowrap text-indigo-100">
                        Get started
                    </motion.div>
                    <motion.a ref={t2} initial={{ opacity: 0, y: -40 }} animate={aboutVisible2 ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ duration: 0.6 }} href='#contact' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-12 max-md:mt-10 cursor-pointer">
                        Create Account
                    </motion.a>
                    <motion.a ref={t3} initial={{ opacity: 0, y: -40 }} animate={aboutVisible3 ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ duration: 0.6 }} href='#contact' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-7 cursor-pointer">
                        Sign In
                    </motion.a>
                </div>
                <div className='flex flex-row gap-[110px]'>
                    <div className="flex basis-[0%] flex-col items-stretch">
                        <motion.div ref={t1} initial={{ opacity: 0, y: -40 }} animate={aboutVisible1 ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ duration: 0.6 }} className="justify-center text-xl leading-8 tracking-wide bg-clip-text whitespace-nowrap text-indigo-100">
                            Navigation
                        </motion.div>
                        <motion.a ref={t2} initial={{ opacity: 0, y: -40 }} animate={aboutVisible2 ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ duration: 0.6 }} href='#home' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-11 max-md:mt-10 cursor-pointer">
                            Home
                        </motion.a>
                        <motion.a ref={t3} initial={{ opacity: 0, y: -40 }} animate={aboutVisible3 ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ duration: 0.6 }} href='#home' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-7 cursor-pointer">
                            About
                        </motion.a>
                        <motion.a ref={t4} initial={{ opacity: 0, y: -40 }} animate={aboutVisible4 ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ duration: 0.6 }} href='#features' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-7 cursor-pointer">
                            Features
                        </motion.a>
                        <motion.a ref={t5} initial={{ opacity: 0, y: -40 }} animate={aboutVisible5 ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ duration: 0.6 }} href='https://docs.xmigrate.cloud/en/latest/' target='_blank' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-7 cursor-pointer">
                            Docs
                        </motion.a>
                        <motion.a ref={t6} initial={{ opacity: 0, y: -40 }} animate={aboutVisible6 ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ duration: 0.6 }} href='#contact' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-6 cursor-pointer">
                            Contact
                        </motion.a>
                    </div>
                    {/* <div className="self-start max-md:max-w-full">
                        <div className="gap-5 flex max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                                <div className="flex grow flex-col items-stretch max-md:mt-10">
                                    <div className="justify-center text-xl leading-8 tracking-wide bg-clip-text whitespace-nowrap text-indigo-100">
                                        Navigation
                                    </div>
                                    <div className="justify-center text-indigo-300 text-lg leading-7 tracking-wide whitespace-nowrap mt-11 max-md:mt-10">
                                        Latest Insights
                                    </div>
                                    <div className="justify-center text-indigo-300 text-lg leading-7 tracking-wide whitespace-nowrap mt-6">
                                        Contact Us
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="items-stretch w-[58%] max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col items-stretch max-md:mt-10">
                            <div className="justify-center text-xl leading-8 tracking-wide bg-clip-text whitespace-nowrap text-indigo-100">
                                Utility
                            </div>
                            <div className="justify-center text-indigo-300 text-lg leading-7 tracking-wide whitespace-nowrap mt-11 max-md:mt-10">
                                Terms and Conditions
                            </div>
                            <div className="justify-center text-indigo-300 text-lg leading-7 tracking-wide whitespace-nowrap mt-7">
                                Privacy policy
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <hr className=" h-[2px] mx-[120px] bg-gray-100 border-0 my-12 dark:bg-gray-700 " />
        </div>
    )
}

export default About