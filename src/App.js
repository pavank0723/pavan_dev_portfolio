import './App.css';
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
