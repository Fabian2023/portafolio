import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/fabian-salcedo-23050442' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/Fabian2023' target="_blank" rel="noopener noreferrer"><FaGithub/></a>
    </div>
  )
}



export default HeaderSocials