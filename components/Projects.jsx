
'use client';
import Header from "./Header";
import { useState } from "react";
import All from "./projects/All";
import JavaScript from "./projects/JavaScript";
import HtmlCss from "./projects/HtmlCss";

export const RenderComponents = ({ index }) => {
    switch (index) {
        case 0:
            return <All />;
        case 1:
            return <JavaScript />;
        case 2:
            return <HtmlCss />;
        default:
            return null;
    }
};

const Projects = () => {
    const buttons = ["All", "JavaScript", "HTML CSS"];
    const [isSelected, setIsSelected] = useState(0);

    return (
        <>
            <div className='lg:w-[70%] h-[100vh] md:w-[100%] w-[100%] absolute lg:top-[0px] right-0 p-4 md:p-4 lg:p-0 top-[85px] md:overflow-scroll '>
                <div className='bg-[#1E1E1F] lg:w-[80%] w-[100%] md:w-[100%] h-auto pb-[80px] rounded-2xl mt-[65px] mb-[67px] md:mt-[50px] lg:mt-[65px] border-[#343434] border-[1px] p-8 md:p-4 relative overflow-hidden lg:ml-8'>
                    <h1 className='text-[30px] font-bold text'>Projects</h1>
                    <hr className='mt-5 w-[45px] h-[3px] border-2 border-[#FDC763] rounded-md' />
                    <div className="w-auto h-auto mt-7">
                        <div className="text-[#9F9F9F] flex gap-9">
                            {buttons.map((item, index) => (
                                <button
                                    key={index}
                                    className={isSelected === index ? "text-[#FDC763]" : "text-[#A2A2A2]"}
                                    onClick={() => setIsSelected(index)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        <RenderComponents index={isSelected} />
                    </div>
                    <div className='header lg:w-[600px] w-[100%] lg:h-[80px] h-[70px] bg-[#282829] lg:absolute fixed lg:top-[-15px] lg:right-[-20px] bottom-[-10px] lg:p-5 md:rounded-3xl rounded-2xl flex items-center justify-center ml-[-50px]'>
                        <Header />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;

