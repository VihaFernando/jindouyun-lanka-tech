import { useState, useEffect } from 'react';

export default function EmpoweringSection() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1200;

    const cards = [
        {
            tag: 'Grow',
            title: 'Machinery designed for real farms',
            desc: 'Reliable agricultural machines tailored for local farming needs, from soil preparation to harvest.',
            theme: 'light'
        },
        {
            tag: 'Move',
            title: 'Smarter farming with AI',
            desc: 'AI-driven insights for crop monitoring, precision input use, and better farming decisions.',
            theme: 'dark'
        },
        {
            tag: 'Nouries', // Kept as per your image text
            title: 'Sustainable food systems',
            desc: 'Helping farmers improve yields while reducing costs and environmental impact.',
            theme: 'light'
        }
    ];

    return (
        <section style={{
            position: 'relative',
            background: 'transparent', // Transparent to show global gradient
            padding: isMobile ? '60px 20px' : '100px 40px',
            fontFamily: '"Poppins", sans-serif',
            overflow: 'hidden'
        }}>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Gilroy:wght@500;600&family=Poppins:wght@300;400;500;600&display=swap');`}
            </style>

            {/* RIGHT SIDE GRADIENT REMOVED - Handled globally in App.jsx */}



            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 10,
            }}>

                {/* --- 1. TOP CENTERED TEXT --- */}
                <div style={{
                    textAlign: 'center',
                    maxWidth: '900px',
                    margin: '0 auto',
                    marginBottom: isMobile ? '50px' : '90px'
                }}>
                    <p style={{
                        fontSize: isMobile ? '18px' : '24px',
                        lineHeight: 1.5,
                        color: '#111',
                        margin: 0,
                        fontWeight: 400
                    }}>
                        We deliver <span style={{
                            fontFamily: '"Caveat", cursive',
                            color: '#0E6C85',
                            fontSize: '1.4em',
                            fontWeight: 700,
                            position: 'relative',
                            top: '3px',
                            margin: '0 4px'
                        }}>Intelligent Farming Solutions</span> by combining agricultural machinery, smart systems, and AI built for real world farming and sustainable growth.
                    </p>
                </div>

                {/* --- 2. MAIN GRID (Title Left, Cards Right) --- */}
                <div style={{
                    display: 'grid',
                    // Desktop: 35% Title / 65% Cards -> Adjusted to 40% / 60% for better spacing
                    gridTemplateColumns: (isMobile || isTablet) ? '1fr' : '0.4fr 0.6fr',
                    gap: isMobile ? '40px' : '40px', // Reduced gap slightly to fit things better
                    alignItems: 'start'
                }}>

                    {/* LEFT COLUMN: TITLE */}
                    <div style={{ position: 'relative' }}>
                        <h2 style={{
                            fontSize: isMobile ? '40px' : (isTablet ? '52px' : '64px'),
                            lineHeight: 1.15,
                            fontWeight: 500,
                            margin: 0,
                            fontFamily: '"Gilroy", "Poppins", sans-serif',
                            letterSpacing: isMobile ? '-0.01em' : '-0.02em',
                            color: '#000',
                            // Removed visually restrictive whiteSpace: 'nowrap' which was causing overflow issues
                            // Allowing wrap if needed but maintaining structure via width
                        }}>
                            {/* Line 1 */}
                            <div style={{ color: '#0E6C85' }}>Empowering</div>

                            {/* Line 2: "agriculture" (Teal) + "with" (Black) */}
                            <div>
                                <span style={{ color: '#0E6C85' }}>agriculture</span>
                                <span style={{ color: '#000000' }}> with</span>
                            </div>

                            {/* Line 3 */}
                            <div style={{ color: '#000000' }}>smart, practical</div>

                            {/* Line 4 */}
                            <div style={{ color: '#000000' }}>technology</div>
                        </h2>
                    </div>

                    {/* RIGHT COLUMN: CARDS */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: '20px', // Reduced gap for tighter look
                    }}>
                        {cards.map((card, index) => {
                            const isDark = card.theme === 'dark';

                            return (
                                <div key={index} style={{
                                    backgroundColor: isDark ? '#0E6C85' : '#ffffff',
                                    borderRadius: '20px',
                                    padding: '30px',
                                    minHeight: '340px', // Reduced height as requested
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                }}>
                                    {/* Dark Card Background Image & Overlay */}
                                    {isDark && (
                                        <>
                                            {/* Image Layer */}
                                            <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundImage: 'url("/card-image.png")',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center',
                                                zIndex: 0
                                            }} />

                                            {/* Color Overlay Layer */}
                                            <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: `linear-gradient(to bottom, rgba(14, 108, 133, 0.7), rgba(14, 108, 133, 0.8))`,
                                                zIndex: 1
                                            }} />
                                        </>
                                    )}

                                    {/* Top: Tag */}
                                    <div style={{ position: 'relative', zIndex: 2 }}>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '10px 24px',
                                            borderRadius: '12px',
                                            // INVERTED COLORS compared to previous code, matching image
                                            // Light Card -> Teal BG, White Text
                                            // Dark Card -> White BG, Teal Text
                                            background: isDark ? '#ffffff' : '#0E6C85',
                                            color: isDark ? '#0E6C85' : '#ffffff',
                                            fontSize: '16px',
                                            fontWeight: 500,
                                        }}>
                                            {card.tag}
                                        </span>
                                    </div>

                                    {/* Bottom: Text Content */}
                                    <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto', display: 'flex', flexDirection: 'column', flex: isMobile ? '0' : '1', justifyContent: 'flex-end', paddingTop: '20px' }}>
                                        <div style={{ minHeight: isMobile ? 'auto' : '65px', display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                                            <h3 style={{
                                                fontSize: '22px',
                                                fontWeight: 500,
                                                margin: 0,
                                                lineHeight: 1.3,
                                                width: '100%',
                                                // Light Card -> Teal Title. Dark Card -> White Title.
                                                color: isDark ? '#ffffff' : '#0E6C85'
                                            }}>
                                                {card.title}
                                            </h3>
                                        </div>
                                        <div style={{ minHeight: isMobile ? 'auto' : '120px' }}>
                                            <p style={{
                                                fontSize: '15px',
                                                lineHeight: 1.6,
                                                color: isDark ? '#ffffff' : '#666666',
                                                margin: 0,
                                                fontWeight: 400
                                            }}>
                                                {card.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}