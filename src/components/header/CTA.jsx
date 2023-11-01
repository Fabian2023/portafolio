import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  const linkedinProfileURL = 'https://www.linkedin.com/in/fabian-salcedo-23050442/'
  
 
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a id="letsTalkLink" href={linkedinProfileURL} className='btn btn-primary'>Let's talk</a>

    </div>
  )
}

export default CTA