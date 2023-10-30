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
    review: 'conozco a Fabian hace muchos años y puedo constatar que es una persona comprometida, responsable, con ganas de aprender y superarse!'
  },
  {
    avatar:AVTR2,
    name: 'Santiago',
    review: 'Tuve la oportunidad de trabajar con Fabian en el proyecto final del Bootcamp y podria decir que es creativo en la resolucion de problemas, tiene conocimientos firmes!'
  },
  {
    avatar:AVTR3,
    name: 'Oscar Mellizo',
    review: 'lo conozco de hace varios años y se que tiene habilidades para trabajar en equipo y poder sacar adelante un proyecto en cualquier compañia Tech!'
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