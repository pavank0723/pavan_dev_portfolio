import '../App.css';
import MainHome from './home/MainHome';
import About from './about/About';
import Services from './services/Services';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import Skill from './skill/Skill';
import Header from './header/Header';
import Footer from './footer/Footer';
import ScrollUp from './scrollup/ScrollUp';
import Certificate from './certificate/Certificate';
import Resume from './resume/Resume';
import SkillNew from './skill/SkillNew';
import ResumeNew from './resume/ResumeNew';
import { Route, Routes } from 'react-router-dom';

const  FrontendPage = () => {
  return <>
    {/* <Sidebar/> */}

    <Header />

    <main className='main'>

      {/* <Home /> */}
      <MainHome />
      <About />
      <Skill />
      <SkillNew />
      <Resume />
      {/* <Services /> */}
      <ResumeNew />

      <Portfolio />
      <Certificate />
      <Contact />
      {/*
    <Pricing />
    <Blog />
    <Testimonials />
    <Contact /> */}
    </main>
    <Footer />
    <ScrollUp />
  </>
}

export default FrontendPage;
