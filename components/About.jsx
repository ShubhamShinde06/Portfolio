import React from "react";
import { FaRegFileCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import Header from "./Header";

const About = () => {
  return (
    <div className="about-border lg:w-[70%] h-[100vh] absolute lg:top-[0px] right-0 p-4 md:p-4 top-[150px] lg:p-0 lg:block">
      <div className="about bg-[#1E1E1F] lg:w-[80%] w-[100%] h-auto pb-[80px] lg:mt-[65px] md:mt-[0] rounded-2xl  border-[#343434] border-[1px] p-8 relative overflow-hidden lg:ml-8">
        <h1 className="text-[30px] font-bold text">About Me</h1>
        <hr className="mt-5 w-[45px] h-[3px] border-2 border-[#FDC763] rounded-md" />
        <p className="mt-5 text-[#D3D3D3] break-all">
          I'm Creative Web developer from Mumbai, India, working in web
          development and Tawasul Tech Private Limited. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>
        <p className="mt-3 text-[#D3D3D3] break-all">
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way.
        </p>
        <div className="mt-9">
          <h1 className="text-[25px] font-[600]">What I'm Doing</h1>

          <div className="flex flex-col items-center justify-center mt-8">
            <div className="grid mx-auto grid-cols-1 md:grid-cols-2 gap-6">
              {/* Front-end Development Card */}
              <div className="group hover:border-[#FFC663] transition-all duration-300 bg-[#212123] border-2 border-[#343434] flex flex-col lg:flex-row items-center p-6 rounded-2xl shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center text-[40px] text-[#FFC663] bg-[#2A2A2D] rounded-full p-4 transition-all duration-300 group-hover:bg-[#FFC663] group-hover:text-[#212123]">
                  <FaRegFileCode />
                </div>
                <div className="lg:ml-5 mt-4 lg:mt-0 text-center lg:text-left">
                  <h1 className="text-xl font-bold text-white mb-2">
                    Frontend Development
                  </h1>
                  <p className="text-[#D3D3D3] leading-relaxed">
                    Crafting high-quality, responsive websites with seamless
                    user experiences.
                  </p>
                </div>
              </div>

              {/* Backend Development Card */}
              <div className="group hover:border-[#FFC663] transition-all duration-300 bg-[#212123] border-2 border-[#343434] flex flex-col lg:flex-row items-center p-6 rounded-2xl shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center text-[40px] text-[#FFC663] bg-[#2A2A2D] rounded-full p-4 transition-all duration-300 group-hover:bg-[#FFC663] group-hover:text-[#212123]">
                  <FaServer />
                </div>
                <div className="lg:ml-5 mt-4 lg:mt-0 text-center lg:text-left">
                  <h1 className="text-xl font-bold text-white mb-2">
                    Backend Development
                  </h1>
                  <p className="text-[#D3D3D3] leading-relaxed">
                    Building robust, secure, and scalable server-side
                    applications with optimized data handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header lg:w-[600px] w-[100%] lg:h-[80px] h-[70px]  bg-[#282829] lg:absolute fixed lg:top-[-15px] lg:right-[-20px] bottom-[-10px] lg:p-5 md:rounded-3xl rounded-2xl flex items-center justify-center ml-[-50px]">
          <Header />
        </div>
      </div>
    </div>

    //  mobile view
  );
};

export default About;
