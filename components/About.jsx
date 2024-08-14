import React from 'react'
import { FaRegFileCode } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import Header from './Header';

const About = () => {


  return (
    <div className='about-border lg:w-[70%] h-[100vh] absolute lg:top-[0px] right-0 p-4 md:p-4 top-[150px] lg:p-0 lg:block'>
      <div className='about bg-[#1E1E1F] lg:w-[80%] w-[100%] h-auto pb-[80px] lg:mt-[65px] md:mt-[0] rounded-2xl  border-[#343434] border-[1px] p-8 relative overflow-hidden lg:ml-8'>
        <h1 className='text-[30px] font-bold text'>About Me</h1>  
        <hr className='mt-5 w-[45px] h-[3px] border-2 border-[#FDC763] rounded-md' />
        <p className='mt-5 text-[#D3D3D3] break-all'>
          I'm Creative Web developer  from Mumbai, India, working in web development and Tawasul Tech Private Limited. I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p className='mt-3 text-[#D3D3D3] break-all'>
        My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. 
        </p>
        <div className='mt-9'>
          <h1 className='text-[25px] font-[600]'>What I'm Doing</h1>
          <div className="flex flex-col items-center justify-center mt-5">
            <div className=" grid mx-auto grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[10px]">
              <div className='hover:border-[#FFC663] lg:h-[150px] h-[180px] bg-[#212123] border-2 border-[#343434] lg:flex lg:items-center p-4 rounded-2xl font-size'>
                <div className='icon w-[100%] lg:w-[100px] h-[auto] flex items-center justify-center text-[40px] text-[#FFC663]'>
                  <FaRegFileCode/>
                </div>
                <div className='lg:mt-3 ml-5 break-all'>
                  <h1 className='mb-3 font-bold md:text-[20px] text-center mt-2 lg:mt-0 lg:text-left'> Front-end development</h1>
                  <p className='text-[#D3D3D3] text-center lg:text-left'>High-quality development of sites at the professional level. Including adaptive layout.</p>
                </div>
              </div>

             <div className='hover:border-[#FFC663] lg:h-[150px] h-[180px] bg-[#212123] border-2 border-[#343434] lg:flex lg:items-center lg:p-5 p-4  rounded-2xl font-size'>
                <div className='icon w-[100%] lg:w-[100px] h-[auto] flex items-center justify-center text-[40px] text-[#FFC663] '>
                  <FaWordpressSimple/>
                </div>
                <div className='lg:mt-3 lg:ml-5 break-all '>
                  <h1 className='mb-3 font-bold lg:text-[20px] text-center mt-2 lg:mt-0 lg:text-left'>Backend Development</h1>
                  <p className='text-[#D3D3D3] text-center lg:text-left'>server-side of the website. and serving that data to the front-end to be displayed..</p>
                </div>
              </div> 

            </div>
          </div>
        </div>
        <div className='header lg:w-[600px] w-[100%] lg:h-[80px] h-[70px]  bg-[#282829] lg:absolute fixed lg:top-[-15px] lg:right-[-20px] bottom-[-10px] lg:p-5 md:rounded-3xl rounded-2xl flex items-center justify-center ml-[-50px]'><Header/></div>
      </div>
     </div> 

    //  mobile view

  )
}

export default About
