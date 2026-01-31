import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';

export default function Hero() {
    const [width, setWidth] = useState(1200);
    const [scrollY, setScrollY] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();

        const handleScroll = () => setScrollY(window.scrollY);

        // 1. PRELOAD THE OPTIMIZED IMAGE
        // MAKE SURE you converted your image to .webp using Squoosh.app
        const img = new Image();
        img.src = '/hero-image-final.webp'; // <--- UPDATED EXTENSION
        img.onload = () => {
            setImageLoaded(true);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    return (
        <div id="top" style={{
            minHeight: '100vh',
            height: '100vh',
            // This gradient shows IMMEDIATELY while image loads
            background: isMobile
                ? 'linear-gradient(180deg, #ebebeb 0%, #dceef7 100%)'
                : 'linear-gradient(180deg, #f0f9ff 0%, #dceef7 100%)', 
            position: 'relative',
            fontFamily: '"Poppins", "Plus Jakarta Sans", "Google Sans", system-ui, sans-serif',
            overflowX: 'hidden',
            overflowY: isMobile ? 'auto' : 'hidden',
        }}>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Gilroy:wght@500&family=Poppins:wght@300;400;500;600;700&display=swap');
                
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .anim-text-1 {
                    animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s forwards;
                    opacity: 0; 
                }
                
                .anim-text-2 {
                    animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s forwards;
                    opacity: 0; 
                }
                `}
            </style>

            <Navbar />

            {/* BACKGROUND IMAGE CONTAINER */}
            <div style={{
                position: 'absolute',
                top: isMobile ? 'auto' : 0,
                bottom: isMobile ? 0 : 'auto',
                left: 0,
                width: '100%',
                height: isMobile ? '55%' : '100%',
                borderBottomLeftRadius: isMobile ? '0' : '50% 20%',
                borderBottomRightRadius: isMobile ? '0' : '50% 20%',
                borderTopLeftRadius: isMobile ? '50% 15%' : '0',
                borderTopRightRadius: isMobile ? '50% 15%' : '0',
                overflow: 'hidden',
                zIndex: 0,
                boxShadow: isMobile ? '0px -10px 30px rgba(26, 127, 146, 0.1)' : 'none',
                
                // If image isn't loaded yet, we keep this container invisible 
                // so the nice background gradient of the parent div shows through
                opacity: imageLoaded ? 1 : 0,
                transition: 'opacity 1.2s ease-out'
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    // MAKE SURE TO UPDATE THIS FILENAME AFTER CONVERTING
                    backgroundImage: "url('/hero-image-final.webp')", 
                    backgroundSize: 'cover',
                    backgroundPosition: isMobile ? 'center center' : 'center top',
                    backgroundRepeat: 'no-repeat',
                    transform: !isMobile ? `translateY(${scrollY * 0.1}px)` : 'none',
                    transition: 'transform 0.1s linear',
                    willChange: 'transform'
                }} />

                {!isMobile && <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '300px',
                    background: 'linear-gradient(180deg, #dceef7 0%, rgba(220, 238, 247, 0.8) 40%, rgba(220, 238, 247, 0) 100%)',
                    zIndex: 1, pointerEvents: 'none'
                }} />}

                {isMobile && <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100px',
                    background: 'linear-gradient(180deg, rgba(220, 238, 247, 1) 0%, rgba(220, 238, 247, 0) 100%)',
                    zIndex: 1, pointerEvents: 'none', opacity: 0.6
                }} />}
            </div>

            {/* TEXT CONTENT */}
            <main style={{
                position: 'relative',
                zIndex: 10,
                paddingTop: isMobile ? '0px' : (isTablet ? '100px' : '80px'),
                paddingBottom: isMobile ? '0px' : '0px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: isMobile ? 'center' : 'flex-start',
                width: '100%',
                minHeight: isMobile ? '45%' : 'auto', 
                transform: !isMobile ? `translateY(${scrollY * 0.4}px)` : 'none',
                willChange: 'transform' 
            }} role="main">

                <div style={{
                    textAlign: 'center',
                    maxWidth: '100%',
                    width: '100%',
                    padding: isMobile ? '0 20px' : '0',
                    boxSizing: 'border-box'
                }}>
                    <p className="anim-text-1" style={{
                        margin: 0,
                        fontSize: isMobile ? '22px' : (isTablet ? '28px' : '38px'),
                        fontWeight: 500,
                        fontFamily: '"Gilroy", sans-serif',
                        color: '#111111',
                        letterSpacing: '-0.02em',
                        marginBottom: isMobile ? '0px' : '-5px',
                        textShadow: '0 2px 10px rgba(255,255,255,0.5)',
                        paddingTop: '80px'
                    }}>
                        Transforming Agriculture Into
                    </p>
                    <h1 className="anim-text-2" style={{
                        margin: 0,
                        fontSize: isMobile ? '48px' : (isTablet ? '80px' : '110px'),
                        lineHeight: 1.1,
                        color: '#0E6C85',
                        fontFamily: '"Caveat", cursive',
                        fontWeight: 700,
                        letterSpacing: isMobile ? '0.01em' : '0.02em',
                        paddingBottom: isMobile ? '20px' : '0',
                        wordBreak: 'break-word',
                        overflow: 'hidden',
                        maxWidth: '100%'
                    }}>
                        Sustainable Future
                    </h1>
                </div>

            </main>
        </div>
    );
}