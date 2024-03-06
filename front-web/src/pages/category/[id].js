import React, { useEffect, useRef, useState } from 'react'
import Layout from '../Components/Front/Layout'
import { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Index(props) {
  const swiperRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial screen width
    setScreenWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once


  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      const observer = new ResizeObserver(() => {
        const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
        if (activeSlide) {
          const offset = (swiperInstance.width - activeSlide.offsetWidth) / 2;
          swiperInstance.setTranslate(-activeSlide.offsetLeft + offset);
        }
      });

      observer.observe(swiperInstance.el);

      return () => observer.disconnect();
    }
  }, []);

  console.log(screenWidth)
  return (
    <Layout>
    <div className='text-white py-4 '>
      {screenWidth>768?(    <Swiper
     spaceBetween={10}
     slidesPerView={'auto'}
     centeredSlides={true}
     ref={swiperRef}

      loop={true}
      
      pagination={{ clickable: true }}
    >
        <SwiperSlide className='!w-auto mx-auto '>     <img className='  lg h-[70vh] w-auto mx-auto' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709672146/1580414800-384710-ng-0148_1_sytghl.avif'  alt='No Image'/></SwiperSlide>
        <SwiperSlide className='!w-auto mx-auto '>     <img className='  lg h-[70vh] w-auto mx-auto ' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709689001/1580414766-347016-ng-0157_xdjibd.avif'  alt='No Image'/></SwiperSlide>
        <SwiperSlide className='!w-auto mx-auto '>     <img className='  lg h-[70vh] w-auto mx-auto ' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709689130/1580414761-12479-ng-0153_sano2n.avif'  alt='No Image'/></SwiperSlide>
        <SwiperSlide className='!w-auto mx-auto '>     <img className='  lg h-[70vh] w-auto mx-auto ' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709672146/1580414800-384710-ng-0148_1_sytghl.avif'  alt='No Image'/></SwiperSlide>
        <SwiperSlide className='!w-auto mx-auto '>     <img className='  lg h-[70vh] w-auto mx-auto ' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709689001/1580414766-347016-ng-0157_xdjibd.avif'  alt='No Image'/></SwiperSlide>
        <SwiperSlide className='!w-auto mx-auto '>     <img className='  lg h-[70vh] w-auto mx-auto ' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709689130/1580414761-12479-ng-0153_sano2n.avif'  alt='No Image'/></SwiperSlide>
        <SwiperSlide className='!w-auto mx-auto '>     <img className='  lg h-[70vh] w-auto mx-auto ' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709672146/1580414800-384710-ng-0148_1_sytghl.avif'  alt='No Image'/></SwiperSlide>
        <SwiperSlide className='!w-auto mx-auto '>     <img className='  lg h-[70vh] w-auto mx-auto ' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709689001/1580414766-347016-ng-0157_xdjibd.avif'  alt='No Image'/></SwiperSlide>
        <SwiperSlide className='!w-auto mx-auto '>     <img className='  lg h-[70vh] w-auto mx-auto ' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709689130/1580414761-12479-ng-0153_sano2n.avif'  alt='No Image'/></SwiperSlide>

    </Swiper>):(<>
        <img       loading="lazy" className=' w-[90vw]  w-auto mx-auto my-5' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709672146/1580414800-384710-ng-0148_1_sytghl.avif'  alt='No Image'/>
        <img       loading="lazy" className=' w-[90vw]  w-auto mx-auto my-5 ' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709689001/1580414766-347016-ng-0157_xdjibd.avif'  alt='No Image'/>
        <img       loading="lazy" className=' w-[90vw]  w-auto mx-auto my-5' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709689130/1580414761-12479-ng-0153_sano2n.avif'  alt='No Image'/>
        <img       loading="lazy" className=' w-[90vw]  w-auto mx-auto my-5' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709672146/1580414800-384710-ng-0148_1_sytghl.avif'  alt='No Image'/>
        <img       loading="lazy" className=' w-[90vw]  w-auto mx-auto my-5 ' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709689001/1580414766-347016-ng-0157_xdjibd.avif'  alt='No Image'/>
        <img       loading="lazy" className=' w-[90vw]  w-auto mx-auto my-5' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709689130/1580414761-12479-ng-0153_sano2n.avif'  alt='No Image'/>
        <img       loading="lazy" className=' w-[90vw]  w-auto mx-auto my-5' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709672146/1580414800-384710-ng-0148_1_sytghl.avif'  alt='No Image'/>
        <img       loading="lazy" className=' w-[90vw]  w-auto mx-auto my-5 ' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709689001/1580414766-347016-ng-0157_xdjibd.avif'  alt='No Image'/>
        <img       loading="lazy" className=' w-[90vw]  w-auto mx-auto my-5' src='https://res.cloudinary.com/dg2c3liap/image/upload/v1709689130/1580414761-12479-ng-0153_sano2n.avif'  alt='No Image'/>
        </>
    )}


   </div>
    </Layout>
  )
}

export default Index

export const getStaticPaths=async()=>{
    const paths=[{params:{id:"1"}},{params:{id:"2"}},{params:{id:"3"}}]
    return {
        paths:paths,
        fallback:'blocking'
    }
}

export const getStaticProps=async(ctx)=>{
    const id = ctx.params
    return{
        props:{data:id},
        revalidate:10
    }
}