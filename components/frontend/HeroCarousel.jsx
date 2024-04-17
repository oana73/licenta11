"use client"
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'nuka-carousel';

export default function HeroCarousel({sliders}){
  return (
    <Carousel autoplay showDots  className='rounded-md overflow-hidden h-[300px]' >
        {
          sliders.map((slider, i)=>{
            return(
              //  <Link  href={slider.link}>
                <Image key={i} width={712} height={384} src={slider.imageUrl} className='w-full' alt={slider.title}/>
              // {/* </Link> */}
            );
          })
        }
    </Carousel>
    
  );
};