import React from 'react'
import "./about.css"
import Me from "../../assets/py.png"
import MyResume from "../../assets/pavan's_resume.pdf"
import AboutSkills from './AboutSkills'
import AboutBox from './AboutBox'
import Info from './Info'

const About = () => {
  return (
    <section className='about container section' id='about'>
      <div className='section_title'>About Me </div>
      <span className='section__subtitle'> My Intro</span>
      <div className='about_container container grid'>
        <img src={Me} alt='' className='about_img' />

        <div className='about_data'>
          <AboutBox />
          <p className='about_description'> I'm Pavan Yadav, Web developer from Mumbai, India. I have rich experience in web site design and building and customization, also I am good in Logo designing.

          </p>
          <a download="" href={MyResume} className='btn'>
            Download <i className="fa-solid fa-download btn_icon"></i>
          </a>

        </div>
      </div>

    </section>
  )
}

export default About