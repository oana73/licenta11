'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';

export default function CategoryCarousel({products}) {
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 5,
        slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1280, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    small: {
      breakpoint: { max: 768, min: 0 },
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
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //deviceType={}
      dotListClass="custom-dot-list-style"
      itemClass="p-2"
>

  {products.map((product,i)=> {
    return( 
      <Product product={product} key={i}/>
    )
  })}
</Carousel>
  )
}
