import { useLayoutEffect } from 'react';
import {  Routes, Route ,useLocation } from "react-router-dom";
import './App.css'
import './index2.css'
import Header from './components/Header';
import Landing from './components/Landing';
import Dest from './components/dest';
import Crew from './components/crew';
import Tech from './components/tech';

function App() {
  const bg = useLocation();
  

  useLayoutEffect(() => {
    const matches = bg.pathname.match(/\w+/);
    const background = matches ? matches[0] : "home";
    document.body.className = background;
  }, [bg]);

  return (
    <>
    
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/destination/*" element={<Dest />} />
        <Route path="/crew/*" element={<Crew />} />
        <Route path="/tech/*" element={<Tech />}/ >
          
        
      </Routes>
    
    
    </>
  )
}

export default App
