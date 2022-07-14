import React from 'react'
import './about.css'
import ME from '../assets/me_3.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
        <div className="about_me-image">
                <img src={ME} alt="about_img" />
            </div>

        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience </h5>
              <small>1.5+ years Experience</small>

            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients </h5>
              <small>00 world wide</small>

            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>projects </h5>
              <small>10+ completed</small>

            </article>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore veniam officia, facilis et saepe voluptates fuga repellat minus quo mollitia, placeat in perspiciatis hic nobis magni expedita ratione obcaecati id.</p>
           <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
