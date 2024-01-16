import Image from 'next/image'
import React from 'react'
import Logo from "../../../../../public/Logo.png"
import { Saira_Condensed } from 'next/font/google'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { HiBars4 } from "react-icons/hi2";

 
const roboto = Saira_Condensed({
  weight: '400',
  subsets: ['latin'],
})
function Navbar() {
    const router = useRouter()
  return (
    <nav className={`w-full  flex justify-between items-center bg-slate-950 px-10 pt-10 ${roboto.className}`}>
        <div className=' w-52 h-24 relative '>
            <Image src={Logo} fill priority objectFit='cover' alt="No Image"/>

        </div>
        <div className='max-sm:hidden sm:hidden md:hidden lg:flex xl:flex  flex-col items-center '>
        <h2 style={{"letterSpacing": "4px"}} className='w-full text-center text-lg text-white space-x-20'>All Photography & Videographey Services</h2>
        <p className='w-full text-center text-lg text-gray-300' dir='rtl'>تصوير جميع المناسبات</p>
        </div>
        <div className='w-auto h-auto pr-6 max-sm:hidden sm:hidden md:hidden lg:flex xl:flex'>
            <ul className='w-full h-full flex  justify-center items-center text-lightblue text-lg'>
                <li  className={`px-2 hover:text-white cursor-pointer ${router.pathname == "/"?" border-b-2 border-white text-white":""} `}><Link href={"/"}>Home</Link></li>
                <li className={`px-2 hover:text-white cursor-pointer ${router.pathname == "/packages"?" border-b-2 border-white text-white":""} `}><Link href={"/packages"}>Packages</Link> </li>
                <li className={`px-2 hover:text-white cursor-pointer  ${router.pathname == "/about_us"?" border-b-2 border-white text-white":""}`}><Link href={"/about_us"}>About Us</Link></li>
                <li className='px-2 hover:text-white hover:bg-lightblue rounded-md border border-lightblue cursor-pointer '><Link href={"/book_now"}>Book Now</Link></li>

            </ul>

        </div>
        <div className='h-full  max-sm:flex sm:flex md:flex lg:hidden xl:hidden items-center'>
            <HiBars4 className='text-white' size={50}/>
        </div>
    </nav>
  )
}

export default Navbar
