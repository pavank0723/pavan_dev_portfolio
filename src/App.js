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
function App() {
  return <>
  <Sidebar/>
    <main className='main'>
    <Home />
    <About />
    <Services />
    <Resume />
    <Portfolio />
    <Pricing />
    
    <Blog />
    <Testimonials />
    <Contact />
    <Certificate />
    </main>
  </>
}

export default App;
