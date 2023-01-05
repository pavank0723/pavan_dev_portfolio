import React from 'react'
import "./home.css"
import PavanImg from "../../assets/py.png"
import HeaderSocial from './HeaderSocial'
import ScrollDown from './ScrollDown'
import Shape from './Shape'
import { useTypewriter } from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Home = () => {
  const { t } = useTranslation();

  const { text } = useTypewriter({
    words: [`${t('developer')}`, `${t('ui_designer')}`, `${t('self_learner')}`, `${t('self_believer')}`,],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
  })
  return (
    <>

      <section className='home container' id='home'>

        <div className='intro'>

          <Link to='/login'><img src={PavanImg} alt="Dev Image" className="home_img" onDoubleClick={() => alert("Go to Login page")} /></Link>
          <h1 className='home_name'>{t('my_name')}</h1>
          <p className='home_self_intro'>{t('i_am')}
            <span className='home_type_Writter'>

              {text}
              <span className="cursor">|</span>
            </span>
          </p>

          <HeaderSocial />

          <a href='#contact' className='btn'> {t('hire_me')}</a>
          <ScrollDown />
        </div>
        {/* <Shape /> */}
      </section>
    </>
  )
}

export default Home