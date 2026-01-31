import { useState, useEffect } from 'react';
import Hero from './pages/Hero.jsx';
import EmpoweringSection from './components/EmpoweringSection.jsx';
import TechSolutionsSection from './components/TechSolutionsSection.jsx';
import Products from './components/Products.jsx';
import GreenHouse from './components/GreenHouse.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width < 768;

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', background: '#ebebeb' }}>
      {/* Global Gradient - Connecting Hero and Empowering seamlessly */}
      <div style={{
        position: 'absolute',
        top: isMobile ? '80vh' : '80vh', // starts inside Hero and ends near mid-page
        right: 0,
        width: isMobile ? '80%' : '50vw', // much narrower on desktop so it only peeks in from the right
        height: isMobile ? '80vh' : '100vh', // limited vertical reach so it doesn't flow far down
        background: 'radial-gradient(ellipse at center right, rgba(162, 232, 247, 0.65) 0%, rgba(235, 235, 235, 0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <Hero />
      <EmpoweringSection />

      {/* TechSolutions now fades its bottom image into #0B0D10 
         Products section starts with bg #0B0D10
      */}
      <TechSolutionsSection />

      {/* Products Section (Dark) */}
      <Products />

      {/* Greenhouse Section (Light) */}
      <GreenHouse />

      <Footer />
    </div>
  );
}