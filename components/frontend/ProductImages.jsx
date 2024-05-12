'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ProductImages({productImages=[], thumbnail}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className='col-span-3'>
        {
            productImages.length<=0 ?(
                <Image src={thumbnail} alt={product.title} width={110} height={110} className='w-full' />
            ):(
              <>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {
                  productImages.map((image,i)=>{
                    return(
                      <SwiperSlide key={i}>
                        <img src={image} />
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {
                  productImages.map((image,i)=>{
                    return(
                      <SwiperSlide key={i}>
                        <img src={image} />
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </>
            )
        }
    </div>
  )
}
