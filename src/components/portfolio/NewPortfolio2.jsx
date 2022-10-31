import React, { useEffect, useState } from 'react'
import "./new_portfolio.css"
import Menu from './Menu'
import CategoryButton2 from './CategoryButton2'
import WorkItems2 from './WorkItems2'

// const allCategory = [...new Set(Menu.map((curElem) => {
//   return curElem.category;
// }))]


const allCategory = ["All", ...new Set(Menu.map((curElem) => curElem.category))]

const NewPortfolio2 = () => {
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
    <section className='portfolio container service' id='portfolio'>
      <h3 className='section_title'>Recent works 2</h3>

      {/* ------==== Work Menu ====----- */}
      <div className='work_filters'>

        <CategoryButton2 
                filterItem={filterItem}
                catItem={catItem} 
                handleSetTag={setTag} 
                currentTag={tag}
        />
      </div>

      {/* ------==== Work List ====----- */}
      <WorkItems2 filteredImage={filteredImage} />

    </section>
  )
}

export default NewPortfolio2