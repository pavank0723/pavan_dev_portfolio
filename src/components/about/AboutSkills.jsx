import React from 'react'

const AboutSkills = () => {
  return (
    <div className='about_skills grid'>
          <div className='skills_data'>
            <div className='skills_title'>
              <h3 className='skills_name'>Development</h3>
              <span className='skills_number'>75%</span>

            </div>
            <div className='skills_bar'>
              <span className='skills_percentage skill_1'>

              </span>

            </div>

          </div>

          <div className='skills_data'>
            <div className='skills_title'>
              <h3 className='skills_name'>UI Design</h3>
              <span className='skills_number'>70%</span>

            </div>
            <div className='skills_bar'>
              <span className='skills_percentage skill_2'>

              </span>

            </div>

          </div>

          <div className='skills_data'>
            <div className='skills_title'>
              <h3 className='skills_name'>Logo Design</h3>
              <span className='skills_number'>60%</span>

            </div>
            <div className='skills_bar'>
              <span className='skills_percentage skill_3'>

              </span>

            </div>

          </div>

        </div>
  )
}

export default AboutSkills