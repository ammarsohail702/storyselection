import React from 'react'
import { Carousel } from 'react-bootstrap'

const HeroSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.vimeocdn.com/video/1655748439-96c0424c5fc55194e41bbe5d1f3748d1de1ec7ca5af0513af61045756a18fa80-d"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-white fontsize34 headtxt'>DAOs and Storytelling:</h3>
          <p className='text-white fontsize34 mt-5 line-height17px headtxt2'>A Match Made in Decentralized Heaven</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HeroSection