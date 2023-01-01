import React, { useState, useEffect } from 'react'
import "./resume.css"
import Data from './Data'
import CategoryButton from './CategoryButton'
import MyResume from './MyResume'
import { useTranslation } from "react-i18next"

var resArr = [];
Data.forEach(function (item) {
  const {id,category,icon} = item
    var i = resArr.findIndex(x => x.category === category);
    var j = resArr.findIndex(y => y.icon === icon);
    
    if (i <= -1 || j <= -1) {
        resArr.push({ id, category, icon});
    }
});
console.log(resArr);

const Resume = () => {
  const { t } = useTranslation()
  const [resume, setResume] = useState(Data)
  const [tab, setTab] = useState('Education')
  const [filteredItem, setFilteredItem] = useState([])

  console.log(tab)
  console.log(filteredItem)
  useEffect(() => {
    tab === 'Education' ? setFilteredItem(resume.filter(item => item.category === 'Education')) : setFilteredItem(resume.filter(item => item.category === tab))
}, [tab])

  // const toggleTab = (index) => {
  //   setTabItem(index)
  // }
  const filterItem = (categoryResume) => {
    const updatedResumes = Data.filter((curElem) => {
        return curElem.category === categoryResume
    })

    setResume(updatedResumes)
}
  return (
    <section className='qualification container section' id='resume'>
      <h2 className='section_title'>{t('qualification')} </h2>
      <span className='section__subtitle'> {t('my_personal_journey')}</span>
      <div className='qualification_container container'>
        <div className='qualification_tabs'>
          {
            resArr.map((item,index) =>{
              return(
                <CategoryButton key={index}
                  data = {item}
                  filterItem = {filterItem}
                  handleSetTab = {setTab}
                  currentTab = {tab}
                />
              )
            })
            
          }

        </div>

        <div className='qualification_sections'>
          <MyResume filteredItem={filteredItem}/>
        </div>

      </div>

    </section>
  )
}

export default Resume