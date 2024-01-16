import { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';

const Carousel =() => {
    const images = ['/01.jpg', '/02.jpg', '/03.jpg', '/02.jpg', '/03.jpg']; // Replace with your image URLs

    
    const handleSlideClick = (index) => {
        // Navigate to the clicked slide
        if (swiper) {
          swiper.slideTo(index); // Use the slideTo method to navigate
        }
      };
      let swiper;

    const swiperParams = {
       
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 'auto',
        onSwiper: (swiperInstance) => {
            // Save Swiper instance to a variable
            swiper = swiperInstance;
          },
          initialSlide:2, 
      };
  return (
    <Swiper
      // install Swiper modules

      className='text-white w-full h-full  mySwiper bg-transparent	mt-[-5rem]'
      
      centeredSlides={true}
      freeMode={true}
      breakpoints={{
        350: {
            slidesPerView: 2,
            spaceBetween: 3,
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 3,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween:10,
        },
      }}
      {...swiperParams}
    >
     {images.map((image, index) =>{
        return (
        <SwiperSlide key={index} className=' w-full z-0 h-[20rem] drop-shadow-none shadow-none z-0 relative cursor-pointer ' onClick={()=>handleSlideClick(index)} >{({ isActive }) => (
           <>
           <div className='absolute top-0 left-0 right-0 bottom-0 '>
            <div className='w-full z-0 h-[25rem] relative mx-auto 	drop-shadow-none shadow-none '>
            <Image src={image}  className={`transition ease-in-out delay-200 ${isActive?"p-0 ease-linear ":"py-10 ease-linear "}`} fill priority objectFit='cover' alt={`Slide ${index + 1}`} />
            
            
            <div className={`absolute  left-0 right-0   top-full bg-transparent w-full h-full z-10 ${isActive?"p-0 ":"mt-[-2.5rem]"}`}>
            <div className='relative w-full h-full z-10'>
            <Image src={image} className='rotate-180 opacity-20 z-10 '  fill priority objectFit='cover' alt={`Slide ${index + 1}`} />
            <div className='absolute top-0 left-0 right-0 text-center p-2 w-full z-50'>
                <Link className='z-50' href="/">
                Wedding
                </Link>
                
            </div>
            <div className={`absolute top-1/4 left-0 right-0  w-full  ${isActive?'h-[8.9rem] ':'h-[11.3rem]'} z-50   bg-gradient-to-b from-transparent to-slate-950 `}>

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