'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CatCarousel({categories}) {
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5// optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
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
  swipeable={false}
  draggable={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  //deviceType={}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>

  {categories.map((categories,i)=> {
    return( 
      <Link key={i} href='#' className=''>
        <Image src={categories.imageUrl} alt={categories.title} width={375} height={480} className='w-full h-56 px-1 object-cover'/>
        <h2 className='text-center'>{categories.title}</h2>
      </Link>
    )
  })}
</Carousel>
  )
}
