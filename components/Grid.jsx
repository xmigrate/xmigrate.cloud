import React from 'react'
import Image from 'next/image'
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaArrowUpWideShort } from "react-icons/fa6";


const Grid = () => {
    return (
        <div>
            <div className=" flex-col justify-center items-center flex gap-6 md:flex self-center mt-[80px] xl:px-[120px] px-[40px]">
                <div className="self-stretch justify-center items-start gap-6 inline-flex md:flex-row flex-col">
                    
                        <div className="grow shrink basis-0 p-6 inner-shadow-sm bg-white bg-opacity-5 rounded-2xl border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                        <div className="delay-[300ms] duration-[600ms] taos:translate-x-[-24px] taos:opacity-0" data-taos-offset="400">
                            <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                                <Image
                                    src='/icons/lock.svg'
                                    alt='logo'
                                    width={30}
                                    height={30}
                                    className='object-contain'
                                />
                            </div>
                            <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                                <div className="text-center text-indigo-50 text-[21.56px] font-normal font-['Inter'] leading-loose">Data Privacy</div>
                                <div className="text-indigo-300 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Xmigrate tool will be deployed in your environment and no data is send to any third party for any purpose</div>
                            </div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
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
                            <div className="text-center text-indigo-50 text-[21.56px] font-normal font-['Inter'] leading-loose">Migration of Linux VM's</div>
                            <div className="text-indigo-300 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Xmigrate has the capability to migrate Linux VM's from onprem to cloud or cloud to cloud</div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
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
                            <div className="text-center text-indigo-50 text-[21.56px] font-normal font-['Inter'] leading-loose">Agentless Migration</div>
                            <div className="text-indigo-300 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Xmigrate doesn't need any agents to be installed on the VM's which needs to be migrated</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch justify-center items-start gap-6 inline-flex md:flex-row flex-col">
                    <div className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
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
                            <div className=" text-indigo-50 text-[21.56px] font-normal font-['Inter'] leading-[26px]">Environment Footprinting</div>
                            <div className="text-indigo-300 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Efficiently discover the environment of the hosts which needs to be migrated</div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                        <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                            <FaMapMarkedAlt className='text-white' size={30} />
                        </div>
                        <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                            <div className="text-center text-indigo-50 text-[21.56px] font-normal font-['Inter'] leading-loose">Blueprint Dashboard</div>
                            <div className="text-indigo-300 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Design the Cloud environment easily from Blueprint console with footprint data</div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
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
                            <div className="text-center text-indigo-50 text-[21.56px] font-normal font-['Inter'] leading-loose">Manage environments</div>
                            <div className="text-indigo-300 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Create and manage multiple environments by creating multiple projects in Xmigrate</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch justify-center items-start gap-6 inline-flex md:flex-row flex-col">
                    <div className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                        <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                            <Image
                                src='/icons/skip-end-fill-white.svg'
                                alt='logo'
                                width={30}
                                height={30}
                                className='object-contain'
                            />

                        </div>

                        <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                            <div className="text-center text-indigo-50 text-[21.56px] font-normal font-['Inter'] leading-loose">Interrupt Handling</div>
                            <div className="text-indigo-300 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Capability to resume your failed migration from last successful checkpoints</div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                        <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                            <FaArrowUpWideShort className="text-white" size={30} />
                        </div>
                        <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                            <div className="text-center text-indigo-50 text-[21.56px] font-normal font-['Inter'] leading-loose">Bandwidth Control</div>
                            <div className="text-indigo-300 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Control bandwidth usage while you are migrating your servers</div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                        <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                            <Image
                                src='/icons/windows-white.svg'
                                alt='logo'
                                width={25}
                                height={25}
                                className='object-contain'
                            />
                        </div>
                        <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                            <div className="text-center text-indigo-50 text-[21.56px] font-normal font-['Inter'] leading-loose">Windows migration</div>
                            <div className="text-indigo-300 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Migration of IIS windows servers will be supported in xmigrate soon</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch justify-center items-start gap-6 inline-flex md:flex-row flex-col">
                    <div className="grow shrink max-w-[410px] basis-0 p-6 bg-white bg-opacity-5 rounded-2xl inner-shadow-sm border border-indigo-300 border-opacity-10 flex-col justify-start items-start gap-[27px] inline-flex">
                        <div className="w-[55px] h-[55px] justify-center items-center flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900">
                            <Image
                                src='/icons/arrow-growth-white.svg'
                                alt='logo'
                                width={30}
                                height={30}
                                className='object-contain'
                            />
                        </div>
                        <div className="flex-col justify-start items-start gap-[18px] flex h-18 sm:h-28">
                            <div className="text-center text-indigo-50 text-[21.56px] font-normal font-['Inter'] leading-loose">Live migration</div>
                            <div className="text-indigo-300 text-sm font-normal font-['Inter'] leading-normal tracking-tight">Be DR ready with xmigrates cutting edge live migration tech</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Grid