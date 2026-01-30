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

    // --- EXACT CONFIGURATION FROM REFERENCE ---
    const gap = isMobile ? 15 : 18; // Consistent gap between all images
    const skewDeg = isMobile ? 0 : -10; // Exact skew angle from reference
    
    // Image dimensions matching reference exactly
    const imageWidth = isMobile ? '100%' : 240;
    const shortHeight = isMobile ? 130 : 150;
    const tallHeight = isMobile ? 200 : 220;

    const skewString = `${skewDeg}deg`;
    const unSkewString = `${-skewDeg}deg`;

    // Card style for parallelogram shape
    const cardStyle = (height) => ({
        position: 'relative',
        width: isMobile ? '100%' : `${imageWidth}px`,
        height: `${height}px`,
        overflow: 'hidden',
        borderRadius: isMobile ? '12px' : '18px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
        transform: `skewX(${skewString})`,
        backgroundColor: '#e5e5e5',
        border: '2.5px solid rgba(255,255,255,0.9)',
        flexShrink: 0
    });

    // Image style with counter-skew
    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: `skewX(${unSkewString}) scale(${isMobile ? 1 : 1.25})`,
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
                minHeight: isDesktop ? '600px' : 'auto',
                position: 'relative',
                paddingTop: isMobile ? '50px' : '70px',
                paddingBottom: isMobile ? '50px' : '0',
                paddingLeft: isMobile ? '20px' : '8%',
                paddingRight: isMobile ? '20px' : '0',
            }}>

                {/* --- LEFT SIDE: TEXT CONTENT --- */}
                <div style={{ 
                    flex: '0 0 auto',
                    width: isDesktop ? '40%' : '100%',
                    maxWidth: isDesktop ? '500px' : '100%',
                    zIndex: 5,
                    position: 'relative',
                    marginBottom: isMobile ? '40px' : '0',
                    paddingRight: isDesktop ? '40px' : '0'
                }}>
                    <h2 style={{
                        fontSize: isMobile ? '36px' : '64px',
                        fontWeight: 600,
                        color: '#1a1a1a',
                        lineHeight: 1.1,
                        marginBottom: '20px',
                        marginTop: 0
                    }}>
                        Let's <span style={{ color: brandTeal, fontWeight: 400 }}>talk</span>
                    </h2>

                    <p style={{
                        fontSize: isMobile ? '14px' : '15px',
                        color: '#555',
                        lineHeight: '1.7',
                        marginBottom: '35px',
                        maxWidth: '400px'
                    }}>
                        Reach out to discuss our services, ask questions,
                        or explore how <span style={{ fontFamily: '"Caveat", cursive', color: brandTeal, fontSize: '1.4em' }}>smart technology</span> can support
                        your farming goals.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ 
                                width: '44px', 
                                height: '44px', 
                                borderRadius: '50%', 
                                border: `1.5px solid ${brandTeal}`, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                flexShrink: 0 
                            }}>
                                <Phone size={19} color={brandTeal} strokeWidth={1.5} />
                            </div>
                            <a href="tel:+94117930266" style={{ 
                                fontSize: '15px', 
                                color: brandTeal, 
                                fontWeight: 500, 
                                textDecoration: 'underline', 
                                textUnderlineOffset: '3px' 
                            }}>
                                +94-11-793-0266
                            </a>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ 
                                width: '44px', 
                                height: '44px', 
                                borderRadius: '50%', 
                                border: `1.5px solid ${brandTeal}`, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                flexShrink: 0 
                            }}>
                                <Mail size={19} color={brandTeal} strokeWidth={1.5} />
                            </div>
                            <a href="mailto:jidouyunlankatechnology@gmail.com" style={{ 
                                fontSize: '15px', 
                                color: brandTeal, 
                                fontWeight: 500, 
                                textDecoration: 'underline', 
                                textUnderlineOffset: '3px',
                                wordBreak: 'break-word'
                            }}>
                                jidouyunlankatechnology@gmail.com
                            </a>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                            <div style={{ 
                                width: '44px', 
                                height: '44px', 
                                borderRadius: '50%', 
                                border: `1.5px solid ${brandTeal}`, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                flexShrink: 0,
                                marginTop: '2px'
                            }}>
                                <MapPin size={19} color={brandTeal} strokeWidth={1.5} />
                            </div>
                            <a href="#" style={{ 
                                fontSize: '15px', 
                                color: brandTeal, 
                                fontWeight: 500, 
                                textDecoration: 'underline', 
                                textUnderlineOffset: '3px',
                                lineHeight: 1.5 
                            }}>
                                World Trade Center<br/>25th Floor East Tower<br/>Colombo 01
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT SIDE: IMAGE GRID --- */}
                <div style={{
                    position: isDesktop ? 'absolute' : 'relative',
                    top: isDesktop ? '70px' : 'auto',
                    right: isDesktop ? '-5%' : 'auto', // Extend beyond the edge
                    display: 'flex',
                    flexDirection: 'column',
                    gap: `${gap}px`,
                    alignItems: 'flex-start',
                    zIndex: 1,
                }}>

                    {/* --- ROW 1 (TOP): IMG 1, 2, 3 --- */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: `${gap}px`,
                        width: '100%',
                    }}>
                        {/* IMG 1: Short */}
                        <div style={cardStyle(shortHeight)}>
                            <img src="/fimage1.jpg" alt="Farm 1" style={imgStyle} />
                        </div>
                        {/* IMG 2: Short */}
                        <div style={cardStyle(shortHeight)}>
                            <img src="/fimage2.jpg" alt="Farm 2" style={imgStyle} />
                        </div>
                        {/* IMG 3: Short */}
                        <div style={cardStyle(shortHeight)}>
                            <img src="/fimage3.jpg" alt="Farm 3" style={imgStyle} />
                        </div>
                    </div>

                    {/* --- ROW 2 (MIDDLE): IMG 4, 5, 6 --- */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: `${gap}px`,
                        width: '100%',
                        marginLeft: isDesktop ? '-40px' : '0',
                    }}>
                        {/* IMG 4: Tall */}
                        <div style={cardStyle(tallHeight)}>
                            <img src="/fimage4.jpg" alt="Farm 4" style={imgStyle} />
                        </div>
                        {/* IMG 5: Tall */}
                        <div style={cardStyle(tallHeight)}>
                            <img src="/fimage5.png" alt="Farm 5" style={imgStyle} />
                        </div>
                        {/* IMG 6: Tall */}
                        <div style={cardStyle(tallHeight)}>
                            <img src="/fimage6.jpg" alt="Farm 6" style={imgStyle} />
                        </div>
                    </div>

                    {/* --- ROW 3 (BOTTOM): IMG 7, 8, 9 --- */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: `${gap}px`,
                        width: '100%',
                        marginLeft: isDesktop ? '-80px' : '0',
                    }}>
                        {/* IMG 7: Tall */}
                        <div style={cardStyle(tallHeight)}>
                            <img src="/fimage7.jpg" alt="Farm 7" style={imgStyle} />
                        </div>
                        {/* IMG 8: Short */}
                        <div style={cardStyle(shortHeight)}>
                            <img src="/fimage8.jpg" alt="Farm 8" style={imgStyle} />
                        </div>
                        {/* IMG 9: Tall */}
                        <div style={cardStyle(tallHeight)}>
                            <img src="/fimage9.jpg" alt="Farm 9" style={imgStyle} />
                        </div>
                    </div>

                </div>
            </div>

            {/* --- BOTTOM TEAL BAR --- */}
            <div style={{
                backgroundColor: bottomBarColor,
                padding: isMobile ? '35px 20px' : '22px 0',
                color: '#fff',
                position: 'relative',
                zIndex: 10,
                marginTop: isDesktop ? '0' : '0'
            }}>
                <div style={{ 
                    maxWidth: '1400px', 
                    margin: '0 auto', 
                    padding: isDesktop ? '0 8%' : '0' 
                }}>

                    <div style={{
                        display: 'flex',
                        flexDirection: isDesktop ? 'row' : 'column',
                        justifyContent: 'space-between',
                        alignItems: isDesktop ? 'center' : 'flex-start',
                        gap: '25px',
                        marginBottom: '22px'
                    }}>
                        <h3 style={{ 
                            fontSize: isMobile ? '17px' : '19px', 
                            fontWeight: 400, 
                            margin: 0,
                            letterSpacing: '0.3px'
                        }}>
                            Jidouyun Lanka Technology (PVT) LTD
                        </h3>

                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {['Home', 'About Us', 'Services', 'Products', 'Careers'].map((item) => (
                                <a key={item} href="#" style={{
                                    backgroundColor: '#fff',
                                    color: bottomBarColor,
                                    padding: '7px 18px',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontSize: '12.5px',
                                    fontWeight: 600,
                                    whiteSpace: 'nowrap',
                                    transition: 'transform 0.2s ease',
                                    display: 'inline-block'
                                }}>
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <hr style={{ 
                        border: 'none', 
                        borderTop: '1px solid rgba(255,255,255,0.2)', 
                        margin: '0 0 18px 0' 
                    }} />

                    <div style={{
                        display: 'flex',
                        flexDirection: isDesktop ? 'row' : 'column-reverse',
                        justifyContent: 'space-between',
                        alignItems: isDesktop ? 'center' : 'flex-start',
                        gap: '12px',
                        fontSize: '12px',
                        opacity: 0.85
                    }}>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <a href="#" style={{ 
                                color: '#fff', 
                                textDecoration: 'none',
                                transition: 'opacity 0.2s ease'
                            }}>
                                Terms of Services
                            </a>
                            <span style={{ opacity: 0.5 }}>|</span>
                            <a href="#" style={{ 
                                color: '#fff', 
                                textDecoration: 'none',
                                transition: 'opacity 0.2s ease'
                            }}>
                                Privacy Policy
                            </a>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <Copyright size={13} />
                            <span>Jidouyun Lanka Tech (PVT) LTD | All Rights Reserved.</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}