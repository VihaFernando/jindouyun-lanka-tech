import { useState, useEffect, useRef } from 'react';
import {
    Wind,
    Sun,
    ShieldCheck,
    Zap,
    ThermometerSun,
    LayoutGrid,
    CheckCircle2,
    ArrowRight,
    Droplets,
    Anchor,
    Maximize,
    ChevronRight,
    ChevronLeft,
    Leaf
} from 'lucide-react';
import useGreenhouseScrollAnim from '../hooks/useGreenhouseScrollAnim.jsx';

export default function GreenHouse() {
    const [activeTab, setActiveTab] = useState('overview');
    const [width, setWidth] = useState(1200);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => setWidth(window.innerWidth);
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Carousel images array
    const carouselImages = [
        'https://res.cloudinary.com/divwbpmk5/image/upload/v1770332620/1_wqth8r.avif',
        'https://res.cloudinary.com/divwbpmk5/image/upload/v1770332621/2_cil9xs.avif',
        'https://res.cloudinary.com/divwbpmk5/image/upload/v1770332620/3_ztqtai.avif',
        'https://res.cloudinary.com/divwbpmk5/image/upload/v1770332620/4_tzdgw0.avif',
        'https://res.cloudinary.com/divwbpmk5/image/upload/v1770332627/5_ischa9.avif',
        'https://res.cloudinary.com/divwbpmk5/image/upload/v1770332625/6_ejjoul.avif',
        'https://res.cloudinary.com/divwbpmk5/image/upload/v1770332624/7_ulffsi.avif',
        'https://res.cloudinary.com/divwbpmk5/image/upload/v1770332626/8_s8t8hh.avif',
        'https://res.cloudinary.com/divwbpmk5/image/upload/v1770332623/9_izvb1z.avif',
        'https://res.cloudinary.com/divwbpmk5/image/upload/v1770332619/10_t8xjte.avif'
    ];

    // Auto-switch images every 3 seconds
    useEffect(() => {
        const startAutoAdvance = () => {
            intervalRef.current = setInterval(() => {
                setCurrentImageIndex((prevIndex) => 
                    (prevIndex + 1) % carouselImages.length
                );
            }, 3000);
        };

        startAutoAdvance();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [carouselImages.length]);

    // Function to reset the auto-advance timer
    const resetTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % carouselImages.length
            );
        }, 3000);
    };

    // Navigation functions
    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
        resetTimer();
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % carouselImages.length
        );
        resetTimer();
    };

    const isMobile = width < 768;
    const brandTeal = '#0E6C85';

    // Activate non-invasive scroll animations for this section
    useGreenhouseScrollAnim();

    // --- TABS ---
    const TABS = [
        { id: 'overview', label: 'Overview' },
        { id: 'specs', label: 'Specs' },
        { id: 'structure', label: 'Structure' },
        { id: 'covering', label: 'Covering' },
        { id: 'shading', label: 'Shading' },
        { id: 'power', label: 'Power' },
    ];

    // --- CONTENT RENDERERS ---

    const renderOverview = () => (
        <div className="gh-anim-enter">
            <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column-reverse' : 'row',
                gap: '50px',
                alignItems: 'center'
            }}>
                <div style={{ flex: 1 }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '6px 16px', borderRadius: '20px',
                        background: 'rgba(14, 108, 133, 0.1)', color: brandTeal,
                        fontSize: '13px', fontWeight: 600, marginBottom: '20px'
                    }}>
                        <Leaf size={14} /> Professional Cultivation
                    </div>
                    <h3 style={{
                        fontSize: isMobile ? '28px' : '42px',
                        fontWeight: 700,
                        color: '#1d1d1f',
                        lineHeight: 1.1,
                        marginBottom: '20px'
                    }}>
                        Engineered for <br />
                        <span style={{ color: brandTeal }}>Optimal Growth.</span>
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6e6e73', marginBottom: '30px' }}>
                        Our multi-span film greenhouse balances structural integrity with aesthetic design.
                        Featuring an arc-shaped roof and high-quality 15-micron PO film, it delivers superior light transmittance
                        and thermal insulation for year-round farming.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {[
                            'Natural Ventilation',
                            'Internal Shading',
                            'Centralized Power',
                            'Precise Climate Control'
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#E0F2F1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CheckCircle2 size={14} color={brandTeal} />
                                </div>
                                <span style={{ fontSize: '14px', color: '#1d1d1f', fontWeight: 600 }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ flex: 1, width: '100%' }}>
                    <div style={{
                        position: 'relative',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px -15px rgba(14, 108, 133, 0.2)',
                        border: '8px solid #fff',
                        height: '400px'
                    }}>
                        {carouselImages.map((imageSrc, index) => (
                            <img
                                key={index}
                                src={imageSrc}
                                alt={`Greenhouse Image ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    transform: 'scale(1.05)',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    opacity: index === currentImageIndex ? 1 : 0,
                                    transition: 'opacity 0.8s ease-in-out'
                                }}
                            />
                        ))}
                        
                        {/* Navigation Arrows */}
                        <button
                            onClick={goToPrevious}
                            style={{
                                position: 'absolute',
                                left: '15px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'rgba(255, 255, 255, 0.9)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '45px',
                                height: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
                                zIndex: 10
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#fff';
                                e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                                e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <ChevronLeft size={20} color={brandTeal} strokeWidth={2.5} />
                        </button>

                        <button
                            onClick={goToNext}
                            style={{
                                position: 'absolute',
                                right: '15px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'rgba(255, 255, 255, 0.9)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '45px',
                                height: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
                                zIndex: 10
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#fff';
                                e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                                e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <ChevronRight size={20} color={brandTeal} strokeWidth={2.5} />
                        </button>

                        {/* Carousel indicators */}
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '8px'
                        }}>
                            {carouselImages.map((_, index) => (
                                <div
                                    key={index}
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        background: index === currentImageIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSpecs = () => (
        <div className="gh-anim-enter">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '10px' }}>Technical Specifications</h3>
                <p style={{ color: '#86868b' }}>Precision engineered dimensions and load capacities.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px' }}>
                {/* Bento Card: Performance */}
                <div className="gh-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <div className="gh-icon-box"><LayoutGrid size={20} color={brandTeal} /></div>
                        <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Performance Indicators</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        {[
                            { l: 'Snow Load', v: '0.35 kN/m²' },
                            { l: 'Wind Load', v: '0.45 kN/m²' },
                            { l: 'Hanging Load', v: '15 kg/m²' },
                            { l: 'Rain Capacity', v: '140 mm/h' }
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#F5F7FA', padding: '15px', borderRadius: '12px' }}>
                                <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>{item.l}</div>
                                <div style={{ fontSize: '16px', fontWeight: 700, color: '#1d1d1f' }}>{item.v}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bento Card: Dimensions */}
                <div className="gh-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <div className="gh-icon-box"><Maximize size={20} color={brandTeal} /></div>
                        <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Dimensions & Layout</h4>
                    </div>
                    <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                        {[
                            { l: 'Span Width', v: '8 m' },
                            { l: 'Column Spacing', v: '4 m' },
                            { l: 'Gutter Height', v: '2.0 m' },
                            { l: 'Ridge Height', v: '~3.2 m' },
                            { l: 'Total Area', v: '1920 m²' }
                        ].map((row, i) => (
                            <li key={i} style={{
                                display: 'flex', justifyContent: 'space-between',
                                padding: '12px 0', borderBottom: i !== 4 ? '1px dashed #eee' : 'none'
                            }}>
                                <span style={{ color: '#666', fontSize: '15px' }}>{row.l}</span>
                                <span style={{ fontWeight: 600, color: '#1d1d1f' }}>{row.v}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

    const renderStructure = () => (
        <div className="gh-anim-enter">
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', gap: '40px' }}>
                <div className="gh-card" style={{ background: '#1d1d1f', color: '#fff' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <ShieldCheck size={40} color={brandTeal} style={{ marginBottom: '20px' }} />
                        <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '15px' }}>Main Frame Structure</h3>
                        <p style={{ color: '#a1a1a6', lineHeight: 1.6 }}>
                            Hot-dip galvanized steel pipes and profiles. 100% factory standardized components ensuring <span style={{ color: '#fff', fontWeight: 600 }}>zero on-site welding</span> for maximum corrosion resistance.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {[
                            { n: 'Main Columns', s: '60×60×2.0 mm' },
                            { n: 'Roof Truss', s: '60×60×2.0 mm' },
                            { n: 'Arc Arch Pipes', s: 'φ32×1.5 mm' },
                            { n: 'Purlins', s: '60×30×2.0 mm' },
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                                <div style={{ fontSize: '12px', color: '#86868b', marginBottom: '4px' }}>{item.n}</div>
                                <div style={{ fontSize: '14px', fontWeight: 600 }}>{item.s}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="gh-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                        <Anchor size={24} color={brandTeal} />
                        <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Foundation</h4>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {[
                            'Reinforced C25 concrete point foundations (0.5–1.0m)',
                            '300mm brick plinth above ground level',
                            'Peripheral C15 concrete apron (80mm thick)',
                            'External drainage connected to municipal network'
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '12px', fontSize: '14px', lineHeight: 1.5, color: '#424245' }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: brandTeal, marginTop: '8px', flexShrink: 0 }}></div>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderCovering = () => (
        <div className="gh-anim-enter">
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '30px' }}>
                <div className="gh-card" style={{ background: `linear-gradient(135deg, ${brandTeal}08, #fff)` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                        <div>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: brandTeal, textTransform: 'uppercase' }}>Material</div>
                            <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '5px 0' }}>15-Micron PO Film</h3>
                        </div>
                        <Sun size={32} color={brandTeal} />
                    </div>
                    <p style={{ fontSize: '15px', color: '#555', marginBottom: '24px' }}>
                        Advanced 5-layer co-extrusion technology. Anti-drip coating synchronized with film lifespan.
                    </p>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {['High Transmission', 'Anti-Fog', 'Tear Resistant', 'UV Balanced'].map((tag, i) => (
                            <span key={i} style={{ padding: '6px 12px', background: '#fff', borderRadius: '100px', fontSize: '12px', fontWeight: 600, color: '#333', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="gh-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                        <div className="gh-icon-box"><Wind size={20} color={brandTeal} /></div>
                        <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Natural Ventilation</h4>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <h5 style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: 600 }}>Top Ventilation</h5>
                        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Electric roll-up motors, 2 openings per roof (&gt;2.5m length) for maximum chimney effect.</p>
                    </div>
                    <div>
                        <h5 style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: 600 }}>Side Ventilation</h5>
                        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Electric roll-up system (~1.5m height). All vents protected by 80-mesh insect screens.</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderShading = () => (
        <div className="gh-anim-enter">
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '40px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '15px' }}>Internal Shading System</h3>
                    <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.6, marginBottom: '30px' }}>
                        A precision rack & pinion transmission system designed for summer cooling and winter heat preservation.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                        {[
                            { l: 'Shading Rate', v: '75%' },
                            { l: 'Service Life', v: '8+ Years' },
                            { l: 'Motor Power', v: '0.75 kW' },
                            { l: 'Torque', v: '800 N·m' },
                        ].map((stat, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #eee', padding: '16px', borderRadius: '16px' }}>
                                <div style={{ fontSize: '11px', color: '#86868b', textTransform: 'uppercase', fontWeight: 600 }}>{stat.l}</div>
                                <div style={{ fontSize: '20px', fontWeight: 700, color: '#1d1d1f', marginTop: '4px' }}>{stat.v}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ flex: 1, width: '100%' }}>
                    <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            alt="Shading System"
                        />
                        <div style={{ position: 'absolute', bottom: '15px', right: '15px', background: '#fff', padding: '8px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>
                            Rack & Pinion Drive
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPower = () => (
        <div className="gh-anim-enter">
            <div className="gh-card" style={{ background: '#1d1d1f', color: '#fff', padding: '40px' }}>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'start' : 'center', marginBottom: '40px', gap: '20px' }}>
                    <div>
                        <h3 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 10px 0' }}>Power & Control Center</h3>
                        <p style={{ color: '#a1a1a6', margin: 0 }}>Centralized management for all greenhouse automation.</p>
                    </div>
                    <div style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.1)', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Zap size={18} color="#FFD700" fill="#FFD700" />
                        <span style={{ fontWeight: 600 }}>220V / 380V, 50Hz</span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: '20px' }}>
                    <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                        <h5 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 600 }}>Manual Control</h5>
                        <div style={{ fontSize: '14px', color: '#a1a1a6', lineHeight: 1.6 }}>
                            Precise manual operation for internal shading, ventilation motors, and side windows.
                        </div>
                    </div>
                    <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                        <h5 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 600 }}>Safety Standards</h5>
                        <div style={{ fontSize: '14px', color: '#a1a1a6', lineHeight: 1.6 }}>
                            National standard high-voltage cabinet. Waterproof sockets and moisture-proof seals.
                        </div>
                    </div>
                    <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                        <h5 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 600 }}>Professional Wiring</h5>
                        <div style={{ fontSize: '14px', color: '#a1a1a6', lineHeight: 1.6 }}>
                            Galvanized steel troughs for main lines. RVVP shielded signal cables for interference protection.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="greenhouse" style={{ backgroundColor: '#FAFAFA', paddingBottom: isMobile ? '50px' : '0px', overflow: 'hidden' }}>

            {/* --- CSS & ANIMATIONS --- */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Poppins:wght@300;400;500;600;700&display=swap');
                
                .gh-card {
                    background: #fff;
                    border-radius: 24px;
                    padding: 30px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
                    border: 1px solid rgba(0,0,0,0.04);
                    transition: transform 0.3s ease;
                }
                .gh-card:hover { transform: translateY(-3px); }
                
                .gh-icon-box {
                    width: 40px; height: 40px;
                    border-radius: 12px;
                    background: #F2F9FA;
                    display: flex; align-items: center; justify-content: center;
                }

                .gh-anim-enter { animation: fadeInUp 0.5s ease-out forwards; }

                /* Scroll reveal (non-invasive) */
                .gh-anim { opacity: 0; transform: translateY(16px) scale(0.998); transition: opacity 760ms cubic-bezier(.2,.9,.3,1), transform 760ms cubic-bezier(.2,.9,.3,1); will-change: opacity, transform; }
                .gh-inview { opacity: 1; transform: translateY(0) scale(1); }

                /* Slightly quicker for small UI elements */
                .gh-anim button, .gh-anim h4, .gh-anim h5 { transition-duration: 520ms; }

                @media (prefers-reduced-motion: reduce) {
                    .gh-anim, .gh-inview { transition: none !important; transform: none !important; opacity: 1 !important; }
                }
                
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Hide Scrollbar */
                .gh-scroll-hide::-webkit-scrollbar { display: none; }
                .gh-scroll-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            {/* --- HEADER --- */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '40px 20px 40px' : '60px 20px 40px', textAlign: 'center' }}>
                <h2 style={{
                    fontFamily: '"Caveat", cursive',
                    fontSize: isMobile ? '48px' : '72px',
                    lineHeight: 1,
                    marginBottom: '10px',
                    background: `linear-gradient(90deg, ${brandTeal} 0%, #084c5e 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                }}>
                    Greenhouse Solutions
                </h2>
                <h1 style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: isMobile ? '24px' : '36px',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    marginTop: '10px'
                }}>
                    Multi-span Film Greenhouse
                </h1>
                <p style={{ color: '#86868b', fontSize: '16px', marginTop: '10px' }}>Professional Design & Construction</p>
            </div>

            {/* --- STICKY TABS --- */}
            <div style={{
                position: 'sticky', top: '0', zIndex: 90,
                background: 'rgba(250, 250, 250, 0.95)', backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                padding: '15px 0'
            }}>
                <div className="gh-scroll-hide" style={{
                    display: 'flex', justifyContent: isMobile ? 'flex-start' : 'center',
                    gap: '10px', overflowX: 'auto', padding: '0 20px', maxWidth: '1200px', margin: '0 auto'
                }}>
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                padding: '10px 24px',
                                borderRadius: '100px',
                                border: 'none',
                                background: activeTab === tab.id ? brandTeal : '#eee',
                                color: activeTab === tab.id ? '#fff' : '#666',
                                fontSize: '14px', fontWeight: 600,
                                cursor: 'pointer', whiteSpace: 'nowrap',
                                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                boxShadow: activeTab === tab.id ? `0 4px 15px rgba(14, 108, 133, 0.3)` : 'none'
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- MAIN CONTENT AREA --- */}
            <div style={{
                maxWidth: '1000px',
                margin: '40px auto 0',
                padding: '0 20px',
                minHeight: '600px',
                fontFamily: '"Poppins", sans-serif'
            }}>
                {activeTab === 'overview' && renderOverview()}
                {activeTab === 'specs' && renderSpecs()}
                {activeTab === 'structure' && renderStructure()}
                {activeTab === 'covering' && renderCovering()}
                {activeTab === 'shading' && renderShading()}
                {activeTab === 'power' && renderPower()}
            </div>

        </section>
    );
}