import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/logowander.png'
import IMG3 from '../../assets/portafolio3.jpg'
import IMG4 from '../../assets/countries.png'

const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">

        <article className='portafolio__item'>
          <a href="https://pf-2-lavenganza-front-6doztsbfp-migorriti.vercel.app/" target='_blank' rel='noreferrer'>
            <div className='portafolio__item-image'>
              <img src={IMG1} alt='' />
            </div>
          </a>
          <h3>WANDERLUXE APP</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/MiGorriti/PF2LavenganzaFront" className='btn' target='_blank' rel='noreferrer' >Github</a>
            <a href="https://pf-2-lavenganza-front-6doztsbfp-migorriti.vercel.app/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live demo</a>
          </div>
        </article>

        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>Calculator</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live demo</a>
          </div>
        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>COUNTRIES APP</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/Fabian2023/countriesFront" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://countries-two-flax.vercel.app/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live demo</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Portafolio