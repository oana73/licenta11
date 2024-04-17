'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CategoryCarousel({products}) {
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4// optional, default to 1.
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
  itemClass="px-2"
>

  {products.map((product,i)=> {
    return( 
      <div key={i} className='mr-3 border border-gray-400 overflow-hidden'>
        <Link href={`/products/${product.slug}`}>
          <Image src={product.imageUrl} alt={product.title} width={375} height={480} className='w-full h-56 object-cover'/>
        </Link>
        <Link href={`/products/${product.slug}`}>
          <h2 className='text-center'>{product.title}</h2>
        </Link>
        <div className=" my-2 text-center">
          <p >ugx {product.discount}</p>
          
        </div>
      </div>
    )
  })}
</Carousel>
  )
}
