import './App.css';
import Home from './components/ui/home/Home';
import About from './components/ui/about/About';
import Services from './components/ui/services/Services';
import Portfolio from './components/ui/portfolio/Portfolio';
import Contact from './components/ui/contact/Contact';
import Skill from './components/ui/skill/Skill';
import Header from './components/ui/header/Header';
import Footer from './components/ui/footer/Footer';
import ScrollUp from './components/ui/scrollup/ScrollUp';
import Certificate from './components/ui/certificate/Certificate';
import Resume from './components/ui/resume/Resume';
import ParticleBG from './components/ui/utils/ParticleBG';
import MainHome from './components/ui/home/MainHome';
function App() {
  return <>
    {/* <Sidebar/> */}
    
    <Header />
    
    <main className='main'>
    
      {/* <Home /> */}
      <MainHome />
       <About />
       <Skill />
       
       <Resume />
       {/* <Services /> */}
       
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
