import React, { useEffect, useState } from 'react'
import "./portfolio.css"
import Menu from './Menu'
import CategoryButton from './CategoryButton'
import WorkItems from './WorkItems'

const allCategory = ["All", ...new Set(Menu.map((curElem) => curElem.category))]

const Portfolio = () => {
  const [work, setWork] = useState(Menu)
  const [catItem, setCatItem] = useState(allCategory)

  const [tag, setTag] = useState('All')

  const [filteredImage, setFilteredImage] = useState([])

  useEffect(() => {
    tag === 'All' ? setFilteredImage(work) : setFilteredImage(work.filter(item => item.category === tag))
  }, [tag])

  const filterItem = (categoryItem) => {

    if (categoryItem === "All") {
      setWork(Menu)
      return
    }
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem
    })

    setWork(updatedItems)
  }

  return (
    <section className='work container section' id='portfolio'>
      <h3 className='section_title'>Portfolio</h3>
      <span className='section__subtitle'> Most recent works</span>

      {/* ------==== Work Menu ====----- */}
      <div className='work_filters'>
        <CategoryButton
          filterItem={filterItem}
          catItem={catItem}
          handleSetTag={setTag}
          currentTag={tag}
        />
      </div>


      {/* ------==== Work List ====----- */}


      <div className='work_container container grid'>
        <WorkItems filteredImage={filteredImage} />

      </div>

    </section>
  )
}

export default Portfolio