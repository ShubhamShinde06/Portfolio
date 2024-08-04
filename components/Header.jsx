'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Header = () => {

    const pathname = usePathname();

    const navlink = [
        {
            name:'About',
            href:'/',
        },
        {
            name:'Resume',
            href:'/resume',
        },
        {
            name:'Protfolio',
            href:'/projects',
        },
        {
            name:'Contact',
            href:'/contact',
        },
    ]

  return (
    <>
        <ul className='header-item flex lg:gap-[80px] gap-[30px] md:gap-[60px] md:mt-[-10px] lg:mt-3 mt-[-5px] md:font-bold '>
           {
                navlink.map((link) => {
                     const isActive = link.href === pathname;

                    return(
                        <>
                            <Link 
                                key={link.name} 
                                href={link.href}
                                className={isActive ? "text-[#FFDB70]":"text-[#A2A2A2]"} 
                            >
                                {link.name}
                            </Link>
                        </>
                    );
                })
           } 
        </ul>
    
    </>
  )
}

export default Header