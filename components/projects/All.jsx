import React from 'react'
import data from "../../json/Data.json"
import Link from 'next/link'
import Image from 'next/image'

const All = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4">
      <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[280px] rounded-2xl cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl bg-[#1A1A1D] text-white"
          >
            <Link href={item.href} target="_blank">
              <div className="w-full h-[180px] rounded-t-2xl overflow-hidden bg-[#212123] flex items-center justify-center">
                <Image
                  src={item.ProjectImg}
                  width={500}
                  height={500}
                  alt={item.alt}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.ProjectName}</h3>
              <p className="text-sm text-gray-400 mt-1">{item.Discription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default All