import React, { useEffect, useState } from 'react'
import "./new_portfolio3.css"
import Menu from './Menu'
import CategoryButton2 from './CategoryButton2'
import WorkItems2 from './WorkItems2'

import Work5 from "../../assets/work/api_2.png"

// const allCategory = [...new Set(Menu.map((curElem) => {
//   return curElem.category;
// }))]


// const allCategory = ["All", ...new Set(Menu.map((curElem) => curElem.category))]

const NewPortfolio3 = () => {
  // const [work, setWork] = useState(Menu)
  // const [catItem, setCatItem] = useState(allCategory)

  // const [tag, setTag] = useState('All')

  // const [filteredImage, setFilteredImage] = useState([])

  // useEffect(() => {
  //   tag === 'All' ? setFilteredImage(work) : setFilteredImage(work.filter(item => item.category === tag))
  // }, [tag])

  // const filterItem = (categoryItem) => {

  //   if (categoryItem === "All") {
  //     setWork(Menu)
  //     return
  //   }
  //   const updatedItems = Menu.filter((curElem) => {
  //     return curElem.category === categoryItem
  //   })

  //   setWork(updatedItems)
  // }

  return (
    <section className='portfolio container service' id='portfolio'>
      <h3 className='section_title'>Recent works 3</h3>

      {/* ------==== Work Menu ====----- */}
      {/* <div className='work_filters'>

        <CategoryButton2 
                filterItem={filterItem}
                catItem={catItem} 
                handleSetTag={setTag} 
                currentTag={tag}
        />
      </div> */}
      <div className='work_filters'>
        <span className='work_item work_active'>All</span>
        <span className='work_item'>Web</span>
        <span className='work_item'>App</span>
        <span className='work_item'>Design</span>
      </div>

      {/* ------==== Work List ====----- */}
      {/* <WorkItems2 filteredImage={filteredImage} /> */}

      <div className='work_container container grid'>

       
        <div className='work_card'>
          <img src={Work5} alt='' className='work_img' />
          <h3 className='work_title'>Web Design</h3>
          <span className='work_button'> Demo
            <i className="uil uil-arrow-right work_button_icon"></i>
          </span>
          <div className='portfolio_item_details'>
            <h3 className='details_title'>This servie provided</h3>
            <p className='details_description'>Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.</p>
            <ul className='details_info'>
              <li>Created - <span> 4 Dec 2021</span></li>
              <li>Technologies - <span>html css</span></li>
              <li>Role - <span>frontend</span></li>
              <li>View - <span><a href=''>www.example.com</a></span></li>

            </ul>
          </div>

        </div>

        <div className='work_card'>
          <img src={Work5} alt='' className='work_img' />
          <h3 className='work_title'>Web Design</h3>
          <span className='work_button'> Demo
            <i className="uil uil-arrow-right work_button_icon"></i>
          </span>
          <div className='portfolio_item_details'>
            <h3 className='details_title'>This servie provided</h3>
            <p className='details_description'>Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.</p>
            <ul className='details_info'>
              <li>Created - <span> 4 Dec 2021</span></li>
              <li>Technologies - <span>html css</span></li>
              <li>Role - <span>frontend</span></li>
              <li>View - <span><a href=''>www.example.com</a></span></li>

            </ul>
          </div>

        </div>

        <div className='work_card'>
          <img src={Work5} alt='' className='work_img' />
          <h3 className='work_title'>Web Design</h3>
          <span className='work_button'> Demo
            <i className="uil uil-arrow-right work_button_icon"></i>
          </span>
          <div className='portfolio_item_details'>
            <h3 className='details_title'>This servie provided</h3>
            <p className='details_description'>Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.</p>
            <ul className='details_info'>
              <li>Created - <span> 4 Dec 2021</span></li>
              <li>Technologies - <span>html css</span></li>
              <li>Role - <span>frontend</span></li>
              <li>View - <span><a href=''>www.example.com</a></span></li>

            </ul>
          </div>

        </div>

        <div className='work_card'>
          <img src={Work5} alt='' className='work_img' />
          <h3 className='work_title'>Web Design</h3>
          <span className='work_button'> Demo
            <i className="uil uil-arrow-right work_button_icon"></i>
          </span>
          <div className='portfolio_item_details'>
            <h3 className='details_title'>This servie provided</h3>
            <p className='details_description'>Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.</p>
            <ul className='details_info'>
              <li>Created - <span> 4 Dec 2021</span></li>
              <li>Technologies - <span>html css</span></li>
              <li>Role - <span>frontend</span></li>
              <li>View - <span><a href=''>www.example.com</a></span></li>

            </ul>
          </div>

        </div>

        <div className='work_card'>
          <img src={Work5} alt='' className='work_img' />
          <h3 className='work_title'>Web Design</h3>
          <span className='work_button'> Demo
            <i className="uil uil-arrow-right work_button_icon"></i>
          </span>
          <div className='portfolio_item_details'>
            <h3 className='details_title'>This servie provided</h3>
            <p className='details_description'>Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.</p>
            <ul className='details_info'>
              <li>Created - <span> 4 Dec 2021</span></li>
              <li>Technologies - <span>html css</span></li>
              <li>Role - <span>frontend</span></li>
              <li>View - <span><a href=''>www.example.com</a></span></li>

            </ul>
          </div>

        </div>

        <div className='work_card'>
          <img src={Work5} alt='' className='work_img' />
          <h3 className='work_title'>Web Design</h3>
          <span className='work_button'> Demo
            <i className="uil uil-arrow-right work_button_icon"></i>
          </span>
          <div className='portfolio_item_details'>
            <h3 className='details_title'>This servie provided</h3>
            <p className='details_description'>Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.</p>
            <ul className='details_info'>
              <li>Created - <span> 4 Dec 2021</span></li>
              <li>Technologies - <span>html css</span></li>
              <li>Role - <span>frontend</span></li>
              <li>View - <span><a href=''>www.example.com</a></span></li>

            </ul>
          </div>

        </div>

        <div className='work_card'>
          <img src={Work5} alt='' className='work_img' />
          <h3 className='work_title'>Web Design</h3>
          <span className='work_button'> Demo
            <i className="uil uil-arrow-right work_button_icon"></i>
          </span>
          <div className='portfolio_item_details'>
            <h3 className='details_title'>This servie provided</h3>
            <p className='details_description'>Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.</p>
            <ul className='details_info'>
              <li>Created - <span> 4 Dec 2021</span></li>
              <li>Technologies - <span>html css</span></li>
              <li>Role - <span>frontend</span></li>
              <li>View - <span><a href=''>www.example.com</a></span></li>

            </ul>
          </div>

        </div>

        <div className='work_card'>
          <img src={Work5} alt='' className='work_img' />
          <h3 className='work_title'>Web Design</h3>
          <span className='work_button'> Demo
            <i className="uil uil-arrow-right work_button_icon"></i>
          </span>
          <div className='portfolio_item_details'>
            <h3 className='details_title'>This servie provided</h3>
            <p className='details_description'>Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.</p>
            <ul className='details_info'>
              <li>Created - <span> 4 Dec 2021</span></li>
              <li>Technologies - <span>html css</span></li>
              <li>Role - <span>frontend</span></li>
              <li>View - <span><a href=''>www.example.com</a></span></li>

            </ul>
          </div>

        </div>
        

      </div>

    </section>
  )
}

export default NewPortfolio3