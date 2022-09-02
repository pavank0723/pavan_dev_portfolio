import React from 'react'
import "./services.css"
import Data from './Data'

const Services = () => {
  return <section className='service container section' id='service'>
    <h2 className='section_title'>Services</h2>
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

export default Services