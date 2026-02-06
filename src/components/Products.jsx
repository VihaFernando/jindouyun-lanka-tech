import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, X, CheckCircle2 } from 'lucide-react';
import useProductsScrollAnim from '../hooks/useProductsScrollAnim.jsx';

// --- DATA STRUCTURE ---
const CATEGORIES = [
    {
        id: 'machineries',
        label: 'Machineries',
        products: [
            {
                "title": "Push Combine Harvester 4LZ-0.6 (Diesel)",
                "image": "https://res.cloudinary.com/divwbpmk5/image/upload/v1770326417/1_g8gqil.avif",
                "description": "Compact push-type combine harvester designed for small and medium farms, offering efficient full-feeding harvesting with low fuel consumption and easy manual operation.",
                "features": [
                    "Rated Power: 9.2 kW Diesel Engine",
                    "Cutting Width: 1000 mm",
                    "Operation Efficiency: Up to 0.25 Acre/h"
                ],
                "fullSpecs": "I. Product Parameters\n1. Machine Type / Model: Push Combine Harvester (4LZ-0.6)\n2. Supporting Power / Engine Model: 195F\n3. Engine Type: Diesel\n4. Rated Power: 9.2 kW\n5. Rated Speed: 3600 r/min\n6. Cooling Method: Air cooling\n7. Fuel System: Diesel oil\n8. Main Fuel Consumption: ≤26 kg/hm²\n9. Number of Gears: 3 Forward + 1 Reverse\n10. Cutting Table Width: 1000 mm\n11. Cutter Type: Reciprocating cycle type\n12. Starting Mode: Hand start / Electric start\n13. Operating Speed: 0.47–0.71 m/s\n14. Operation Efficiency: 0.04–0.08 hm²/h (≈0.25 Acre/h)\n15. Track Specifications: Pitch 72 mm × 31/35 knots, Width 255 mm\n16. Harvest Pattern: Full feeding\n17. Lifting Mode: Hand hydraulic\n18. Grain Discharge Method: Hand jointing\n19. Machine Weight: 400 kg\n20. Overall Dimensions (L×W×H): 2720 × 1200 × 1250 mm\n21. Transport / Packing Dimensions: 2800 × 1300 × 1300 mm\n22. Disassembling Size: 1900 × 1200 × 1250 mm / 1100 × 700 × 500 mm"
            },
            {
                "title": "4-Row Rice Transplanter 2ZS-4HT",
                "image": "https://res.cloudinary.com/divwbpmk5/image/upload/v1770326416/2_vd009i.avif",
                "description": "Efficient 4-row gasoline-powered rice transplanter designed for precise seedling placement, adjustable spacing, and high productivity in paddy fields.",
                "features": [
                    "4-Row Transplanting System",
                    "Gasoline Engine: 3.3 kW",
                    "Operational Efficiency: 0.5–0.8 Acre/h"
                ],
                "fullSpecs": "I. Product Parameters\n1. Machine Type / Model: 4-Row Rice Transplanter (2ZS-4HT)\n2. Product Name: Changfa Transplanter\n3. Overall Dimensions (L×W×H): 2140 × 1630 × 985 mm\n4. Machine Weight: 172 kg\n\nII. Engine System\n5. Engine Model: MZ175B-42C\n6. Engine Type: Gasoline\n7. Standard Power: 2.6 kW @ 3000 r/min (Max 3.3 kW)\n8. Starting Mode: Hand-pulled disc start\n9. Fuel Type: 92# Unleaded petrol\n10. Fuel Tank Capacity: 4 L\n11. Main Fuel Consumption: ≤10 kg/hm²\n\nIII. Driving & Walking System\n12. Driving Mode: Two-wheel drive\n13. Drive Wheel Type: Rubber wheel claw type\n14. Wheel Outer Diameter: 660 mm\n15. Transmission: Gear coupling transmission\n16. Variable Speed Series: Forward 2 levels, Backward 1 level\n\nIV. Transplanting System\n17. Number of Rows: 4\n18. Row Spacing: 300 mm\n19. Transverse Seedling Taking Times: 14 / 16 / 18 / 20 / 26\n20. Longitudinal Seedling Taking Size: 8–20 mm\n21. Transplant Depth: 10–35 mm (5 gears)\n22. Hole Distance: 100, 120, 140, 160, 180, 210 mm (Optional 240 / 280)\n\nV. Seedling Requirements\n23. Seedling Type: Bowl seedlings / Blanket seedlings\n24. Suitable Leaf Age: 2.0–4.5 leaves\n25. Seedling Height: 100–250 mm\n\nVI. Performance\n26. Hourly Productivity: 0.1–0.2 hm²/h\n27. Operational Efficiency: 0.5–0.8 Acre/h"
            },
            {
                "title": "Gasoline Grass Cutter & Weeder CF-140",
                "image": "https://res.cloudinary.com/divwbpmk5/image/upload/v1770326416/3_hq0mqj.avif",
                "description": "Lightweight 4-stroke gasoline grass cutter and weeder designed for flexible operation across farms, gardens, and uneven terrain with high cutting efficiency.",
                "features": [
                    "4-Stroke Gasoline Engine",
                    "Maximum Power: 1.0 kW @ 6500 rpm",
                    "Lightweight Design: 9 kg Net Weight"
                ],
                "fullSpecs": "I. Product Parameters\n1. Machine Type / Model: Grass Cutter & Weeder (CF-140)\n2. Engine Model: 140F\n3. Engine Type: 4-Stroke Gasoline\n4. Displacement: 37.7 cc\n5. Maximum Power: 1.0 kW @ 6500 r/min\n6. Idle Speed: 3200 ± 200 r/min\n7. Carburetor Type: Diaphragm type\n8. Fuel Tank Capacity: 0.65 L\n9. Shaft Length: 1500 mm\n10. Net Weight / Gross Weight: 9 kg / 10.5 kg\n11. Main Fuel Type: Gasoline\n12. Cutting System: Multi-blade compatible (grass cutting & weeding)\n13. Handle Type: Ergonomic dual-handle design\n14. Overall Dimensions (Engine): 340 × 320 × 450 mm\n15. Overall Dimensions (Shaft Assembly): 1650 × 100 × 100 mm"
            },
            {
                "title": "Belt-driven 4WD Front-rotary Micro Tiller 173 Diesel",
                "image": "https://res.cloudinary.com/divwbpmk5/image/upload/v1770326415/4_ncbpa1.avif",
                "description": "Belt-driven four-wheel drive micro tiller with a front-rotary system, designed for rotary tillage, weeding, ditching, and fertilizing in orchards, paddy fields, and large farmlands.",
                "features": [
                    "4WD Belt-driven Front Rotary System",
                    "Diesel Engine Power: 4 kW",
                    "Operational Efficiency: 0.31 Acre/h"
                ],
                "fullSpecs": "I. Product Parameters\n1. Machine Type / Model: Front-rotary Micro Tiller (173 Diesel)\n2. Drive Type: Belt-driven four-wheel drive (4WD)\n3. Engine Type: Diesel\n4. Rated Power: 4 kW\n5. Main Fuel Consumption: ≤25 kg/hm²\n6. Operational Efficiency: 0.31 Acre/h\n\nII. Working Functions\n7. Applicable Operations: Rotary tillage, weeding, ditching, fertilizing, paddy field plowing\n8. Tool Gear Modes: Ditching gear / Rotary tillage gear / Neutral gear\n9. Walking Gearbox: Fast gear / Slow gear / Neutral gear / Reverse gear\n\nIII. Working Dimensions\n10. Rotary Tillage Width: 800 mm\n11. Ditching Width: 250 mm\n12. Ditching Depth: 250 mm\n13. Fertilizing Depth: ≥100 mm\n\nIV. Structure & Size\n14. Overall Dimensions (L×W×H): 1680 × 670 × 880 mm\n15. Wheel Type: Agricultural traction wheels\n16. Application Fields: Orchards, large fields, paddy fields"
            },
            {
                "title": "Belt-driven Reverse Rotation 173 Diesel Micro Tiller",
                "image": "https://res.cloudinary.com/divwbpmk5/image/upload/v1770326414/5_jva4mh.avif",
                "description": "Belt-driven reverse-rotation micro tiller powered by a 173 diesel engine, suitable for rotary tillage, weeding, ditching, and fertilizing in orchards, large fields, and diverse soil conditions.",
                "features": [
                    "Reverse Rotation Rotary Tillage System",
                    "Diesel Engine Power: 4 kW",
                    "Operational Efficiency: 0.31 Acre/h"
                ],
                "fullSpecs": "I. Product Parameters\n1. Machine Type / Model: Reverse Rotation Micro Tiller (173 Diesel)\n2. Drive Type: Belt-driven transmission\n3. Engine Type: Diesel\n4. Rated Power: 4 kW\n5. Main Fuel Consumption: ≤25 kg/hm²\n6. Operational Efficiency: 0.31 Acre/h\n\nII. Transmission & Gear System\n7. Tool Gear Modes: Ditching / Rotary tillage / Upper gear / Neutral / Reverse\n8. Transmission Modes: Ordinary gear / High gear / Differential steering\n9. Walking Gear Options: Neutral / Slow / Reverse\n\nIII. Working Functions\n10. Applicable Operations: Rotary tillage, weeding, ditching, fertilizing\n11. Application Areas: Orchards, large fields, general farmland\n\nIV. Working Dimensions\n12. Rotary Tillage Width: 800 mm\n13. Ditching Width: 250 mm\n14. Ditching Depth: 250 mm\n15. Fertilizing Depth: ≥100 mm\n\nV. Structure & Size\n16. Overall Dimensions (L×W×H): 1480 × 700 × 850 mm\n17. Wheel Type: Agricultural wheels\n18. Operation Mode: Walking-type micro tiller"
            },
            {
                "title": "Integrated-case All-gear Garden Tiller 180 Diesel",
                "image": "https://res.cloudinary.com/divwbpmk5/image/upload/v1770326413/6_dpirja.avif",
                "description": "Integrated-case all-gear garden tiller with a powerful 180 diesel engine, designed for ditching, earthing-up, rotary tillage, pipe burying, and multi-crop field operations.",
                "features": [
                    "All-gear Integrated Transmission",
                    "Diesel Engine Power: 4.8 kW",
                    "Operational Efficiency: 0.31 Acre/h"
                ],
                "fullSpecs": "I. Product Parameters\n1. Machine Type / Model: Integrated-case All-gear Garden Tiller (180 Diesel)\n2. Drive & Transmission: All-gear system with belt drive\n3. Engine Type: Diesel\n4. Rated Power: 4.8 kW\n5. Main Fuel Consumption: ≤28 kg/hm²\n6. Operational Efficiency: 0.31 Acre/h\n\nII. Applications\n7. Applicable Crops & Uses: Chinese onion & ginger ditching and earthing-up, flue-cured tobacco earthing-up, pipe burying, film covering, strawberry ridging\n\nIII. Gear System\n8. Traveling Gears: Reverse / Neutral / Forward slow / Forward fast\n9. Cutter Shaft Gears: Forward rotation / Reverse rotation\n10. Cutter Speed Options: Fast / Slow\n\nIV. Working Dimensions\n11. Rotary Tillage Width: 130–160 mm\n12. Ditching Depth: 250–400 mm\n\nV. Structure & Size\n13. Overall Dimensions (L×W×H): 1700 × 740 × 850 mm\n14. Operation Type: Walking-type garden tiller\n15. Application Fields: Gardens, orchards, vegetable fields, diversified farmland"
            },
            {
                "title": "Belt-driven Garden Management Machine 180 Diesel",
                "image": "https://res.cloudinary.com/divwbpmk5/image/upload/v1770326409/7_uqwahm.avif",
                "description": "Belt-driven garden management machine powered by a 180 diesel engine, suitable for ridge furrowing, soil hilling, ridging, and large-scale garden and tobacco field cultivation.",
                "features": [
                    "Belt-driven Transmission System",
                    "Diesel Engine Power: 4.8 kW",
                    "Operational Efficiency: 0.31 Acre/h"
                ],
                "fullSpecs": "I. Product Parameters\n1. Machine Type / Model: Belt-driven Garden Management Machine (180 Diesel)\n2. Drive Type: Belt-driven transmission\n3. Engine Type: Diesel\n4. Rated Power: 4.8 kW\n5. Main Fuel Consumption: ≤28 kg/hm²\n6. Operational Efficiency: 0.31 Acre/h\n\nII. Applications\n7. Applicable Uses: Large ridge furrowing, flue-cured tobacco cultivation, soil hilling, ridging, garden field management\n\nIII. Gear System\n8. Walking Gearbox: High speed / Low speed / Front neutral / Rear neutral\n9. Tool Gear Options: High speed / Low speed / Neutral\n\nIV. Working Dimensions\n10. Ditching Width: 250–400 mm\n11. Ditching Depth: 250–300 mm\n\nV. Structure & Size\n12. Overall Dimensions (L×W×H): 1800 × 740 × 1100 mm\n13. Operation Type: Walking-type garden management machine\n14. Application Fields: Gardens, orchards, tobacco fields, large ridge farmland"
            },
            {
                "title": "Grain Bagging Machine Model 200 (Gasoline)",
                "image": "https://res.cloudinary.com/divwbpmk5/image/upload/v1770326412/8_psf9dq.avif",
                "description": "Self-propelled gasoline-powered grain bagging machine designed for fast and efficient grain collection, conveying, and bagging with a foldable structure for easy operation and transport.",
                "features": [
                    "High Output Capacity: 6000–8000 kg/h",
                    "Gasoline Engine Power: 4 kW (170F)",
                    "Self-propelled with Folding Structure"
                ],
                "fullSpecs": "I. Product Parameters\n1. Machine Type / Model: Grain Bagging Machine (Model 200)\n2. Auxiliary Power / Engine Model: 170F Gasoline Engine\n3. Engine Type: Gasoline\n4. Rated Power: 4 kW\n5. Minimum Fuel Consumption Rate: 394 g/kW·h\n6. Main Fuel Consumption: ≤25 kg/hm²\n7. Working Efficiency: 6000–8000 kg/h\n8. Maximum Width of Collection & Return: 1000 mm\n9. Transmission Mode: Centrifugal clutch + worm gearbox + angular transmission gearbox\n10. Walking Mode: Self-propelled\n11. Auxiliary Function: Folding type (working position / handheld position / folding position)\n12. External Dimensions (L×W×H): 140 × 122 × 125 cm\n13. Application: Grain collecting, conveying, and bagging operations"
            },
            {
                "title": "173 Diesel Air-Cooled Chain-Driven Mini Tiller",
                "image": "https://res.cloudinary.com/divwbpmk5/image/upload/v1770326412/9_blwb8f.avif",
                "description": "Compact chain-driven mini tiller powered by a 173 air-cooled diesel engine, ideal for rotary tillage, plowing, and field preparation with low fuel consumption and reliable performance.",
                "features": [
                    "Air-Cooled 173 Diesel Engine (4 kW)",
                    "Chain-Driven Transmission with Reverse Gear",
                    "Operational Efficiency: 0.31 Acre/h"
                ],
                "fullSpecs": "I. Product Parameters\n1. Machine Type / Model: Chain-Driven Mini Tiller (173 Diesel)\n2. Engine Type: Air-cooled diesel engine\n3. Rated Power: 4 kW (≈6 HP)\n4. Starting Mode: Recoil start\n5. Fuel Tank Capacity: 2.5 L\n6. Fuel Consumption: 0.4–0.6 L/hour\n7. Main Fuel Consumption: ≤25 kg/hm²\n8. Working Efficiency: 2–3 mu/hour (≈0.31 Acre/h)\n9. Transmission Type: Chain-driven\n10. Gear Configuration: 1 / 0 / 2 / Reverse\n11. Machine Weight: 78 kg\n12. Cooling Method: Air cooling\n13. Applicable Operations: Rotary tillage, plowing, soil preparation\n14. Application Fields: Dry land, vegetable fields, small farms"
            },
            {
                "title": "Earth Auger Gasoline Engine 44-5",
                "image": "https://res.cloudinary.com/divwbpmk5/image/upload/v1770326411/10_xwnfyh.avif",
                "description": "High-efficiency gasoline-powered earth auger designed for fast and precise hole drilling in agriculture, landscaping, fencing, and planting across multiple soil conditions.",
                "features": [
                    "Maximum Power: 1.5 kW @ 7500 rpm",
                    "Multi-angle Drilling Capability",
                    "Lightweight Design: 9.5 kg Net Weight"
                ],
                "fullSpecs": "I. Product Parameters\n1. Machine Type / Model: Earth Auger (44-5)\n2. Engine Type: Gasoline\n3. Engine Model: 44-5\n4. Displacement: 41.5 cc\n5. Maximum Power: 1.5 kW @ 7500 r/min\n6. Fuel Tank Capacity: 1.2 L\n7. Idle Speed: 3200 ± 200 r/min\n8. Carburetor Type: Diaphragm type\n9. Shaft Length: 800 mm\n10. Net Weight / Gross Weight: 9.5 kg / 10.4 kg\n11. Overall Dimensions (L×W×H): 565 × 340 × 386 mm\n12. Drilling Mode: Vertical & Oblique multi-angle drilling\n13. Applicable Soils: Clay, sandy soil, humus soil, light rock formations (with alloy drill bits)\n14. Typical Applications: Tree planting, fertilizing holes, fencing, landscaping, ice fishing"
            },
            {
                "title": "Earth Auger Gasoline Engine 1E48F",
                "image": "https://res.cloudinary.com/divwbpmk5/image/upload/v1770326410/11_uxdty1.avif",
                "description": "High-power gasoline earth auger engineered for fast and precise hole drilling in planting, landscaping, fencing, and agricultural applications, with strong adaptability to multiple soil conditions.",
                "features": [
                    "Maximum Power: 2.2 kW @ 7000 rpm",
                    "Multi-angle Vertical & Oblique Drilling",
                    "Lightweight Design: 8.7 kg Net Weight"
                ],
                "fullSpecs": "I. Product Parameters\n1. Machine Type / Model: Earth Auger (1E48F)\n2. Engine Type: Gasoline\n3. Engine Model: 1E48F\n4. Displacement: 63.3 cc\n5. Maximum Power: 2.2 kW @ 7000 r/min\n6. Fuel Tank Capacity: 1.4 L\n7. Idle Speed: 3200 ± 200 r/min\n8. Carburetor Type: Diaphragm type\n9. Shaft Length: 800 mm\n10. Net Weight / Gross Weight: 8.7 kg / 10 kg\n11. Overall Dimensions (L×W×H): 565 × 340 × 386 mm\n12. Drilling Mode: Vertical and oblique multi-angle drilling\n13. Applicable Soils: Clay, sandy soil, humus soil, light rock formations (with alloy drill bits)\n14. Typical Applications: Tree planting, fertilizing holes, fencing, landscaping, pile driving, ice fishing"
            },
            {
                "title": "Wheeled Earth Auger Gasoline Engine 1E48F",
                "image": "https://res.cloudinary.com/divwbpmk5/image/upload/v1770326409/12_bsiadk.avif",
                "description": "High-power gasoline earth auger with integrated wheeled frame, designed for easier transport and stable operation during hole drilling for planting, landscaping, fencing, and agricultural use.",
                "features": [
                    "Maximum Power: 2.2 kW @ 7000 rpm",
                    "Integrated Wheel Frame for Easy Mobility",
                    "Multi-angle Vertical & Oblique Drilling"
                ],
                "fullSpecs": "I. Product Parameters\n1. Machine Type / Model: Wheeled Earth Auger (1E48F)\n2. Engine Type: Gasoline\n3. Engine Model: 1E48F\n4. Displacement: 63.3 cc\n5. Maximum Power: 2.2 kW @ 7000 r/min\n6. Fuel Tank Capacity: 1.4 L\n7. Idle Speed: 3200 ± 200 r/min\n8. Carburetor Type: Diaphragm type\n9. Shaft Length: 800 mm\n10. Net Weight / Gross Weight: 8.7 kg / 10 kg\n11. Overall Dimensions (L×W×H): 565 × 340 × 386 mm\n12. Frame Type: Integrated wheeled support frame\n13. Drilling Mode: Vertical and oblique multi-angle drilling\n14. Applicable Soils: Clay, sandy soil, humus soil, light rock formations (with alloy drill bits)\n15. Typical Applications: Tree planting, fertilizing holes, fencing, landscaping, pile column drilling, ice fishing"
            },
            {
                "title": "Heavy-duty Earth Auger Gasoline Engine 1P70FC",
                "image": "https://res.cloudinary.com/divwbpmk5/image/upload/v1770326409/13_mdzct8.avif",
                "description": "Heavy-duty gasoline-powered earth auger with a reinforced standing frame, designed for deep and stable hole drilling in large-scale planting, landscaping, fencing, and construction projects.",
                "features": [
                    "High Power Output: 3.4 kW @ 3600 rpm",
                    "Extra-long Shaft Range: 800–2500 mm",
                    "Stable Floor-standing Frame Design"
                ],
                "fullSpecs": "I. Product Parameters\n1. Machine Type / Model: Heavy-duty Earth Auger (1P70FC)\n2. Engine Type: Gasoline\n3. Engine Model: 1P70FC\n4. Displacement: 196 cc\n5. Maximum Power: 3.4 kW @ 3600 r/min\n6. Fuel Tank Capacity: 1.0 L\n7. Idle Speed: 1800 ± 200 r/min\n8. Carburetor Type: Float type\n9. Shaft Length Range: 800–2500 mm\n10. Net Weight / Gross Weight: 70 kg / 72 kg\n11. Overall Dimensions (L×W×H): 1220 × 600 × 670 mm\n12. Frame Type: Heavy-duty standing frame with stabilizing feet\n13. Drilling Mode: Vertical & oblique drilling\n14. Applicable Soils: Clay, sandy soil, humus soil, light rock formations (with alloy drill bits)\n15. Typical Applications: Large tree planting, deep fertilizing holes, fencing, landscaping, construction foundation drilling"
            }
        ]
    },
    {
        id: 'drones',
        label: 'Drones',
        products: [
            {
                title: "GD-50 UAV System",
                image: "/drones/1.png",
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
                image: "/drones/2.png",
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
                image: "/drones/3.png",
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
    const [activeCategory, setActiveCategory] = useState('machineries');
    const [productIndex, setProductIndex] = useState(0);
    const [width, setWidth] = useState(1200);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // keep scroll position when modal opens so we can restore it and prevent background scroll
    const scrollPosRef = useRef(0);
    // reference to modal scrollable content so we can allow touches inside it while blocking background touchmove
    const modalRef = useRef(null);

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

    // When the specs modal is open, lock background scrolling (handle desktop and mobile/iOS)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const preventTouch = (e) => {
            // If the touch is inside the modal content, allow it so the modal can scroll
            if (modalRef.current && modalRef.current.contains(e.target)) return;
            e.preventDefault();
        };

        if (isModalOpen) {
            // store current scroll position
            scrollPosRef.current = window.scrollY || window.pageYOffset || 0;
            // fix body to prevent background scroll and compensate for scroll position
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosRef.current}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflow = 'hidden';
            // prevent touchmove on mobile/iOS
            document.addEventListener('touchmove', preventTouch, { passive: false });
        } else {
            // restore body styles
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
            document.removeEventListener('touchmove', preventTouch);
            // restore previous scroll position
            window.scrollTo(0, scrollPosRef.current || 0);
        }

        return () => {
            // ensure cleanup on unmount
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
            document.removeEventListener('touchmove', preventTouch);
        };
    }, [isModalOpen]);

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
    const productCount = currentCategoryData.products.length;
    // Ensure productIndex is within bounds for current category
    const safeProductIndex = productIndex < productCount ? productIndex : 0;
    const activeProduct = currentCategoryData.products[safeProductIndex];

    // Initialize product section scroll animations (non-content change)
    useProductsScrollAnim();

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
                <h2 style={{ fontSize: isMobile ? '22px' : '32px', fontWeight: 400, color: '#fff', lineHeight: 1 }}>
                    Products designed for <span style={{ fontFamily: '"Caveat", cursive', color: '#0E6C85', fontSize: isMobile ? (isVerySmall ? '28px' : '32px') : '48px', margin: '0 5px', display: 'inline-block', whiteSpace: 'nowrap' }}>smarter agriculture,</span> from field
                </h2>
                <h2 style={{ fontSize: isMobile ? '22px' : '32px', fontWeight: 400, color: '#fff', marginTop: isMobile ? '5px' : '-5px', lineHeight: 1 }}>
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
                        <div ref={modalRef} style={{
                            padding: isMobile ? '80px 24px 40px 24px' : '90px 40px 40px 40px',
                            overflowY: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            touchAction: 'auto',
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

                /* Scroll-based reveal for Products (non-invasive, respects reduced motion) */
                .ps-anim { opacity: 0; transform: translateY(12px) scale(0.998); transition: opacity 700ms cubic-bezier(.2,.9,.3,1), transform 700ms cubic-bezier(.2,.9,.3,1); will-change: opacity, transform; }
                .ps-inview { opacity: 1; transform: translateY(0) scale(1); }

                /* Buttons & smaller elements should animate a bit quicker */
                #products button.ps-anim { transition-duration: 480ms; }

                @media (prefers-reduced-motion: reduce) {
                    .ps-anim, .ps-inview { transition: none !important; transform: none !important; opacity: 1 !important; }
                }
                `}
            </style>
        </section>
    );
}