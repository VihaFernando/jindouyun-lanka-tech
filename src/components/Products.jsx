import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, X, CheckCircle2 } from 'lucide-react';

// --- DATA STRUCTURE ---
const CATEGORIES = [
    {
        id: 'machineries',
        label: 'Machineries',
        products: [
            {
                title: "Push Combine Harvester 4LZ-0.6",
                image: 'https://images.unsplash.com/photo-1558981403-c1a7da0104f9?q=80&w=1000&auto=format&fit=crop',
                description: "Compact push combine suitable for small farms with diesel/gasoline options and manual discharge.",
                features: ["Rated Power: 19.9 kW", "Cutting Width: 1000 mm", "Operating Speed: 0.4–0.78 km/h"],
                fullSpecs: `I. Product Parameters
1. Machine Type / Model: 4LZ-0.6
2. Engine Type: Diesel / Gasoline variants
3. Rated Power: 19.9 kW (main), 9.2 kW (diesel variant)
4. Rated Speed: 3600 r/min
5. Cooling Method: Air-cooled
6. Fuel Tank Capacity: 4.0 L
7. Main Fuel Consumption: ≤4.6 L/h (≤26 kg/hm²)
8. Number of Gears: 3 Forward + 1 Reverse
9. Cutting Width: 1000 mm
10. Cutter Type: Reciprocating cutter
11. Starting Mode: Hand pull / Electric start
12. Operating Speed: 0.4–0.78 km/h (0.47–0.71 m/s)
13. Operation Efficiency: 0.04–0.08 hm²/h (0.25 Acre/h)
14. Track Type: Pitch 70–72 mm, Width 250–255 mm
15. Walking System: Full hydraulic
16. Harvest Pattern: Full feeding
17. Grain Discharge Method: Manual jointing
18. Lifting Mode: Manual hydraulic
19. Machine Weight: 400 kg
20. Overall Dimensions: 2720 × 1200 × 1250 mm
21. Transport Dimensions: 2800 × 1300 × 1300 mm
22. Packing Size: 190 × 1200 × 1250 mm / 1100 × 700 × 500 mm`
            },
            {
                title: "4-Row Rice Transplanter",
                image: 'https://images.unsplash.com/photo-1532413998944-8f9b2f3d3aef?q=80&w=1000&auto=format&fit=crop',
                description: "Four-row gasoline transplanter with adjustable spacing and high planting efficiency.",
                features: ["Engine: 3.3 kW", "Rows: 4", "Working Efficiency: 3.2 m/h"],
                fullSpecs: `I. Product Parameters
1. Number of Rows: 4
2. Engine Type: Gasoline
3. Engine Power: 3.3 kW (4.5 HP) @ 3600 rpm
4. Fuel Type: Unleaded gasoline
5. Starting Method: Pull-type start
6. Machine Weight: 162 kg
7. Machine Size: 2140 × 1630 × 910 mm
8. Gears: Forward 2 (Planting 1 / Walking 1), Reverse 1
9. Working Speed: 0.34–0.77 m/s
10. Planting Method: Crank lever type
11. Row Spacing: 30 cm
12. Hill Spacing: 12 / 14 / 16 / 18 / 21 cm
13. Plants per 3.3 m: 90 / 80 / 70 / 60 / 50
14. Planting Depth: 1.5–3.75 cm (5 levels)
15. Seedling Height Range: 10–25 cm
16. Working Efficiency: 3.2 m/h (0.5–0.8 Acre/h)
17. Fuel Consumption: ≤10 kg/hm²`
            },
            {
                title: "Backpack-Type Grass Cutter and Weeder",
                image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
                description: "Lightweight backpack cutter with multiple working head options and comfortable harness.",
                features: ["Engine: 140F 39cc", "Net Weight: ~16 kg", "Rated Power: 1.0 kW"],
                fullSpecs: `I. Product Parameters
1. Engine Model: 140F
2. Engine Type: Single-cylinder, air-cooled, 4-stroke gasoline
3. Displacement: 39 cc
4. Rated Power: 1.0 kW
5. Ignition: Electronic ignition
6. Starting Method: Hand pull recoil
7. Fuel Tank Capacity: ~0.8 L
8. Engine Oil Capacity: ~0.1 L
9. Net Weight: ~16 kg
10. Transmission: Soft shaft
11. Design: Backpack with widened back support
12. Working Head Options: Alloy saw blade, White steel single blade, Anti-entanglement weeding head`
            },
            {
                title: "Belt-Driven 4WD Front-Rotary Micro Tiller (Diesel)",
                image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
                description: "Diesel-powered front-rotary micro tiller with strong digging and fertilizing capabilities.",
                features: ["Rated Power: 4.0 kW", "Rotary Width: 800 mm", "Operation Efficiency: 0.31 Acre/h"],
                fullSpecs: `I. Product Parameters
1. Engine Type: Diesel
2. Rated Power: 4.0 kW
3. Overall Dimensions: 1680 × 670 × 880 mm
4. Rotary Tillage Width: 800 mm
5. Ditching Width: 250 mm
6. Ditching Depth: 250 mm
7. Fertilizing Depth: ≥100 mm
8. Gears: Tool gears (ditching / rotary / neutral), Walking gears (fast / slow / neutral / reverse)
9. Operation Efficiency: 0.31 Acre/h
10. Fuel Consumption: ≤25 kg/hm²`
            },
            {
                title: "Belt-Driven Rear-Rotary Micro Tiller (Diesel)",
                image: 'https://images.unsplash.com/photo-1519331379821-5fbf30a6f597?q=80&w=1000&auto=format&fit=crop',
                description: "Compact rear-rotary tiller with belt drive for efficient soil preparation.",
                features: ["Rated Power: 4.0 kW", "Rotary Width: 800 mm", "Transmission: Belt drive"],
                fullSpecs: `I. Product Parameters
1. Engine Type: Diesel
2. Rated Power: 4.0 kW
3. Overall Dimensions: 1480 × 700 × 850 mm
4. Rotary Tillage Width: 800 mm
5. Ditching Width: 250 mm
6. Ditching Depth: 250 mm
7. Fertilizing Depth: ≥100 mm
8. Transmission: Belt drive
9. Operation Efficiency: 0.31 Acre/h
10. Fuel Consumption: ≤25 kg/hm²`
            },
            {
                title: "4WD Front-Rotary Micro Tiller (Gasoline)",
                image: 'https://images.unsplash.com/photo-1560184897-6df1b0ef9f7a?q=80&w=1000&auto=format&fit=crop',
                description: "Gasoline 4-wheel drive micro tiller with patent protection and robust performance.",
                features: ["Rated Power: 4.0 kW", "Rotary Width: 800 mm", "Patent: ZL201420279132.2"],
                fullSpecs: `I. Product Parameters
1. Engine Type: Gasoline
2. Rated Power: 4.0 kW
3. Overall Dimensions: 1450 × 950 × 800 mm
4. Rotary Tillage Width: 800 mm
5. Ditching Width: 250 mm
6. Fertilizing Depth: ≥100 mm
7. Gears: Fast / Slow / Neutral
8. Patent Number: ZL201420279132.2
9. Operation Efficiency: 0.3 Acre/h
10. Fuel Consumption: ≤25 kg/hm²`
            },
            {
                title: "Integrated-Case All-Gear Garden Tiller (Diesel 186)",
                image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1000&auto=format&fit=crop',
                description: "High-power diesel garden tiller with multiple cutter and travel gear ranges.",
                features: ["Rated Power: 6.3 kW", "Rotary Width: 130–160 mm", "Ditching Depth: 250–400 mm"],
                fullSpecs: `I. Product Parameters
1. Engine Type: Diesel
2. Rated Power: 6.3 kW
3. Overall Dimensions: 1700 × 740 × 850 mm
4. Rotary Tillage Width: 130–160 mm
5. Ditching Depth: 250–400 mm
6. Gears: Traveling (forward fast / forward slow / neutral / reverse), Cutter shaft (forward / reverse, fast / slow)
7. Operation Efficiency: 0.31 Acre/h
8. Fuel Consumption: ≤28 kg/hm²`
            },
            {
                title: "Direct-Drive Rear-Rotary Micro Tiller (Diesel)",
                image: 'https://images.unsplash.com/photo-1517976487492-7d8bcd58e0ed?q=80&w=1000&auto=format&fit=crop',
                description: "Direct-drive rear rotary tiller offering differential steering and durable drive train.",
                features: ["Rated Power: 4.0 kW", "Rotary Width: 700 mm", "Transmission: Direct drive"],
                fullSpecs: `I. Product Parameters
1. Engine Type: Diesel
2. Rated Power: 4.0 kW
3. Overall Dimensions: 1480 × 800 × 850 mm
4. Rotary Tillage Width: 700 mm
5. Ditching Width: 250 mm
6. Ditching Depth: 250 mm
7. Transmission: Direct drive with differential steering
8. Operation Efficiency: 0.31 Acre/h
9. Fuel Consumption: ≤25 kg/hm²`
            },
            {
                title: "Belt-Driven Garden Management Machine (Diesel 186)",
                image: 'https://images.unsplash.com/photo-1470115636492-6d2b56f91469?q=80&w=1000&auto=format&fit=crop',
                description: "Versatile garden management unit with multiple tool and walking gear options.",
                features: ["Rated Power: 6.3 kW", "Ditching Width: 250–400 mm", "Operation Efficiency: 0.31 Acre/h"],
                fullSpecs: `I. Product Parameters
1. Engine Type: Diesel
2. Rated Power: 6.3 kW
3. Overall Dimensions: 1800 × 740 × 1100 mm
4. Ditching Width: 250–400 mm
5. Ditching Depth: 250–300 mm
6. Gears: Walking box (high / low / neutral) ; Tool (high / low / neutral)
7. Operation Efficiency: 0.31 Acre/h
8. Fuel Consumption: ≤28 kg/hm²`
            },
            {
                title: "Grain Bagging Machine (Model 200)",
                image: 'https://images.unsplash.com/photo-1528803546061-8b0b5f1a2f9a?q=80&w=1000&auto=format&fit=crop',
                description: "Self-propelled grain bagging machine driven by a gasoline engine for fast bagging operations.",
                features: ["Engine: 170F gasoline", "Working Efficiency: 6000–8000 kg/h", "Collection Width: 100 cm"],
                fullSpecs: `I. Product Parameters
1. Model: 200
2. Engine: 170F gasoline engine
3. Rated Power: 4.0 kW
4. Working Efficiency: 6000–8000 kg/h
5. Minimum Fuel Consumption Rate: 394 g/kW·h
6. Collection Width: 100 cm
7. Transmission: Centrifugal clutch + worm gearbox + angular gearbox
8. Walking Mode: Self-propelled
9. Auxiliary Function: Folding (working / handheld / folded)
10. Overall Dimensions: 140 × 122 × 125 cm
11. Total Weight: 95 kg`
            },
            {
                title: "173 Diesel Air-Cooled Chain-Driven Mini Tiller",
                image: 'https://images.unsplash.com/photo-1558980394-0c7ad3f7b9b5?q=80&w=1000&auto=format&fit=crop',
                description: "Mini tiller optimized for small plots, reliable diesel performance and compact footprint.",
                features: ["Rated Power: 4.0 kW", "Fuel Tank Capacity: 2.5 L", "Working Efficiency: 2–3 mu/h"],
                fullSpecs: `I. Product Parameters
1. Engine Type: Diesel, air-cooled
2. Rated Power: 4.0 kW (6 HP)
3. Fuel Tank Capacity: 2.5 L
4. Fuel Consumption: 0.4–0.6 L/h
5. Working Efficiency: 2–3 mu/h
6. Starting Method: Recoil start
7. Weight: 78 kg
8. Gears: 1 / 0 / 2 / Reverse`
            },
            {
                title: "Earth Auger (Gasoline)",
                image: 'https://images.unsplash.com/photo-1600180758891-d6d6d2f2a1b8?q=80&w=1000&auto=format&fit=crop',
                description: "High-power gasoline earth auger for fast drilling with customizable bit lengths.",
                features: ["Engine: 1E48F, 63 cc", "Power: 2.45 kW", "Drill Bit Length: 80 cm"],
                fullSpecs: `I. Product Parameters
1. Engine Model: 1E48F
2. Displacement: 63 cc
3. Power Output: 2.45 kW @ 8500 rpm
4. Transmission: Gearbox
5. Fuel Tank Capacity: 1200 ml
6. Fuel Mix Ratio: Gasoline : 2-stroke oil = 25 : 1
7. Drill Bit Length: 80 cm (customizable)`
            },
            {
                title: "Earth Auger (Diesel)",
                image: 'https://images.unsplash.com/photo-1600180758891-d6d6d2f2a1b8?q=80&w=1000&auto=format&fit=crop',
                description: "Diesel earth auger for robust drilling performance in heavy soils.",
                features: ["Engine: Diesel 173", "Power: 6 HP (≈4.0 kW)", "Max Drilling Depth: 80 cm"],
                fullSpecs: `I. Product Parameters
1. Engine Model: Diesel 173, air-cooled
2. Power: 6 HP (≈4.0 kW)
3. Maximum Drilling Depth: 80 cm
4. Drilling Width: 25–40 cm (Max 50 cm)`
            },
            {
                title: "Ridger 3DL-80",
                image: 'https://images.unsplash.com/photo-1526401281623-3f2f8bcd8d0b?q=80&w=1000&auto=format&fit=crop',
                description: "Heavy-duty ridger suitable for large fields with adjustable widths and PTO drive.",
                features: ["Model: 3DL-80", "Ridge Height: 80 cm", "Matching Power: 40–60 kW"],
                fullSpecs: `I. Product Parameters
1. Model: 3DL-80
2. Ridge Height: 80 cm
3. Top Width: 30–35 cm (adjustable)
4. Bottom Width: 40–75 cm (adjustable)
5. Ridge Slope: 30–35 cm
6. Shaping Method: Blade-type
7. Surface Shape: Edge-shaped
8. Driving Wheel Speed: 540 / 720 r/min
9. Transmission Mode: PTO transmission
10. Overall Mass: 500 kg
11. Overall Dimensions: 1400 × 2300 × 1100 mm
12. Matching Power Requirement: 40–60 kW
13. Working Efficiency: 1500–2500 m/h
14. Connection Type: Three-point hitch`
            }
        ]
    },
    {
        id: 'drones',
        label: 'Drones',
        products: [
            {
                title: "GD-50 UAV System",
                image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=1000&auto=format&fit=crop',
                description: "A heavy-lift agricultural drone designed for precision operations, featuring a 36.7kg empty weight and massive payload capacity.",
                features: ["Max Takeoff: 101.4kg", "Endurance: 20min", "Speed: 70KM/H"],
                fullSpecs: `
I. Product Parameters
1. Empty Weight (excluding battery): 36.7kg
2. Maximum Takeoff Weight: 101.4kg
3. Symmetrical Motor Wheelbase: 2299mm
4. Unfolded Dimensions: 3045*3078*830mm
5. Folded Dimensions: 1113*781*841mm
6. Endurance: 20min (18S 30000mAh battery)
7. Operating Ambient Temperature: 0-40℃
8. Maximum Ascent/Descent Speed: 2m/s
9. Horizontal Flight Speed: Positioning: 5m/s; Sport: 8m/s; Attitude: 20m/s
10. Flight Attitude Stability: Pitch/Roll/Yaw ≤ ±3°
11. Max Tilt Angle: 30° (Pos), 45° (Sport), 35° (Atti)
12. Max Rotational Angular Velocity: 120°/s
13. Max Withstand Wind Speed: Level 7
14. Max Flight Speed: 70KM/H
15. Fuselage Material: Carbon fiber (light weight, high strength)
16. Control Method: APP Ground Station/Remote Controller
17. Operation Time: Transport to Flight ≤ 2 mins (2 personnel)

II. Main Unit and Related Accessories
• GD-T50 Flight Platform
• Power System: GD-M30
• Flight Control System: GD-V7
• Terrain-Following Radar: LD-R & Obstacle Avoidance: LD-Y
• RTK: 985T
• Remote Controller: GDU7 (a8min)
• Battery: 18S/35000mAh
• Charger: C-2500 Intelligent Dual Charger
• 50kg Dropper`
            },
            {
                title: "GD-30 UAV System",
                image: 'https://images.unsplash.com/photo-1508614589041-895b8f9e870e?q=80&w=1000&auto=format&fit=crop', // Placeholder image
                description: "Efficient spraying drone with a 30kg payload and intelligent flight control, optimized for 60 mu per hour efficiency.",
                features: ["Payload: 30kg", "Flow Rate: 12L/min", "Efficiency: 60 mu/h"],
                fullSpecs: `
I. Product Parameters
1. Product Wheelbase: 2000mm
2. Unfolded Dimensions: 1710*1453*700mm
3. Folded Dimensions: 603*1120*700mm
4. Payload: 30kg
5. Overall Weight: 30kg | Max Weight: 68kg
6. Spraying Flow Rate: 12L/min
7. Effective Spraying Width: 6-10m
8. Flight Speed: 3m/s
9. No-Load Flight Time: 30min | Full-Load: 20min
10. Operating Voltage: 58.8v (14S)
11. Battery Capacity: 30000mAh
12. Operational Efficiency: 60 mu per hour
13. Horizontal Flight Speed: Positioning: 5m/s; Sport: 8m/s; Attitude: 20m/s
14. Max Withstand Wind Speed: Level 7
15. Fuselage Material: Carbon fiber material

II. Main Unit and Related Accessories
• GD-Z30 Flight Platform
• Power System: GD-M20
• Flight Control System: GD-V7
• Radars: LD-R (Terrain), LD-Y (Obstacle)
• RTK: 985T
• Spraying System
• Remote Controller: H12 (with camera + screen)
• Battery: 14S/28000mAh
• Charger: Intelligent Dual Charger
• Generator`
            },
            {
                title: "GD-15 UAV System",
                image: 'https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=1000&auto=format&fit=crop', // Placeholder image
                description: "Compact and agile 18kg drone perfect for targeted spraying with pressure dual nozzles and high stability.",
                features: ["Weight: 18kg", "Tank: 20L", "Dual Nozzle System"],
                fullSpecs: `
I. Product Parameters
1. Overall Weight: 18kg (excluding battery)
2. Maximum Takeoff Weight: 44kg
3. Product Wheelbase: 1480mm
4. Unfolded Dimensions: 1225*1055*585mm
5. Folded Dimensions: 875*525*585mm
6. Hovering Time: 20min (No-load), 10min (Full-load)
7. Chemical Tank Capacity: 20L
8. Water Pump: 30W, Max Flow 8L/min
9. Nozzle: 500W, Atomization 50-500μm
10. Effective Spraying Width: 4-8m
11. Horizontal Flight Speed: Positioning: 6m/s; Sport: 8m/s
12. Max Flight Speed: 70KM/H
13. Control: APP Ground Station/Remote Controller

II. Main Unit and Related Accessories
• GD-Z15 Flight Platform
• Power System: GD-M15
• Flight Control System: GD-V5
• Radars: LD-R (Terrain), LD-Y (Obstacle)
• RTK: 985T
• Nozzle: Pressure Dual Nozzle
• Remote Controller: H12 (with camera + screen)
• Battery: 14S/20000mAh
• Charger & Generator`
            }
        ]
    }
];

export default function ProductsSection() {
    const [activeCategory, setActiveCategory] = useState('drones');
    const [productIndex, setProductIndex] = useState(0);
    const [width, setWidth] = useState(1200);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSpecsModal = () => {
        setIsModalOpen(true);
        // notify navbar to hide
        if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('spec-open', { detail: true }));
    };

    const closeSpecsModal = () => {
        setIsModalOpen(false);
        if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('spec-open', { detail: false }));
    };

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Reset index when category changes
    useEffect(() => {
        setProductIndex(0);
    }, [activeCategory]);

    // Helpers
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isVerySmall = width < 420;

    // Get current data
    const currentCategoryData = CATEGORIES.find(c => c.id === activeCategory);
    const activeProduct = currentCategoryData.products[productIndex];
    const productCount = currentCategoryData.products.length;

    // Handlers
    const handleNextProduct = () => {
        setProductIndex((prev) => (prev + 1) % productCount);
    };

    const handlePrevProduct = () => {
        setProductIndex((prev) => (prev - 1 + productCount) % productCount);
    };

    // Format specs text into headings, lists and paragraphs
    const renderSpecs = (text) => {
        if (!text) return null;
        const lines = text.split(/\r?\n/);
        const elements = [];
        let i = 0;
        while (i < lines.length) {
            const raw = lines[i];
            const line = raw.trim();
            if (!line) {
                elements.push(<div key={'gap-' + i} style={{ height: '10px' }} />);
                i++;
                continue;
            }

            const romanMatch = line.match(/^([IVXLCDM]+)\.\s*(.+)$/i);
            const numMatch = line.match(/^(\d+)\.\s*(.+)$/);

            if (romanMatch) {
                elements.push(
                    <h4 key={'h-' + i} style={{ color: '#fff', fontSize: isMobile ? '18px' : '20px', margin: '14px 0 8px', fontWeight: 700 }}>
                        {romanMatch[1]}. {romanMatch[2]}
                    </h4>
                );
                i++;
                continue;
            } else if (numMatch) {
                const items = [];
                while (i < lines.length) {
                    const m = lines[i].trim().match(/^(\d+)\.\s*(.+)$/);
                    if (!m) break;
                    items.push(m[2]);
                    i++;
                }
                elements.push(
                    <ol key={'ol-' + i} style={{ color: '#e5e5e7', margin: '6px 0 14px 20px', paddingLeft: '18px' }}>
                        {items.map((it, idx) => <li key={idx} style={{ marginBottom: '6px' }}>{it}</li>)}
                    </ol>
                );
                continue;
            } else if (line.startsWith('•') || line.match(/^•\s*(.+)$/)) {
                const items = [];
                while (i < lines.length) {
                    const m = lines[i].trim().match(/^•\s*(.+)$/);
                    if (!m) break;
                    items.push(m[1]);
                    i++;
                }
                elements.push(
                    <ul key={'ul-' + i} style={{ color: '#e5e5e7', margin: '6px 0 14px 20px', paddingLeft: '18px' }}>
                        {items.map((it, idx) => <li key={idx} style={{ marginBottom: '6px' }}>{it}</li>)}
                    </ul>
                );
                continue;
            } else {
                let para = line;
                i++;
                while (i < lines.length && lines[i].trim() && !lines[i].trim().match(/^([IVXLCDM]+)\.\s*(.+)$/i) && !lines[i].trim().match(/^(\d+)\.\s*(.+)$/) && !lines[i].trim().match(/^•\s*(.+)$/)) {
                    para += ' ' + lines[i].trim();
                    i++;
                }
                elements.push(<p key={'p-' + i} style={{ color: '#e5e5e7', margin: 0, marginBottom: '12px' }}>{para}</p>);
                continue;
            }
        }
        return elements;
    };

    return (
        <section id="products" style={{
            backgroundColor: '#0B0D10',
            padding: isMobile ? '60px 20px 80px 20px' : '100px 40px 140px 40px',
            color: '#fff',
            fontFamily: '"Poppins", sans-serif',
            position: 'relative',
            zIndex: 20,
            overflow: 'hidden',
            minHeight: '800px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            {/* Background Glow */}
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
                    Products designed for <span style={{ fontFamily: '"Caveat", cursive', color: '#0E6C85', fontSize: isMobile ? (isVerySmall ? '28px' : '32px') : '48px', margin: '0 5px', display: 'inline-block', whiteSpace: 'nowrap' }}>smarter agriculture,</span> from field
                </h2>
                <h2 style={{ fontSize: isMobile ? '22px' : '32px', fontWeight: 400, color: '#fff', marginTop: isMobile ? '5px' : '-5px', lineHeight: 1.3 }}>
                    ready machinery to intelligent systems.
                </h2>
            </div>

            {/* Category Tabs */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: isMobile ? '25px' : '60px',
                marginBottom: isMobile ? '30px' : '50px',
                position: 'relative',
                zIndex: 2
            }}>
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: activeCategory === cat.id ? '#fff' : 'rgba(255,255,255,0.4)',
                            fontSize: isMobile ? '14px' : '16px',
                            cursor: 'pointer',
                            position: 'relative',
                            paddingBottom: '8px',
                            transition: 'color 0.3s ease',
                            fontFamily: '"Poppins", sans-serif',
                            letterSpacing: '0.5px'
                        }}
                    >
                        {cat.label}
                        <span style={{
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: activeCategory === cat.id ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                            width: '20px',
                            height: '2px',
                            backgroundColor: '#fff',
                            transition: 'transform 0.3s ease'
                        }} />
                    </button>
                ))}
            </div>

            {/* Main Product Card */}
            <div style={{
                maxWidth: '1100px',
                width: '100%',
                margin: '0 auto',
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

                {/* Left Side: Image */}
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
                        backgroundColor: '#000'
                    }}>
                        <img
                            key={activeProduct.title}
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                        <h3 key={`title-${productIndex}`} style={{
                            fontSize: isMobile ? '22px' : '32px',
                            fontWeight: 500,
                            marginBottom: isMobile ? '12px' : '20px',
                            color: '#fff',
                            opacity: 0,
                            animation: 'fadeInUp 0.5s ease-out 0.1s forwards'
                        }}>
                            {activeProduct.title}
                        </h3>

                        {productCount > 1 && (
                            <span style={{
                                fontSize: '12px',
                                color: 'rgba(255,255,255,0.4)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                padding: '4px 8px',
                                borderRadius: '12px',
                                whiteSpace: 'nowrap',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {productIndex + 1}  /  {productCount}
                            </span>
                        )}
                    </div>

                    <p key={`desc-${productIndex}`} style={{
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: '1.7',
                        marginBottom: isMobile ? '20px' : '30px',
                        fontSize: isMobile ? '13px' : '15px',
                        maxWidth: '450px',
                        opacity: 0,
                        animation: 'fadeInUp 0.5s ease-out 0.2s forwards'
                    }}>
                        {activeProduct.description}
                    </p>

                    <ul key={`list-${productIndex}`} style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
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
                                <CheckCircle2 size={16} color="#0E6C85" style={{ marginRight: '10px' }} />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* Action Area */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 'auto',
                        opacity: 0,
                        animation: 'fadeInUp 0.5s ease-out 0.6s forwards'
                    }}>
                        <button
                            onClick={openSpecsModal}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(14, 108, 133, 0.1)',
                                border: '1px solid rgba(14, 108, 133, 0.3)',
                                color: '#fff',
                                padding: '10px 20px',
                                borderRadius: '100px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(14, 108, 133, 0.2)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(14, 108, 133, 0.1)'; }}
                        >
                            <Eye size={16} />
                            <span>View Specs</span>
                        </button>

                        {productCount > 1 && (
                            <div style={{ display: 'flex', gap: isMobile ? '8px' : '12px', alignItems: 'center' }}>
                                <button
                                    onClick={handlePrevProduct}
                                    aria-label="Previous product"
                                    style={{
                                        width: isMobile ? '40px' : '48px',
                                        height: isMobile ? '40px' : '48px',
                                        borderRadius: '50%',
                                        border: '1px solid #0E6C85',
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
                                    <ChevronLeft size={isMobile ? 20 : 24} />
                                </button>

                                <button
                                    onClick={handleNextProduct}
                                    aria-label="Next product"
                                    style={{
                                        width: isMobile ? '40px' : '48px',
                                        height: isMobile ? '40px' : '48px',
                                        borderRadius: '50%',
                                        border: '1px solid #0E6C85',
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
                                    <ChevronRight size={isMobile ? 20 : 24} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* --- APPLE-INSPIRED SPECS MODAL --- */}
            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 100,
                    // Overlay: Heavy blur with dark tint
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isMobile ? '0' : '20px', // Full width on mobile
                    boxSizing: 'border-box'
                }} onClick={closeSpecsModal}>

                    <div style={{
                        width: '100%',
                        maxWidth: '700px',
                        // Responsive height: Full screen on mobile, limited on desktop
                        height: isMobile ? '100%' : '80vh',
                        maxHeight: '800px',
                        // Apple Dark Mode Grey
                        background: '#1c1c1e',
                        border: isMobile ? 'none' : '1px solid rgba(255,255,255,0.1)',
                        borderRadius: isMobile ? '0' : '24px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        boxShadow: '0 40px 80px rgba(0, 0, 0, 0.6)',
                        animation: isMobile ? 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }} onClick={(e) => e.stopPropagation()}>

                        {/* Sticky Header with Frost Effect */}
                        <div style={{
                            padding: '16px 24px',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            // Glass Header
                            background: 'rgba(28, 28, 30, 0.8)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            zIndex: 10
                        }}>
                            <h3 style={{
                                margin: 0,
                                fontSize: '17px',
                                fontWeight: 600,
                                color: '#f5f5f7',
                                letterSpacing: '-0.01em'
                            }}>
                                Technical Specifications
                            </h3>
                            <button
                                onClick={closeSpecsModal}
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    color: '#86868b',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.color = '#86868b';
                                }}
                            >
                                <X size={16} strokeWidth={2.5} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div style={{
                            padding: isMobile ? '80px 24px 40px 24px' : '90px 40px 40px 40px',
                            overflowY: 'auto',
                            height: '100%',
                            boxSizing: 'border-box'
                        }}>
                            <h2 style={{
                                fontSize: '28px',
                                fontWeight: 700,
                                color: '#fff',
                                marginBottom: '8px',
                                marginTop: 0
                            }}>
                                {activeProduct.title}
                            </h2>
                            <p style={{
                                color: '#86868b',
                                fontSize: '15px',
                                marginTop: 0,
                                marginBottom: '32px'
                            }}>
                                Detailed technical breakdown and accessory list.
                            </p>

                            {/* Formatted Text Content */}
                            <div style={{
                                // Rendered and formatted specs
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                color: '#e5e5e7',
                                lineHeight: '1.8',
                                fontSize: '15px',
                                letterSpacing: '0.01em'
                            }}>
                                {renderSpecs(activeProduct.fullSpecs)}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Global Styles for Animations & Scrollbars */}
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
                @keyframes modalPop {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes slideUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }
                
                /* Refined Scrollbar for the Modal */
                ::-webkit-scrollbar { width: 6px; }
                ::-webkit-scrollbar-track { background: transparent; }
                ::-webkit-scrollbar-thumb { 
                    background: rgba(255,255,255,0.15); 
                    border-radius: 10px; 
                }
                ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.25); }
                `}
            </style>
        </section>
    );
}