'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function MarketsCarousel({markets}) {
  const responsive = {
      desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 1// optional, default to 1.
      },
      tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5,
          slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
      }
  };
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //deviceType={}
      dotListClass="custom-dot-list-style"
      itemClass="px-4"
    >

  {markets.map((market,i)=> {
    return( 
      <Link key={i} href={`/market/${market.slug}`} className=''>
        <Image src={market.imageUrl} alt={market.title} width={200} height={200} className='w-full px-1 rounded-full'/>
        <h2 className='text-center mt-2 text-neutral-700 dark:text-neutral-300'>{market.title}</h2>
      </Link>
    )
  })}
  
  </Carousel>
  )
}
