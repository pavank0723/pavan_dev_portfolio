import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Pricing from './components/pricing/Pricing';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import Certificate from './components/certificate/Certificate';
import Skill from './components/skill/Skill';
import NewPortfolio from './components/portfolio/NewPortfolio';
import NewPortfolio2 from './components/portfolio/NewPortfolio2';
import NewPortfolio3 from './components/portfolio/NewPortfolio3';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return <>
    {/* <Sidebar/> */}

    <Header />
    <main className='main'>
      <Home />
       <About />
       <Skill />
       <Services />
       {/* <Resume />
       <NewPortfolio2 /> */}
       <Contact />
    {/*
    <Resume />
    
    <Portfolio />

    <NewPortfolio />
    <NewPortfolio2 />

    <NewPortfolio3 />
    
    <Pricing />
    
    <Blog />
    <Testimonials />
    <Contact />
    <Certificate /> */}
    </main>
    <Footer />
    <ScrollUp />
  </>
}

export default App;
