import React from 'react'
import "./about.css"
import Me from "../../assets/py.png"
import MyResume from "../../assets/pavan's_resume.pdf"
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className='about container section' id='about'>
      <div className='section_title'>About Me </div>
      <span className='section__subtitle'> My Intro</span>
      <div className='about_container container grid'>
        <img src={Me} alt='' className='about_img' />

        <div className='about_data'>
          <AboutBox />
          <p className='about_description'> I'm Pavan Yadav, and Today's the most popular plateform to earn is freelancer. The every one have a some talent so here is opportunity to prove yourself . I have knowledge about React JS, Flutter, UI Designing and I have contributed in 2 client basied API Project in ASP .Net Core and ..

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