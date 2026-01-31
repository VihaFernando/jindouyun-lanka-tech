import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Mail } from 'lucide-react';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSpecsOpen, setIsSpecsOpen] = useState(false);
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            setIsPhone(window.innerWidth < 768); // phones only
            if (window.innerWidth >= 1024) setIsMenuOpen(false);
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleSpecEvent = (e) => {
            setIsSpecsOpen(!!(e && e.detail));
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('spec-open', handleSpecEvent);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('spec-open', handleSpecEvent);
        };
    }, []);

    const navLinks = ['About Us', 'Services', 'Products', 'Greenhouse'];
    const navMap = {
        'About Us': 'about-us',
        'Services': 'services',
        'Products': 'products',
        'Greenhouse': 'greenhouse'
    };

    // Enhanced glassmorphism navbar styles
    const navContainerStyle = {
        position: 'fixed',
        zIndex: 100,
        left: '50%',
        transform: isSpecsOpen ? 'translateX(-50%) translateY(-26px) scale(0.98)' : 'translateX(-50%)',
        opacity: isSpecsOpen ? 0 : 1,
        pointerEvents: isSpecsOpen ? 'none' : 'auto',

        // Smooth top positioning
        top: isScrolled ? (isPhone ? '8px' : '24px') : '0px',

        // Width animation - responsive (phones use a slightly narrower centered width)
        width: isPhone ? (isScrolled ? '92%' : '94%') : (isScrolled ? (isMobile ? '90%' : 'fit-content') : '100%'),

        // Padding remains exactly as original, but much smaller on phones
        padding: isPhone
            ? (isScrolled ? '8px 12px' : '8px 12px')
            : (isScrolled ? '12px 24px' : (isMobile ? '16px 20px' : '24px 40px')),

        // Enhanced glassmorphism effect
        backgroundColor: isScrolled
            ? 'rgba(255, 255, 255, 0.75)'
            : (isMenuOpen ? '#ffffff' : 'transparent'),

        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',

        borderRadius: isScrolled ? '50px' : '0px',

        border: isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',

        boxShadow: isScrolled
            ? '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
            : 'none',

        // Ultra-smooth transitions with custom easing
        transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        boxSizing: 'border-box',

        display: 'flex',
        alignItems: 'center',
        justifyContent: isScrolled ? 'space-between' : 'center',
        minWidth: isScrolled && !isMobile ? '600px' : 'unset',
    };

    return (
        <>
            <header style={navContainerStyle}>
                <div style={{
                    width: '100%',
                    maxWidth: isScrolled ? '100%' : '1280px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: isScrolled ? '20px' : '0',
                    margin: '0 auto',
                    transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
                }}>

                    {/* Logo Section - Enhanced Animation */}
                    <a href="#top" onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById('top');
                        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                        if (el) {
                            const targetY = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
                            window.scrollTo({ top: targetY, behavior: 'smooth' });
                        } else {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }} style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        textDecoration: 'none',
                        color: '#111111',
                        flexShrink: 0
                    }}>
                        {/* Logo Container with smooth morphing */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: isPhone ? (isScrolled ? '36px' : '30px') : (isScrolled ? '40px' : (isMobile ? '32px' : '40px')),
                            height: isPhone ? (isScrolled ? '36px' : '30px') : (isScrolled ? '40px' : (isMobile ? '32px' : '40px')),
                            background: 'transparent',
                            borderRadius: '0',
                            transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                            boxShadow: isScrolled ? '0 4px 12px rgba(45, 125, 144, 0.12)' : 'none'
                        }}>
                            <img
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'none',
                                    transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
                                }}
                                src="/logo-j.png"
                                alt="Jidouyun Lanka"
                            />
                        </div>

                        {/* Text with smooth collapse animation */}
                        <span style={{
                            fontSize: isPhone ? '12px' : (isMobile ? '14px' : '16px'),
                            fontWeight: 500,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: '#222',
                            maxWidth: (isScrolled && !isMobile) ? '0px' : '200px',
                            opacity: (isScrolled && !isMobile) ? 0 : 1,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                        }}>
                            Jidouyun Lanka
                        </span>
                    </a>

                    {/* Desktop Navigation with smooth fade */}
                    {!isMobile && (
                        <nav style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: isPhone ? '10px' : (isScrolled ? '32px' : '40px'),
                            transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
                        }}>
                            {navLinks.map((item, index) => (
                                <a key={item} href={`#${navMap[item]}`} onClick={(e) => {
                                    e.preventDefault();
                                    const id = navMap[item];
                                    const el = document.getElementById(id);
                                    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                                    if (el) {
                                        const targetY = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
                                        window.scrollTo({ top: targetY, behavior: 'smooth' });
                                    } else {
                                        window.location.hash = `#${id}`;
                                    }
                                }} style={{
                                    fontSize: isPhone ? '13px' : '15px',
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    color: '#000000',
                                    textDecoration: 'none',
                                    letterSpacing: '0.025em',
                                    fontFamily: 'sans-serif',
                                    position: 'relative',
                                    opacity: 0.9,
                                    transition: 'opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1), transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                                    transitionDelay: isScrolled ? `${index * 0.05}s` : '0s'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.opacity = '1';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.opacity = '0.9';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}>
                                    {item}
                                </a>
                            ))}
                        </nav>
                    )}

                    {/* Contact Button with morphing animation */}
                    {!isMobile && (
                        <a href="mailto:jidouyunlankatechnology@gmail.com" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: isPhone ? '0' : (isScrolled ? '0' : '8px'),
                            // When scrolled we use a fixed square so borderRadius:50% creates a perfect circle
                            width: isPhone ? (isScrolled ? '40px' : 'auto') : (isScrolled ? '44px' : 'auto'),
                            height: isPhone ? (isScrolled ? '40px' : 'auto') : (isScrolled ? '44px' : 'auto'),
                            padding: isPhone ? (isScrolled ? '0' : '8px 12px') : (isScrolled ? '0' : '10px 24px'),
                            borderRadius: isPhone ? (isScrolled ? '50%' : '100px') : (isScrolled ? '50%' : '100px'),
                            border: isScrolled ? '1px solid transparent' : '2px solid #2d7d90',
                            backgroundColor: isScrolled ? '#2d7d90' : 'transparent',
                            color: isScrolled ? '#ffffff' : '#2d7d90',
                            textDecoration: 'none',
                            fontSize: isPhone ? '13px' : '14px',
                            fontWeight: 700,
                            transition: 'all 0.45s cubic-bezier(0.23, 1, 0.32, 1)',
                            overflow: 'hidden',
                            boxShadow: isScrolled ? '0 4px 12px rgba(45, 125, 144, 0.3)' : 'none',
                            minWidth: isScrolled ? (isPhone ? '40px' : '44px') : 'unset'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                                e.currentTarget.style.boxShadow = isScrolled
                                    ? '0 6px 16px rgba(45, 125, 144, 0.4)'
                                    : '0 4px 12px rgba(45, 125, 144, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = isScrolled
                                    ? '0 4px 12px rgba(45, 125, 144, 0.3)'
                                    : 'none';
                            }}>
                            {isScrolled ? (
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%'
                                }}>
                                    <Mail size={18} style={{ flexShrink: 0 }} />
                                </div>
                            ) : (
                                <>
                                    <span style={{ whiteSpace: 'nowrap' }}>Contact Us</span>
                                    <ArrowRight size={18} strokeWidth={1.5} />
                                </>
                            )}
                        </a>
                    )}

                    {/* Mobile Menu Toggle */}
                    {isMobile && (
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px',
                                color: '#111',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    )}
                </div>
            </header>

            {/* Mobile Dropdown Menu with glassmorphism */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                zIndex: 99,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '32px',
                padding: '0',
                opacity: isMobile && isMenuOpen ? 1 : 0,
                pointerEvents: isMobile && isMenuOpen ? 'all' : 'none',
                transform: isMobile && isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
            }}>
                {navLinks.map((item, index) => (
                    <a key={item}
                        href={`#${navMap[item]}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            const id = navMap[item];
                            const el = document.getElementById(id);
                            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                            if (el) {
                                const targetY = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
                                window.scrollTo({ top: targetY, behavior: 'smooth' });
                            } else {
                                window.location.hash = `#${id}`;
                            }
                        }}
                        style={{
                            fontSize: '24px',
                            fontWeight: 600,
                            color: '#111',
                            textDecoration: 'none',
                            fontFamily: 'sans-serif',
                            textAlign: 'center',
                            width: '100%',
                            opacity: isMobile && isMenuOpen ? 1 : 0,
                            transform: isMobile && isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                            transition: `all 0.5s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s`
                        }}>
                        {item}
                    </a>
                ))}
                <a href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '14px 32px',
                        borderRadius: '100px',
                        backgroundColor: '#2d7d90',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '18px',
                        fontWeight: 600,
                        marginTop: '20px',
                        boxShadow: '0 4px 16px rgba(45, 125, 144, 0.3)',
                        opacity: isMobile && isMenuOpen ? 1 : 0,
                        transform: isMobile && isMenuOpen ? 'translateY(0) translateX(0)' : 'translateY(20px)',
                        transition: `all 0.5s cubic-bezier(0.23, 1, 0.32, 1) ${navLinks.length * 0.1}s`
                    }}>
                    <span>Contact Us</span>
                    <ArrowRight size={20} />
                </a>
            </div>
        </>
    );
}

export default Navbar;