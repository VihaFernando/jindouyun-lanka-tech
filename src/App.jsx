import { useState, useEffect } from 'react';
import Hero from './pages/Hero.jsx';
import EmpoweringSection from './components/EmpoweringSection.jsx';
import TechSolutionsSection from './components/TechSolutionsSection.jsx';
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
        top: '70vh', // Starts inside Hero (near bottom)
        right: 0,
        width: isMobile ? '80%' : '50vw',
        height: '130vh', // Extends down into Empowering Section
        background: 'radial-gradient(ellipse at center right, rgba(162, 232, 247, 0.7) 0%, rgba(235, 235, 235, 0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <Hero />
      <EmpoweringSection />
      <TechSolutionsSection />
      <Footer />
    </div>
  );
}