""
import { ChevronLeft } from 'lucide-react';
import { Carousel } from 'nuka-carousel';

export default function HeroCarousel(){
  return (
    <Carousel autoplay showDots  className='rounded-md overflow-hidden h-[300px]' >
        <img src="/photo1.jpg" className='w-full'/>
        <img src="/photo1.jpg" className='w-full'/>
    </Carousel>
    
  );
};