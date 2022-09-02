import React from 'react'
import "./services.css"
import ServiceImg1 from "../../assets/service-1.svg"
import ServiceImg2 from "../../assets/service-2.svg"
import ServiceImg3 from "../../assets/service-3.svg"


const data = [
  {
    id: 1,
    image: ServiceImg1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: ServiceImg2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: ServiceImg3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
];


const Services = () => {
  return <section className='service container section'>
    <h2 className='section_title'>Services</h2>
    <div className='service_container grid'>
      {data.map(({ id, image, title, description }) => {
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