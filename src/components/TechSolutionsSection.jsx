import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TechSolutionsSection() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    const brandTeal = '#1a7f92'; // Using the established brand color

    return (
        <section style={{
            position: 'relative',
            width: '100%',
            minHeight: '800px', // Detailed height to fit the background
            fontFamily: '"Poppins", sans-serif',
            overflow: 'hidden',
            paddingTop: '80px',
            paddingBottom: '100px'
        }}>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Gilroy:wght@500;600&family=Poppins:wght@300;400;500;600&display=swap');`}
            </style>

            {/* --- CONTENT CONTAINER --- */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>

                {/* HEADER */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: isMobile ? '28px' : '36px',
                        fontWeight: 400,
                        color: '#000',
                        margin: 0,
                        lineHeight: 1.2
                    }}>
                        Technology-driven solutions for modern
                    </h2>
                    <h2 style={{
                        fontFamily: '"Caveat", cursive',
                        fontSize: isMobile ? '48px' : '64px',
                        color: brandTeal,
                        margin: 0,
                        lineHeight: 1,
                        marginTop: '10px'
                    }}>
                        Agriculture.
                    </h2>
                </div>

            </div>

            {/* --- CONTINUED BLOB (Top Left - Only tiny bit visible) --- */}
            <div style={{
                position: 'absolute',
                left: isMobile ? '-15%' : '-5%',
                // Mostly hidden above - only shows tiny bottom edge
                top: isMobile ? '-280px' : '-520px',
                width: isMobile ? '350px' : '600px',
                height: isMobile ? '350px' : '600px',
                borderRadius: '68% 58% 70% 30% / 45% 45% 55% 55%', // Same matching shape
                background: '#bdbdbd',
                opacity: 0.35,
                zIndex: 1,
                pointerEvents: 'none'
            }} />

        </section>
    );
}


