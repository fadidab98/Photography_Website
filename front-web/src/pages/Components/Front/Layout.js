import React from 'react'
import Navbar from './Navbar/Navbar'
import { Saira_Condensed } from 'next/font/google'
import Footer from './Footer/Footer'

 
const roboto = Saira_Condensed({
  weight: '400',
  subsets: ['latin'],
})
 
function Layout({children}) {
  return (
    <>
    <Navbar/>
    <main className={`flex h-auto flex-col w-screeen  bg-slate-950 ${roboto.className}`}>
        {children}
  </main>
  <Footer/>
  </>

  )
}

export default Layout
