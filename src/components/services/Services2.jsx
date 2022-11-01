import React from 'react'
import "./services2.css"
import Data from './Data'

const Services2 = () => {
  return <section className='service container section' id='service'>
    <h2 className='section_title'>Services2</h2>
    <span className='section__subtitle'> What I Offer</span>
    <div className='service_container grid'>
      {Data.map(({ id, image, title, description }) => {
        return (
          <div className='service_card' key={id}>
            <img src={image} alt={`image id`} className="service_img" />
            <h3 className='service_title'>{title}</h3>
            <p className='service_description'>{description}</p>

          </div>
        )
      })}

    </div>

  </section>
}

export default Services2