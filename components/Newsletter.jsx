"use client";
import { React, useEffect, useState, Component } from "react";
import { sendEmail } from "../utils/Emailscript";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Newsletter = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { ref: s1, inView: newsVisible1 } = useInView();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    // const fullName = e.target.elements.full_name.value;
    const email = e.target.elements.email.value;
    // console.log(email);
    const organization = e.target.elements.organization.value;

    sendEmail(email, organization)
      .then((response) => {
        console.log("Email sent successfully!", response, email);
        // Update the success message
        setIsSuccess(true);
        // this.setState({ successMessage: 'Thank you for signing up! ' });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <div id="contact">
      <div className="flex flex-col xl:flex-row justify-between gap-5 items-start max-md:flex-wrap mt-[300px] mx-5 lg:mx-[100px]">
        <motion.div
          ref={s1}
          initial={{ opacity: 0, x: -50 }}
          animate={newsVisible1 ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex grow basis-[0%] flex-col px-3"
        >
          <div className="justify-center text-5xl leading-[60px] tracking-tight bg-clip-text mt-8 max-md:text-4xl max-md:leading-[56px] text-white">
            <span className="bg-gradient-to-b from-indigo-50 to-indigo-300 inline-block text-transparent bg-clip-text text-5xl font-bold leading-[60px] max-w-sm">
              Get started with xmigrate
            </span>
          </div>
        </motion.div>
        <div className="flex grow basis-[0%] flex-col items-center mt-7 px-5 self-end max-md:max-w-full">
          <div className="justify-center text-indigo-300 text-base leading-7 tracking-wide max-md:max-w-full">
            Subscribe to our newsletter and become a part of our thriving <br />
            community. Get access to exclusive content.
          </div>
          {/* <div className="bg-slate-950 self-stretch flex flex-col justify-center items-stretch xl:px-12 px-1 py-4 rounded-[60px] max-md:max-w-full"> */}
            <div className="border flex flex-col justify-center items-stretch xl:rounded-[40px] rounded-[15px] border-solid border-indigo-300 border-opacity-20 max-md:max-w-full mt-12 ">

              <div className="flex flex-col justify-center items-stretch rounded-[40px] max-md:max-w-full ">
                <div className="flex items-center justify-center gap-5 rounded-[40px] max-md:max-w-full max-md:flex-wrap max-md:pl-5 ">
                  <div className="bg-slate-950 self-stretch flex flex-col justify-center items-stretch  xl:px-12 px-1 py-4 rounded-[40px] max-md:max-w-full ">
                    <div>
                      {isSuccess ? (
                        <p className="justify-center text-center text-indigo-300 font-semibold">Thank you for joining us!</p>
                      ) : (
                        <form
                          id="signupForm"
                          className="form"
                          name="signupbeta"
                          method="POST"
                          onSubmit={handleSubmit}
                        >
                          <div className="flex flex-col justify-center items-stretch p-0.5 rounded-[60px] max-md:max-w-full">
                            <div className="flex flex-col items-center justify-between gap-2 sm:px-2 pl-5 pr-7 pb-2 -pt-1 rounded-[60px] max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                              <input
                                name="email"
                                className="flex-1 px-4 py-2 border-none bg-slate-950 text-indigo-200 text-base grow whitespace-nowrap my-auto outline-none"
                                placeholder="Enter your email address"
                                type="email"
                                required
                              />
                              <input
                                name="organization"
                                className="flex-1 px-4 py-2 border-none bg-slate-950 text-indigo-200 text-base grow whitespace-nowrap my-auto outline-none"
                                placeholder="Enter your organization"
                                type="text"
                                required
                              />
                              <div
                                type="submit"
                                className="flex-1 px-10 py-5 text-violet-300 text-center text-base font-semibold leading-6 whitespace-nowrap items-stretch bg-slate-800 self-stretch grow rounded-[58px] max-md:px-5 cursor-pointer"
                              >
                                Get Started
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 mt-[150px] px-5 sm:px-[120px]">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex-col overflow-hidden relative flex min-h-[261px] grow justify-center items-stretch max-md:max-w-full max-md:mt-7 rounded-xl hover:bg-slate-950">
            <img
              loading="lazy"
              srcSet="/image/gradient4.png"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <a href="https://docs.xmigrate.cloud/en/latest/" target="_blank">
              <div className="relative border pl-10 pb-11 rounded-xl border-solid border-violet-300 border-opacity-10 max-md:max-w-full max-md:pl-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
                    <div className="relative flex flex-col mt-16 items-start max-md:mt-10">
                      <img
                        loading="lazy"
                        src="/icons/gear.png"
                        className="aspect-square object-contain object-center w-7 justify-center items-center overflow-hidden max-w-full"
                      />
                      <div className="justify-center text-xl font-semibold leading-8 tracking-wide bg-clip-text self-stretch whitespace-nowrap mt-4 text-white">
                        Read Documentation
                      </div>
                      <div className="justify-center text-indigo-300 text-lg leading-7 tracking-wide self-stretch mt-6">
                        Explore our comprehensive documentation to learn
                        everything you need to know about our product.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0 absolute sm:static -right-40">
                    <img
                      loading="lazy"
                      src="/icons/discord.svg"
                      className="aspect-[1.57] object-cover object-center flex flex-row justify-center items-center overflow-hidden shrink-0 max-w-full "
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex-col overflow-hidden relative flex min-h-[261px] grow justify-center items-stretch max-md:max-w-full max-md:mt-7 rounded-xl hover:bg-slate-950">
            <img
              loading="lazy"
              src="/image/gradient4.png"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <a href="http://appmendinc.slack.com/" target="_blank">
              <div
                type
                className="relative border pl-10 pb-11 rounded-xl border-solid border-violet-300 border-opacity-10 max-md:max-w-full max-md:pl-5 cursor-pointer"
              >
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0">
                    <div className="relative flex flex-col mt-16 items-start max-md:mt-10">
                      <img
                        loading="lazy"
                        src="/icons/hand.svg"
                        className="aspect-square object-contain object-center w-7 justify-center items-center overflow-hidden max-w-full"
                      />
                      <div className="justify-center text-xl font-semibold leading-8 tracking-wide bg-clip-text self-stretch whitespace-nowrap mt-4 text-white">
                        Join the Slack Channel
                      </div>
                      <div className="justify-center text-indigo-300 text-lg leading-7 tracking-wide self-stretch mt-6">
                        Connect with us on Slack for real-time discussions,
                        updates, and support. We love to help you get started !
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0 absolute sm:static -right-40 -top-6 ">
                    <img
                      loading="lazy"
                      src="/icons/slack.svg"
                      className="aspect-[1.2] object-cover object-center w-[185px] justify-center items-center overflow-hidden shrink-0 max-w-full "
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
