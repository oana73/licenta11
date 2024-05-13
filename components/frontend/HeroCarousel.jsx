"use client"
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'nuka-carousel';

export default function HeroCarousel({sliders}){
  return (
    <Carousel autoplay showDots wrapAround className='rounded-md h-[300px]' >
        {
          sliders.map((slider, i)=>{
            return(
              //  <Link  href={slider.link}>
                <Image key={i} width={556} height={556} src={slider.imageUrl} className='w-full' alt={slider.title}/>
              // {/* </Link> */}
            );
          })
        }
    </Carousel>
    
  );
};