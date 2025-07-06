import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import Services from './Components/services/Services';
import Skills from './Components/skills/Skills';
import Portfolio from './Components/portfolio/Portfolio';
import Resume from './Components/resume/Resume';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import MouseTrail from './Components/MouseTrail/MouseTrail';

function App() {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);
    
    // cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="main">
      {isDesktop && <MouseTrail />}
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
