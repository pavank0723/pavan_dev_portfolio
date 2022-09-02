import React, { useState } from 'react'
import "./portfolio.css"
import Menu from './Menu'

const Portfolio = () => {
  const [work, setWork] = useState(Menu)
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) =>{
      return curElem.category === categoryItem
    })

    setWork(updatedItems)
  }

  return (
    <section className='portfolio container service' id='portfolio'>
      <h3 className='section_title'>Recent works</h3>

      <div className='work_filters'>
        <span className='work_item' onClick={() => setWork(Menu)}>All</span>
        <span className='work_item' onClick={() => filterItem("Mobile App")}>Mobile App</span>
        <span className='work_item' onClick={() => filterItem("Website")}>Website</span>
        <span className='work_item' onClick={() => filterItem("API")}>API</span>
        <span className='work_item' onClick={() => filterItem("UI Design")}>UI Design</span>
      </div>

      <div className='work_container grid'>
      {work.map((elem) => {
        const{id,image,title,category} = elem
        return(
          <div className='work_card' key={id}>
            <div className='work_thumbnail'>
              <img src={image} className='work_img' alt='' />
              <div className='work_mask'></div>
            </div>
            
            <span className='work_category'>{category}</span>
            <h3 className='work_title'>{title}</h3>
            <a href='#' className='work_button'>
              <i className='icon-link work_button-icon'></i>
            </a>
          </div>
          
        )
      })}

      </div>
    </section>
  )
}

export default Portfolio