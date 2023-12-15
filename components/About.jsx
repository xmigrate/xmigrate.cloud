import React from 'react'
// import { Link } from 'react-scroll'
import Link from 'next/link';

const About = () => {
    return (
        <div>
            <div className="flex flex-row items-stretch justify-between gap-5 px-5 max-md:flex-wrap max-md:justify-between mx-0 sm:mx-[125px] mt-[200px]">
                <div className="flex basis-[0%] flex-col items-stretch self-start">
                    <div className="justify-center text-xl leading-8 tracking-wide bg-clip-text whitespace-nowrap text-indigo-100">
                        Get started
                    </div>
                    <a href='#create' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-12 max-md:mt-10">
                        Create Account
                    </a>
                    <a href='#signin' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-7">
                        Sign In
                    </a>
                </div>
                <div className='flex flex-row gap-[110px]'>
                    <div className="flex basis-[0%] flex-col items-stretch">
                        <div className="justify-center text-xl leading-8 tracking-wide bg-clip-text whitespace-nowrap text-indigo-100">
                            Navigation
                        </div>
                        <a href='#home' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-11 max-md:mt-10">
                            Home
                        </a>
                        <a href='#home' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-7">
                            About
                        </a>
                        <a href='#features' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-7">
                            Features
                        </a>
                        <a href='https://docs.xmigrate.cloud/en/latest/' target='_blank' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-7">
                            Docs
                        </a>
                        <Link href='#contact' className="justify-center text-indigo-300 hover:text-indigo-200 text-lg leading-7 tracking-wide whitespace-nowrap mt-6">
                            Contact
                        </Link>
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