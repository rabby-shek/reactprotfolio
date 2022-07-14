import React from 'react'
import CV from '../assets/my_cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>contact</a>
      
    </div>
  )
}

export default CTA
