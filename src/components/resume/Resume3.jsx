import React, { useState, useEffect } from 'react'
import "./resume2.css"
import Data from './Data'
import CategoryButton2 from './CategoryButton2'
import MyResume from './MyResume'

const allCategory = [...new Set(Data.map((curElem) => curElem.category))]

var resArr = [];
Data.forEach(function (item) {
    var i = resArr.findIndex(x => x.category == item.category);
    var j = resArr.findIndex(y => y.icon == item.icon);
    
    if (i <= -1 || j <= -1) {
        resArr.push({ id: item.id, category: item.category, icon: item.icon });
    }
});
console.log(resArr);


const Resume3 = () => {
  const [resume, setResume] = useState(Data)
  const [tabItem, setTabItem] = useState(1)
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
      <h2 className='section_title'>Qualification </h2>
      <span className='section__subtitle'> My personal journey</span>
      <div className='qualification_container container'>
        <div className='qualification_tabs'>
          {
            resArr.map((item,index) =>{
              return(
                <CategoryButton2 key={index}
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

export default Resume3