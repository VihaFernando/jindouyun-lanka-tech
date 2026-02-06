import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SOLUTIONS_DATA = [
    {
        id: 1,
        title: "Agricultural Machinery",
        subtitle: "Sales & Services",
        description: "High-quality agricultural machinery tailored to Sri Lanka's farming conditions, covering the full production process from land preparation and sowing to harvesting with end-to-end sales, installation, training, and maintenance support.",
        image: "https://res.cloudinary.com/divwbpmk5/image/upload/v1770400405/agri_oneark.avif"
    },
    {
        id: 2,
        title: "Smart Agriculture",
        subtitle: "Solutions",
        description: "AI-powered intelligent crop management system covering the entire growth cycle with digital land management, multi-dimensional monitoring, variable-rate fertilization, and precise machinery scheduling through integrated space-air-ground technology.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "AI Pest & Disease",
        subtitle: "Identification",
        description: "Independently developed intelligent pest and disease identification system with over 90% accuracy, combined with crop yield prediction platform and farming decision-support assistant to reduce production risks and improve efficiency.",
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Machinery Installation &",
        subtitle: "Maintenance",
        description: "End-to-end machinery support including professional installation, operation guidance, routine maintenance, and technical servicing to ensure reliable performance and long-term operational efficiency in the field.",
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Precision Agriculture",
        subtitle: "Technology",
        description: "Real-time soil moisture monitoring, precise water and fertilizer regulation, and accurate crop yield prediction compatible with both large-scale plantations and smallholder farms, operated simply via mobile phone.",
        image: "https://res.cloudinary.com/divwbpmk5/image/upload/v1770398593/8366858a907dc371720027792_bgsysj.avif"
    },
    {
        id: 6,
        title: "Custom AI Development",
        subtitle: "Services",
        description: "Customized artificial intelligence technology development services for local partners and institutions, including AIGC large-model applications, big data platforms, and intelligent agricultural software solutions.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
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

    // --- SCROLL ANIMATION OBSERVER ---
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Trigger when 15% of element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    // Remove class to allow re-animating when scrolling back up/down
                    entry.target.classList.remove('in-view');
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.observe(el));

        return () => {
            animatedElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

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
    const CARD_WIDTH = isMobile ? width * 0.94 : 850;
    const GAP = isMobile ? 15 : 100;
    const TRANSLATE_OFFSET = CARD_WIDTH + GAP;

    // --- UPDATED COLORS ---
    const BG_RGB = '235, 235, 235';
    const BG_HEX_BOTTOM = '#ebebeb';
    const NEXT_SECTION_BG = '#0B0D10';

    return (
        <section id="services" style={{
            backgroundColor: BG_HEX_BOTTOM,
            padding: isMobile ? '60px 0 0 0' : '80px 0 0 0',
            overflow: 'hidden',
            minHeight: isMobile ? 'auto' : '700px',
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

                /* --- SCROLL ANIMATION CSS --- */
                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(40px); /* Move down initially */
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                    will-change: opacity, transform;
                }
                
                .animate-on-scroll.in-view {
                    opacity: 1;
                    transform: translateY(0); /* Reset to original position */
                }
                `}
            </style>

            {/* --- TOP CONTENT --- */}
            <div>
                {/* Added 'animate-on-scroll' class here */}
                <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: isMobile ? '20px' : '60px', padding: '0 20px', position: 'relative', zIndex: 10 }}>
                    <h2 style={{ fontSize: isMobile ? '23px' : '32px', color: '#111', margin: 0, fontWeight: 400 }}>
                        Technology-driven solutions for modern
                    </h2>
                    <h2 style={{ fontFamily: '"Caveat", cursive', fontSize: isMobile ? '46px' : '64px', color: '#0E6C85', margin: isMobile ? '0' : '-5px 0 0 0', lineHeight: 1 }}>
                        Agriculture.
                    </h2>
                </div>

                {/* --- CAROUSEL --- */}
                {/* Added 'animate-on-scroll' class with inline style delay */}
                <div
                    className="animate-on-scroll"
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: isMobile ? '460px' : '480px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        perspective: '1000px',
                        transitionDelay: '0.1s', // Slight stagger effect
                        zIndex: 2
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Side Fades */}
                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: isMobile ? '10px' : '120px', background: `linear-gradient(to right, rgba(${BG_RGB},1) 0%, rgba(${BG_RGB},0) 100%)`, zIndex: 20, pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: isMobile ? '10px' : '120px', background: `linear-gradient(to left, rgba(${BG_RGB},1) 0%, rgba(${BG_RGB},0) 100%)`, zIndex: 20, pointerEvents: 'none' }} />

                    {/* Nav Buttons */}
                    <button onClick={prevSlide} style={{
                        position: 'absolute', left: isMobile ? '10px' : `calc(50% - ${CARD_WIDTH / 2}px - ${GAP / 2}px)`, transform: isMobile ? 'none' : 'translateX(-50%)', zIndex: 60, width: isMobile ? '36px' : '56px', height: isMobile ? '36px' : '56px', borderRadius: '50%', border: '2px solid #0E6C85', background: '#fff', color: '#0E6C85', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', top: isMobile ? '50%' : 'auto', marginTop: isMobile ? '-20px' : '0'
                    }}>
                        <ChevronLeft size={isMobile ? 20 : 32} />
                    </button>
                    <button onClick={nextSlide} style={{
                        position: 'absolute', left: isMobile ? 'auto' : `calc(50% + ${CARD_WIDTH / 2}px + ${GAP / 2}px)`, right: isMobile ? '10px' : 'auto', transform: isMobile ? 'none' : 'translateX(-50%)', zIndex: 60, width: isMobile ? '36px' : '56px', height: isMobile ? '36px' : '56px', borderRadius: '50%', border: '2px solid #0E6C85', background: '#fff', color: '#0E6C85', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', top: isMobile ? '50%' : 'auto', marginTop: isMobile ? '-20px' : '0'
                    }}>
                        <ChevronRight size={isMobile ? 20 : 32} />
                    </button>

                    {/* Cards Loop */}
                    {SOLUTIONS_DATA.map((item, index) => {
                        const status = getCardStatus(index);
                        const isActive = status === 'active';
                        if (status === 'hidden' && !isMobile) return null;
                        if (isMobile && status === 'hidden') return null;

                        let transform = 'translateX(-50%) scale(1)';
                        let zIndex = 10;
                        let opacity = 1;

                        if (isMobile) {
                            if (status === 'prev') {
                                transform = `translateX(calc(-50% - 100%))`;
                                zIndex = 5;
                            } else if (status === 'next') {
                                transform = `translateX(calc(-50% + 100%))`;
                                zIndex = 5;
                            } else {
                                transform = 'translateX(-50%)';
                                zIndex = 10;
                            }
                        } else {
                            if (status === 'prev') {
                                transform = `translateX(calc(-50% - ${TRANSLATE_OFFSET}px)) scale(0.9)`;
                                zIndex = 5;
                            } else if (status === 'next') {
                                transform = `translateX(calc(-50% + ${TRANSLATE_OFFSET}px)) scale(0.9)`;
                                zIndex = 5;
                            }
                        }

                        return (
                            <div key={item.id} className="card-transition" style={{
                                position: 'absolute', top: 0, left: '50%', width: `${CARD_WIDTH}px`, height: '100%', backgroundColor: isActive ? '#FFFFFF' : '#0E6C85', borderRadius: '24px', boxShadow: isActive ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' : '0 10px 30px rgba(0,0,0,0.1)', transform, zIndex, opacity, overflow: 'hidden', display: 'flex', flexDirection: isMobile ? 'column-reverse' : 'row', cursor: isActive ? 'default' : 'pointer', border: isActive ? 'none' : '1px solid rgba(255,255,255,0.1)'
                            }} onClick={() => { if (status === 'prev') prevSlide(); if (status === 'next') nextSlide(); }}>

                                <div style={{
                                    flex: isMobile ? '0 0 auto' : '0 0 55%',
                                    padding: isMobile ? '20px 20px' : '0 60px',
                                    height: isMobile ? 'auto' : '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    position: 'relative',
                                    zIndex: 10
                                }}>
                                    <h3 style={{
                                        fontSize: isMobile ? '20px' : '36px',
                                        fontWeight: 600,
                                        color: isActive ? '#0E6C85' : '#FFFFFF',
                                        lineHeight: 1.2,
                                        marginBottom: isMobile ? '10px' : '16px'
                                    }}>
                                        {item.title} <br /> <span style={{ fontWeight: 400, opacity: 0.8 }}>{item.subtitle}</span>
                                    </h3>
                                    <p style={{
                                        fontSize: isMobile ? '13px' : '16px',
                                        lineHeight: '1.6',
                                        color: isActive ? '#4b5563' : 'rgba(255,255,255,0.85)',
                                        maxWidth: '420px',
                                        marginBottom: isMobile ? '0' : '0'
                                    }}>
                                        {item.description}
                                    </p>
                                </div>

                                <div style={{
                                    position: isMobile ? 'relative' : 'absolute',
                                    right: 0, top: 0, bottom: 0,
                                    width: isMobile ? '100%' : '55%',
                                    height: isMobile ? '220px' : '100%',
                                    zIndex: 1,
                                    overflow: 'hidden'
                                }}>
                                    <div style={{ width: '100%', height: '100%', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: isMobile ? 'center 40%' : 'center', opacity: isActive ? 1 : 0.05, transition: 'opacity 0.6s' }} />
                                    {isActive && <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '100%', background: isMobile ? 'linear-gradient(to top, #fff 5%, rgba(255,255,255,0) 40%)' : 'linear-gradient(105deg, #ffffff 30%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0) 70%)', pointerEvents: 'none' }} />}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {isMobile && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '15px' }}>
                        {SOLUTIONS_DATA.map((_, idx) => (
                            <button key={idx} onClick={() => setActiveIndex(idx)} style={{ width: idx === activeIndex ? '20px' : '6px', height: '6px', borderRadius: '4px', backgroundColor: idx === activeIndex ? '#0E6C85' : '#CBD5E1', border: 'none', transition: 'width 0.3s' }} />
                        ))}
                    </div>
                )}
            </div>

            {/* --- BOTTOM IMAGE SECTION (Compact on Mobile) --- */}
            {/* Added 'animate-on-scroll' class here */}
            <div className="animate-on-scroll" style={{
                
                width: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'column',
                background: BG_HEX_BOTTOM,
                overflow: 'hidden',
                transitionDelay: '0.2s', // Slight stagger effect
                zIndex: 1
            }}>
                <div style={{ position: 'relative', width: '100%', height: isMobile ? '160px' : '400px' }}>

                    {/* 1. Top Fade */}
                    <div style={{
                        position: 'absolute',
                        top: '-1px',
                        left: 0, right: 0,
                        height: isMobile ? '65%' : '50%',
                        background: `linear-gradient(to bottom, ${BG_HEX_BOTTOM} 0%, ${BG_HEX_BOTTOM} ${isMobile ? '20%' : '15%'}, rgba(${BG_RGB}, 0) 100%)`,
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
                            display: 'block'
                        }}
                    />

                    {/* 3. Bottom Fade */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-1px',
                        left: 0, right: 0,
                        height: '60%',
                        background: `linear-gradient(to bottom, rgba(11, 13, 16, 0) 0%, ${NEXT_SECTION_BG} 85%, ${NEXT_SECTION_BG} 100%)`,
                        zIndex: 2,
                        pointerEvents: 'none'
                    }} />
                </div>
            </div>
        </section>
    );
}