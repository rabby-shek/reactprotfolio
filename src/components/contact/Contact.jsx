import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r6t3pnb', 'template_s44izgq', form.current, 'GVNiMYkS1FpypUkWS')
     e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>rabbyshek1998@gmail.com</h5>
            <a href="mailto:rabbyshek1998@gmail.com" target='_blank'>Send a massage</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messanger</h4>
            <h5>Md suvo khan</h5>
            <a href="https://m.me/100010963026856" target='_blank'>Send a massage</a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+8801724707680</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801724707680" target='_blank'>Send a massage</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your full name' required/>
          <input type="email" name='email' placeholder='your email' required/>
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
