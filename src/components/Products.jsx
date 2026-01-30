import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const PRODUCTS = [
    {
        id: 'machineries',
        category: 'Machineries',
        image: 'https://images.unsplash.com/photo-1592397444747-062e08e68407?q=80&w=1000&auto=format&fit=crop',
        title: "Autonomous Tractor Series-X",
        description: "Next-gen field machinery equipped with Lidar sensors and AI navigation for 24/7 autonomous operation.",
        features: ["GPS Navigation", "Obstacle Avoidance", "Solar Charging"]
    },
    {
        id: 'drones',
        category: 'Drones',
        image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=1000&auto=format&fit=crop',
        title: "GD-50 UAV System",
        description: "A heavy-lift agricultural drone designed for precision operations, offering stable flight, high payload capacity, and reliable performance.",
        features: ["High Payload Capacity", "Advanced Flight Safety", "Efficient Field Use"]
    },
    {
        id: 'greenhouse',
        category: 'Greenhouse',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop',
        title: "Smart Climate Control Hub",
        description: "IoT-enabled climate systems that automatically adjust humidity, temperature, and light levels for optimal crop growth.",
        features: ["Auto-Irrigation", "Humidity Sensors", "App Controlled"]
    }
];

export default function ProductsSection() {
    const [activeTab, setActiveTab] = useState('drones');
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isVerySmall = width < 420;
    const activeProduct = PRODUCTS.find(p => p.id === activeTab);

    return (
        <section id="products" style={{
            backgroundColor: '#0B0D10',
            padding: isMobile ? '60px 20px 80px 20px' : '100px 40px 140px 40px',
            color: '#fff',
            fontFamily: '"Poppins", sans-serif',
            position: 'relative',
            zIndex: 20,
            overflow: 'hidden',
            minHeight: '800px', // Ensure enough height for the look
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            {/* Background Gradient Spot (Optional subtle glow behind content) */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
                background: 'radial-gradient(circle, rgba(14, 108, 133, 0.08) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none',
                zIndex: 1
            }} />

            {/* Header Text */}
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px', position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontSize: isMobile ? '22px' : '32px', fontWeight: 400, color: '#fff', lineHeight: 1.3 }}>
                    Products designed for <span style={{ fontFamily: '"Caveat", cursive', color: '#0E6C85', fontSize: isMobile ? (isVerySmall ? '28px' : '32px') : '48px', margin: '0 5px', display: 'inline-block', whiteSpace: 'nowrap', wordBreak: 'keep-all' }}>smarter agriculture,</span> from field
                </h2>
                <h2 style={{ fontSize: isMobile ? '22px' : '32px', fontWeight: 400, color: '#fff', marginTop: isMobile ? '5px' : '-5px', lineHeight: 1.3 }}>
                    ready machinery to intelligent systems.
                </h2>
            </div>

            {/* Navigation Tabs */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: isMobile ? '25px' : '60px',
                marginBottom: isMobile ? '30px' : '50px',
                position: 'relative',
                zIndex: 2
            }}>
                {PRODUCTS.map((product) => (
                    <button
                        key={product.id}
                        onClick={() => setActiveTab(product.id)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: activeTab === product.id ? '#fff' : 'rgba(255,255,255,0.4)',
                            fontSize: isMobile ? '14px' : '16px',
                            cursor: 'pointer',
                            position: 'relative',
                            paddingBottom: '8px',
                            transition: 'color 0.3s ease',
                            fontFamily: '"Poppins", sans-serif',
                            letterSpacing: '0.5px'
                        }}
                    >
                        {product.category}
                        <span style={{
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: activeTab === product.id ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                            width: '20px',
                            height: '2px',
                            backgroundColor: '#fff',
                            transition: 'transform 0.3s ease'
                        }} />
                    </button>
                ))}
            </div>

            {/* Main Product Card - Glassmorphism */}
            <div style={{
                maxWidth: '1100px',
                width: '100%',
                margin: '0 auto',
                // The exact glass style from the reference
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: isMobile ? '24px' : '32px',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 10,
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}>

                {/* Left Side: Image Container */}
                <div style={{
                    flex: isMobile ? '0 0 auto' : '0 0 50%',
                    padding: isMobile ? '20px' : '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        width: '100%',
                        height: isMobile ? '220px' : isTablet ? '300px' : '400px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        position: 'relative',
                        backgroundColor: '#000' // Fallback
                    }}>
                        <img
                            key={activeProduct.image}
                            src={activeProduct.image}
                            alt={activeProduct.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: 0,
                                animation: 'fadeInImage 0.6s ease-out forwards'
                            }}
                        />
                        {/* Inner shadow overlay for depth */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)', pointerEvents: 'none' }} />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div style={{
                    flex: '1',
                    padding: isMobile ? '20px 24px 30px 24px' : '50px 60px 50px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <h3 style={{
                        fontSize: isMobile ? '22px' : '32px',
                        fontWeight: 500,
                        marginBottom: isMobile ? '12px' : '20px',
                        color: '#fff',
                        opacity: 0,
                        animation: 'fadeInUp 0.5s ease-out 0.1s forwards'
                    }}>
                        {activeProduct.title}
                    </h3>

                    <p style={{
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: '1.7',
                        marginBottom: isMobile ? '25px' : '40px',
                        fontSize: isMobile ? '13px' : '15px',
                        maxWidth: '450px',
                        opacity: 0,
                        animation: 'fadeInUp 0.5s ease-out 0.2s forwards'
                    }}>
                        {activeProduct.description}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                        {activeProduct.features.map((feature, i) => (
                            <li key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#e2e8f0',
                                marginBottom: '12px',
                                fontSize: isMobile ? '13px' : '14px',
                                opacity: 0,
                                animation: `fadeInUp 0.5s ease-out ${0.3 + (i * 0.1)}s forwards`
                            }}>
                                <span style={{ width: '4px', height: '4px', background: '#fff', borderRadius: '50%', marginRight: '12px', opacity: 0.8 }} />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* Arrow Button */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: 'auto',
                        opacity: 0,
                        animation: 'fadeInUp 0.5s ease-out 0.6s forwards'
                    }}>
                        <button style={{
                            width: isMobile ? '40px' : '48px',
                            height: isMobile ? '40px' : '48px',
                            borderRadius: '50%',
                            border: '1px solid #0E6C85', // Blue border as in image
                            background: 'transparent',
                            color: '#0E6C85', // Blue icon
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = '#0E6C85'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0E6C85'; }}
                        >
                            <ChevronRight size={isMobile ? 20 : 24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style>
                {`
                @keyframes fadeInImage {
                    from { opacity: 0; transform: scale(1.05); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                `}
            </style>
        </section>
    );
}