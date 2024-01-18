import Image from 'next/image'
import Layout from './Components/Front/Layout'
import Carousel from './Components/Front/Carousel/Carousel'


export default function Home() {
  return (
   <Layout>
  
    <div className='max-sm:w-10/12 sm:w-full md:w-full lg:w-full xl:w-[80%]  mx-auto max-sm:h-[28.6rem] sm:h-[30rem] lg:[35rem] xl:h-[40rem] h-[40rem] mt-[8rem]'>
    <Carousel className="text-white"/>
    </div>
   </Layout>
  )
}
