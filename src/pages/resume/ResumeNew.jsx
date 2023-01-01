import React, { useState, useEffect } from 'react'
import "./resume.css"
import Data from './Data'
import CategoryButtonNew from './CategoryButtonNew'
import { useTranslation } from "react-i18next"
import MyResumeNew from './MyResumeNew'
import { useDispatch,useSelector } from 'react-redux'
import { getQualificationList } from '../../services/actions/qualificationAction'

// var resArr = [];
// Data.forEach(function (item) {
//   const {id,category,icon} = item
//     var i = resArr.findIndex(x => x.category === category);
//     var j = resArr.findIndex(y => y.icon === icon);
    
//     if (i <= -1 || j <= -1) {
//         resArr.push({ id, category, icon});
//     }
// });
// console.log(resArr);

const ResumeNew = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const result = useSelector((state)=>state.qualificationData)

  const [tab, setTab] = useState('Education')

//   console.log(tab)
//   console.log(filteredItem)
//   useEffect(() => {
//     tab === 'Education' ? setFilteredItem(resume.filter(item => item.category === 'Education')) : setFilteredItem(resume.filter(item => item.category === tab))
// }, [tab])

console.log("Qualification Data  ", result)

useEffect(() =>{
  dispatch(getQualificationList())
},[])

  // const toggleTab = (index) => {
  //   setTabItem(index)
  // }
//   const filterItem = (categoryResume) => {
//     const updatedResumes = Data.filter((curElem) => {
//         return curElem.category === categoryResume
//     })

//     setResume(updatedResumes)
// }
  return (
    <section className='qualification container section' id='resume'>
      <h2 className='section_title'>{t('qualification')} </h2>
      <span className='section__subtitle'> {t('my_personal_journey')}</span>
      <div className='qualification_container container'>
        <div className='qualification_tabs'>
          {
            result.map((item,index) =>{
              return(
                <CategoryButtonNew key={index}
                  data = {item}
                  handleSetTab = {setTab}
                  currentTab = {tab}
                />
              )
            })
            
          }

        </div>

        <div className='qualification_content qualification_content_active'>
          {/* <MyResumeNew filteredItem={filteredItem}/> */}
          {
                            result.map((categ, index) => {
                                return <div className='skills_group' key={index}>
                                    <div className='skills_list grid'>
                                        {
                                            <MyResumeNew categ={categ} tab={tab}/>
                                        }

                                    </div>
                                </div>
                            })
                        }
        </div>

      </div>

    </section>
  )
}

export default ResumeNew