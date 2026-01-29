import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SOLUTIONS_DATA = [
    {
        id: 1,
        title: "End-to-End Smart Agriculture",
        subtitle: "Services",
        description: "We provide complete agricultural solutions combining modern machinery, smart farming systems, and AI technology to support farmers at every stage.",
        image: "https://images.unsplash.com/photo-1625246333195-5519a49d4be2?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Precision Farming",
        subtitle: "Analytics",
        description: "Utilize satellite imagery and soil sensors to optimize water usage and fertilizer application, maximizing yield while minimizing waste.",
        image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Automated Machinery",
        subtitle: "Rentals",
        description: "Access a fleet of autonomous tractors and harvesting equipment designed to reduce labor costs and increase efficiency in the field.",
        image: "https://images.unsplash.com/photo-1530267981375-f0de93fe1e91?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Sustainable Supply Chain",
        subtitle: "Logistics",
        description: "Connect directly with global markets through our blockchain-verified supply chain network, ensuring fair prices and transparency.",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function TechSolutionsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [width, setWidth] = useState(1200);
    const timerRef = useRef(null);

    // --- RESPONSIVE LISTENERS ---
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width < 1024;
    const isVerySmall = width < 480;

    // --- CAROUSEL LOGIC ---
    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % SOLUTIONS_DATA.length);
    }, []);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + SOLUTIONS_DATA.length) % SOLUTIONS_DATA.length);
    }, []);

    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (!isPaused) {
            timerRef.current = setTimeout(() => {
                nextSlide();
            }, 4000);
        }
        return () => clearTimeout(timerRef.current);
    }, [activeIndex, isPaused, nextSlide]);

    const getCardStatus = (index) => {
        if (index === activeIndex) return 'active';
        const len = SOLUTIONS_DATA.length;
        if (index === (activeIndex - 1 + len) % len) return 'prev';
        if (index === (activeIndex + 1) % len) return 'next';
        return 'hidden';
    };

    // --- CONFIG ---
    const CARD_WIDTH = isMobile ? width * 0.90 : 850;
    const GAP = isMobile ? 20 : 100;
    const TRANSLATE_OFFSET = CARD_WIDTH + GAP;

    // Background Colors
    const BG_RGB = '243, 244, 246'; // Light gray RGB
    const BG_HEX_BOTTOM = '#eef2f6'; // Light Gray (Top connection)
    const NEXT_SECTION_BG = '#0B0D10'; // Dark Black (Bottom connection)

    return (
        <section style={{
            background: `linear-gradient(180deg, rgb(${BG_RGB}) 0%, ${BG_HEX_BOTTOM} 100%)`,
            padding: isMobile ? '40px 0 0 0' : '80px 0 0 0',
            overflow: 'hidden',
            minHeight: '700px',
            fontFamily: '"Poppins", sans-serif',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Gilroy:wght@500;600&family=Poppins:wght@300;400;600&display=swap');
                .card-transition {
                    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease, box-shadow 0.6s ease;
                }
                `}
            </style>

            {/* --- TOP CONTENT --- */}
            <div>
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '60px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                    <h2 style={{ fontSize: isMobile ? '20px' : '32px', color: '#111', margin: 0, fontWeight: 400 }}>
                        Technology-driven solutions for modern
                    </h2>
                    <h2 style={{ fontFamily: '"Caveat", cursive', fontSize: isMobile ? '42px' : '64px', color: '#0E6C85', margin: '-5px 0 0 0', lineHeight: 1 }}>
                        Agriculture.
                    </h2>
                </div>

                {/* --- CAROUSEL --- */}
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: isMobile ? '680px' : '480px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        perspective: '1000px'
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Side Fades - Synced to BG_RGB */}
                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: isMobile ? '15px' : '120px', background: `linear-gradient(to right, rgba(${BG_RGB},1) 0%, rgba(${BG_RGB},0) 100%)`, zIndex: 20, pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: isMobile ? '15px' : '120px', background: `linear-gradient(to left, rgba(${BG_RGB},1) 0%, rgba(${BG_RGB},0) 100%)`, zIndex: 20, pointerEvents: 'none' }} />

                    {/* Nav Buttons */}
                    <button onClick={prevSlide} style={{
                        position: 'absolute', left: isMobile ? '16px' : `calc(50% - ${CARD_WIDTH / 2}px - ${GAP / 2}px)`, transform: isMobile ? 'none' : 'translateX(-50%)', zIndex: 60, width: isMobile ? '40px' : '56px', height: isMobile ? '40px' : '56px', borderRadius: '50%', border: '2px solid #0E6C85', background: '#fff', color: '#0E6C85', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', top: isMobile ? '50%' : 'auto', marginTop: isMobile ? '-20px' : '0'
                    }}>
                        <ChevronLeft size={isMobile ? 24 : 32} />
                    </button>
                    <button onClick={nextSlide} style={{
                        position: 'absolute', left: isMobile ? 'auto' : `calc(50% + ${CARD_WIDTH / 2}px + ${GAP / 2}px)`, right: isMobile ? '16px' : 'auto', transform: isMobile ? 'none' : 'translateX(-50%)', zIndex: 60, width: isMobile ? '40px' : '56px', height: isMobile ? '40px' : '56px', borderRadius: '50%', border: '2px solid #0E6C85', background: '#fff', color: '#0E6C85', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', top: isMobile ? '50%' : 'auto', marginTop: isMobile ? '-20px' : '0'
                    }}>
                        <ChevronRight size={isMobile ? 24 : 32} />
                    </button>

                    {/* Cards Loop */}
                    {SOLUTIONS_DATA.map((item, index) => {
                        const status = getCardStatus(index);
                        const isActive = status === 'active';
                        if (status === 'hidden' && !isMobile) return null;
                        if (isMobile && !isActive) return null;

                        let transform = 'translateX(-50%) scale(1)';
                        let zIndex = 10;
                        let opacity = 1;

                        if (status === 'prev') {
                            transform = `translateX(calc(-50% - ${TRANSLATE_OFFSET}px)) scale(0.9)`;
                            zIndex = 5;
                        } else if (status === 'next') {
                            transform = `translateX(calc(-50% + ${TRANSLATE_OFFSET}px)) scale(0.9)`;
                            zIndex = 5;
                        }

                        return (
                            <div key={item.id} className="card-transition" style={{
                                position: 'absolute', top: 0, left: '50%', width: `${CARD_WIDTH}px`, height: '100%', backgroundColor: isActive ? '#FFFFFF' : '#0E6C85', borderRadius: '24px', boxShadow: isActive ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' : '0 10px 30px rgba(0,0,0,0.1)', transform, zIndex, opacity, overflow: 'hidden', display: 'flex', flexDirection: isMobile ? 'column-reverse' : 'row', cursor: isActive ? 'default' : 'pointer', border: isActive ? 'none' : '1px solid rgba(255,255,255,0.1)'
                            }} onClick={() => { if (status === 'prev') prevSlide(); if (status === 'next') nextSlide(); }}>
                                <div style={{ flex: isMobile ? '0 0 auto' : '0 0 55%', padding: isMobile ? '25px 24px' : '0 60px', height: isMobile ? 'auto' : '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', position: 'relative', zIndex: 10 }}>
                                    <h3 style={{ fontSize: isMobile ? '24px' : '36px', fontWeight: 600, color: isActive ? '#0E6C85' : '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>
                                        {item.title} <br /> <span style={{ fontWeight: 400, opacity: 0.8 }}>{item.subtitle}</span>
                                    </h3>
                                    <p style={{ fontSize: isVerySmall ? '14px' : '16px', lineHeight: '1.6', color: isActive ? '#4b5563' : 'rgba(255,255,255,0.85)', maxWidth: '420px' }}>{item.description}</p>
                                </div>
                                <div style={{ position: isMobile ? 'relative' : 'absolute', right: 0, top: 0, bottom: 0, width: isMobile ? '100%' : '55%', height: isMobile ? '230px' : '100%', zIndex: 1 }}>
                                    <div style={{ width: '100%', height: '100%', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: isActive ? 1 : 0.05, transition: 'opacity 0.6s' }} />
                                    {isActive && <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '100%', background: isMobile ? 'linear-gradient(to top, #fff 5%, rgba(255,255,255,0) 40%)' : 'linear-gradient(105deg, #ffffff 30%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0) 70%)', pointerEvents: 'none' }} />}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {isMobile && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
                        {SOLUTIONS_DATA.map((_, idx) => (
                            <button key={idx} onClick={() => setActiveIndex(idx)} style={{ width: idx === activeIndex ? '24px' : '8px', height: '8px', borderRadius: '4px', backgroundColor: idx === activeIndex ? '#0E6C85' : '#CBD5E1', border: 'none', transition: 'width 0.3s' }} />
                        ))}
                    </div>
                )}
            </div>

            {/* --- BOTTOM IMAGE SECTION (Properly Synced) --- */}
            <div style={{
                marginTop: isMobile ? '40px' : '80px',
                width: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'column',
                background: BG_HEX_BOTTOM, // Matches the section background color perfectly
                overflow: 'hidden' // Prevents any sub-pixel bleed
            }}>
                <div style={{ position: 'relative', width: '100%', height: isMobile ? '300px' : '400px' }}>
                    
                    {/* 1. Top Fade: Solid Start -> Fade Out */}
                    {/* The first 15% is solid BG_HEX_BOTTOM to act as a 'cap' hiding the line */}
                    <div style={{
                        position: 'absolute',
                        top: '-1px', // Pulls it up slightly to overlap the seam
                        left: 0, right: 0,
                        height: '50%', // Increased height for smoother blend
                        background: `linear-gradient(to bottom, ${BG_HEX_BOTTOM} 0%, ${BG_HEX_BOTTOM} 15%, rgba(238, 242, 246, 0) 100%)`,
                        zIndex: 2,
                        pointerEvents: 'none'
                    }} />

                    {/* 2. The Image */}
                    <img
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
                        alt="Agriculture Field Landscape"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center 60%',
                            display: 'block' // Removes inline-block bottom gap spacing
                        }}
                    />

                    {/* 3. Bottom Fade: Fade In -> Solid End */}
                    {/* The last 15% is solid NEXT_SECTION_BG to act as a 'cap' */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-1px', // Pulls it down slightly to overlap the seam
                        left: 0, right: 0,
                        height: '60%', // Taller fade for better blending with black
                        background: `linear-gradient(to bottom, rgba(11, 13, 16, 0) 0%, ${NEXT_SECTION_BG} 85%, ${NEXT_SECTION_BG} 100%)`,
                        zIndex: 2,
                        pointerEvents: 'none'
                    }} />
                </div>
            </div>
        </section>
    );
}