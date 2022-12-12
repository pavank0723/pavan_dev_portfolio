import React, { useEffect, useState } from 'react'
import "./portfolio.css"
import Menu from './Menu'
import CategoryButton from './CategoryButton'
import WorkItems from './WorkItems'
import { useTranslation } from "react-i18next"

const allCategory = ["All", ...new Set(Menu.map((curElem) => curElem.category))]

const Portfolio = () => {
  const { t } = useTranslation()
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
      <h3 className='section_title'>{t('portfolios')}</h3>
      <span className='section__subtitle'> {t('most_recent_work')}</span>

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