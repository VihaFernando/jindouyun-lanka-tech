import { useState, useEffect } from 'react';
import { Bell, Wrench, Briefcase, Monitor, MousePointer2, Plus } from 'lucide-react';

export default function Careers() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        // Safe check for window existence (SSR compatibility)
        if (typeof window !== 'undefined') {
            const handleResize = () => setWidth(window.innerWidth);
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    return (
        <section id="careers" style={{
            backgroundColor: '#ebebeb',
            padding: isMobile ? '60px 0 80px 0' : (isTablet ? '0' : '100px 0 120px 0'),
            fontFamily: '"Poppins", sans-serif',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: isMobile ? 'auto' : (isTablet ? 'auto' : '800px'),
            height: isTablet ? 'fit-content' : 'auto'
        }}>

            {/* --- BACKGROUND IMAGE (Group 22) - Hidden on Mobile --- */}
            {!isMobile && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: isTablet ? '55%' : '55%',
                    height: '100%',
                    zIndex: 1
                }}>
                    <img
                        src="/Group 22.png"
                        alt="Background Shape"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'left center'
                        }}
                    />
                    {/* Gradient Overlay for smooth fade effect */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(232, 237, 239, 0) 0%, rgba(232, 237, 239, 0) 70%, rgba(232, 237, 239, 0.5) 90%, rgba(232, 237, 239, 1) 100%)'
                    }} />
                </div>
            )}

            <div style={{
                maxWidth: '1200px',
                width: '100%',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                gap: isMobile ? '50px' : (isTablet ? '40px' : '80px'),
                position: 'relative',
                padding: isMobile ? '0 20px' : (isTablet ? '20px 30px' : '0 40px'),
                zIndex: 10
            }}>

                {/* --- Mobile: Content First --- */}
                {isMobile && (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%'
                    }}>
                        <h2 style={{
                            fontSize: '42px',
                            fontWeight: 600,
                            lineHeight: 1.1,
                            color: '#000',
                            marginBottom: '5px',
                            margin: 0,
                            fontFamily: '"Poppins", sans-serif'
                        }}>
                            Upcoming
                        </h2>
                        <h2 style={{
                            fontSize: '48px',
                            fontFamily: '"Caveat", cursive',
                            color: '#0E6C85',
                            marginTop: '-10px',
                            marginBottom: '30px',
                            fontWeight: 400
                        }}>
                            Careers
                        </h2>

                        <p style={{
                            color: '#4a4a4a',
                            fontSize: '14px',
                            lineHeight: '1.7',
                            maxWidth: '400px',
                            marginBottom: '0',
                            fontFamily: '"Poppins", sans-serif'
                        }}>
                            We're growing. New career opportunities will be available soon, stay connected and check back for updates.
                        </p>
                    </div>
                )}

                {/* --- Left Side: Visuals --- */}
                <div style={{
                    flex: isMobile ? 'none' : '1',
                    position: 'relative',
                    minHeight: isMobile ? '400px' : (isTablet ? '450px' : '550px'),
                    width: isMobile ? '100%' : 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isMobile ? 'center' : 'flex-start'
                }}>

                    {/* Floating Icons (White Outline Style) - Hidden on Mobile */}
                    {!isMobile && (
                        <>
                            <div style={{
                                position: 'absolute',
                                top: isTablet ? '10%' : '12%',
                                left: isTablet ? '5%' : '12%',
                                width: isTablet ? '45px' : '50px',
                                height: isTablet ? '45px' : '50px',
                                border: '2px solid rgba(255, 255, 255, 0.8)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'transparent',
                                zIndex: 3
                            }}>
                                <Wrench size={isTablet ? 22 : 24} color="rgba(255, 255, 255, 0.9)" strokeWidth={2} />
                            </div>

                            <div style={{
                                position: 'absolute',
                                top: isTablet ? '40%' : '42%',
                                left: isTablet ? '2%' : '8%',
                                width: isTablet ? '45px' : '50px',
                                height: isTablet ? '45px' : '50px',
                                border: '2px solid rgba(255, 255, 255, 0.8)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'transparent',
                                zIndex: 3
                            }}>
                                <Briefcase size={isTablet ? 22 : 24} color="rgba(255, 255, 255, 0.9)" strokeWidth={2} />
                            </div>

                            <div style={{
                                position: 'absolute',
                                top: isTablet ? '66%' : '68%',
                                left: isTablet ? '7%' : '15%',
                                width: isTablet ? '45px' : '50px',
                                height: isTablet ? '45px' : '50px',
                                border: '2px solid rgba(255, 255, 255, 0.8)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'transparent',
                                zIndex: 3
                            }}>
                                <Monitor size={isTablet ? 22 : 24} color="rgba(255, 255, 255, 0.9)" strokeWidth={2} />
                            </div>

                            {/* Dotted Pattern - Horizontal Lines */}
                            <div style={{
                                position: 'absolute',
                                bottom: isTablet ? '18%' : '20%',
                                left: isTablet ? '3%' : '10%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: isTablet ? '8px' : '10px',
                                zIndex: 3
                            }}>
                                {[...Array(4)].map((_, rowIndex) => (
                                    <div key={rowIndex} style={{
                                        display: 'flex',
                                        gap: isTablet ? '8px' : '10px'
                                    }}>
                                        {[...Array(isTablet ? 10 : 12)].map((_, i) => (
                                            <div key={i} style={{
                                                width: '4px',
                                                height: '4px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                borderRadius: '50%'
                                            }} />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Main Image Card */}
                    <div style={{
                        position: 'relative',
                        zIndex: 5,
                        width: isMobile ? '300px' : (isTablet ? '280px' : '360px'),
                        height: isMobile ? '340px' : (isTablet ? '340px' : '420px'),
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)',
                        border: '8px solid #fff',
                        marginLeft: isMobile ? 0 : (isTablet ? '10px' : '80px'),
                        transform: (isMobile || isTablet) ? 'none' : 'rotate(-2deg)'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000&auto=format&fit=crop"
                            alt="Farmer Career"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transform: (isMobile || isTablet) ? 'none' : 'rotate(2deg) scale(1.1)'
                            }}
                        />
                    </div>

                    {/* Job Alert Floating Pill */}
                    <div style={{
                        position: 'absolute',
                        top: isMobile ? '-20px' : (isTablet ? '15px' : '40px'),
                        left: isMobile ? '50%' : (isTablet ? '25px' : '100px'),
                        transform: isMobile ? 'translateX(-50%)' : 'none',
                        backgroundColor: '#fff',
                        padding: isMobile ? '10px 20px' : (isTablet ? '10px 18px' : '12px 24px'),
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                        zIndex: 6,
                        whiteSpace: 'nowrap'
                    }}>
                        <Bell size={isMobile ? 18 : (isTablet ? 18 : 20)} fill="#0E6C85" color="#0E6C85" />
                        <span style={{
                            fontSize: isMobile ? '13px' : (isTablet ? '13px' : '15px'),
                            fontWeight: 600,
                            color: '#1a1a1a',
                            fontFamily: '"Poppins", sans-serif'
                        }}>
                            Job Alert Subscribe
                        </span>
                    </div>

                </div>

                {/* --- Right Side: Content (Desktop/Tablet Only) --- */}
                {!isMobile && (
                    <div style={{
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        paddingLeft: isTablet ? '15px' : '20px',
                        maxWidth: isTablet ? '400px' : '600px'
                    }}>
                        <h2 style={{
                            fontSize: isTablet ? '44px' : '64px',
                            fontWeight: 600,
                            lineHeight: 1.1,
                            color: '#000',
                            marginBottom: '5px',
                            margin: 0,
                            fontFamily: '"Poppins", sans-serif'
                        }}>
                            Upcoming
                        </h2>
                        <h2 style={{
                            fontSize: isTablet ? '50px' : '72px',
                            fontFamily: '"Caveat", cursive',
                            color: '#0E6C85',
                            marginTop: '-10px',
                            marginBottom: isTablet ? '20px' : '30px',
                            fontWeight: 400
                        }}>
                            Careers
                        </h2>

                        <p style={{
                            color: '#4a4a4a',
                            fontSize: isTablet ? '14px' : '16px',
                            lineHeight: '1.7',
                            maxWidth: isTablet ? '350px' : '480px',
                            marginBottom: isTablet ? '35px' : '50px',
                            fontFamily: '"Poppins", sans-serif'
                        }}>
                            We're growing. New career opportunities will be available soon, stay connected and check back for updates.
                        </p>

                        {/* Stats Card */}
                        <div style={{
                            backgroundColor: '#D4E9F7',
                            padding: isTablet ? '18px 28px' : '22px 34px',
                            borderRadius: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            marginBottom: isTablet ? '35px' : '50px',
                            maxWidth: isTablet ? '280px' : '320px',
                            width: '100%',
                            boxShadow: '0 4px 12px rgba(14, 108, 133, 0.08)'
                        }}>
                            <span style={{
                                fontSize: isTablet ? '18px' : '20px',
                                fontWeight: 600,
                                color: '#000',
                                marginBottom: '2px',
                                fontFamily: '"Poppins", sans-serif'
                            }}>
                                3K+ candidates
                            </span>
                            <span style={{
                                fontSize: isTablet ? '15px' : '17px',
                                color: '#333',
                                marginBottom: '18px',
                                fontFamily: '"Poppins", sans-serif'
                            }}>
                                get jobs
                            </span>

                            {/* Avatar Stack */}
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {[
                                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
                                ].map((url, i) => (
                                    <img
                                        key={i}
                                        src={url}
                                        alt="User"
                                        style={{
                                            width: isTablet ? '36px' : '40px',
                                            height: isTablet ? '36px' : '40px',
                                            borderRadius: '50%',
                                            border: '3px solid #fff',
                                            marginLeft: i === 0 ? 0 : '-14px',
                                            objectFit: 'cover',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                        }}
                                    />
                                ))}
                                <div style={{
                                    width: isTablet ? '36px' : '40px',
                                    height: isTablet ? '36px' : '40px',
                                    borderRadius: '50%',
                                    backgroundColor: '#0E6C85',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '3px solid #fff',
                                    marginLeft: '-14px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}>
                                    <Plus size={isTablet ? 16 : 18} strokeWidth={3} />
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button style={{
                            backgroundColor: '#4FB0C6',
                            color: '#fff',
                            border: 'none',
                            padding: isTablet ? '14px 32px' : '16px 40px',
                            borderRadius: '50px',
                            fontSize: isTablet ? '15px' : '17px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            boxShadow: '0 8px 24px rgba(79, 176, 198, 0.35)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            fontFamily: '"Poppins", sans-serif'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 12px 32px rgba(79, 176, 198, 0.45)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(79, 176, 198, 0.35)';
                            }}
                        >
                            Apply for Future
                            <MousePointer2 size={isTablet ? 18 : 20} fill="#fff" />
                        </button>

                    </div>
                )}

                {/* --- Mobile: Stats Card and Button --- */}
                {isMobile && (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        gap: '30px'
                    }}>
                        {/* Stats Card */}
                        <div style={{
                            backgroundColor: '#D4E9F7',
                            padding: '18px 28px',
                            borderRadius: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '280px',
                            width: '100%',
                            boxShadow: '0 4px 12px rgba(14, 108, 133, 0.08)'
                        }}>
                            <span style={{
                                fontSize: '18px',
                                fontWeight: 600,
                                color: '#000',
                                marginBottom: '2px',
                                fontFamily: '"Poppins", sans-serif'
                            }}>
                                3K+ candidates
                            </span>
                            <span style={{
                                fontSize: '15px',
                                color: '#333',
                                marginBottom: '18px',
                                fontFamily: '"Poppins", sans-serif'
                            }}>
                                get jobs
                            </span>

                            {/* Avatar Stack */}
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {[
                                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
                                ].map((url, i) => (
                                    <img
                                        key={i}
                                        src={url}
                                        alt="User"
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '50%',
                                            border: '3px solid #fff',
                                            marginLeft: i === 0 ? 0 : '-14px',
                                            objectFit: 'cover',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                        }}
                                    />
                                ))}
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    backgroundColor: '#0E6C85',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '3px solid #fff',
                                    marginLeft: '-14px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}>
                                    <Plus size={16} strokeWidth={3} />
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button style={{
                            backgroundColor: '#4FB0C6',
                            color: '#fff',
                            border: 'none',
                            padding: '14px 32px',
                            borderRadius: '50px',
                            fontSize: '15px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            boxShadow: '0 8px 24px rgba(79, 176, 198, 0.35)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            fontFamily: '"Poppins", sans-serif'
                        }}>
                            Apply for Future
                            <MousePointer2 size={18} fill="#fff" />
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}