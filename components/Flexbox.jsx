"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Flexbox = () => {
    const { ref: f1, inView: flexVisible1 } = useInView();
    const { ref: f2, inView: flexVisible2 } = useInView();
    const { ref: f3, inView: flexVisible3 } = useInView();
    return (
        <div className='flex flex-col items-center justify-center sm:px-[120px] px-2 mt-[150px] select-none'>
            <motion.div
                ref={f1}
                initial={{ opacity: 0 }}
                animate={flexVisible1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 }}
                className=" justify-start items-center flex">
                {/* <div className=" w-[273.20px] h-[36.39px] justify-center items-center inline-flex"> */}
                <div className="w-[273px] h-[36.39px] relative bg-opacity-0 rounded-[60px] shadow-inner backdrop-blur-[15px] flex-row flex justify-center items-center border border-indigo-300 border-opacity-20">
                    {/* <div className="w-[273.20px] h-[36.39px] rounded-[60px] border border-indigo-300 border-opacity-20 flex flex-row"> */}
                    <div className="text-center text-violet-300 text-base font-normal leading-tight tracking-tight">New Update:</div>
                    <div className="text-center text-indigo-300 text-base font-normal leading-tight tracking-tight ml-2 mr-1">AI Integration
                    </div>
                    <Image
                        src='/icons/arrow.svg'
                        alt='logo'
                        width={18}
                        height={18}
                        className='object-contain'
                    />
                    <div className='w-[273px] h-[36.39px] absolute rounded-[60px] shadow-inner backdrop-blur-2xl'/>
                </div>
            </motion.div>
            <motion.div 
                ref={f2} 
                initial={{ opacity: 0 }} 
                animate={flexVisible2 ? { opacity: 1 } : { opacity: 0 }} 
                transition={{ delay: 0.2 }} 
                className="text-center bg-gradient-to-b from-indigo-50 to-indigo-300 inline-block text-transparent bg-clip-text text-[46.88px] font-bold leading-[60px] mt-4">Supercharge your limits
            </motion.div>
            <motion.div 
                ref={f2} 
                initial={{ opacity: 0 }} 
                animate={flexVisible2 ? { opacity: 1 } : { opacity: 0 }} 
                transition={{ delay: 0.2 }} 
                className="text-center text-indigo-300 text-sm font-normal leading-normal tracking-tight mt-10 mb-[60px]">Xmigrate team invite everyone togive this tool a try and give feedback.<br className='hidden sm:block' /> We are inviting each one of your contribution
            </motion.div>
            <div className="flex flex-col items-stretch">
                <div className="w-full px-2 max-md:max-w-full max-w-screen-xl:max-w-full">
                    <div className="gap-5 flex max-xl:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch xl:w-3/12 w-full max-md:w-full max-md:ml-0 h-[600px] sm:h-[350px] xl:h-auto">
                            <motion.div
                                ref={f2}
                                initial={{ opacity: 0, x: -10 }}
                                animate={flexVisible2 ? { opacity: 1, x: 0 } : { opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex grow flex-col justify-end items-stretch w-full rounded-3xl max-md:mt-7 bg-grad-3 bg-slate-700 bg-opacity-20 border border-solid border-white border-opacity-10 overflow-hidden relative"
                            >
                                <img
                                        loading="lazy"
                                        src="/image/logo-round.svg"
                                        className="absolute bottom-[330px] w-full h-full object-cover rotate-infinite overflow-visible"
                                        
                                    />
                                {/* <div className="border flex flex-col items-stretch rounded-3xl border-solid border-white border-opacity-10 w-full"> */}
                                <div className="flex-col justify-center items-stretch overflow-hidden relative flex w-full px-[20px] py-12 max-md:px-5">
                                    
                                    <div className="relative justify-center text-indigo-50 text-center text-2xl font-semibold leading-8 ">
                                        Supports migration of all the major Linux operating systems
                                    </div>
                                    <div className="relative justify-center text-indigo-50 text-center text-base leading-6 tracking-wide mt-7">
                                        Get servers restored to any of the supported cloud which performs as same as servers build and deployed natively on cloud
                                    </div>
                                    {/* Additional content */}
                                </div>
                                {/* </div> */}
                            </motion.div>
                        </div>
                        <div className="flex flex-col items-stretch w-full xl:w-6/12 max-md:w-full max-md:ml-0 ">
                            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-7 ">
                                <motion.div
                                    ref={f3}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={flexVisible3 ? { opacity: 1, y: 0 } : { opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="bg-indigo-300 bg-opacity-10 flex flex-col justify-center items-stretch rounded-3xl max-md:max-w-full bg-grad-3">
                                    <div className="border flex flex-col pl-7 pr-20 py-11 rounded-3xl border-solid border-indigo-300 border-opacity-20 items-start max-md:max-w-full max-md:px-5">
                                        <div className="justify-center text-indigo-50 text-center text-2xl font-semibold leading-8 whitespace-nowrap">
                                            Real time team chat
                                        </div>
                                        <div className="justify-center text-indigo-300 text-sm leading-6 tracking-wide mt-6 mb-20 max-md:mb-10">
                                            Minimize your RPO with real time
                                            <br />
                                            data replication
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    ref={f3}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={flexVisible3 ? { opacity: 1, y: 0 } : { opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex-col overflow-hidden relative flex min-h-[270px] w-full justify-center items-center mt-7 px-16 py-12 max-md:max-w-full max-md:px-5 rounded-3xl border border-solid border-white border-opacity-10">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb8d22d138831528621cea3537bd5cd2593ce6debcb76f710a8b168065659e43?"
                                        className="absolute h-full w-full object-cover object-center inset-0"
                                    />
                                    <div className="relative justify-center whitespace-nowrap mt-16 mb-10 max-md:mt-10">
                                        <Image
                                            src='/icons/logo.svg'
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            ref={f3}
                            initial={{ opacity: 0, x: 10 }}
                            animate={flexVisible3 ? { opacity: 1, x: 0 } : { opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-stretch w-full xl:w-3/12 max-md:w-full max-md:ml-0 h-[600px] sm:h-[350px] xl:h-auto">
                            <div className="flex grow flex-col justify-end items-stretch w-full rounded-3xl max-md:mt-7 bg-gradient-to-b from-violet-400 to-violet-600 px-[16px] border border-solid border-white border-opacity-10">
                                {/* <div className="border flex flex-col items-stretch rounded-3xl border-solid border-white border-opacity-10 w-full"> */}
                                <div className="flex-col justify-center items-stretch overflow-hidden relative flex w-full py-12 max-md:px-5">
                                    {/* <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b0bee977e942ba8c2a171c532bb728b17842569a8a1523dd38d453a2e796f13?"
                                            className="absolute h-full w-full object-cover object-left inset-0"
                                        /> */}
                                    <div className="relative justify-center pr-5 text-slate-950 text-center text-2xl font-semibold leading-8 max-md:mt-10 px-5">
                                        Best user experience
                                    </div>
                                    <div className="relative justify-center text-slate-950 text-center text-base leading-6 tracking-wide mt-7 ">
                                        You don't need to be a migration specialist anymore. Be it a junior engineer, do the migrations at ease.
                                    </div>
                                    {/* <div className="relative justify-center text-slate-950 text-center text-base leading-6 tracking-wide mt-1">
                                            professional-quality <br />
                                            websites
                                        </div> */}
                                </div>
                                {/* </div> */}
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* <div className="w-full mt-7 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <motion.div ref={f4} initial={{ opacity: 0 }} animate={flexVisible4 ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                            <div className="shadow-sm backdrop-blur-none bg-white bg-opacity-0 flex grow flex-col justify-center items-stretch w-full rounded-3xl max-md:max-w-full max-md:mt-7">
                                <div className="flex-col overflow-hidden relative flex min-h-[296px] w-full justify-center items-stretch max-md:max-w-full">
                                    <div className="relative pl-8 rounded-3xl border-2 border-solid border-white border-opacity-10 max-md:max-w-full max-md:pl-5 bg-grad-2">
                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                            <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
                                                <div className="relative flex flex-col items-stretch my-auto max-md:mt-10">
                                                    <div className="justify-center text-indigo-50 text-2xl font-semibold leading-8">
                                                        Easy cloud migration
                                                    </div>
                                                    <div className="justify-center text-indigo-300 text-sm leading-6 tracking-wide mt-32 max-md:mt-10">
                                                        Create stunning, <br />
                                                        professional-quality <br />
                                                        websites
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-stretch w-[71%] ml-5 max-md:w-full max-md:ml-0">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e23be01bcc6fb0b3abccfc365ac08632c1fcddd9efdfe1eb3f55a23ab8a0eb1?"
                                                    className="aspect-[1.16] object-cover object-right justify-center items-center overflow-hidden grow max-md:mt-10"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div ref={f4} initial={{ opacity: 0 }} animate={flexVisible4 ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex-col overflow-hidden relative flex min-h-[296px] grow justify-center items-stretch max-md:max-w-full max-md:mt-7">
                                <div className="relative pl-8 rounded-3xl border-2 border-solid border-white border-opacity-10 max-md:max-w-full max-md:pl-5 bg-grad-2">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
                                            <div className="relative flex flex-col items-stretch my-auto max-md:mt-10">
                                                <div className="justify-center text-indigo-50 text-2xl font-semibold leading-8 -mb-[12px]">
                                                    Customisable<br /> cloud migration
                                                </div>
                                                <div className="justify-center text-indigo-300 text-sm leading-6 tracking-wide mt-32 max-md:mt-10">
                                                    Create stunning, <br />
                                                    professional-quality <br />
                                                    websites
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[71%] ml-5 max-md:w-full max-md:ml-0">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/59b2bba35ed10a869fb17a8c1862f39d1225270709dd3b353478ba8c0e04996a?"
                                                className="aspect-[1.16] object-contain object-center w-full justify-center items-center overflow-hidden grow max-md:mt-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div> */}
            </div>
        </div>

    )
}

export default Flexbox