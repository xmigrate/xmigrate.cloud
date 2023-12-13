"use client"
import React, { Component } from 'react';
import Image from 'next/image';
import { sendEmail } from '../utils/Emailscript';

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: '', // Initialize successMessage to an empty string
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    // const fullName = e.target.elements.full_name.value;
    const email = e.target.elements.email.value;
    // console.log(email);
    // const organization = e.target.elements.organization.value;

    sendEmail(email)
    
      .then((response) => {
        console.log('Email sent successfully!', response,email);
        // Update the success message
        this.setState({ successMessage: 'Thank you for signing up! ' });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Handle error (e.g., show an error message)
      });
  };

  render() {
    return (
      <div>
        <div className="flex justify-between gap-5 items-start max-md:flex-wrap mt-[300px] mx-5 sm:mx-[100px]">
          <div className="flex grow basis-[0%] flex-col px-3">
            <div className="justify-center text-5xl leading-[60px] tracking-tight bg-clip-text mt-8 max-md:text-4xl max-md:leading-[56px] text-white">
              <span className="text-violet-200 text-5xl font-bold font-['Inter'] leading-[60px]">Get started with</span>
              <br />
              <span className="text-violet-300 text-5xl font-bold font-['Inter'] leading-[60px]">xmigrate</span>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col items-center mt-7 px-5 self-end max-md:max-w-full">
            <div className="justify-center text-indigo-300 text-base leading-7 tracking-wide max-md:max-w-full">
              Subscribe to our newsletter and become a part of our thriving <br />
              community. Get access to exclusive content.
            </div>
            <div className="bg-slate-950 self-stretch flex flex-col justify-center items-stretch mt-3 sm:px-12 px-1 py-4 rounded-[60px] max-md:max-w-full">
              <div className="border flex flex-col justify-center items-stretch sm:rounded-[60px] rounded-[15px] border-solid border-indigo-300 border-opacity-20 max-md:max-w-full">
                <div className="flex flex-col justify-center items-stretch p-0.5 rounded-[60px] max-md:max-w-full">
                  <div className="flex items-center justify-between gap-5 pl-5 pr-2 py-1.5 rounded-[60px] max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                    <form id="signupForm" className="form" name="signupbeta" method="POST" onSubmit={this.handleSubmit}>
                      {/* <p className="form-title">Sign up for early beta access</p>
                      <h3 className="form-sub-title">Be the first to experience the new eBPF based DR technology</h3> */}

                      {/* <div className="input-container">
                        <label className="form-label">Full name</label>
                        <input name="full_name" className="form-input" type="text" placeholder="Enter Your Full Name" required />
                      </div> */}
                      <div className="input-container">
                        <label className="form-label">Email</label>
                        <input name="email" className="form-input" type="email" placeholder="Enter Your Email" required />
                      </div>
                      {/* <div className="input-container">
                        <label className="form-label">Organization</label>
                        <input name="organization" className="form-input" type="text" placeholder="Enter Your Organization" required />
                      </div> */}
                      <div className="input-container-btn">
                        <button type="submit" className="btn bt-pr1 btn-outline-primary btn-md btn-main mr-1 px-4 submit">
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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
                        <a href='https://docs.xmigrate.cloud/en/latest/' target='_blank'>
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
                                                Explore our comprehensive documentation
                                                to learn everything you need to know about
                                                our product.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0 absolute sm:static -right-40">
                                        <img
                                            loading="lazy"
                                            src="/icons/discord.svg"
                                            className="aspect-[1.57] object-cover object-center w-[185px] justify-center items-center overflow-hidden shrink-0 max-w-full "
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
                        <a href='http://appmendinc.slack.com/' target='_blank'>
                            <div type className="relative border pl-10 pb-11 rounded-xl border-solid border-violet-300 border-opacity-10 max-md:max-w-full max-md:pl-5 cursor-pointer">
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
                                                Connect with us on Slack for real-time
                                                discussions, updates, and support. We love
                                                to help you get started !
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
  }
}

export default Newsletter;
