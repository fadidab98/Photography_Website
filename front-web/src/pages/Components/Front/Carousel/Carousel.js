import { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Carousel =() => {
    const images = ['/01.jpg', '/02.jpg', '/03.jpg', '/02.jpg', '/03.jpg']; // Replace with your image URLs
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const getSlideSize = (index) => {
      // Adjust the size based on the active state or any other condition
      return index === activeSlideIndex ? ' min-w-[250px]  z-0 max-h-[375px] ' : ' max-w-[170px] max-h-[255px]';
    };
    
    const handleSlideClick = (index) => {
        // Navigate to the clicked slide
        if (swiper) {
          swiper.slideTo(index); // Use the slideTo method to navigate
          
        }
      };
      let swiper;

    const swiperParams = {
      spaceBetween:4, // Adjust the space between slides as needed
      slidesPerView: "auto", // Adjust the number of slides per view based on your design
      simulateTouch: true,
      clickable:true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
          
        },
        
      onSwiper: (swiperInstance) => {
            // Save Swiper instance to a variable
            swiper = swiperInstance;
          },
          initialSlide:2, 
      onSlideChange:(swiper) => {
        
            setActiveSlideIndex(swiper.activeIndex);
          }
      };
  return (
    <Swiper
      // install Swiper modules

      className='text-white w-full h-full  mySwiper bg-transparent	mt-[-5rem]'
      
      centeredSlides= {true}
      freeMode={true}
      breakpoints={{
         350: {
          slidesPerView:2,
          centeredSlides: true,
          spaceBetween:20
        },
        640: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween:20
        },
        768: {
          slidesPerView: 4,
          centeredSlides: true,
          spaceBetween:20
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      {...swiperParams}
    >
     {images.map((image, index) =>{
        return (
        <SwiperSlide key={index} className={` ${getSlideSize(index)} mx-auto p-0 drop-shadow-none shadow-none z-0 relative cursor-pointer `}  onClick={()=>handleSlideClick(index)}>{({ isActive }) => (
           <>
           <div className={`min-w-full min-h-full absolute top-0 left-0 right-0 bottom-0 p-0 m-0 `} >
            <div className={`  relative drop-shadow-none shadow-none  ${isActive?" min-w-full  z-0 min-h-full ":"  w-[170px] h-[255px] mt-12"}`} >
            <Image src={image}  className={`transition  ease-in-out delay-200  `} fill priority objectFit='cover' alt={`Slide ${index + 1}`} />
            
            
            <div className={`absolute  left-0 right-0   top-full bg-transparent w-full h-full z-10 mx-auto ${isActive?"":"  "}`}>
            <div className='min-w-full min-h-full relative mx-auto 	drop-shadow-none shadow-none '>
            <Image src={image}  className={`rotate-180 opacity-20 z-10  transition ease-in-out delay-200 ${isActive?"p-0 ease-linear ":""}`} fill priority objectFit='fill' alt={`Slide ${index + 1}`} />

            <div className='absolute top-0 left-0 right-0 text-center p-2 w-full z-50'>
                <Link className='z-50' href="/">
                Wedding
                </Link>
                
            </div>
            <div className={`absolute top-1/4 lg:top-[2rem] xl:top-1/4 left-0 right-0  w-full  ${isActive?'max-sm:h-[5.15rem] sm:h-[6.54rem] md:h-[6.6rem] lg:h-[4.6rem] xl:h-[11rem] h-[8.9rem] ':'max-sm:h-[6.6rem] sm:h-[7.93rem] md:h-[7.99rem] lg:h-[4.79rem] xl:h-[12.1rem]  h-[8.9rem]'} z-50   bg-gradient-to-b from-transparent to-slate-950 `}>

            </div>
            </div>

            </div>
            </div>
            </div>
           
            </>
            )}
       
        </SwiperSlide>
      )})}
     
    </Swiper>
  );
};
export default Carousel