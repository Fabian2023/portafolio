import React from 'react'
import './about.css'
import ME from '../../assets/ME1.jpeg'
import {BsFillAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {MdFolderCopy} from 'react-icons/md'
import {FaReact} from 'react-icons/fa'
import {IoLogoCss3} from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import{BsFileEarmarkWordFill} from 'react-icons/bs'
import{SiMicrosoftpowerpoint}from"react-icons/si"
import{BsFillFileEarmarkExcelFill}from "react-icons/bs"
import{BsMicrosoft}from "react-icons/bs"



const About = () => {

  const linkedinProfileURL = 'https://www.linkedin.com/in/fabian-salcedo-23050442/'
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about img' />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <BsFillAwardFill className='about__icon'/>       
              <h5>Experience</h5>
              <small>Konigsberg Soluciones Integrales de Software SAS. </small>
              <small>Henry Bootcamp- 2023. </small>
            </article>
           
            <article className='about__card'>
              <FiUsers className='about__icon'/>       
              <h5>Main stack</h5>
              <small>
                <FaReact className='about__icon'/>
                <SiJavascript className='about__icon'/>
                <IoLogoCss3 className='about__icon'/>
                <AiFillHtml5 className='about__icon'/>
                </small>
            </article>
           
            <article className='about__card'>
              <MdFolderCopy className='about__icon'/>       
              <h5>Complementary stack</h5>
              <small> 
                <BsMicrosoft className='about__icon'/>
                <SiMicrosoftpowerpoint className='about__icon'/>
                <BsFileEarmarkWordFill className='about__icon'/>
                <BsFillFileEarmarkExcelFill className='about__icon' />
              </small>
            </article>
          </div>

        <p>
        Passionate Full Stack web developer with expertise in technologies such as JavaScript, React, Node.js, and PostgreSQL. Committed to crafting comprehensive and efficient solutions from frontend to backend.
        </p>

        <a href={linkedinProfileURL} className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About