import React from 'react'
import "./about.css"
import Me from "../../../assets/py.png"
import MyResume from "../../../assets/pavan's_resume.pdf"
import AboutBox from './AboutBox'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <section className='about container section' id='about'>
      <div className='section_title'>{t('about_me')} </div>
      <span className='section__subtitle'> {t('my_intro')}</span>
      <div className='about_container container grid'>
        <img src={Me} alt='pavan_pic' className='about_img' />

        <div className='about_data'>
          <AboutBox />
          <p className='about_description'> {t('all_about')}
          </p>
          <a download="" href={MyResume} className='btn'>
            {t('download')} <i className="fa-solid fa-download btn_icon"></i>
          </a>

        </div>
      </div>

    </section>
  )
}

export default About