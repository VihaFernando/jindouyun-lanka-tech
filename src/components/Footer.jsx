import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Copyright } from 'lucide-react';

export default function Footer() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width < 768;
    const isDesktop = width >= 1024;

    const brandTeal = '#0E6C85';
    const bottomBarColor = '#0B4A56';

    // --- CONFIGURATION ---
    const gapSize = '24px'; // Fixed consistent gap
    const shortHeight = isMobile ? '150px' : '160px';
    const tallHeight = isMobile ? '150px' : '280px'; // Taller cards
    
    // Skew Settings
    const skewDeg = -12;
    const skewString = isMobile ? '0deg' : `${skewDeg}deg`;
    const unSkewString = isMobile ? '0deg' : `${-skewDeg}deg`;

    // Shared container style for the parallelogram shape
    const cardStyle = (height) => ({
        position: 'relative',
        width: '100%',
        height: height,
        overflow: 'hidden',
        borderRadius: '20px',
        boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
        transform: `skewX(${skewString})`,
        backgroundColor: '#e0e0e0', // Placeholder
        border: '2px solid rgba(255,255,255,0.6)', // Clean border
        transition: 'transform 0.3s ease'
    });

    // Shared image style (Counter-skew + Scale)
    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        // Scale 1.3 is needed to ensure the image covers the corners after skewing
        transform: `skewX(${unSkewString}) scale(1.3)`, 
        transformOrigin: 'center',
        display: 'block'
    };

    return (
        <footer style={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#F4F7FA',
            fontFamily: '"Poppins", sans-serif',
            overflow: 'hidden',
        }}>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Poppins:wght@300;400;500;600&display=swap');`}
            </style>

            {/* MAIN CONTAINER */}
            <div style={{
                display: 'flex',
                flexDirection: isDesktop ? 'row' : 'column',
                justifyContent: 'space-between',
                minHeight: isDesktop ? '700px' : 'auto', 
                position: 'relative',
                paddingTop: isMobile ? '60px' : '80px',
                paddingLeft: isMobile ? '20px' : '8%',
            }}>

                {/* --- LEFT SIDE: TEXT CONTENT --- */}
                <div style={{ 
                    flex: '0 0 auto',
                    width: isDesktop ? '35%' : '100%', 
                    zIndex: 5, // Higher than images
                    position: 'relative',
                    marginBottom: isMobile ? '50px' : '0'
                }}>
                    <h2 style={{
                        fontSize: isMobile ? '42px' : '72px',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        lineHeight: 1.1,
                        marginBottom: '20px',
                        marginTop: 0
                    }}>
                        Let's <span style={{ color: brandTeal, fontWeight: 400 }}>talk</span>
                    </h2>

                    <p style={{
                        fontSize: '16px',
                        color: '#555',
                        lineHeight: '1.6',
                        marginBottom: '40px',
                        maxWidth: '420px'
                    }}>
                        Reach out to discuss our services, ask questions,
                        or explore how <span style={{ fontFamily: '"Caveat", cursive', color: brandTeal, fontSize: '1.4em' }}>smart technology</span> can support
                        your farming goals.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: `1px solid ${brandTeal}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Phone size={20} color={brandTeal} strokeWidth={1.5} />
                            </div>
                            <a href="tel:+94117930266" style={{ fontSize: '16px', color: brandTeal, fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                                +94-11-793-0266
                            </a>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: `1px solid ${brandTeal}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Mail size={20} color={brandTeal} strokeWidth={1.5} />
                            </div>
                            <a href="mailto:jidouyunlankatechnology@gmail.com" style={{ fontSize: '16px', color: brandTeal, fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                                jidouyunlankatechnology@gmail.com
                            </a>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'start', gap: '20px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: `1px solid ${brandTeal}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '5px' }}>
                                <MapPin size={20} color={brandTeal} strokeWidth={1.5} />
                            </div>
                            <a href="#" style={{ fontSize: '16px', color: brandTeal, fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '4px', lineHeight: 1.5 }}>
                                World Trade Center<br/>25th Floor East Tower<br/>Colombo 01
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT SIDE: IMAGE GRID --- */}
                <div style={{
                    position: isDesktop ? 'absolute' : 'relative',
                    top: 0,
                    right: isDesktop ? '-10%' : 'auto', // Push right to ensure overflow off-screen
                    height: '100%',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: gapSize,
                    justifyContent: 'center',
                    paddingRight: isMobile ? '20px' : '0',
                    zIndex: 1, // Lower z-index so footer bar covers bottom
                }}>

                    {/* --- COLUMN 1 --- */}
                    <div style={{
                        width: isMobile ? '100%' : '250px',
                        display: 'flex',
                        flexDirection: isMobile ? 'row' : 'column',
                        gap: gapSize,
                        marginTop: '0' // Aligned to top
                    }}>
                        {/* IMG 1: Short */}
                        <div style={cardStyle(shortHeight)}>
                            <img src="/fimage1.jpg" alt="Farm 1" style={imgStyle} />
                        </div>
                        {/* IMG 4: TALL */}
                        <div style={cardStyle(tallHeight)}>
                            <img src="/fimage4.jpg" alt="Farm 4" style={imgStyle} />
                        </div>
                        {/* IMG 7: TALL */}
                        <div style={cardStyle(tallHeight)}>
                            <img src="/fimage7.jpg" alt="Farm 7" style={imgStyle} />
                        </div>
                    </div>

                    {/* --- COLUMN 2 --- */}
                    <div style={{
                        width: isMobile ? '100%' : '250px',
                        display: 'flex',
                        flexDirection: isMobile ? 'row' : 'column',
                        gap: gapSize,
                        marginTop: '0' // Aligned to top
                    }}>
                        {/* IMG 2: TALL */}
                        <div style={cardStyle(tallHeight)}>
                            <img src="/fimage2.jpg" alt="Farm 2" style={imgStyle} />
                        </div>
                        {/* IMG 5: TALL */}
                        <div style={cardStyle(tallHeight)}>
                            <img src="/fimage5.jpg" alt="Farm 5" style={imgStyle} />
                        </div>
                        {/* IMG 8: Short */}
                        <div style={cardStyle(shortHeight)}>
                            <img src="/fimage8.jpg" alt="Farm 8" style={imgStyle} />
                        </div>
                    </div>

                    {/* --- COLUMN 3 --- */}
                    <div style={{
                        width: isMobile ? '100%' : '250px',
                        display: 'flex',
                        flexDirection: isMobile ? 'row' : 'column',
                        gap: gapSize,
                        marginTop: '0' // Aligned to top
                    }}>
                        {/* IMG 3: Short */}
                        <div style={cardStyle(shortHeight)}>
                            <img src="/fimage3.jpg" alt="Farm 3" style={imgStyle} />
                        </div>
                        {/* IMG 6: Short (Standard) */}
                        <div style={cardStyle(shortHeight)}>
                            <img src="/fimage6.jpg" alt="Farm 6" style={imgStyle} />
                        </div>
                        {/* IMG 9: Short */}
                        <div style={cardStyle(shortHeight)}>
                            <img src="/fimage9.jpg" alt="Farm 9" style={imgStyle} />
                        </div>
                    </div>

                </div>
            </div>

            {/* --- BOTTOM TEAL BAR --- */}
            <div style={{
                backgroundColor: bottomBarColor,
                padding: isMobile ? '40px 20px' : '25px 0',
                color: '#fff',
                position: 'relative',
                zIndex: 10, // HIGH Z-INDEX TO COVER IMAGE BOTTOMS
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: isDesktop ? '0 80px' : '0' }}>

                    <div style={{
                        display: 'flex',
                        flexDirection: isDesktop ? 'row' : 'column',
                        justifyContent: 'space-between',
                        alignItems: isDesktop ? 'center' : 'flex-start',
                        gap: '30px',
                        marginBottom: '25px'
                    }}>
                        <h3 style={{ fontSize: '20px', fontWeight: 400, margin: 0 }}>
                            Jidouyun Lanka Technology (PVT) LTD
                        </h3>

                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {['Home', 'About Us', 'Services', 'Products', 'Careers'].map((item) => (
                                <a key={item} href="#" style={{
                                    backgroundColor: '#fff',
                                    color: bottomBarColor,
                                    padding: '8px 20px',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    whiteSpace: 'nowrap'
                                }}>
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.15)', margin: '0 0 20px 0' }} />

                    <div style={{
                        display: 'flex',
                        flexDirection: isDesktop ? 'row' : 'column-reverse',
                        justifyContent: 'space-between',
                        alignItems: isDesktop ? 'center' : 'flex-start',
                        gap: '15px',
                        fontSize: '13px',
                        opacity: 0.8
                    }}>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Services</a>
                            <span>|</span>
                            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Copyright size={14} />
                            <span>Jidouyun Lanka Tech (PVT) LTD | All Rights Reserved.</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}