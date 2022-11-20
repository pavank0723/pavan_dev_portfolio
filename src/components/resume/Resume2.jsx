import React, { useState, useEffect } from 'react'
import "./resume2.css"
import Data from './Data'
import Card from './Card'

const allCategory = [...new Set(Data.map((curElem) => curElem.category))]

const Resume2 = () => {
  const [resume, setResume] = useState(Data)
  const [catItem, setCatItem] = useState(allCategory)
  const [tabItem, setTabItem] = useState(1)
  const [tab, setTab] = useState('Education')
  const [filteredItem, setFilteredItem] = useState([])

  useEffect(() => {
    tab === 'Education' ? setFilteredItem(resume.filter(item => item.category === 'Education')) : setFilteredItem(resume.filter(item => item.category === tab))
}, [tab])

  const toggleTab = (index) => {
    setTabItem(index)
  }
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
          <div className={tabItem === 1 ? 'qualification_button qualification_active  button_flex' : 'qualification_button button_flex'} onClick={() => toggleTab(1)}>
            <i className='uil uil-graduation-cap qualification_icon'></i>Education

          </div>
          <div className={tabItem === 2 ? 'qualification_button qualification_active  button_flex' : 'qualification_button button_flex'} onClick={() => toggleTab(2)}>
            <i className='uil uil-briefcase-alt qualification_icon'></i>Experience

          </div>

        </div>

        <div className='qualification_sections'>
          <div className={tabItem === 1 ? 'qualification_content qualification_content_active' : 'qualification_content'}>
            <div className='qualification_data'>
            <div className='qualification_main_data'>
                <h3 className='qualification_title'>Master in Information Technology</h3>
                <span className='qualification_subtitle'>RJ College</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2021-Present
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>

            </div>
            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div className='qualification_main_data'>
                <h3 className='qualification_title'>Master in Information Technology</h3>
                <span className='qualification_subtitle'>RJ College</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2021-Present
                </div>
              </div>


            </div>
            <div className='qualification_data'>
            <div className='qualification_main_data'>
                <h3 className='qualification_title'>Master in Information Technology</h3>
                <span className='qualification_subtitle'>RJ College</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2021-Present
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>

            </div>
            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div className='qualification_main_data'>
                <h3 className='qualification_title'>Master in Information Technology</h3>
                <span className='qualification_subtitle'>RJ College</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2021-Present
                </div>
              </div>


            </div>
          </div>

          <div className={tabItem === 2 ? 'qualification_content qualification_content_active' : 'qualification_content'} >
            <div className='qualification_data'>
              <div className='qualification_main_data'>
                <h3 className='qualification_title'>Flutter Developement</h3>
                <span className='qualification_subtitle'>Freelancer</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2021-Present
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>

            </div>
            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div className='qualification_main_data'>
                <h3 className='qualification_title'>Work 2</h3>
                <span className='qualification_subtitle'>RJ College</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2021-Present
                </div>
              </div>


            </div>
            <div className='qualification_data'>
              <div className='qualification_main_data'>
                <h3 className='qualification_title'>Work 3</h3>
                <span className='qualification_subtitle'>RJ College</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2021-Present
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>

            </div>
            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div className='qualification_main_data'>
                <h3 className='qualification_title'>Work 4</h3>
                <span className='qualification_subtitle'>RJ College</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2021-Present
                </div>
              </div>


            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Resume2