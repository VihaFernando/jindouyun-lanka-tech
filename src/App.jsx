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
    <div className="page">
      
      {/* --- LAYER 1: Fluid Gradient Background --- */}
      <div className="gradient-bg">
        <motion.div 
          className="blob blob-1"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div 
          className="blob blob-2"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 50, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div 
          className="blob blob-3"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>

      {/* --- LAYER 2: Noise Texture --- */}
      <div className="noise-overlay"></div>

      {/* --- LAYER 3: Glass Card Content --- */}
      <motion.div 
        className="glass-card"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        
        {/* Top Status Pill */}
        <motion.div 
          className="status-pill"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="pulse-dot"></span>
          <span>System Initialization</span>
        </motion.div>

        <div className="content-grid">
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="company-name-main">JIDOUYUN LANKA</span>
            <span className="company-name-sub">TECHNOLOGY</span>
          </motion.h1>

          {/* Shimmer Banner */}
          <motion.div 
            className="shimmer-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="shimmer-text">WEBSITE COMING SOON</h2>
          </motion.div>

          {/* Description */}
          <motion.div 
            className="description-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>Empowering the future through intelligence.</p>
            <p className="highlight">Education · Innovation · Technology.</p>
          </motion.div>
          
          <div className="divider"></div>

          {/* Progress Bar Section */}
          <motion.div 
            className="progress-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="progress-header">
                <span className="p-label">Platform Build</span>
                <span className="p-val">70%</span>
            </div>
            <div className="progress-track">
              <motion.div 
                className="progress-fill striped-bar"
                initial={{ width: "0%" }}
                animate={{ width: "70%" }}
                transition={{ delay: 1, duration: 2.5, ease: "circOut" }}
              />
            </div>
          </motion.div>

        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="footer-left">
            <p>© {currentYear} JIDOUYUN LANKA TECHNOLOGY</p>
          </div>
          <div className="footer-right">
            <p className="location">Colombo · Sri Lanka</p>
          </div>
        </motion.footer>

      </motion.div>
    </div>
  );
}