import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SOLUTIONS_DATA = [
    {
        id: 1,
        title: "End-to-End Smart Agriculture",
        subtitle: "Services",
        description: "We provide complete agricultural solutions combining modern machinery, smart farming systems, and AI technology.",
        image: "https://images.unsplash.com/photo-1625246333195-5519a49d4be2?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Precision Farming",
        subtitle: "Analytics",
        description: "Utilize satellite imagery and soil sensors to optimize water usage and fertilizer application, maximizing yield.",
        image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Automated Machinery",
        subtitle: "Rentals",
        description: "Access a fleet of autonomous tractors and harvesting equipment designed to reduce labor costs and increase efficiency.",
        image: "https://images.unsplash.com/photo-1530267981375-f0de93fe1e91?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Sustainable Supply Chain",
        subtitle: "Logistics",
        description: "Connect directly with global markets through our blockchain-verified supply chain network, ensuring fair prices.",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function TechSolutionsSection() {
    const [width, setWidth] = useState(1200);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef(null);

    const brandTeal = '#0E6C85';

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    // We treat tablet like mobile (single card) to prevent overflow
    const isSmallScreen = width < 1024;

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % SOLUTIONS_DATA.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + SOLUTIONS_DATA.length) % SOLUTIONS_DATA.length);
    };

    // Auto-play
    useEffect(() => {
        if (!isPaused) {
            timeoutRef.current = setTimeout(() => {
                nextSlide();
            }, 4000);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [activeIndex, isPaused]);

    return (
        <section style={{
            position: 'relative',
            width: '100%',
            maxWidth: '100vw', // Prevent horizontal scroll
            minHeight: isSmallScreen ? '700px' : '800px',
            fontFamily: '"Poppins", sans-serif',
            overflow: 'hidden',
            paddingTop: '60px',
            paddingBottom: '80px',
            background: 'linear-gradient(180deg, #f3f4f6 0%, #eef2f6 100%)'
        }}>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Gilroy:wght@500;600&family=Poppins:wght@300;400;500;600&display=swap');
                
                .carousel-card {
                    transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
                }
                .nav-btn:hover {
                    background-color: ${brandTeal} !important;
                    color: white !important;
                    border-color: ${brandTeal} !important;
                    transform: scale(1.1);
                }
                `}
            </style>

            {/* --- HEADER --- */}
            <div style={{
                textAlign: 'center',
                marginBottom: isSmallScreen ? '30px' : '60px',
                padding: '0 20px',
                zIndex: 2,
                position: 'relative'
            }}>
                <h2 style={{
                    fontSize: isMobile ? '24px' : '32px',
                    fontWeight: 400,
                    color: '#000',
                    margin: 0,
                    lineHeight: 1.2
                }}>
                    Technology-driven solutions for modern
                </h2>
                <h2 style={{
                    fontFamily: '"Caveat", cursive',
                    fontSize: isMobile ? '42px' : '58px',
                    color: brandTeal,
                    margin: '5px 0 0 0',
                    lineHeight: 1
                }}>
                    Agriculture.
                </h2>
            </div>

            {/* --- CAROUSEL AREA --- */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: isSmallScreen ? '480px' : '450px', // Fixed height container
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    perspective: '1200px',
                    zIndex: 10
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* ARROWS (Visible on Large Screens & Tablets) */}
                <button
                    onClick={prevSlide}
                    className="nav-btn"
                    style={{
                        position: 'absolute',
                        left: isSmallScreen ? '10px' : '15%', // Adjusted spacing
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 50,
                        width: isMobile ? '40px' : '50px',
                        height: isMobile ? '40px' : '50px',
                        borderRadius: '50%',
                        border: `2px solid ${brandTeal}`,
                        background: '#fff',
                        color: brandTeal,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <ChevronLeft size={isMobile ? 20 : 28} />
                </button>

                <button
                    onClick={nextSlide}
                    className="nav-btn"
                    style={{
                        position: 'absolute',
                        right: isSmallScreen ? '10px' : '15%', // Adjusted spacing
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 50,
                        width: isMobile ? '40px' : '50px',
                        height: isMobile ? '40px' : '50px',
                        borderRadius: '50%',
                        border: `2px solid ${brandTeal}`,
                        background: '#fff',
                        color: brandTeal,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <ChevronRight size={isMobile ? 20 : 28} />
                </button>


                {/* CAROUSEL TRACK */}
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    {SOLUTIONS_DATA.map((item, index) => {
                        const len = SOLUTIONS_DATA.length;

                        let position = 'hidden';
                        if (index === activeIndex) position = 'active';
                        else if (index === (activeIndex - 1 + len) % len) position = 'left';
                        else if (index === (activeIndex + 1) % len) position = 'right';

                        const isActive = position === 'active';

                        // CRITICAL FIX: On mobile/tablet, ONLY render the active card to prevent overflow
                        if (isSmallScreen && !isActive) return null;
                        if (!isSmallScreen && position === 'hidden') return null;

                        // Calculation for Desktop Spacing
                        // We push left/right cards further away (20% and 80%)
                        let leftPos = '50%';
                        if (position === 'left') leftPos = '21%';
                        if (position === 'right') leftPos = '79%';
                        if (isSmallScreen) leftPos = '50%';

                        // Adjust spacing for desktop view
                        if (position === 'left') leftPos = isTablet ? '10%' : '23%'; // Slightly closer for desktop
                        if (position === 'right') leftPos = isTablet ? '90%' : '77%'; // Slightly closer for desktop
                        if (isMobile) leftPos = '50%';

                        return (
                            <div
                                key={item.id}
                                className="carousel-card"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: leftPos,

                                    // SIZE FIXES: Smaller dimensions overall
                                    width: isSmallScreen ? '85%' : (isActive ? '700px' : '300px'),
                                    maxWidth: '90vw', // Hard stop for mobile
                                    height: isSmallScreen ? '450px' : '400px',

                                    transform: `translate(-50%, 0) scale(${isActive ? 1 : 0.8})`, // Reduced side scale to 0.8
                                    zIndex: isActive ? 20 : 5,
                                    opacity: isActive ? 1 : 1,

                                    backgroundColor: isActive ? '#fff' : brandTeal,
                                    borderRadius: '20px',
                                    boxShadow: isActive ? '0 15px 40px rgba(0,0,0,0.1)' : 'none',
                                    overflow: 'hidden',

                                    display: 'flex',
                                    // Mobile/Tablet: Stack Vertical. Desktop: Row.
                                    flexDirection: isSmallScreen ? 'column-reverse' : 'row',
                                    cursor: isActive ? 'default' : 'pointer',
                                }}
                                onClick={() => {
                                    if (position === 'left') prevSlide();
                                    if (position === 'right') nextSlide();
                                }}
                            >
                                {/* CONTENT SIDE */}
                                <div style={{
                                    flex: isSmallScreen ? '0 0 auto' : '0 0 55%', // More space for text on desktop
                                    padding: isSmallScreen ? '20px' : '0 40px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    height: isSmallScreen ? 'auto' : '100%',
                                    position: 'relative',
                                    zIndex: 2
                                }}>
                                    <h3 style={{
                                        fontSize: isMobile ? '20px' : '28px', // Smaller font
                                        fontWeight: 600,
                                        color: isActive ? brandTeal : '#fff',
                                        margin: '0 0 10px 0',
                                        lineHeight: 1.2
                                    }}>
                                        {item.title} <br />
                                        <span style={{ fontWeight: 300, fontSize: '0.8em' }}>{item.subtitle}</span>
                                    </h3>

                                    {/* Description */}
                                    <div style={{
                                        display: isActive ? 'block' : 'none',
                                        animation: 'fadeIn 0.5s ease'
                                    }}>
                                        <p style={{
                                            fontSize: isMobile ? '14px' : '15px',
                                            lineHeight: 1.5,
                                            color: '#666',
                                            margin: 0
                                        }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* IMAGE SIDE */}
                                <div style={{
                                    flex: isSmallScreen ? '1' : '0 0 45%',
                                    position: 'relative',
                                    minHeight: isSmallScreen ? '200px' : 'auto',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        // Mask Logic: Mobile (Top to Bottom fade), Desktop (Right to Left fade)
                                        maskImage: isSmallScreen
                                            ? 'linear-gradient(to top, transparent 0%, black 20%)'
                                            : 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
                                        WebkitMaskImage: isSmallScreen
                                            ? 'linear-gradient(to top, transparent 0%, black 20%)'
                                            : 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',

                                        filter: isActive ? 'none' : 'brightness(0.5) grayscale(0.5)',
                                        transition: 'filter 0.5s ease'
                                    }} />

                                    {/* Tint overlay for side cards */}
                                    {!isActive && (
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: brandTeal,
                                            opacity: 0.3,
                                            mixBlendMode: 'multiply'
                                        }} />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* DOTS (Mobile/Tablet Only) */}
                {isSmallScreen && (
                    <div style={{
                        position: 'absolute',
                        bottom: '-25px',
                        display: 'flex',
                        gap: '8px'
                    }}>
                        {SOLUTIONS_DATA.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                style={{
                                    width: idx === activeIndex ? '20px' : '8px',
                                    height: '8px',
                                    borderRadius: '4px',
                                    background: idx === activeIndex ? brandTeal : '#ccc',
                                    border: 'none',
                                    padding: 0,
                                    transition: 'all 0.3s ease'
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Background Blob */}
            <div style={{
                position: 'absolute',
                left: isMobile ? '-10%' : '-5%',
                top: isMobile ? '-10%' : '-15%',
                width: isMobile ? '200px' : '500px',
                height: isMobile ? '200px' : '500px',
                borderRadius: '70% 58% 90% 30% / 45% 45% 55% 55%',
                background: '#c0c0c0',
                opacity: 0.5,
                zIndex: 1,
                pointerEvents: 'none'
            }} />
        </section>
    );
}