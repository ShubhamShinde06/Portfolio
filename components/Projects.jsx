import Header from "./Header";
import data from "../json/Data.json"

const Projects = () => {
return(
    <>
    {/* <div className='lg:w-[70%] h-[100vh] md:w-[100%] absolute lg:top-[0px] right-0 p-4 md:p-4 lg:p-0 top-[85px] md:overflow-scroll  '>
        <div className='bg-[#1E1E1F] lg:w-[80%] w-[100%] md:w-[100%] h-auto pb-[80px] rounded-2xl mt-[65px] mb-[67px] md:mt-[50px] lg:mt-[65px] border-[#343434] border-[1px] p-8 md:p-4 relative overflow-hidden mr-[60px] lg:ml-8'>
            <h1 className='text-[30px] font-bold '>Portfolio</h1>
            <hr className='mt-5 w-[45px] h-[3px] border-2 border-[#FDC763] rounded-md' />

            <div className="w-auto h-auto mt-7">
                <div className="text-[#9F9F9F]">All</div>
                <div className="flex flex-col items-center justify-center mt-5">
                    <div className=" grid mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[40px] gridproject">
                        {
                            data.map((item) => (
                                <>
                                <div className="w-[250px] h-[250px] rounded-xl cursor-pointer">
                                    <div className="w-[250px] h-[180px] rounded-xl  bg-[#212123] flex items-center justify-center">{item.ProjectImg}</div>
                                    <div className="w-[250px] h-[80px] p-1 flex items-center">
                                        <div>
                                            <h6>{item.ProjectName}</h6>
                                            <p className="text-[#9E9E9E] text-[15px]">{item.Discription}</p> 
                                        </div>                                
                                    </div>
                                </div>
                                </>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
            <div className='header lg:w-[600px] w-[100%] lg:h-[80px] h-[70px]  bg-[#282829] lg:absolute fixed lg:top-[-15px] lg:right-[-20px] bottom-[-10px] lg:p-5 md:rounded-3xl rounded-2xl flex items-center justify-center ml-[-px] md:ml-[-50px]'><Header/></div>
        </div>
    </div> */}

<div className='lg:w-[70%] h-[100vh] md:w-[100%] w-[100%] absolute lg:top-[0px] right-0  p-4 md:p-4 lg:p-0 top-[85px] md:overflow-scroll '>
      <div className='bg-[#1E1E1F] lg:w-[80%] w-[100%] md:w-[100%] h-auto pb-[80px] rounded-2xl mt-[65px] mb-[67px] md:mt-[50px] lg:mt-[65px] border-[#343434] border-[1px] p-8 md:p-4  relative overflow-hidden lg:ml-8'>
        <h1 className='text-[30px] font-bold text'>Projects</h1>
        <hr className='mt-5 w-[45px] h-[3px] border-2 border-[#FDC763] rounded-md' />
        
        <div className="w-auto h-auto mt-7">
                <div className="text-[#9F9F9F]">All</div>
                <div className="flex flex-col items-center justify-center mt-5">
                    <div className=" grid mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[40px] gridproject">
                        {
                            data.map((item) => (
                                <>
                                <div className="w-[250px] h-[250px] rounded-xl cursor-pointer">
                                    <div className="w-[250px] h-[180px] rounded-xl  bg-[#212123] flex items-center justify-center">{item.ProjectImg}</div>
                                    <div className="w-[250px] h-[80px] p-1 flex items-center">
                                        <div>
                                            <h6>{item.ProjectName}</h6>
                                            <p className="text-[#9E9E9E] text-[15px]">{item.Discription}</p> 
                                        </div>                                
                                    </div>
                                </div>
                                </>
                            ))
                        }
                        
                    </div>
                </div>
            </div>


        

        
      <div className='header lg:w-[600px] w-[100%] lg:h-[80px] h-[70px]  bg-[#282829] lg:absolute fixed lg:top-[-15px] lg:right-[-20px] bottom-[-10px] lg:p-5 md:rounded-3xl rounded-2xl flex items-center justify-center ml-[-50px]'><Header/></div>
    </div>
  </div>
    </>
)
}

export default Projects;