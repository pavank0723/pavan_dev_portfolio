import React from 'react'
import "./about.css"
import Me from "../../assets/py.png"
import AboutSkills from './AboutSkills'
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className='about container section' id='about'>
      <div className='section_title'>About Me </div>
      <div className='about_container grid'>
        <img src={Me} alt='' className='about_img' />

        <div className='about_data grid'>
          <div className='about_info'>
            <p className='about_description'> I'm Pavan Yadav, Web developer from Mumbai, India. I have rich experience in web site design and building and customization, also I am good in Logo designing.

            </p>
            <a href='' className='btn'>
              Download <i className="fa-solid fa-download"></i>
            </a>

          </div>

          <AboutSkills />


        </div>
      </div>
      <AboutBox />



    </section>
  )
}

export default About