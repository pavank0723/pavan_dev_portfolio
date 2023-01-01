import './App.css';
import MainHome from './pages/home/MainHome';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Skill from './pages/skill/Skill';
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';
import ScrollUp from './pages/scrollup/ScrollUp';
import Certificate from './pages/certificate/Certificate';
import Resume from './pages/resume/Resume';
import SkillNew from './pages/skill/SkillNew';
import ResumeNew from './pages/resume/ResumeNew';

function App() {
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

export default App;
