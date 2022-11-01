import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Skill from './components/skill/Skill';
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
       {/* <Resume />*/}
       <Portfolio />
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
