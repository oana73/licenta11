"use client"
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'nuka-carousel';

export default function HeroCarousel({sliders}){
  return (
    <Carousel className='rounded-md h-[300px]' autoplay showDots  >
        {
          sliders.map((slider, i)=>{
            return(
              //  <Link  href={slider.link}>
                <Image key={i} width={500} height={500} src={slider.imageUrl} className='w-full rounded-lg h-[300px]' alt={slider.title}/>
              // {/* </Link> */}
            );
          })
        }
    </Carousel>
    
  );
};