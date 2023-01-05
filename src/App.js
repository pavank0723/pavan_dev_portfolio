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
import { Route, Routes } from 'react-router-dom';
import FrontendPage from './pages/FrontendPage';
import LoginPage from './common/LoginPage/LoginPage';
import NotFound from './common/NotFoundPage/NotFound';

function App() {
  return <>
    
      <Routes>
        <Route path='/' element={<FrontendPage />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
  </>
}

export default App;
