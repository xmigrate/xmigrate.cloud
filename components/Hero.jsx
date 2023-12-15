"use client";

import { React } from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'
import { motion } from "framer-motion"

const Hero = () => {
    const { ref: t1, inView: elementVisible1 } = useInView();
    const { ref: t2, inView: elementVisible2 } = useInView();
    const { ref: t3, inView: elementVisible3 } = useInView();
    return (
        <div className='flex flex-col items-center justify-center mt-[110px] select-none'>
            <div className=" justify-start items-center flex sm:px-[120px] px-0">
                {/* <div className=" w-[273.20px] h-[36.39px] justify-center items-center inline-flex"> */}
                <motion.div ref={t1} initial={{ opacity: 0 }} animate={elementVisible1 ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.3 }} className="w-[273.20px] h-[36.39px] relative bg-opacity-0 rounded-[60px] shadow-inner backdrop-blur-[15px] flex-row flex justify-center items-center border border-indigo-300 border-opacity-20 ">
                    {/* <div className="w-[273.20px] h-[36.39px] rounded-[60px] border border-indigo-300 border-opacity-20 flex flex-row"> */}
                    <div className="text-center text-violet-300 text-base font-normal font-['Inter'] leading-tight tracking-tight">New Update:</div>
                    <div className="text-center text-indigo-300 text-base font-normal font-['Inter'] leading-tight tracking-tight ml-2 mr-1">AI Integration</div>
                    <Image
                        src='/icons/arrow.svg'
                        alt='logo'
                        width={18}
                        height={18}
                        className='object-contain'
                    />
                    <div className='w-[273.20px] h-[36.39px] absolute rounded-[60px] shadow-inner backdrop-blur-2xl' />
                </motion.div>
                <div className="w-[18px] h-[18px] justify-center items-center inline-flex">
                    <div className="w-[18px] h-[18px] relative flex-col justify-start items-start flex" />
                    {/* </div> */}
                </div>
            </div>
            <motion.div ref={t1} initial={{ opacity: 0 }} animate={elementVisible1 ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.1 }} className="text-center text-indigo-100 text-4xl sm:text-6xl max-w-sm sm:max-w-2xl font-bold font-['Inter'] leading-[50px] sm:leading-[70px] mb-4 ">An Opensource Cross <span className='text-blue-200'> Cloud Migration Tool</span></motion.div>
            <motion.div ref={t1} initial={{ opacity: 0 }} animate={elementVisible1 ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.1 }} className=" text-center text-indigo-300 text-lg font-normal font-['Inter'] leading-[31px] px-[20px] lg:px-[160px] xl:px-[420px] ">Xmigrate(pronounced as cross-migrate) is an opensource tool for migrating your VM'sfrom anywhere to cloud and cloud to anywhere seamlessly.</motion.div>
            <div className="justify-center items-start gap-6 inline-flex mt-[32px]">
                <motion.div ref={t1} initial={{ opacity: 0, x: -50 }} animate={elementVisible1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }} transition={{ delay: 0.5 }} className=" pl-[22.23px] pr-[21.77px] pt-[16.22px] pb-[16.78px] bg-slate-800 hover:bg-slate-700 rounded-[58px] justify-center items-center flex ">
                    <a href='#contact' className="w-[103px] h-5 text-center text-violet-300 hover:text-violet-200 text-base font-semibold font-['Inter'] leading-snug">Start Migrate</a>
                </motion.div>
                <motion.div ref={t1} initial={{ opacity: 0, x: 50 }} animate={elementVisible1 ? { opacity: 1, x: 0 } : { opacity: 0, x:0 }} transition={{ delay: 0.5 }} className=" pl-[25px] pr-[24.66px] pt-4 pb-[17.39px] bg-indigo-900 hover:bg-indigo-900 bg-opacity-20 rounded-[58px] border border-slate-800 justify-center items-center flex">
                    <a href='https://www.youtube.com/watch?v=FISJaoUIiOM' target="_blank" className="w-[90px] h-5 text-center text-violet-300 hover:text-violet-200 text-base font-semibold font-['Inter'] leading-snug">View Demo</a>
                </motion.div>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/efcae1abc57e7e0218d0f6d9faf97013b90c57b679fec95e1e588df6183b6c08?"
                className="object-contain object-center justify-center items-center overflow-hidden self-center 2xl:max-w-[1200px] mt-12 max-md:max-w-full max-md:mt-10 "
            />
            <div className="pt-16 flex-col justify-start items-center gap-10 inline-flex">
                <div className="pl-[33.13px] pr-[32.94px] pt-1 pb-[5px] justify-center items-center inline-flex">
                    <motion.div ref={t2} initial={{ opacity: 0 }} animate={elementVisible2 ? { opacity: 1} : { opacity: 0}} transition={{ duration: 0.8 }} className="text-center text-indigo-300 text-base leading-[31px] tracking-wide px-[40px] md:px-[200px] ">Xmigrate supports migration to all 3 major public cloud providers</motion.div>
                </div>
                <motion.div ref={t2} initial={{ opacity: 0 }} animate={elementVisible2 ? { opacity: 1} : { opacity: 0}} transition={{ duration: 0.8 }} className="items-center self-center flex max-w-full justify-between gap-[40px] md:gap-[90px] px-[50px] sm:px-[200px] max-md:flex-wrap max-md:justify-center mb-5">
                    <img
                        loading="lazy"
                        src="/icons/google-cloud-1.png"
                        className="object-contain object-center overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <img
                        loading="lazy"
                        src="/icons/aws.svg"
                        className="object-contain object-center overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="/icons/azure.svg"
                        className="object-contain object-center flex fill-indigo-300 overflow-hidden shrink-0 max-w-full self-start"
                    />
                </motion.div>
                <motion.div ref={t2} initial={{ opacity: 0 }} animate={elementVisible2 ? { opacity: 1} : { opacity: 0}} transition={{ duration: 0.8 }} className="max-w-3xl sm:px-3 px-2 text-center text-indigo-300 text-lg leading-[31px] tracking-wide">Our block level replication of disk enables seamless migration of any type of workloads that are running on a VM. </motion.div>
            </div>
            <motion.div ref={t3} initial={{ opacity: 0 }} animate={elementVisible3 ? { opacity: 1} : { opacity: 0}} transition={{ duration: 0.8 }} id='features' className="text-center mt-12 pt-12 pb-18 text-indigo-100 text-4xl sm:text-5xl font-bold font-['Inter'] leading-[50px] sm:leading-[60px] max-w-[350px] sm:max-w-4xl">Don't settle on <br className='sm:hidden block'/>one cloud,<br/><span className="text-indigo-300"> have a hybrid strategy for recovery</span></motion.div>
            
        </div>
        //  </div>
        // </div>

    )
}

export default Hero