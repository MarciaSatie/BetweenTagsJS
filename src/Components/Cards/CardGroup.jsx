import React from 'react'
import CardSingleStructure from "./CardSingleStructure"
// import Swiper core and required modules
import { EffectCoverflow,Navigation, Pagination, Scrollbar, A11y,EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




export default function CardGroup(props) {
    const content = [...props.contentList];
    const groupLogo = content[0]?.logo;
  return (
    <>
    <div className= "relative z-0 shadow-lg p-4 mt-4 mb-4 rounded-3xl max-h-[350px] text-left ">
        <div className="bg-pink-500 mt-9 flex pl-2 p-2 rounded-md">
            {groupLogo}
            <h1 className="font-mono font-bold text-xl pl-4 text-white ">{props.title}</h1>
        </div>

        <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y,EffectCoverflow]}
           spaceBetween={10}
           navigation
           pagination={{ clickable: true }}
           scrollbar={{ hide: true}}
           onSwiper={(swiper) => console.log(swiper)}
           onSlideChange={() => console.log('slide change')}
           effect = {'coverflow'}
           grabCursor ={true}
           centeredSlides={true}
           loop={true}
           slidesPerView={4}
           coverflowEffect={
              {
                rotate:0,
                stretch:0,
                depth:100,
                modifier:2.5,
              }
           }
    
        >
        
            {content.map((item) => (
              <SwiperSlide>
                <div className="max-h-60 min-w-40 overflow-auto no-scrollbar bg-white">
              <CardSingleStructure
                logo={item.logo}
                key={item.key}
                title={item.title}
                cardDate={item.date}
                text={item.cardContent}
              />
          </div>
          </SwiperSlide>
          ))}
      ...
    </Swiper>
       
    </div>
    
    </>
  )
}
