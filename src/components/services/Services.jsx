import React from 'react'
import './services.css'
import { BsCheck } from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>


        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Custom Web Application Development</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Maintenance and Enhancement of Existing Websites</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>E-commerce Application Development</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Online Payment Integration</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Integration of APIs and External Services</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Dashboard Creation and Analytics</p>
            </li>
           
            <li>
              <BsCheck className='service__list-icon' />
              <p>User Authentication and Authorization</p>
            </li>
          </ul>
        </article>

        {/* END  OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service__head">
            <h3>More Content</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Dynamic UI components with React.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>State management with Redux for seamless data.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Responsive design </p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Efficient data fetching and updates with React-Redux.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Social Media Integration</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Accessibility Features</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>principles Solid</p>
            </li>
            
            
          </ul>
        </article>

        {/* END  OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services