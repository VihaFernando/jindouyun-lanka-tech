import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const PRODUCTS = [
    {
        id: 'machineries',
        category: 'Machineries',
        image: 'https://images.unsplash.com/photo-1592397444747-062e08e68407?q=80&w=1000&auto=format&fit=crop', // Tractor Image
        title: "Autonomous Tractor Series-X",
        description: "Next-gen field machinery equipped with Lidar sensors and AI navigation for 24/7 autonomous operation.",
        features: ["GPS Navigation", "Obstacle Avoidance", "Solar Charging"]
    },
    {
        id: 'drones',
        category: 'Drones',
        image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=1000&auto=format&fit=crop', // Drone Image
        title: "GD-50 UAV System",
        description: "A heavy-lift agricultural drone designed for precision operations, offering stable flight, high payload capacity, and reliable performance.",
        features: ["High Payload Capacity", "Advanced Flight Safety", "Efficient Field Use"]
    },
    {
        id: 'greenhouse',
        category: 'Greenhouse',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop', // Greenhouse Image
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
    const activeProduct = PRODUCTS.find(p => p.id === activeTab);

    // Dynamic Image Positioning based on product for better centering
    const getImageStyle = () => {
        if (activeTab === 'drones') return { objectPosition: 'center center', transform: 'scale(0.85)' };
        if (activeTab === 'machineries') return { objectPosition: 'center bottom', transform: 'scale(1)' };
        return { objectPosition: 'center center', transform: 'scale(1)' };
    };

    return (
        <section style={{
            backgroundColor: '#0B0D10', // Deep black background
            padding: isMobile ? '60px 20px 80px 20px' : '100px 40px 140px 40px',
            color: '#fff',
            fontFamily: '"Poppins", sans-serif',
            position: 'relative',
            zIndex: 20, // <--- CRITICAL FIX: Keeps this section ABOVE the footer overlap
            overflow: 'hidden' 
        }}>
            
            {/* Header Text */}
            <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 400, color: '#fff' }}>
                    Products designed for <span style={{ fontFamily: '"Caveat", cursive', color: '#0E6C85', fontSize: isMobile ? '36px' : '48px' }}>smarter agriculture</span>, from field
                </h2>
                <h2 style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 400, color: '#fff', marginTop: '-10px' }}>
                    ready machinery to intelligent systems.
                </h2>
            </div>

            {/* Navigation Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '20px' : '60px', marginBottom: '40px', position: 'relative', zIndex: 2 }}>
                {PRODUCTS.map((product) => (
                    <button
                        key={product.id}
                        onClick={() => setActiveTab(product.id)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: activeTab === product.id ? '#fff' : 'rgba(255,255,255,0.5)',
                            fontSize: isMobile ? '16px' : '18px',
                            cursor: 'pointer',
                            position: 'relative',
                            paddingBottom: '10px',
                            transition: 'color 0.3s ease'
                        }}
                    >
                        {product.category}
                        {activeTab === product.id && (
                            <span style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '4px', height: '4px', backgroundColor: '#fff', borderRadius: '50%' }} />
                        )}
                    </button>
                ))}
            </div>

            {/* Product Card */}
            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '30px',
                background: 'rgba(255,255,255,0.02)', // Very subtle glass effect
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                overflow: 'hidden',
                minHeight: '400px',
                position: 'relative',
                zIndex: 10
            }}>
                
                {/* Image Side */}
                <div style={{ 
                    flex: '1', 
                    position: 'relative', 
                    minHeight: isMobile ? '250px' : 'auto', 
                    background: '#050608',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    <img 
                        key={activeProduct.image} // Force re-render for animation
                        src={activeProduct.image} 
                        alt={activeProduct.title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0,
                            animation: 'fadeIn 0.8s forwards',
                            ...getImageStyle()
                        }} 
                    />
                </div>

                {/* Content Side */}
                <div style={{ flex: '1', padding: isMobile ? '30px 24px' : '60px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 600, marginBottom: '16px' }}>
                        {activeProduct.title}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '30px', fontSize: '15px' }}>
                        {activeProduct.description}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0' }}>
                        {activeProduct.features.map((feature, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', color: '#fff', marginBottom: '10px', fontSize: '14px' }}>
                                <span style={{ width: '4px', height: '4px', background: '#fff', borderRadius: '50%', marginRight: '12px' }} />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            border: '1px solid rgba(14, 108, 133, 0.5)',
                            background: 'transparent',
                            color: '#0E6C85',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#0E6C85'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0E6C85'; }}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Animation Style */}
            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(1.05); }
                    to { opacity: 1; transform: scale(1); }
                }
                `}
            </style>
        </section>
    );
}