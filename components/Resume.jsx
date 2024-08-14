import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import Header from './Header';
import Link from 'next/link';

const Resume = () => {
  return (
    <>
    <div className='lg:w-[70%] h-[100vh] absolute lg:top-[0px] right-0  p-4 md:p-4 lg:p-0 top-[85px] md:overflow-scroll'>
      <div className='bg-[#1E1E1F] lg:w-[80%] w-[100%] md:w-[100%] h-auto pb-[80px] rounded-2xl mt-[65px] mb-[67px] md:mt-[50px] lg:mt-[65px] border-[#343434] border-[1px] p-8 md:p-4  relative overflow-hidden lg:ml-8'>
        <Link href={'/pdf'}><h1 className='text-[30px] font-bold text'>Resume</h1></Link>
        <hr className='mt-5 w-[45px] h-[3px] border-2 border-[#FDC763] rounded-md' />
        
        <div className='mt-9 ml-5'>
          <div className="flex  justify-center mt-9 gap-10">
            <div className='border-2 md:h-[350px] h-[560px]  border-[#383838] relative'>
              <div className='shadow-style w-[40px] h-[40px] absolute left-[-20px] top-[-5px] rounded-xl bg-[#202022] flex items-center justify-center text-[#FDC763] shadow-inner'><FaBookOpen /></div>
              <div className='text-[15px] absolute md:top-[68px] top-[70px] text-[#FDC763] left-[-7px]'><FaRegCircleDot /></div>
              <div className='text-[15px] absolute md:top-[205px] top-[330px] text-[#FDC763] left-[-7px]'><FaRegCircleDot /></div>
              <div className='text-[15px] absolute md:top-[335px] top-[550px] text-[#FDC763] left-[-7px]'><FaRegCircleDot /></div>
            </div>

            <div className='w-[100%] h-auto '>
              <h1 className='text-[25px] font-bold'>Education</h1>

              <div className='mt-7'>
                <h3 className='text-[#FAFAFA] font-bold'>Jashbhai Maganbhai Patel College Of Commerce (JMPC)</h3>
                <h2 className='mt-2 text-[#CEB15A]'>2022 — 2024</h2>
                <p className='mt-1 text-[#D6D6D6] font-[300]'>Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
              </div>

              <div className='mt-7'>
                <h3 className='text-[#FAFAFA] font-bold'>Sanskar Dham Vidyalaya (SKM)</h3>
                <h2 className='mt-2 text-[#CEB15A]'>2020 — 2022</h2>
                <p className='mt-1 text-[#D6D6D6] font-[300]'>Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
              </div>

              <div className='mt-7'>
                <h3 className='text-[#FAFAFA] font-bold'>Jijamata Vidya Mandir</h3>
                <h2 className='mt-2 text-[#CEB15A]'>2020</h2>
                <p className='mt-1 text-[#D6D6D6] font-[300]'>Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-9 ml-5'>
          <div className="flex  justify-center mt-9 gap-10">
            <div className='border-2 md:h-[220px] h-[250px] border-[#383838] relative'>
              <div className='shadow-style w-[40px] h-[40px] absolute left-[-20px] top-[-5px] rounded-xl bg-[#202022] flex items-center justify-center text-[#FDC763] shadow-inner'><FaBookOpen /></div>
              <div className='text-[15px] absolute top-[68px] text-[#FDC763] left-[-7px]'><FaRegCircleDot /></div>
              <div className='text-[15px] absolute md:top-[205px] top-[250px] text-[#FDC763] left-[-7px]'><FaRegCircleDot /></div>
              {/* <div className='text-[15px] absolute top-[335px] text-[#FDC763] left-[-7px]'><FaRegCircleDot /></div> */}
            </div>
            
            <div className='w-[100%] h-auto '>
              <h1 className='text-[25px] font-bold'>Experience</h1>
              <div className='mt-7'>
                <h3 className='text-[#FAFAFA] font-bold'>Intern/Junior Web Developer</h3>
                <h2 className='mt-2 text-[#CEB15A]'>2024</h2>
                <p className='mt-1 text-[#D6D6D6] font-[300]'>Developed and maintained complex web applications using Next, HTML, jquery, CSS, Javascript, Wordpress.</p>
              </div>

              <div className='mt-7'>
                <h3 className='text-[#FAFAFA] font-bold'>Freelance Web Developer</h3>
                <h2 className='mt-2 text-[#CEB15A]'>2024</h2>
                <p className='mt-1 text-[#D6D6D6] font-[300]'>Developed and maintained responsive web applications using React, Mysql, Node js, Express js.</p>
              </div>

              {/* <div className='mt-7'>
                <h3 className='text-[#FAFAFA] font-bold'>University School Of The Arts</h3>
                <h2 className='mt-2 text-[#CEB15A]'>2007 — 2008</h2>
                <p className='mt-1 text-[#D6D6D6] font-[300]'>Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
              </div> */}
            </div>
          </div>
        </div>

        <div className='w-[100%] h-auto mt-8'>
          <h1 className='text-[25px] font-bold'>My Skills</h1>
          <div className='mt-7 p-5 rounded-xl bg-[#202022] shadow-inner'>
          <div class="skills">

            <div class="skill" id="html">
              <span class="title">HTML</span>
            </div>
    
            <div class="skill" id="css">
              <span class="title">CSS</span>
            </div>
    
            <div class="skill" id="js">
              <span class="title">JAVA SCRIPT</span>
            </div>

            <div class="skill" id="php">
              <span class="title">PHP</span>
            </div>

            <div class="skill" id="sql">
              <span class="title">MYSQL</span>
            </div>

            <div class="skill" id="ne">
              <span class="title">NEXT JS</span>
            </div>

            <div class="skill" id="jq">
              <span class="title">JQUERY</span>
            </div>

            <div class="skill" id="jq">
              <span class="title">MANGO DB</span>
            </div>

            <div class="skill" id="jq">
              <span class="title">EXPRESS JS</span>
            </div>

            <div class="skill" id="jq">
              <span class="title">REACT JS</span>
            </div>

            <div class="skill" id="jq">
              <span class="title">NODE JS</span>
            </div>

            {/* <div class="skill" id="jq">
              <span class="title">MERN Stack (Mangodb | Expressjs | Reactjs | Nodejs )</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className='header lg:w-[600px] w-[100%] lg:h-[80px] h-[70px]  bg-[#282829] lg:absolute fixed lg:top-[-15px] lg:right-[-20px] bottom-[-10px] lg:p-5 md:rounded-3xl rounded-2xl flex items-center justify-center ml-[-50px]'><Header/></div>
    </div>
  </div>
  </>
  )
}

export default Resume