import React from 'react'
import Image from 'next/image'

const Flexbox = () => {
    return (
        <div className='flex flex-col items-center justify-center sm:px-[120px] px-5 mt-[150px]'>
            <div className=" justify-start items-center flex">
                {/* <div className=" w-[273.20px] h-[36.39px] justify-center items-center inline-flex"> */}
                <div className="w-[273.20px] h-[36.39px] relative bg-opacity-0 rounded-[60px] shadow-inner backdrop-blur-[15px] flex-row flex justify-center items-center border border-indigo-300 border-opacity-20">
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
                </div>
            </div>
            <div className="text-center text-violet-200 text-[46.88px] font-bold font-['Inter'] leading-[60px] mt-4">Supercharge your limits</div>
            <div className="text-center text-indigo-300 text-sm font-normal font-['Inter'] leading-normal tracking-tight mt-10 mb-[60px]">Xmigrate team invite everyone togive this tool a try and give feedback.<br className='hidden sm:block'/> We are inviting each one of your contribution</div>
            <div className="flex flex-col items-stretch">
                <div className="w-full px-2 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                            {/* <img
              loading="lazy"
              srcSet="..."
              className="aspect-[0.51] object-contain object-center w-[290px] overflow-hidden shrink-0 max-w-full grow max-md:mt-7"
            /> */}<div className="flex grow flex-col justify-center items-stretch w-full rounded-3xl max-md:mt-7 bg-gradient-to-b from-violet-400 to-violet-500">
                                <div className="border flex flex-col items-stretch pt-3 rounded-3xl border-solid border-white border-opacity-10">
                                    <div className="flex-col justify-center items-stretch overflow-hidden relative flex aspect-[0.5206463195691203] w-full py-12 max-md:px-5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b0bee977e942ba8c2a171c532bb728b17842569a8a1523dd38d453a2e796f13?"
                                            className="absolute h-full object-cover object-left inset-0" 
                                        />
                                        <div className="relative justify-center text-slate-950 text-center text-2xl font-semibold leading-8 mt-80 max-md:mt-10">
                                            Modern and <br />
                                            Beautiful UI
                                        </div>
                                        <div className="relative justify-center text-slate-950 text-center text-base leading-6 tracking-wide whitespace-nowrap mt-7">
                                            Create stunning,
                                        </div>
                                        <div className="relative justify-center text-slate-950 text-center text-base leading-6 tracking-wide mt-1">
                                            professional-quality <br />
                                            websites
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0 bg-grad-3">
                            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-7 ">
                                <div className="bg-indigo-300 bg-opacity-10 flex flex-col justify-center items-stretch rounded-3xl max-md:max-w-full ">
                                    <div className="border flex flex-col pl-7 pr-20 py-11 rounded-3xl border-solid border-indigo-300 border-opacity-20 items-start max-md:max-w-full max-md:px-5">
                                        <div className="justify-center text-indigo-50 text-center text-2xl font-semibold leading-8 whitespace-nowrap">
                                            Real time team chat
                                        </div>
                                        <div className="justify-center text-indigo-300 text-sm leading-6 tracking-wide mt-6 mb-20 max-md:mb-10">
                                            Create stunning, professional-
                                            <br />
                                            quality websites
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-col overflow-hidden relative flex min-h-[270px] w-full justify-center items-center mt-7 px-16 py-12 max-md:max-w-full max-md:px-5 rounded-3xl">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb8d22d138831528621cea3537bd5cd2593ce6debcb76f710a8b168065659e43?"
                                        className="absolute h-full w-full object-cover object-center inset-0"
                                    />
                                    <div className="relative justify-center text-4xl font-bold leading-10 bg-clip-text whitespace-nowrap mt-16 mb-10 max-md:mt-10 text-white">
                                        xmigrate
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0 ">
                            <div className="flex grow flex-col justify-center items-stretch w-full rounded-3xl max-md:mt-7 bg-gradient-to-b from-violet-400 to-violet-500">
                                <div className="border flex flex-col items-stretch pt-3 rounded-3xl border-solid border-white border-opacity-10">
                                    <div className="flex-col justify-center items-stretch overflow-hidden relative flex aspect-[0.5206463195691203] w-full px-[50px] py-12 max-md:px-5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b0bee977e942ba8c2a171c532bb728b17842569a8a1523dd38d453a2e796f13?"
                                            className="absolute h-full w-full object-cover object-left inset-0"
                                        />
                                        <div className="relative justify-center text-slate-950 text-center text-2xl font-semibold leading-8 mt-80 max-md:mt-10">
                                            Modern and <br />
                                            Beautiful UI
                                        </div>
                                        <div className="relative justify-center text-slate-950 text-center text-base leading-6 tracking-wide whitespace-nowrap mt-7">
                                            Create stunning,
                                        </div>
                                        <div className="relative justify-center text-slate-950 text-center text-base leading-6 tracking-wide mt-1">
                                            professional-quality <br />
                                            websites
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-7 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                            <div className="shadow-sm backdrop-blur-none bg-white bg-opacity-0 flex grow flex-col justify-center items-stretch w-full rounded-3xl max-md:max-w-full max-md:mt-7">
                                <div className="flex-col overflow-hidden relative flex min-h-[296px] w-full justify-center items-stretch max-md:max-w-full">
                                    {/* <img
                  loading="lazy"
                  srcSet="..."
                  className="absolute h-full w-full object-cover object-center inset-0"
                /> */}
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
                        </div>
                        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex-col overflow-hidden relative flex min-h-[296px] grow justify-center items-stretch max-md:max-w-full max-md:mt-7">
                                {/* <img
                loading="lazy"
                srcSet="..."
                className="absolute h-full w-full object-cover object-center inset-0"
              /> */}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Flexbox