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
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;
    const isTabletPortrait = isTablet && width < 900; // Portrait mode detection

    const brandTeal = '#0E6C85';
    const bottomBarColor = '#0B4A56';

    // --- EXACT CONFIGURATION FROM REFERENCE ---
    // For tablets, scale everything down proportionally
    // For tablet portrait, make it much smaller to fit properly
    const gap = isDesktop ? 18 : (isTabletPortrait ? 6 : (isTablet ? 10 : 15));
    const skewDeg = isDesktop ? -10 : (isTablet ? -10 : 0);

    // Image dimensions - tablets get proportionally smaller version
    // Portrait tablets need good size and must extend to right edge
    const imageWidth = isDesktop ? 240 : (isTabletPortrait ? 105 : (isTablet ? 140 : '100%'));
    const shortHeight = isDesktop ? 150 : (isTabletPortrait ? 66 : (isTablet ? 88 : 130));
    const tallHeight = isDesktop ? 280 : (isTabletPortrait ? 122 : (isTablet ? 164 : 200));

    const skewString = `${skewDeg}deg`;
    const unSkewString = `${-skewDeg}deg`;

    // Card style for parallelogram shape
    const cardStyle = (height) => ({
        position: 'relative',
        width: isTablet ? `${imageWidth}px` : (isDesktop ? `${imageWidth}px` : '100%'),
        height: `${height}px`,
        overflow: 'hidden',
        borderRadius: isTabletPortrait ? '6px' : (isTablet ? '10px' : (isDesktop ? '18px' : '12px')),
        boxShadow: isTabletPortrait ? '0 3px 10px rgba(0,0,0,0.1)' : (isTablet ? '0 6px 15px rgba(0,0,0,0.12)' : '0 10px 25px rgba(0,0,0,0.15)'),
        transform: `skewX(${skewString})`,
        backgroundColor: '#e5e5e5',
        border: isTabletPortrait ? '1px solid rgba(255,255,255,0.9)' : (isTablet ? '1.5px solid rgba(255,255,255,0.9)' : '2.5px solid rgba(255,255,255,0.9)'),
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
            // Slightly different desktop background to stand out from page body
            background: isDesktop ? 'linear-gradient(180deg, #ffffff 0%, #f2fbfd 100%)' : '#F4F7FA',
            boxShadow: isDesktop ? 'inset 0 40px 80px rgba(14,108,133,0.02)' : 'none',
            borderTop: isDesktop ? '1px solid rgba(14,108,133,0.04)' : 'none',
            fontFamily: '"Poppins", sans-serif',
            overflow: 'hidden',
        }}>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Poppins:wght@300;400;500;600&display=swap');`}
            </style>

            {/* SINGLE BACKGROUND IMAGE FOR MOBILE ONLY */}
            {isMobile && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.12,
                    pointerEvents: 'none',
                    zIndex: 0,
                    overflow: 'hidden',
                    backgroundImage: 'url(/fimage4.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }} />
            )}

            {/* MAIN CONTAINER */}
            <div style={{
                display: 'flex',
                flexDirection: (isTablet || isDesktop) ? 'row' : 'column',
                minHeight: isDesktop ? '600px' : 'auto',
                position: 'relative',
                paddingTop: isMobile ? '40px' : (isTablet ? '50px' : '70px'),
                paddingBottom: isMobile ? '40px' : (isTablet ? '50px' : '0'),
                paddingLeft: isMobile ? '20px' : (isTablet ? '30px' : '8%'),
                paddingRight: isMobile ? '20px' : (isTablet ? '30px' : '0'),
            }}>

                {/* --- LEFT SIDE: TEXT CONTENT --- */}
                <div id="contact" style={{
                    flex: '0 0 auto',
                    width: isDesktop ? '40%' : (isTablet ? '42%' : '100%'),
                    maxWidth: isDesktop ? '500px' : '100%',
                    zIndex: 5,
                    position: 'relative',
                    marginBottom: '0',
                    paddingRight: (isDesktop || isTablet) ? '10px' : '0',
                    // Center the left contact content vertically on desktop
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: isDesktop ? 'center' : 'flex-start',
                    height: isDesktop ? '100%' : 'auto'
                }}>
                    <h2 style={{
                        fontSize: isMobile ? '36px' : (isTablet ? '48px' : '64px'),
                        fontWeight: 600,
                        color: '#1a1a1a',
                        lineHeight: 1.1,
                        marginBottom: '20px',
                        marginTop: 0
                    }}>
                        Let's <span style={{ color: brandTeal, fontWeight: 400 }}>talk</span>
                    </h2>

                    <p style={{
                        fontSize: isMobile ? '14px' : (isTablet ? '14px' : '16px'),
                        color: '#555',
                        lineHeight: '1.7',
                        marginBottom: '35px',
                        maxWidth: '400px'
                    }}>
                        Reach out to discuss our services, ask questions,
                        or explore how <span style={{ fontFamily: '"Caveat", cursive', color: brandTeal, fontSize: '1.7 em' }}>smart technology</span> can support
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
                                fontSize: isMobile ? '13px' : (isTablet ? '14px' : '15px'),
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
                            <a href="https://maps.app.goo.gl/s2pBi8ugECo1hZt36?g_st=ic" target="_blank" rel="noopener noreferrer" style={{
                                fontSize: '15px',
                                color: brandTeal,
                                fontWeight: 500,
                                textDecoration: 'underline',
                                textUnderlineOffset: '3px',
                                lineHeight: 1.5
                            }}>
                                World Trade Center<br />25th Floor East Tower<br />Colombo 01
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT SIDE: IMAGE GRID (TABLET & DESKTOP) --- */}
                {(isTablet || isDesktop) && (
                    <div style={{
                        position: isDesktop ? 'absolute' : 'relative',
                        top: isDesktop ? '70px' : 'auto',
                        right: isDesktop ? '-5%' : (isTablet ? '-12%' : 'auto'),
                        display: 'flex',
                        flexDirection: 'column',
                        gap: `${gap}px`,
                        alignItems: 'flex-start',
                        zIndex: 1,
                        marginTop: isTablet ? '0' : '0',
                        flex: isTablet ? '1 1 auto' : 'none',
                        justifyContent: isTablet ? 'flex-end' : 'initial',
                        marginLeft: isTablet ? 'auto' : '0'
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
                            marginLeft: isDesktop ? '-40px' : (isTabletPortrait ? '-17px' : (isTablet ? '-23px' : '0')),
                        }}>
                            {/* IMG 4: Tall */}
                            <div style={cardStyle(tallHeight)}>
                                <img src="/fimage4.jpg" alt="Farm 4" style={imgStyle} />
                            </div>
                            {/* IMG 5: Tall */}
                            <div style={cardStyle(tallHeight)}>
                                <img src="/fimage5.jpg" alt="Farm 5" style={imgStyle} />
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
                            marginLeft: isDesktop ? '-90px' : (isTabletPortrait ? '-39px' : (isTablet ? '-52px' : '0')),
                        }}>
                            {/* IMG 7: Tall */}
                            <div style={cardStyle(tallHeight)}>
                                <img src="/fimage7.jpg" alt="Farm 7" style={imgStyle} />
                            </div>
                            {/* IMG 8: Short - Moved slightly to the right */}
                            <div style={{
                                ...cardStyle(shortHeight),
                                marginLeft: isDesktop ? '10px' : (isTabletPortrait ? '4.4px' : (isTablet ? '6px' : '0')),
                                marginRight: isDesktop ? '10px' : (isTabletPortrait ? '4.4px' : (isTablet ? '6px' : '0'))
                            }}>
                                <img src="/fimage8.jpg" alt="Farm 8" style={imgStyle} />
                            </div>
                            {/* IMG 9: Tall (shifted slightly more left) */}
                            <div style={{
                                ...cardStyle(tallHeight),
                                marginLeft: isDesktop ? '-20px' : (isTabletPortrait ? '-8.7px' : (isTablet ? '-12px' : '0'))
                            }}>
                                <img src="/fimage9.jpg" alt="Farm 9" style={imgStyle} />
                            </div>
                        </div>

                    </div>
                )}
            </div>

            {/* --- BOTTOM TEAL BAR --- */}
            <div style={{
                backgroundColor: bottomBarColor,
                padding: isMobile ? '35px 20px' : (isTablet ? '35px 30px' : '22px 0'),
                color: '#fff',
                position: 'relative',
                zIndex: 10,
                marginTop: '0'
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
                            fontSize: isMobile ? '15px' : (isTablet ? '16px' : '19px'),
                            fontWeight: 400,
                            margin: 0,
                            letterSpacing: '0.3px'
                        }}>
                            Jidouyun Lanka Technology (PVT) LTD
                        </h3>

                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {[
                                { label: 'Home', href: '#home' },
                                { label: 'About Us', href: '#about-us' },
                                { label: 'Services', href: '#services' },
                                { label: 'Products', href: '#products' },
                                // { label: 'Careers', href: '#careers' },
                                { label: 'Greenhouse', href: '#greenhouse' }
                            ].map((item) => (
                                <a key={item.label} href={item.href} style={{
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
                                }} onClick={(e) => {
                                    if (item.href.startsWith('#') && item.href !== '#') {
                                        e.preventDefault();
                                        const target = document.querySelector(item.href);
                                        if (target) {
                                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }
                                    }
                                }}>
                                    {item.label}
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
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
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

                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}>
                            <Copyright size={13} />
                            <span>Jidouyun Lanka Tech (PVT) LTD | All Rights Reserved.</span>
                        </div>
                    </div>

                </div>
            </div>
            {/* Grey bottom line (visual separator) */}
            <div style={{
                backgroundColor: '#E6E6E6',
                height: isMobile ? '8px' : '15px',
                width: '100%',
                position: 'relative',
                zIndex: 5
            }} />

        </footer>
    );
}