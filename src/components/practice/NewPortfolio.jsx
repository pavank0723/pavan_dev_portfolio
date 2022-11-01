import React, { useEffect, useState } from 'react'
import "./new_portfolio.css"
import Menu from './Menu'
import CategoryButton from './CategoryButton'
import WorkItems from './WorkItems'


const allCategory = ["All", ...new Set(Menu.map((curElem) => curElem.category))]

// const allCategory = [...new Set(Menu.map((curElem) => {
//   return curElem.category;
// }))]


console.table(allCategory)

const NewPortfolio = () => {
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
      <h3 className='section_title'>Recent works</h3>

      {/* ------==== Work Menu ====----- */}
      <div className='work_filters'>

        <CategoryButton filterItem={filterItem} catItem={catItem}/>
      </div>

      {/* ------==== Work List ====----- */}
      <WorkItems work={work} />

    </section>
  )
}

export default NewPortfolio