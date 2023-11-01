import React from 'react'
import './testimonials.css'
import AVTR1  from '../../assets/avatar1.png'
import AVTR2  from '../../assets/AVATAR2.png'
import AVTR3  from '../../assets/avatar3.jpg'


import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:AVTR1,
    name: 'Alejandra Arenas',
    review: 'I have known Fabian for many years and I can attest that he is a committed, responsible person with a desire to learn and grow.!'
  },
  {
    avatar:AVTR2,
    name: 'Santiago Ramirez',
    review: 'I had the opportunity to work with Fabian on the final project of the Bootcamp, and I could say that he is creative in problem-solving and has strong knowledge!'
  },
  {
    avatar:AVTR3,
    name: 'Oscar Mellizo',
    review: 'I have known him for several years, and I know he has the skills to work in a team and successfully carry out a project in any tech company!'
  },
  
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
      
        {
          data.map(({avatar,name,review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>  
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}
              </small>         
             </SwiperSlide>  
            )
          })
        } 
      </Swiper>
    </section>
  )
}

export default Testimonials