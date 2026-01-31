import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';

export default function Hero() {
    const [width, setWidth] = useState(1200);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [scrollY, setScrollY] = useState(0); // NEW: Track scroll position
    const [mounted, setMounted] = useState(false); // Page load mount animation (fade + lift)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();

        // NEW: Handle Scroll for animations
        const handleScroll = () => requestAnimationFrame(() => setScrollY(window.scrollY));

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll); // Add scroll listener

        // Mount animation (respect reduced motion)
        let rafId;
        let mountTimeout;
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            setMounted(true);
        } else {
            rafId = requestAnimationFrame(() => {
                // small delay so the initial paint draws off-screen first
                mountTimeout = setTimeout(() => setMounted(true), 60);
            });
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll); // Clean up
            if (rafId) cancelAnimationFrame(rafId);
            if (mountTimeout) clearTimeout(mountTimeout);
        };
    }, []);

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    // NEW: Calculate dynamic styles based on scroll
    // Parallax speed: Image moves at 40% of scroll speed, Text at 20%
    const imageParallax = scrollY * 0.4;
    const textParallax = scrollY * 0.2;
    // Text fades out as you scroll down (fully invisible by 600px)
    const textOpacity = Math.max(0, 1 - scrollY / 600);

    return (
        <div id="top" style={{
            minHeight: '100vh',
            height: '100vh',
            // MOBILE: Modern soft gradient. DESKTOP: Transparent to show App background
            background: isMobile
                ? 'linear-gradient(180deg, #ebebeb 0%, #dceef7 100%)'
                : 'transparent',
            position: 'relative',
            fontFamily: '"Poppins", "Plus Jakarta Sans", "Google Sans", system-ui, sans-serif',
            overflowX: 'hidden',
            overflowY: isMobile ? 'auto' : 'hidden',

            // Page-load mount animation (fade + slight lift)
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.998)',
            transition: 'opacity 700ms cubic-bezier(.2,.9,.3,1), transform 700ms cubic-bezier(.2,.9,.3,1)',
            willChange: 'opacity, transform'
        }}>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Gilroy:wght@500&family=Poppins:wght@300;400;500;600;700&display=swap');`}
            </style>

            <Navbar />

            {/* RIGHT SIDE GRADIENT REMOVED - Handled globally in App.jsx */}

            {/* BACKGROUND IMAGE CONTAINER */}
            <div style={{
                position: 'absolute',
                // MOBILE: Anchor to bottom. DESKTOP: Anchor to top (Unchanged)
                top: isMobile ? 'auto' : 0,
                bottom: isMobile ? 0 : 'auto',
                left: 0,
                width: '100%',
                // MOBILE: Height 55% for better proportion. DESKTOP: 100% (Unchanged)
                height: isMobile ? '55%' : '100%',

                // MOBILE: No bottom curve (sits flat), but a nice Top Curve.
                // DESKTOP: Bottom curve (Unchanged)
                borderBottomLeftRadius: isMobile ? '0' : '50% 20%',
                borderBottomRightRadius: isMobile ? '0' : '50% 20%',
                borderTopLeftRadius: isMobile ? '50% 15%' : '0',
                borderTopRightRadius: isMobile ? '50% 15%' : '0',

                overflow: 'hidden',
                zIndex: 0,
                // MOBILE: distinct shadow to pop against the gradient
                boxShadow: isMobile ? '0px -10px 30px rgba(26, 127, 146, 0.1)' : 'none'
            }}>
                {/* The Image Itself */}
                <img
                    src="/hero-image-final.png"
                    srcSet="/hero-image-up.png 800w, /hero-image-final.png 1920w"
                    sizes="(max-width: 768px) 100vw, 100vw"
                    alt="Sustainable agriculture"
                    fetchPriority="high"
                    decoding="async"
                    loading="eager"
                    width={1920}
                    height={1080}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: isMobile ? 'center center' : 'center top',
                        display: 'block',
                        transition: 'opacity 600ms ease, filter 600ms ease, transform 100ms linear', // Adjusted transform transition for scroll smoothness
                        opacity: imgLoaded ? 1 : 0,
                        filter: imgLoaded ? 'none' : 'blur(12px)',
                        // UPDATED: Combined load scale with scroll parallax
                        transform: `${imgLoaded ? 'scale(1)' : 'scale(1.02)'} translateY(${imageParallax}px)`,
                        willChange: 'transform' // Optimization for smooth scrolling
                    }}
                    onLoad={() => setImgLoaded(true)}
                />

                {/* Desktop Fade (Unchanged) */}
                {!isMobile && <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '300px',
                    background: 'linear-gradient(180deg, #dceef7 0%, rgba(220, 238, 247, 0.8) 40%, rgba(220, 238, 247, 0) 100%)',
                    zIndex: 1,
                    pointerEvents: 'none'
                }} />}

                {/* NEW: Mobile Top Fade - Blends the curved top edge into the background */}
                {isMobile && <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100px',
                    background: 'linear-gradient(180deg, rgba(220, 238, 247, 1) 0%, rgba(220, 238, 247, 0) 100%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                    opacity: 0.6
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
                minHeight: isMobile ? '45%' : 'auto', // Take up top part of screen on mobile
                // UPDATED: Apply parallax and fade to the container
                transform: `translateY(${textParallax}px)`,
                opacity: textOpacity,
                transition: 'transform 100ms linear, opacity 100ms linear',
                willChange: 'transform, opacity'
            }} role="main">

                <div style={{
                    textAlign: 'center',
                    maxWidth: '100%',
                    width: '100%',
                    padding: isMobile ? '0 20px' : '0',
                    boxSizing: 'border-box'
                }}>
                    <p style={{
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
                    <h1 style={{
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