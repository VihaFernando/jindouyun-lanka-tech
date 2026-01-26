import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) setIsMenuOpen(false);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = ['About Us', 'Services', 'Products', 'Careers'];

    return (
        <header style={{
            position: 'relative',
            zIndex: 50,
            width: '100%',
            padding: isMobile ? '16px 12px' : '24px 40px',
            background: isMenuOpen ? '#ffffff' : 'transparent',
            transition: 'background 0.3s ease',
            boxSizing: 'border-box'
        }}>
            <div style={{
                maxWidth: isMobile ? '100%' : '1280px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr auto' : '1fr auto 1fr',
                alignItems: 'center',
                width: '100%',
                boxSizing: 'border-box',
            }}>
                <a style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    color: '#111111',
                    justifySelf: 'start',
                    position: 'relative',
                    zIndex: 52
                }} href="#">
                    <img style={{ width: isMobile ? '32px' : '40px', height: isMobile ? '32px' : '40px', objectFit: 'contain' }} src="/logo-j.png" alt="Jidouyun Lanka" />
                    <span style={{
                        fontSize: isMobile ? '14px' : '16px',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: '#222'
                    }}>Jidouyun Lanka</span>
                </a>

                {!isMobile && (
                    <nav style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '40px',
                        justifySelf: 'center',
                    }}>
                        {navLinks.map((item) => (
                            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} style={{
                                fontSize: '15px',
                                fontWeight: 500,
                                color: '#000000',
                                textDecoration: 'none',
                                letterSpacing: '0.025em',
                                fontFamily: 'sans-serif'
                            }}>
                                {item}
                            </a>
                        ))}
                    </nav>
                )}

                {!isMobile && (
                    <a style={{
                        justifySelf: 'end',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 24px',
                        borderRadius: '100px',
                        border: '2px solid #2d7d90',
                        color: '#2d7d90',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 700,
                        background: 'transparent',
                        transition: 'all 0.2s ease',
                    }} href="#contact">
                        <span>Contact Us</span>
                        <ArrowRight size={18} strokeWidth={1.5} />
                    </a>
                )}

                {isMobile && (
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            zIndex: 52,
                            color: '#111'
                        }}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                )}
            </div>

            {isMobile && isMenuOpen && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    background: '#ffffff',
                    zIndex: 51,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '32px',
                    padding: '20px'
                }}>
                    {navLinks.map((item) => (
                        <a key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                fontSize: '24px',
                                fontWeight: 600,
                                color: '#111',
                                textDecoration: 'none',
                                fontFamily: 'sans-serif'
                            }}>
                            {item}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '14px 32px',
                        borderRadius: '100px',
                        backgroundColor: '#2d7d90',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '18px',
                        fontWeight: 600,
                        marginTop: '20px'
                    }}>
                        <span>Contact Us</span>
                        <ArrowRight size={20} />
                    </a>
                </div>
            )}
        </header>
    );
}

export default Navbar;