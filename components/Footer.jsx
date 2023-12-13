import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className="flex flex-row items-stretch justify-between gap-2 px-4 max-md:flex-wrap mt-[50px] mx-[40px] sm:mx-[100px] pb-6">
            <a href='https://twitter.com/xmigrateOSS' target='_blank' className="w-[55px] h-[50px] justify-center items-center inline-flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900 hover:w-[60px] hover:h-[55px]">
                <Image
                    src='/icons/x.svg'
                    alt='logo'
                    width={20}
                    height={20}
                    className='object-contain'
                />
            </a>
            <a href='#fb' target='_blank' className="w-[55px] h-[50px] justify-center items-center inline-flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900 hover:w-[60px] hover:h-[55px]">
                <Image
                    src='/icons/fb.svg'
                    alt='logo'
                    width={20}
                    height={20}
                    className='object-contain'
                />
            </a>
            <a href='https://www.linkedin.com/company/xmigrateoss/posts/?feedView=all' target='_blank' className="w-[55px] h-[50px] justify-center items-center inline-flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900 hover:w-[60px] hover:h-[55px]">
                <Image
                    src='/icons/linkedin.svg'
                    alt='logo'
                    width={20}
                    height={20}
                    className='object-contain'
                />
            </a>
            <a href='#ig' target='_blank' className="w-[55px] h-[50px] justify-center items-center inline-flex rounded-full border border-indigo-300 border-opacity-20 bg-gray-900 hover:w-[60px] hover:h-[55px]">
                <Image
                    src='/icons/ig.svg'
                    alt='logo'
                    width={20}
                    height={20}
                    className='object-contain'
                />
            </a>
            <div className="justify-center text-center pt-2 sm:pt-0 text-indigo-300 text-opacity-70 text-sm leading-6 tracking-wide self-center grow whitespace-nowrap my-auto sm:ml-[880px]">
                2023 All rights reserved
            </div>
        </div>
    )
}

export default Footer