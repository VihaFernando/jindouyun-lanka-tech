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
        <section style={{
            backgroundColor: '#F2F4F8',
            padding: isMobile ? '60px 0 80px 0' : '80px 0 100px 0',
            fontFamily: '"Poppins", sans-serif',
            position: 'relative',
            overflow: 'hidden', // Ensures the big image doesn't cause scrollbars
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '600px'
        }}>
            
            <div style={{
                maxWidth: '1200px',
                width: '100%',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                gap: isMobile ? '50px' : '60px',
                position: 'relative',
                padding: isMobile ? '0 20px' : '0 40px',
                zIndex: 10
            }}>

                {/* --- Left Side: Visuals & Group 22 Image --- */}
                <div style={{
                    flex: '1',
                    position: 'relative',
                    minHeight: isMobile ? '350px' : '500px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    
                    {/* --- BACKGROUND IMAGE (Group 22) --- */}
                    {/* This replaces the previous blue shape */}
                    <img 
                        src="/Group 22.png" 
                        alt="Background Shape"
                        style={{
                            position: 'absolute',
                            // Responsive Positioning
                            top: '50%',
                            left: isMobile ? '50%' : '-15%', // Center on mobile, pull left on desktop
                            transform: isMobile ? 'translate(-50%, -50%)' : 'translateY(-50%)',
                            
                            // Responsive Sizing
                            width: isMobile ? '140%' : '130%', // Make it large enough to cover the area
                            height: 'auto',
                            maxHeight: isMobile ? '100%' : '140%',
                            objectFit: 'contain',
                            
                            zIndex: 1, // Behind the photos/icons
                            opacity: 1
                        }} 
                    />

                    {/* Floating Icons (Decorative) - Sitting on top of Group 22 */}
                    <Wrench style={{ position: 'absolute', top: '10%', left: isMobile ? '0%' : '10%', color: 'rgba(255,255,255,0.6)', width: '40px', height: '40px', zIndex: 2 }} strokeWidth={1.5} />
                    <Briefcase style={{ position: 'absolute', top: '35%', left: isMobile ? '5%' : '15%', color: 'rgba(255,255,255,0.6)', width: '35px', height: '35px', zIndex: 2 }} strokeWidth={1.5} />
                    <Monitor style={{ position: 'absolute', top: '60%', left: isMobile ? '0%' : '8%', color: 'rgba(255,255,255,0.6)', width: '38px', height: '38px', zIndex: 2 }} strokeWidth={1.5} />

                    {/* Dotted Pattern (Bottom Left) */}
                    <div style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: isMobile ? '10px' : '40px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(6, 1fr)',
                        gap: '8px',
                        zIndex: 2
                    }}>
                        {[...Array(24)].map((_, i) => (
                            <div key={i} style={{ width: '4px', height: '4px', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '50%' }} />
                        ))}
                    </div>

                    {/* Main Image Card */}
                    <div style={{
                        position: 'relative',
                        zIndex: 5, // Top layer
                        width: isMobile ? '280px' : '340px',
                        height: isMobile ? '320px' : '400px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px rgba(14, 108, 133, 0.25)', // Tinted shadow
                        border: '5px solid #fff'
                    }}>
                        <img 
                            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000&auto=format&fit=crop"
                            alt="Farmer Career"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Job Alert Floating Pill */}
                    <div style={{
                        position: 'absolute',
                        top: isMobile ? '-15px' : '30px',
                        left: isMobile ? '50%' : '40px',
                        transform: isMobile ? 'translateX(-50%)' : 'none', // Center on mobile
                        backgroundColor: '#fff',
                        padding: '10px 20px',
                        borderRadius: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                        zIndex: 6,
                        whiteSpace: 'nowrap'
                    }}>
                        <Bell size={18} fill="#0E6C85" color="#0E6C85" />
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#333' }}>Job Alert Subscribe</span>
                    </div>

                </div>

                {/* --- Right Side: Content --- */}
                <div style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: isMobile ? 'center' : 'flex-end',
                    textAlign: isMobile ? 'center' : 'right',
                    paddingLeft: isMobile ? 0 : '40px'
                }}>
                    <h2 style={{ 
                        fontSize: isMobile ? '36px' : '56px', 
                        fontWeight: 600, 
                        lineHeight: 1.1, 
                        color: '#000',
                        marginBottom: '10px',
                        margin: 0
                    }}>
                        Upcoming
                    </h2>
                    <h2 style={{ 
                        fontSize: isMobile ? '42px' : '64px', 
                        fontFamily: '"Caveat", cursive', 
                        color: '#0E6C85', 
                        marginTop: '-5px',
                        marginBottom: '20px'
                    }}>
                        Careers
                    </h2>

                    <p style={{ 
                        color: '#666', 
                        fontSize: isMobile ? '14px' : '16px', 
                        lineHeight: '1.6', 
                        maxWidth: '400px',
                        marginBottom: '40px'
                    }}>
                        We're growing. New career opportunities will be available soon, stay connected and check back for updates.
                    </p>

                    {/* Stats Card */}
                    <div style={{
                        backgroundColor: '#D6EAF8',
                        padding: '20px 30px',
                        borderRadius: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isMobile ? 'center' : 'flex-start',
                        marginBottom: '40px',
                        maxWidth: '300px',
                        width: '100%'
                    }}>
                        <span style={{ fontSize: '18px', fontWeight: 600, color: '#000', marginBottom: '4px' }}>3K+ candidates</span>
                        <span style={{ fontSize: '16px', color: '#444', marginBottom: '15px' }}>get jobs</span>
                        
                        {/* Avatar Stack */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {[
                                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
                                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
                                'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
                                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
                            ].map((url, i) => (
                                <img 
                                    key={i} 
                                    src={url} 
                                    alt="User" 
                                    style={{ 
                                        width: '36px', 
                                        height: '36px', 
                                        borderRadius: '50%', 
                                        border: '2px solid #fff',
                                        marginLeft: i === 0 ? 0 : '-12px',
                                        objectFit: 'cover'
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
                                border: '2px solid #fff',
                                marginLeft: '-12px',
                                fontSize: '12px'
                            }}>
                                <Plus size={16} />
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
                        fontSize: '16px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 10px 20px rgba(79, 176, 198, 0.3)',
                        transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Apply for Future
                        <MousePointer2 size={18} fill="#fff" />
                    </button>

                </div>
            </div>
        </section>
    );
}