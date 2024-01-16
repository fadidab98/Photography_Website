import Image from 'next/image'
import Layout from './Components/Front/Layout'
import Carousel from './Components/Front/Carousel/Carousel'


export default function Home() {
  return (
   <Layout>
  
    <div className='w-full h-[40rem] mt-[8rem]'>
    <Carousel className="text-white"/>
    </div>
   </Layout>
  )
}
