import React from 'react'
import Header from './Header'
import { IoIosSend } from "react-icons/io";

const ContactUs = () => {

  return (
    <>
      <div className='lg:w-[70%] h-[100vh] md:w-[100%] w-[100%] absolute lg:top-[0px] right-0  p-4 md:p-4 lg:p-0 top-[85px] md:overflow-scroll '>
      <div className='bg-[#1E1E1F] lg:w-[80%] w-[100%] md:w-[100%] h-auto pb-[80px] rounded-2xl mt-[65px] mb-[67px] md:mt-[50px] lg:mt-[65px] border-[#343434] border-[1px] p-8 md:p-4  relative overflow-hidden lg:ml-8'>
        <h1 className='text-[30px] font-bold '>Contact</h1>
        <hr className='mt-5 w-[45px] h-[3px] border-2 border-[#FDC763] rounded-md' />

            <div className="w-auto h-auto mt-7 ">
                <div className='w-[100%] h-[400px] rounded-xl overflow-hidden relative'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1457097489!2d72.71637691557582!3d19.082177515861076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1721543763104!5m2!1sen!2sin" width={'100%'} height={'400px'}  loading="lazy" alt="map" title='google map' ></iframe>
                    <div className='w-[100%] h-[400px] absolute top-0 bg-[#3b3b3b6e]' title='google map'></div>
                </div>
                <div className='mt-7 w-auto h-auto'>
                  <h1 className='text-[22px] font-bold'>Contact From</h1>
                  <form action="https://formspree.io/f/mayrbdna" method="POST">
                    <div className='md:flex mt-5 gap-[30px]'>
                      <input type="text" name='name' placeholder='Full Name'  required className='md:w-[50%] w-[100%] h-[50px] rounded-xl bg-transparent border-2 p-2 border-[#343434] placeholder:text-[#757575]' /><br></br>
                      <input type="email" name='email' placeholder='Email Address' required className='md:w-[50%] w-[100%] rounded-xl bg-transparent border-2 p-2 border-[#343434] placeholder:text-[#757575] mt-8 md:mt-0' />
                    </div>
                    <div className='mt-8'>
                      <textarea placeholder='Your Message' name='message' required className='w-[100%] h-[120px] rounded-xl bg-transparent border-2 p-2 border-[#343434] placeholder:text-[#757575]'></textarea>
                    </div>
                    <div className='w-auto h-[50px] mt-5 flex items-center justify-end'>
                      <button type='submit' className='w-[180px] h-[50px] shadow-inner rounded-xl flex items-center justify-center gap-[10px] text-[#FFC663]'> <IoIosSend />Send Message</button>
                    </div>
                  </form>
                </div>
            </div>
            <div className='header lg:w-[600px] w-[100%] lg:h-[80px] h-[70px]  bg-[#282829] lg:absolute fixed lg:top-[-15px] lg:right-[-20px] bottom-[-10px] lg:p-5 md:rounded-3xl rounded-2xl flex items-center justify-center ml-[-50px]'><Header/></div>
        </div>
    </div>
    </>
  )
}

export default ContactUs