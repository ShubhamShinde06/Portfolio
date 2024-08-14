import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import data from "../../json/javascript.json"

const JavaScript = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center mt-5" >
                    <div className=" grid mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] gridproject">
                        {
                            data.map((item) => (
                                <>
                                <div className="w-[250px] h-[250px] rounded-xl cursor-pointer">
                                    <Link href={item.href}><div className="w-[250px] h-[180px] rounded-xl  bg-[#212123] flex items-center justify-center">
                                    <Image
                                        // src={todo}
                                        src={item.ProjectImg}
                                        width={500}
                                        height={500}
                                        alt={item.alt}
                                    />
                                    </div></Link>
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
  )
}

export default JavaScript