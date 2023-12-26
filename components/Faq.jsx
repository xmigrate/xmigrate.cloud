"use client"

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Faq = () => {
    const { ref: s1, inView: faqVisible1 } = useInView();
    const faqData = [
        {
            question: 'How to get enrolled as a beta user?',
            answer: 'Get registered here and we will contact you soon.',
        },
        {
            question: 'How can I get started with your SaaS platform?',
            answer: 'Please join the waiting list by registering here.',
        },
        {
            question: 'Does xmigrate supports real time data replication?',
            answer: 'Yes, it does support real time data replication.',
        },
        {
            question: 'Does xmigrate supports windows server migration?',
            answer: 'At the moment xmigrate only support linux operating systems.',
        },
        {
            question: 'Can we get support during beta phase?',
            answer: 'Yes.',
        },
        {
            question: 'What is the pricing of this product?',
            answer: 'Currently this will be provided free of cost for the beta users. Pricing will be updated during the official release.',
        }

    ];
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleToggleExpansion = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div className="flex justify-between gap-5 items-start max-md:flex-wrap mt-[210px] mx-1 sm:mx-[100px] select-none">
            <motion.div ref={s1} initial={{ opacity: 0, x: -50 }} animate={faqVisible1 ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 0.8 }} className="flex grow basis-[0%] flex-col px-5 items-start">
                <div className="shadow-2xl backdrop-blur-[7.5px] bg-indigo-200 bg-opacity-0 flex aspect-[1.83] flex-col justify-center items-stretch rounded-[60px]">
                    <div className="justify-center text-indigo-300 text-center text-base leading-5 tracking-wide border aspect-[1.83] items-stretch px-5 py-3 rounded-[60px] border-solid border-indigo-300 border-opacity-40 inner-shadow">
                        FAQ
                    </div>
                </div>
                <div className="justify-center max-w-xl text-5xl leading-[60px] tracking-tight bg-clip-text self-stretch mt-9 max-md:text-4xl max-md:leading-[56px]">
                    <span className="bg-gradient-to-b from-indigo-50 to-indigo-300 inline-block text-transparent bg-clip-text text-5xl font-bold leading-[60px]">Frequently Asked Questions</span>
                    {/* <span className="text-violet-300 text-5xl font-bold leading-[60px]"> <br /></span> */}
                    {/* <span className="text-violet-300 text-5xl font-bold leading-[60px]">Questions</span> */}
                </div>
            </motion.div>
            <motion.div ref={s1} initial={{ opacity: 0, x: 50 }} animate={faqVisible1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }} transition={{ duration: 0.8 }} className="flex grow basis-[0%] flex-col items-stretch mt-2.5 text-6xl">
                {faqData.map((item, index) => (
                    <div key={index} className="mb-3"> {/* Added margin bottom to create separation */}
                        <div className="flex items-center justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap cursor-pointer">
                            <div
                                className={`justify-center text-violet-200 text-lg leading-8 tracking-wide max-w-[300px] sm:max-w-full grow my-6 ${expandedIndex === index ? 'text-indigo-50' : ''
                                    }`}
                                onClick={() => handleToggleExpansion(index)}
                            >
                                {item.question}
                            </div>
                            <div onClick={() => handleToggleExpansion(index)}>
                                <img
                                    src="/icons/expand.svg"
                                    className={`
        aspect-square object-contain object-center w-11 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full
        transition-transform duration-200 ease-in-out transform ${expandedIndex === index ? 'rotate-45' : ''}`}
                                />
                            </div>
                        </div>
                        {expandedIndex === index && (

                            <div className="justify-center text-violet-100 text-lg leading-8 tracking-wide grow mb-6 mt-4 px-5 max-w-2xl">
                                {item.answer}
                                <div className="bg-indigo-300 bg-opacity-40 flex shrink-0 h-0.5 flex-col mt-2.5 max-md:max-w-full max-md:mt-1 my-6" />
                            </div>

                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
export default Faq;