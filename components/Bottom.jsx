import React from 'react'
import Image from 'next/image'

const Bottom = () => {
    return (
        <div>
            <div className="flex justify-between gap-5 items-center max-md:flex-wrap mt-[175px]">
                <div className="flex grow basis-[0%] flex-col px-5 items-start lg:pl-[120px]">
                    <div className="bg-indigo-200 bg-opacity-0 flex w-[133px] max-w-full flex-col justify-center items-stretch rounded-[60px]">
                        <div className="text-indigo-300 text-center text-base leading-5 tracking-wide whitespace-nowrap border justify-center items-stretch px-5 py-2 rounded-[60px] border-solid border-indigo-300 border-opacity-40 pl-[17px] pr-[17px] inner-shadow">
                            Testimonials
                        </div>
                    </div>
                    <div className='pt-[25px]'><span className="text-violet-300 text-5xl font-semibold font-['Inter'] leading-[60px] ">Exceptional user</span><span className="text-violet-300 text-5xl font-semibold font-['Inter'] leading-[60px]"> <br /></span><span className="text-violet-300 text-5xl font-semibold font-['Inter'] leading-[60px]">satisfaction</span>
                    </div>
                </div>
                <div className="flex grow basis-[0%] flex-col items-stretch mt-2 px-5 lg:pl-[150px] lg:pr-12">
                    <div className="justify-center text-indigo-300 text-lg leading-7 tracking-wide">
                        Create stunning, professional-quality websites in <br />
                        record time with our powerful UI kit. Elevate your <br />
                        SAAS game today!
                    </div>
                    <div className="shadow-sm bg-white bg-opacity-0 flex flex-col justify-center mt-12 pr-16 rounded-[56px] items-start max-md:mt-10 max-md:pr-5">
                        <div className="flex-col overflow-hidden relative flex aspect-[4.3090909090909095] w-[237px] max-w-full justify-center items-stretch">
                            {/* <img
              loading="lazy"
              srcSet="..."
              className="absolute h-full w-full object-cover object-center inset-0"
            /> */}
                            <div className="relative border flex items-center justify-between gap-2 px-7 py-4 rounded-[56px] border-solid border-indigo-300 border-opacity-20 max-md:px-5 bg-veil">
                                <div className="justify-center text-base leading-5 bg-clip-text grow whitespace-nowrap my-auto text-white">
                                    Read more about us
                                </div>
                                <Image
                                    src='/icons/arrow.svg'
                                    alt='logo'
                                    width={18}
                                    height={18}
                                    className='object-contain'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center sm:mx-[100px] lg:pr-[10px] mt-[100px]">
                <div className=" text-indigo-300 text-center text-sm leading-6 tracking-wide whitespace-nowrap">
                    Scaling the world's best and biggest companies
                </div>{" "}
                <div className='flex items-stretch justify-between sm:gap-[90px] md:gap-[90px] gap-9 max-md:flex-wrap max-md:justify-center mt-8'>
                <img
                    loading="lazy"
                    src="/icons/framer.svg"
                    className="aspect-[2.81] object-contain object-center justify-center items-center max-w-full"
                />
                <img
                    loading="lazy"
                    src="/icons/pipedrive.svg"
                    className="aspect-[3.38] object-contain object-center justify-center items-center max-w-full"
                />
                <img
                    loading="lazy"
                    src="/icons/ghost.svg"
                    className="aspect-[2.17] object-contain object-center justify-center items-center max-w-full"
                />
                <img
                    loading="lazy"
                    src="/icons/amazon.svg"
                    className="aspect-[2.29] object-contain object-center justify-center items-center max-w-full"
                />
                <img
                    loading="lazy"
                    src="/icons/basecamp.svg"
                    className="aspect-[3.44] object-contain object-center justify-center items-center max-w-full"
                />
                </div>
            </div>
        </div>
    )
}

export default Bottom