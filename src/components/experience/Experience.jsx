import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front-end Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>CSS</h4>
              <small className='text-light'>intermediate</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>javascript</h4>
              <small className='text-light'>intermediate</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Reactjs</h4>
              <small className='text-light'>intermediate</small>
              </div>
            </article>
          </div>

        </div>
        <div className="experience_backend">
        <h3>Back-end Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>PHP</h4>
              <small className='text-light'>Beginner</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>MySQL</h4>
              <small className='text-light'>Beginner</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Nodejs</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
