import React from 'react'
import "./home.css"
import PavanImg from "../../assets/py.png"
import HeaderSocial from './HeaderSocial'
import ScrollDown from './ScrollDown'
import Shape from './Shape'
import { useTypewriter  } from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index'

const Home = () => {
  const {text} = useTypewriter({
    words: [ " Developer ✌."," UI Designer ✨."," Self Learner🌞."," Self Believer✍.",],
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
    })
  return (
    <section className='home container' id='home'>
      <div className='intro'>

        <img src={PavanImg} alt="Dev Image" className="home_img" />
        <h1 className='home_name'>Pavan Yadav</h1>
        <p className='home_self_intro'>I'm a
          <span className='home_type_Writter'>
            
            {text}
            <span className="cursor">|</span>
          </span>
        </p>

        <HeaderSocial />

        <a href='#contact' className='btn'> Hire Me</a>
        <ScrollDown />
      </div>
      <Shape />
    </section>
  )
}

export default Home