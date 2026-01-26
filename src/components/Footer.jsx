import { useState, useEffect } from 'react';
import { Phone, Mail, ArrowRight, Copyright } from 'lucide-react';

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

    const brandTeal = '#1a7f92';
    const bottomBarColor = '#106070';

    return (
        <footer style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            fontFamily: '"Poppins", sans-serif',
            marginTop: '-100px', // Overlap effect
        }}>
            {/* Load Fonts */}
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Gilroy:wght@500;600&family=Poppins:wght@300;400;500;600&display=swap');`}
            </style>

            {/* --- TOP FADE OVERLAY --- */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '150px',
                background: 'linear-gradient(180deg, #ebebeb 0%, rgba(235,235,235,0) 100%)',
                zIndex: 2,
                pointerEvents: 'none'
            }} />

            {/* --- MAIN HERO SECTION ("Let's Talk") --- */}
            <div style={{
                position: 'relative',
                width: '100%',
                minHeight: isMobile ? 'auto' : '85vh',
                // ADJUSTMENT: Reduced padding top on mobile to move text up
                paddingTop: isMobile ? '30px' : '0',
                paddingBottom: isMobile ? '50px' : '0',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>

                {/* Background Image */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: "url('/footer-image.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: isMobile ? 'center' : 'center 25%',
                    zIndex: 0
                }} />

                {/* Dark Overlay for legibility on Mobile */}
                {isMobile && <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    zIndex: 0
                }} />}

                {/* Content Container */}
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1400px',
                    width: '100%',
                    margin: '0 auto',
                    padding: isMobile ? '0 30px' : (isTablet ? '0 40px' : '0 80px'),
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    justifyContent: 'space-between',
                    gap: isMobile ? '30px' : '0', // Reduced gap on mobile
                    boxSizing: 'border-box'
                }}>

                    {/* LEFT: Text & CTA */}
                    <div style={{
                        maxWidth: isMobile ? '100%' : '550px',
                        width: isMobile ? '100%' : 'auto',
                        boxSizing: 'border-box'
                    }}>
                        <h2 style={{
                            // ADJUSTMENT: Smaller font on mobile (42px vs 48px)
                            fontSize: isMobile ? '42px' : (isTablet ? '64px' : '90px'),
                            fontWeight: 500,
                            lineHeight: 1,
                            marginBottom: '15px',
                            color: isMobile ? '#000000' : '#000',
                            textShadow: isMobile ? '0 2px 10px rgba(0,0,0,0.3)' : 'none'
                        }}>
                            Let's <span style={{ color: brandTeal, fontWeight: 400 }}>talk</span>
                        </h2>

                        <p style={{
                            // ADJUSTMENT: Smaller text on mobile (14px vs 16px)
                            fontSize: isMobile ? '14px' : '20px',
                            lineHeight: 1.6,
                            color: isMobile ? '#000000' : '#333',
                            marginBottom: '30px',
                            maxWidth: isMobile ? '100%' : '450px',
                            textShadow: isMobile ? '0 1px 4px rgba(0,0,0,0.5)' : 'none',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word'
                        }}>
                            Reach out to discuss our services, ask {isMobile && <br />}questions, or explore how {isMobile && <br />}<span style={{ fontFamily: '"Caveat", cursive', color: brandTeal, fontSize: '1.4em' }}>smart technology</span> can support your farming goals.
                        </p>

                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            border: `2px solid ${brandTeal}`,
                            borderRadius: '50px',
                            // ADJUSTMENT: Smaller padding on mobile
                            padding: isMobile ? '4px 4px 4px 20px' : '6px 6px 6px 24px',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                            width: 'fit-content', // Removed 100% width on mobile to keep it neat
                            maxWidth: 'none'
                        }}>
                            <span style={{
                                color: brandTeal,
                                // ADJUSTMENT: Smaller font on mobile
                                fontSize: isMobile ? '16px' : '20px',
                                fontWeight: 600,
                                marginRight: '15px'
                            }}>
                                Contact Now
                            </span>
                            <div style={{
                                // ADJUSTMENT: Smaller circle on mobile
                                width: isMobile ? '36px' : '42px',
                                height: isMobile ? '36px' : '42px',
                                borderRadius: '50%',
                                backgroundColor: brandTeal,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <ArrowRight size={isMobile ? 16 : 20} color="#ffffff" />
                            </div>
                        </button>
                    </div>

                    {/* RIGHT: Contact Info (Clickable) */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: isMobile ? '16px' : '24px', // Tighter gap on mobile
                        alignSelf: isMobile ? 'flex-start' : 'flex-end',
                        marginBottom: isMobile ? '0' : '80px',
                        width: isMobile ? '100%' : 'auto'
                    }}>

                        {/* Phone Link */}
                        <a href="tel:+11234567890" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
                            <div style={{
                                // ADJUSTMENT: Smaller icons on mobile
                                width: isMobile ? '36px' : '50px',
                                height: isMobile ? '36px' : '50px',
                                borderRadius: '50%',
                                border: '2px solid #fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <Phone size={isMobile ? 18 : 24} color="#fff" fill="#fff" />
                            </div>
                            <span style={{
                                // ADJUSTMENT: Smaller font on mobile
                                fontSize: isMobile ? '15px' : '20px',
                                color: '#fff',
                                fontWeight: 500,
                                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                            }}>
                                + 1(123) 456-7890
                            </span>
                        </a>

                        {/* Email Link */}
                        <a href="mailto:info@jidouyun.lanka.com" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
                            <div style={{
                                width: isMobile ? '36px' : '50px',
                                height: isMobile ? '36px' : '50px',
                                borderRadius: '50%',
                                border: '2px solid #fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <Mail size={isMobile ? 18 : 24} color="#fff" />
                            </div>
                            <span style={{
                                fontSize: isMobile ? '15px' : '20px',
                                color: '#fff',
                                fontWeight: 500,
                                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                // ADJUSTMENT: Ensure long emails don't break layout
                                wordBreak: 'break-all'
                            }}>
                                info@jidouyun.lanka.com
                            </span>
                        </a>

                    </div>
                </div>
            </div>

            {/* --- BOTTOM BLUE BAR --- */}
            <div style={{
                backgroundColor: bottomBarColor,
                padding: isMobile ? '40px 20px' : '40px 80px',
                color: '#fff'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

                    {/* Row 1: Brand + Nav */}
                    <div style={{
                        display: 'flex',
                        flexDirection: isDesktop ? 'row' : 'column',
                        justifyContent: 'space-between',
                        alignItems: isDesktop ? 'center' : 'flex-start',
                        gap: '30px',
                        marginBottom: '30px'
                    }}>
                        <h3 style={{
                            fontSize: isMobile ? '20px' : '26px',
                            fontWeight: 400,
                            margin: 0,
                            maxWidth: isMobile ? '100%' : '100%'
                        }}>
                            Jidouyun Lanka Technology (PVT) LTD
                        </h3>

                        {/* Navigation Pills */}
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {['Home', 'About Us', 'Services', 'Careers'].map((item) => (
                                <a key={item} href="#" style={{
                                    backgroundColor: '#fff',
                                    color: bottomBarColor,
                                    padding: isMobile ? '6px 14px' : '8px 24px',
                                    borderRadius: '20px',
                                    textDecoration: 'none',
                                    fontSize: isMobile ? '13px' : '15px',
                                    fontWeight: 600,
                                    transition: 'opacity 0.2s',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.3)', margin: '0 0 30px 0' }} />

                    {/* Row 2: Terms + Copyright */}
                    <div style={{
                        display: 'flex',
                        flexDirection: isDesktop ? 'row' : 'column-reverse',
                        justifyContent: 'space-between',
                        alignItems: isDesktop ? 'center' : 'flex-start',
                        gap: '20px',
                        fontSize: isMobile ? '12px' : '14px',
                        fontWeight: 300,
                        opacity: 0.9
                    }}>
                        {/* Links */}
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Services</a>
                            <span>|</span>
                            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a>
                        </div>

                        {/* Copyright */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <Copyright size={isMobile ? 14 : 16} />
                            <span>Jidouyun Lanka Tech (PVT) LTD | All Rights Reserved.</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Very Bottom Strip */}
            <div style={{ width: '100%', height: '20px', backgroundColor: '#ebebeb' }} />
        </footer>
    );
}