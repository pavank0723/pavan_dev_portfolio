import React from 'react'
import "./home.css"
import PavanImg from "../../assets/py.png"
import HeaderSocial from './HeaderSocial'
import ScrollDown from './ScrollDown'
import Shape from './Shape'

const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className='intro'>

        <img src={PavanImg} alt="Dev Image" className="home_img"/>
        <h1 className='home_name'>Pavan Yadav</h1>
        <span className='home_self_intro'>I'm a Front-End Developer</span>

        <HeaderSocial />

        <a href='#contact' className='btn'> Hire Me</a>
        <ScrollDown />
      </div>
      <Shape />
    </section>
  )
}

export default Home