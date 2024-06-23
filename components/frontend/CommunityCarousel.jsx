'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CommunityCarousel({trainings}) {
  const responsive = {
      desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3// optional, default to 1.
      },
      tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
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
      itemClass="p-4"
    >

  {trainings.map((training,i)=> {
    return( 
      <div key={i} className='bg-slate-200'>
        <Link href='#'>
            <Image src={training.imageUrl} alt={training.title} width={500} height={500} className='w-full h-56 object-cover'/>
        </Link>
        <h2 className='text-center'>{training.title}</h2>
        <p className='px-4 line-clamp-4 my-2 mb-4'>
            {training.description}
        </p>
        <div className="flex justify-between items-center px-4 py-2">
            <Link href='#' className=' hover:underline '>
            Read More
            </Link> 
            <Link href='#'>Talk to Consultatnt</Link>
        </div>
      </div>
    )
  })}
</Carousel>
  )
}
