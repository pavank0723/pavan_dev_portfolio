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

useEffect(() =>{
  dispatch(getQualificationList())
},[])

  return (
    <section className='qualification container section' id='resume'>
      <h2 className='section_title'>{t('qualification')} </h2>
      <span className='section__subtitle'> {t('my_personal_journey')}</span>
      <div className='qualification_container container'>
        <div className='qualification_tabs'>
          {
            result.sort((a, b) => a[1] - b[1]).map((item,index) =>{
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
                                return  <MyResumeNew categ={categ} tab={tab}/>
                            })
                        }
        </div>

      </div>

    </section>
  )
}

export default ResumeNew