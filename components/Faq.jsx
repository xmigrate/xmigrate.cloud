import React from 'react'

const Faq = () => {
    return (
        <div className="flex justify-between gap-5 items-start max-md:flex-wrap mt-[210px] mx-5 sm:mx-[100px]">
            <div className="flex grow basis-[0%] flex-col px-5 items-start">
                <div className="shadow-2xl backdrop-blur-[7.5px] bg-indigo-200 bg-opacity-0 flex aspect-[1.83] flex-col justify-center items-stretch rounded-[60px]">
                    <div className="justify-center text-indigo-300 text-center text-base leading-5 tracking-wide border aspect-[1.83] items-stretch px-5 py-3 rounded-[60px] border-solid border-indigo-300 border-opacity-40 inner-shadow">
                        FAQ
                    </div>
                </div>
                <div className="justify-center text-5xl leading-[60px] tracking-tight bg-clip-text self-stretch mt-9 max-md:text-4xl max-md:leading-[56px] text-white">
                    <span className="text-violet-200 text-5xl font-bold font-['Inter'] leading-[60px]">Frequently Asked</span><span className="text-violet-300 text-5xl font-bold font-['Inter'] leading-[60px]"> <br /></span><span className="text-violet-300 text-5xl font-bold font-['Inter'] leading-[60px]">Questions</span>
                </div>
            </div>
            <div className="flex grow basis-[0%] flex-col items-stretch mt-2.5 max-md:max-w-full">
                <div className="flex items-center justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="justify-center text-violet-200 text-lg leading-8 tracking-wide grow whitespace-nowrap my-auto">
                        How can I get started with your<br className='sm:hidden block'/> SaaS platform?
                    </div>
                    <button id="dropdownMenuButton1" className='collapsible'>
                    <img
                        loading="lazy"
                        src="/icons/expand.svg"
                        className="aspect-square object-contain object-center w-11 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                    </button>
                </div>
                <div className="bg-indigo-300 bg-opacity-40 flex shrink-0 h-0.5 flex-col mt-11 max-md:max-w-full max-md:mt-10" />
                <div className="flex items-center justify-between gap-5 mt-11 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <div className="justify-center text-violet-200 text-lg leading-8 tracking-wide grow whitespace-nowrap my-auto">
                        How many projects does your<br className='sm:hidden block'/> cloud contains?
                    </div>
                    <button>
                    <img
                        loading="lazy"
                        src="/icons/expand.svg"
                        className="aspect-square object-contain object-center w-11 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                    </button>
                </div>
                <div className="bg-indigo-300 bg-opacity-40 flex shrink-0 h-0.5 flex-col mt-11 max-md:max-w-full max-md:mt-10" />
                <div className="flex items-center justify-between gap-5 mt-11 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <div className="justify-center text-violet-200 text-lg leading-8 tracking-wide grow whitespace-nowrap my-auto">
                        Is it possible to change layout?
                    </div>
                    <button>
                    <img
                        loading="lazy"
                        src="/icons/expand.svg"
                        className="aspect-square object-contain object-center w-11 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                    </button>
                </div>
                <div className="bg-indigo-300 bg-opacity-40 flex shrink-0 h-0.5 flex-col mt-11 max-md:max-w-full max-md:mt-10" />
                <div className="flex items-center justify-between gap-5 mt-11 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <div className="justify-center text-violet-200 text-lg leading-8 tracking-wide grow whitespace-nowrap my-auto">
                        Can you help me with the build?
                    </div>
                    <button>
                    <img
                        loading="lazy"
                        src="/icons/expand.svg"
                        className="aspect-square object-contain object-center w-11 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                    </button>
                </div>
                <div className="bg-indigo-300 bg-opacity-40 flex shrink-0 h-0.5 flex-col mt-11 max-md:max-w-full max-md:mt-10" />
                <div className="flex items-center justify-between gap-5 mt-11 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <div className="justify-center text-violet-200 text-lg leading-8 tracking-wide grow whitespace-nowrap my-auto">
                        What is the pricing of this product?
                    </div>
                    <button>
                    <img
                        loading="lazy"
                        src="/icons/expand.svg"
                        className="aspect-square object-contain object-center w-11 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Faq