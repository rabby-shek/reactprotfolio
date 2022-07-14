import React from 'react'
import './protfolio.css'
import IMG1 from '../assets/protfolio_4.PNG'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'

const Protfolio = () => {
  return (
    <section id='protfolio'>
     <h5>My Recent work</h5>
     <h2>protfolio</h2>
     <div className="container protfolio_container">
      <article className='protfolio_items'>
        <div className="protfolio_item-image">
          <img src={IMG1} alt="im1" />
        </div>
          <h3>Digital Clock</h3>
         <div className="protfolio_item-cta">
         <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://rabby-shek.github.io/digital_clock/" className='btn btn-primary' target="_blank">Live Demo</a>
         </div>
        

      </article>
      <article className='protfolio_items'>
        <div className="protfolio_item-image">
          <img src={IMG1} alt="im1" />
        </div>
          <h3>This is a protfolio item image.</h3>
         <div className="protfolio_item-cta">
         <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://rabby-shek.github.io/digital_clock/" className='btn btn-primary' target="_blank">Live Demo</a>
         </div>
        

      </article>
      <article className='protfolio_items'>
        <div className="protfolio_item-image">
          <img src={IMG1} alt="im1" />
        </div>
          <h3>This is a protfolio item image.</h3>
         <div className="protfolio_item-cta">
         <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://rabby-shek.github.io/digital_clock/" className='btn btn-primary' target="_blank">Live Demo</a>
         </div>
        

      </article>


     </div>
    </section>
  )
}

export default Protfolio
