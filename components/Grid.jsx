"use client";

import { React } from 'react'
import Image from 'next/image'
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Grid = () => {
    const { ref: s1, inView: gridVisible1 } = useInView();
    const { ref: s2, inView: gridVisible2 } = useInView();
    const { ref: s3, inView: gridVisible3 } = useInView();
    const { ref: s4, inView: gridVisible4 } = useInView();
    const { ref: s5, inView: gridVisible5 } = useInView();
    const { ref: s6, inView: gridVisible6 } = useInView();
    const { ref: s7, inView: gridVisible7 } = useInView();
    const { ref: s8, inView: gridVisible8 } = useInView();
    const { ref: s9, inView: gridVisible9 } = useInView();
    const { ref: s10, inView: gridVisible10 } = useInView();
    return (
        <div className=" flex-col justify-center items-center flex gap-6 md:flex self-center mt-[80px] xl:px-[120px] px-[40px] select-none">
            <div className="self-stretch justify-center items-start gap-6 inline-flex md:flex-row flex-col" >
                <motion.div ref={s1} initial={{ opacity: 0, x: -50 }} animate={gridVisible1 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 0.8 }} className="grow shrink basis-0 p-6 inner-shadow-sm bg-white bg-opacity-5 rounded-2xl border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex" >
                    {/* <div className="delay-[300ms] duration-[600ms] taos:translate-x-[-24px] taos:opacity-0" data-taos-offset="400"> */}
                    <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900" >
                        <Image
                            src='/icons/lock.svg'
                            alt='logo'
                            width={30}
                            height={30}
                            className='object-contain'
                        />
                    </div>
                    <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                        <div className="text-center text-indigo-50 text-[21.56px] font-normal leading-loose">Data Privacy</div>
                        <div className="text-indigo-300 text-sm font-normal leading-normal tracking-tight">Xmigrate tool will be deployed in your environment and no data is send to any third party for any purpose</div>
                    </div>
                </motion.div>
                <motion.div ref={s2} initial={{ opacity: 0, x: -50 }} animate={gridVisible2 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                    <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                        <Image
                            src='/icons/linux-white.svg'
                            alt='logo'
                            width={30}
                            height={30}
                            className='object-contain'
                        />
                    </div>
                    <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                        <div className="text-center text-indigo-50 text-[21.56px] font-normal leading-loose">Migration of Linux VM's</div>
                        <div className="text-indigo-300 text-sm font-normal leading-normal tracking-tight">Xmigrate has the capability to migrate Linux VM's from onprem to cloud or cloud to cloud</div>
                    </div>
                </motion.div>
                <motion.div ref={s3} initial={{ opacity: 0, x: -50 }} animate={gridVisible3 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 1, delay: 0.2 }} className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                    <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                        <Image
                            src='/icons/telegram-white.svg'
                            alt='logo'
                            width={30}
                            height={30}
                            className='object-contain'
                        />
                    </div>
                    <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                        <div className="text-center text-indigo-50 text-[21.56px] font-normal leading-loose">Agentless Migration</div>
                        <div className="text-indigo-300 text-sm font-normal leading-normal tracking-tight">Xmigrate doesn't need any agents to be installed on the VM's which needs to be migrated</div>
                    </div>
                </motion.div>
            </div>
            <div className="self-stretch justify-center items-start gap-6 inline-flex md:flex-row flex-col">
                <motion.div ref={s4} initial={{ opacity: 0, x: -50 }} animate={gridVisible4 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 0.8 }} className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                    <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                        <Image
                            src='/icons/fingerprint-white.svg'
                            alt='logo'
                            width={30}
                            height={30}
                            className='object-contain'
                        />
                    </div>
                    <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                        <div className=" text-indigo-50 text-[21.56px] font-normal leading-[26px]">Environment Footprinting</div>
                        <div className="text-indigo-300 text-sm font-normal leading-normal tracking-tight">Efficiently discover the environment of the hosts which needs to be migrated</div>
                    </div>
                </motion.div>
                <motion.div ref={s5} initial={{ opacity: 0, x: -50 }} animate={gridVisible5 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 0.9 }} className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                    <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                        <FaMapMarkedAlt className='text-white' size={30} />
                    </div>
                    <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                        <div className="text-center text-indigo-50 text-[21.56px] font-normal leading-loose">Blueprint Dashboard</div>
                        <div className="text-indigo-300 text-sm font-normal leading-normal tracking-tight">Design the Cloud environment easily from Blueprint console with footprint data</div>
                    </div>
                </motion.div>
                <motion.div ref={s6} initial={{ opacity: 0, x: -50 }} animate={gridVisible6 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 1 }} className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                    <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                        <Image
                            src='/icons/stack-white.svg'
                            alt='logo'
                            width={30}
                            height={30}
                            className='object-contain'
                        />
                    </div>
                    <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                        <div className="text-center text-indigo-50 text-[21.56px] font-normal leading-loose">Manage environments</div>
                        <div className="text-indigo-300 text-sm font-normal leading-normal tracking-tight">Create and manage multiple environments by creating multiple projects in Xmigrate</div>
                    </div>
                </motion.div>
            </div>
            <div className="self-stretch justify-center items-start gap-6 inline-flex md:flex-row flex-col">
                <motion.div ref={s7} initial={{ opacity: 0, x: -50 }} animate={gridVisible7 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 0.8 }} className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                    <div className='w-full justify-between flex flex-row'>
                        <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                            <Image
                                src='/icons/skip-end-fill-white.svg'
                                alt='logo'
                                width={30}
                                height={30}
                                className='object-contain'
                            />
                        </div>
                        <div className="w-[97px] h-8 relative rounded-[56px] bg-grad-4">
                            <div className="pl-[17px] pr-[15.06px] pt-[5.26px] pb-[5.74px] left-0 top-0 absolute rounded-[56px] justify-center items-center inline-flex">
                                <div className="bg-gradient-to-b from-orange-300 to-white inline-block text-transparent bg-clip-text text-base font-normal leading-tight">Premium</div>
                            </div>
                            <div className="w-[97px] h-8 left-0 top-0 absolute rounded-[56px] border border-yellow-500 border-opacity-20" />
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                        <div className="text-center text-indigo-50 text-[21.56px] font-normal leading-loose">Interrupt Handling</div>
                        <div className="text-indigo-300 text-sm font-normal leading-normal tracking-tight">Capability to resume your failed migration from last successful checkpoints</div>
                    </div>
                </motion.div>
                <motion.div ref={s8} initial={{ opacity: 0, x: -50 }} animate={gridVisible8 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 0.9 }} className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                    <div className='w-full justify-between flex flex-row'>
                        <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                            <FaArrowUpWideShort className="text-white" size={30} />
                        </div>
                        <div className="w-[97px] h-8 relative rounded-[56px] bg-grad-4">
                            <div className="pl-[17px] pr-[15.06px] pt-[6px] pb-[5.74px] left-0 top-0 absolute rounded-[56px] justify-center items-center inline-flex">
                                <div className="bg-gradient-to-b from-orange-300 to-white inline-block text-transparent bg-clip-text text-base font-normal leading-tight">Premium</div>
                            </div>
                            <div className="w-[97px] h-8 left-0 top-0 absolute rounded-[56px] border border-yellow-500 border-opacity-20" />
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                        <div className="text-center text-indigo-50 text-[21.56px] font-normal leading-loose">Bandwidth Control</div>
                        <div className="text-indigo-300 text-sm font-normal leading-normal tracking-tight">Control bandwidth usage while you are migrating your servers</div>
                    </div>
                </motion.div>
                <motion.div ref={s9} initial={{ opacity: 0, x: -50 }} animate={gridVisible9 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 1 }} className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                    <div className='w-full justify-between flex flex-row'>
                        <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                            <Image
                                src='/icons/windows-white.svg'
                                alt='logo'
                                width={25}
                                height={25}
                                className='object-contain'
                            />
                        </div>
                        <div className="w-[141px] h-8 relative rounded-[56px] bg-grad-4">
                            <div className="pl-5 pr-[15.06px] pt-[4.76px] pb-[6.24px] left-0 top-0 absolute rounded-[56px] justify-center items-center inline-flex">
                                <div className="bg-gradient-to-b from-blue-800 to-white inline-block text-transparent bg-clip-text text-base font-normal leading-tight">Coming Soon</div>
                            </div>
                            <div className="w-[141px] h-8 left-0 top-0 absolute rounded-[56px] border border-indigo-300" />
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                        <div className="text-center text-indigo-50 text-[21.56px] font-normal leading-loose">Windows migration</div>
                        <div className="text-indigo-300 text-sm font-normal leading-normal tracking-tight">Migration of IIS windows servers will be supported in xmigrate soon</div>
                    </div>
                </motion.div>
            </div>
            <div className="self-stretch justify-center items-start gap-6 inline-flex md:flex-row flex-col">
                <motion.div ref={s10} initial={{ opacity: 0, x: -50 }} animate={gridVisible10 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 0.9 }} className="grow shrink max-w-[410px] basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                    <div className='w-full justify-between flex flex-row'>
                        <div className="w-[55px] h-[55px] items-center justify-center flex flex-row rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                            <Image
                                src='/icons/arrow-growth-white.svg'
                                alt='logo'
                                width={30}
                                height={30}
                                className='object-contain'
                            />
                        </div>
                        <div className="w-[141px] h-8 relative rounded-[56px] bg-grad-4">
                            <div className="pl-5 pr-[15.06px] pt-[4.76px] pb-[6.24px] left-0 top-0 absolute rounded-[56px] justify-center items-center inline-flex">
                                <div className="bg-gradient-to-b from-blue-800 to-white inline-block text-transparent bg-clip-text text-base font-normal leading-tight">Coming Soon</div>
                            </div>
                            <div className="w-[141px] h-8 left-0 top-0 absolute rounded-[56px] border border-indigo-300"/>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                        <div className="text-center text-indigo-50 text-[21.56px] font-normal leading-loose">Live migration</div>
                        <div className="text-indigo-300 text-sm font-normal leading-normal tracking-tight">Be DR ready with xmigrates cutting edge live migration tech</div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Grid