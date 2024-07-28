'use client'
import React,{useState} from 'react'
//import $ from 'jquery'
import Image from 'next/image'
import meimg from '../img/meimg.png';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaChevronDown, FaChevronUp, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Typed from 'typed.js';

const SideBar = () => {

/*
  $(document).ready(function(){
    $(".btn").on({

      click: function(){
        $('.show').css("height", "200px");
        $(this).css("font-size", "24px");
        $(this).css("color", "yellow");
        $(this).css("font-family", "arial");
      }  
    });
  });
*/
  const [IsBig,setIsBig] = useState(true);

  const toggleBtn = () => {
    setIsBig(!IsBig)
  }

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Shubham Shinde'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      {IsBig ? <div className='lg:w-[30%] lg:h-[100vh] w-auto h-[15%] lg:p-10 lg:mt-[50px] p-4 md:w-[100%] md:h-[15%] lg:block' >
        <div className='sidebar bg-[#1E1E1F] lg:w-[280px] lg:h-[85vh] w-[100%] h-[120px] md:w-[100%] rounded-2xl border-[#343434] border-[1px] flex lg:block relative overflow-hidden'>
          <div className='me-info w-full lg:h-[350px] h-[120px] bottom-border-2 md:grid lg:place-content-center'>
            <div className='lg:border-b-[2px] border-[#383838] pb-8 flex lg:block'>
              <div className='lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] lg:ml-6 mt-2 ml-2  rounded-full flex items-center justify-center'>
                <Image src={meimg} alt='my-img'/>
              </div>
              <div className='lg:text-[25px] text-[18px] lg:mt-3 mt-[30px] ml-[10px] font-bold'>
                <Link href={'/'} ref={el}><h2></h2></Link>
              </div>
              <div className='text-center bg-[#2B2B2C] w-[130px] rounded-md p-[5px] ml-9 mt-5 hidden lg:block'>
                <p className=' text-[12px] font-[300]'>Web developer</p>
              </div>
            </div>
             {/* phone view  */}
            <div className='text-center bg-[#2B2B2C] w-[100px] rounded-md  p-[5px] ml-4 mt-3 absolute top-[60px] left-[100px] lg:hidden'>
                <p className=' text-[10px] font-[300]'>Web developer</p>
            </div>
          </div>
          <div className='connect-info lg:flex justify-center p-5 hidden'>
            <div>
              <ul>
                <li className='flex items-center'>
                  <div className='w-[45px] h-[45px] text-[#FFDB70] font-bold text-[18px]  rounded-xl bg-[#202022] flex items-center justify-center shadow-inner'>
                  <MdOutlineMailOutline />
                  </div>
                  <div className='w-auto h-auto pl-3'>
                      <p className='text-[10px] text-[#9D9D9D] font-bold'>EMAIL</p>
                      <span className='text-[14px]'>sshinde6962@gmail.com</span>
                  </div>
                </li>

                <li className='flex items-center mt-9'>
                  <div className='w-[45px] h-[45px] text-[#FFDB70] font-bold text-[18px] shadow-inner rounded-xl bg-[#202022] flex items-center justify-center'>
                  <IoPhonePortraitOutline/>
                  </div>
                  <div className='w-auto h-auto pl-3'>
                    <p className='text-[10px] text-[#9D9D9D] font-bold'>PHONE</p>
                    <span className='text-[14px]'>+91 9892436240</span>
                  </div>
                </li>

                <li className='flex items-center mt-9'>
                  <div className='w-[45px] h-[45px] text-[#FFDB70] font-bold text-[18px] shadow-inner rounded-xl bg-[#202022] flex items-center justify-center'>
                  <MdDateRange/>
                  </div>
                  <div className='w-auto h-auto pl-3'>
                    <p className='text-[10px] text-[#9D9D9D] font-bold'>BIRTHDAY</p>
                    <span className='text-[14px]'>Sep 09,2004</span>
                  </div>
                </li>

                <li className='flex items-center mt-9'>
                  <div className='w-[45px] h-[45px] text-[#FFDB70] font-bold text-[18px] shadow-inner rounded-xl bg-[#202022] flex items-center justify-center'>
                  <GrLocation/>
                  </div>
                  <div className='w-auto h-auto pl-3'>
                    <p className='text-[10px] text-[#9D9D9D] font-bold'>LOCATION</p>
                    <span className='text-[14px]'>Mumbai, <br/>Maharashtra, INDIA </span>
                  </div>
                </li>
               
              </ul>
              <div className='icons w-full h-[100px] text-[25px] flex items-center justify-center gap-5 text-[gray] '>
                <Link href={'https://github.com/ShubhamShinde06'} target='_blank'><li className='hover:text-[white] cursor-pointer'><FaGithub/></li></Link>    
              </div>
            </div>
          </div>
          <div className='lg:hidden w-[50px] h-[50px] absolute top-[-10px] right-[-10px] rounded-2xl shadow-inner flex items-center justify-center'>
            <div className='mr-2 mt-3 text-[#FFDB70]'>
              <button onClick={toggleBtn}>{ IsBig ? <FaChevronDown/> : <FaChevronUp/>}</button>
            </div>
          </div>
        </div>
      </div> 
      :
      <div className='lg:w-[30%] lg:h-[100vh] w-auto h-[15%]  lg:p-10 lg:mt-[50px] p-4 lg:hidden' >
        <div className='show bg-[#1E1E1F] lg:w-[280px] lg:h-[85vh] w-[100%] h-[530px] rounded-2xl border-[#343434] border-[1px] flex lg:block relative overflow-hidden z-10'>
          <div className='me-info w-full lg:h-[350px] h-[120px] bottom-border-2 lg:grid place-content-center'>
            <div className='lg:border-b-[2px] border-[#383838] pb-8 flex lg:block'>
              <div className='lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] lg:ml-8 mt-2 ml-2  rounded-full flex items-center justify-center'>
                <Image src={meimg} alt='my-img'/>
              </div>
              <div className='lg:text-[25px] text-[18px] lg:mt-3 mt-[30px] ml-[10px] font-bold'>
                <Link href={'/'} ref={el}><h2></h2></Link>
              </div>
              <div className='text-center bg-[#2B2B2C] w-[130px] rounded-md p-[5px] ml-9 mt-5 hidden lg:block'>
                <p className=' text-[12px] font-[300]'>Web developer</p>
              </div>
            </div>
            {/* phone view */}
            <div className='text-center bg-[#2B2B2C] w-[100px] rounded-md  p-[5px] ml-4 mt-0 absolute top-[60px] left-[100px] lg:hidden'>
                <p className=' text-[10px] font-[300]'>Web developer</p>
            </div>
          </div>
  
            <div className='connect-info flex justify-start items-center p-5 w-[100%] mt-[120px] absolute left-0'>
              <div>
                <ul>
                  <li className='flex items-center'>
                    <div className='w-[45px] h-[45px] text-[#FFDB70] font-bold text-[18px]  rounded-xl bg-[#202022] flex items-center justify-center shadow-inner'>
                    <MdOutlineMailOutline />
                    </div>
                    <div className='w-auto h-auto pl-3'>
                        <p className='text-[10px] text-[#9D9D9D] font-bold'>EMAIL</p>
                        <span className='text-[14px]'>sshinde6962@gmail.com</span>
                    </div>
                  </li>

                  <li className='flex items-center mt-9'>
                    <div className='w-[45px] h-[45px] text-[#FFDB70] font-bold text-[18px] shadow-inner rounded-xl bg-[#202022] flex items-center justify-center'>
                    <IoPhonePortraitOutline/>
                    </div>
                    <div className='w-auto h-auto pl-3'>
                      <p className='text-[10px] text-[#9D9D9D] font-bold'>PHONE</p>
                      <span className='text-[14px]'>+91 9892436240</span>
                    </div>
                  </li>

                  <li className='flex items-center mt-9'>
                    <div className='w-[45px] h-[45px] text-[#FFDB70] font-bold text-[18px] shadow-inner rounded-xl bg-[#202022] flex items-center justify-center'>
                    <MdDateRange/>
                    </div>
                    <div className='w-auto h-auto pl-3'>
                      <p className='text-[10px] text-[#9D9D9D] font-bold'>BIRTHDAY</p>
                      <span className='text-[14px]'>Sep 09,2004</span>
                    </div>
                  </li>

                  <li className='flex items-center mt-9'>
                    <div className='w-[45px] h-[45px] text-[#FFDB70] font-bold text-[18px] shadow-inner rounded-xl bg-[#202022] flex items-center justify-center'>
                    <GrLocation/>
                    </div>
                    <div className='w-auto h-auto pl-3'>
                      <p className='text-[10px] text-[#9D9D9D] font-bold'>LOCATION</p>
                      <span className='text-[14px]'>Mumbai, <br/>Maharashtra, INDIA </span>
                    </div>
                  </li>
                
                </ul>
                <div className='icons w-full h-[100px] text-[25px] flex items-center justify-start lg:justify-center md:justify-start gap-5 text-[gray] ml-1 md:ml-2 lg:ml-0'>
                  <Link href={'https://github.com/ShubhamShinde06'} target='_blank'><li className='hover:text-[white] cursor-pointer'><FaGithub/></li></Link>    
                </div>
              </div>
            </div>
          
          <div className='lg:hidden w-[50px] h-[50px] absolute top-[-10px] right-[-10px] rounded-2xl shadow-inner flex items-center justify-center '>
            <div className='mr-2 mt-3 text-[#FFDB70]'>
              <button onClick={toggleBtn}>{ IsBig ? <FaChevronDown/> : <FaChevronUp/>}</button>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default SideBar