import React from 'react'
import './testimonials.css'
import AVTR1 from '../assets/avatar2.jpg'
import AVTR2 from '../assets/avatar3.jpg'
import AVTR3 from '../assets/avatar4.jpg'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque velit perspiciatis mollitia dolor quae temporibus amet quia nihil non laboriosam.'

  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, sed.'

  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, sed.'

  }
]


const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
       {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className="client_avatar">
              <img src={avatar} alt="avatar_1" />
            </div>
            <h5 className='client_name'>{name}</h5>
              <small className="client_review">{review}</small>
  
          </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials
