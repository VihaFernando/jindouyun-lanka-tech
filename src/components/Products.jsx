import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, X, CheckCircle2 } from 'lucide-react';

// --- DATA STRUCTURE ---
const CATEGORIES = [
    {
        id: 'machineries',
        label: 'Machineries',
        products: [
            {
                title: "Push Combine Harvester 4LZ-0.6",
                image: "/machines/1.png",
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
                image: "/machines/2.png",
                description: "4-row gasoline-powered rice transplanter designed for efficient and uniform seedling planting in wet paddy fields, ideal for small to medium-scale rice farms.",

                features: [
                    "Rated Power: 3.3 kW (4.5 PS) @ 3600 rpm",
                    "Planting Rows: 4 rows with 30 cm spacing",
                    "Operating Speed: 0.34–0.77 m/s"
                ],

                fullSpecs: `I. Product Parameters
1. Machine Type / Model: 4-Row Rice Transplanter
2. Engine Type: Gasoline Engine
3. Rated Output Power: 3.3 kW (4.5 PS)
4. Rated Speed: 3600 rpm
5. Fuel Type: Unleaded Gasoline (Automobile grade)
6. Starting Method: Pull-type Start
7. Machine Auto Adjustment: Hydraulic Adjustment
8. Number of Gears: Forward 2 (Planting 1 / Walking 1) + Reverse 1
9. Working Speed: 0.34–0.77 m/s
10. Planting Method: Crank Lever Type
11. Number of Planting Rows: 4
12. Planting Row Spacing: 30 cm
13. Planting Hill Spacing: 12 / 14 / 16 / 18 / 21 cm
14. Number of Plants per 3.3 m: 90 / 80 / 70 / 60 / 50
15. Planting Depth: 1.5–3.75 cm (5 adjustable levels)
16. Seedling Height Range: (2.0–4.5) × 10–25 cm
17. Working Efficiency: 3.2 m/h
18. Operational Efficiency: 0.5–0.8 Acre/h
19. Main Fuel Consumption: ≤10 kg/hm²
20. Machine Weight: 162 kg
21. Overall Dimensions (L×W×H): 2140 × 1630 × 910 mm`
            }
            ,
            {
                title: "Backpack-Type Grass Cutter and Weeder",
                image: "/machines/3.png",
                description: "Four-stroke gasoline-powered backpack grass cutter and weeder designed for lightweight operation, multi-tool compatibility, and efficient weed and shrub cutting across complex terrains.",

                features: [
                    "Engine Power: 1.0 kW, 39 cc 4-stroke gasoline engine",
                    "Fuel System: Pure gasoline (92#), no oil mixing required",
                    "Multi-head Compatibility for mowing, shrub cutting, and weed removal"
                ],

                fullSpecs: `I. Product Parameters
1. Machine Type / Model: Backpack-type Grass Cutter & Weeder (140F)
2. Engine Type: Single-cylinder, air-cooled, 4-stroke gasoline engine
3. Engine Displacement: 39 cc
4. Rated Output Power: 1.0 kW
5. Ignition System: Electronic ignition (contactless)
6. Starting Method: Manual recoil (hand-pull start)
7. Cooling Method: Air-cooled
8. Fuel Type: Pure gasoline (92# recommended)
9. Fuel Tank Capacity: Approx. 0.8 L
10. Engine Oil Capacity: Approx. 0.1 L (separate 4-stroke engine oil)
11. Net Weight: Approx. 16 kg
12. Transmission Method: Flexible soft shaft transmission
13. Carrying Style: Backpack-mounted with widened waist and shoulder support
14. Handle Type: Adjustable operating handle
15. Cutting Head System: Quick-change multi-functional head
16. Standard Cutting Tools: Alloy saw blade, white steel single-edged blade
17. Optional Attachments: Anti-entanglement weeding head, shrub saw, lawn cutting head
18. Applicable Terrain: Orchards, farmland, gardens, slopes, terraces, narrow areas
19. Operating Angle Recommendation: 15°–30° relative to ground
20. Safety Design: Protective blade guard, vibration reduction structure
21. Maintenance Notes: Clean cutting head after use; drain fuel for long-term storage
22. Overall Design Features: Lightweight body, easy operation, reduced operator fatigue`
            },
            {
                title: "Belt-Driven 4WD Front-Rotary Micro Tiller (Diesel)",
                image: "/machines/4.png",
                description: "Belt-driven four-wheel-drive front-rotary micro tiller powered by a diesel engine, designed for rotary tillage, ditching, weeding, and fertilizing in orchards, fields, and paddy land.",

                features: [
                    "Engine Power: 4.0 kW diesel engine",
                    "Rotary Tillage Width: 800 mm",
                    "Operational Efficiency: 0.31 Acre/h"
                ],

                fullSpecs: `I. Product Parameters
1. Machine Type / Model: Belt-driven Four-wheel Drive Front-rotary Micro Tiller (173 Type)
2. Engine Type: Diesel Engine
3. Rated Output Power: 4.0 kW
4. Drive Type: Belt-driven, four-wheel drive
5. Transmission System: Walking box + tool gear box
6. Tool Gear Functions: Ditching / Rotary tillage / Neutral
7. Walking Box Gears: Fast / Slow / Neutral / Reverse
8. Application Functions: Rotary tillage, weeding, ditching, fertilizing, paddy field plowing
9. Operational Efficiency: 0.31 Acre/h
10. Main Fuel Consumption: ≤25 kg/hm²
11. Rotary Tillage Width: 800 mm
12. Ditching Width: 250 mm
13. Ditching Depth: 250 mm
14. Fertilizing Depth: ≥100 mm
15. Overall Dimensions (L×W×H): 1680 × 670 × 880 mm
16. Applicable Terrain: Orchards, large fields, greenhouses, paddy fields
17. Operating Characteristics: High traction, stable operation, multi-function front rotary design
18. Control Type: Manual handle control
19. Structure Design: Compact body with enhanced maneuverability
20. Working Mode: Walk-behind operation`
            },
            {
                title: "Belt-Driven Rear-Rotary Micro Tiller (Diesel)",
                image: "/machines/5.png",
                description: "Belt-driven rear-rotary micro tiller powered by a diesel engine, engineered for efficient rotary tillage, ditching, weeding, and fertilizing in orchards, fields, and greenhouse environments.",

                features: [
                    "Engine Power: 4.0 kW diesel engine",
                    "Rotary Tillage Width: 800 mm",
                    "Operational Efficiency: 0.31 Acre/h"
                ],

                fullSpecs: `I. Product Parameters
1. Machine Type / Model: Belt-driven Rear-rotary Micro Tiller (173 Type)
2. Engine Type: Diesel Engine
3. Rated Output Power: 4.0 kW
4. Drive Type: Belt-driven rear rotary transmission
5. Transmission System: Belt drive with walking box + tool gear box
6. Tool Gear Modes: Ditching / Rotary tillage / Upper gear / Neutral / Reverse
7. Walking Box Gears: Fast / Slow / Neutral / Reverse
8. Application Functions: Rotary tillage, weeding, ditching, fertilizing, ridge raising
9. Operational Efficiency: 0.31 Acre/h
10. Main Fuel Consumption: ≤25 kg/hm²
11. Rotary Tillage Width: 800 mm
12. Ditching Width: 250 mm
13. Ditching Depth: 250 mm
14. Fertilizing Depth: ≥100 mm
15. Overall Dimensions (L×W×H): 1480 × 700 × 850 mm
16. Applicable Terrain: Orchards, greenhouses, farmland, large fields
17. Steering Mode: Differential steering (belt-driven system)
18. Control Type: Manual handle control
19. Structure Design: Compact rear-rotary structure with high maneuverability
20. Working Mode: Walk-behind operation`
            },
            {
                title: "4WD Front-Rotary Micro Tiller (Gasoline)",
                image: '/machines/6.png',
                description: "Four-wheel drive front-rotary micro tiller powered by a gasoline engine, designed for stable self-propelled operation and multi-function soil work in orchards, fields, and greenhouses.",

                features: [
                    "Engine Power: 4.0 kW gasoline engine",
                    "Rotary Tillage Width: 800 mm",
                    "Operational Efficiency: 0.3 Acre/h"
                ],

                fullSpecs: `I. Product Parameters
1. Machine Type / Model: Four-wheel Drive Front-rotary Micro Tiller (170 Type)
2. Engine Type: Gasoline Engine
3. Rated Output Power: 4.0 kW
4. Drive Type: Four-wheel drive, front-rotary design
5. Transmission Mode: Direct transmission
6. Walking Capability: Self-propelled with even-speed operation
7. Gear System: Fast / Slow / Neutral
8. Application Functions: Rotary tillage, weeding, ditching, fertilizing, ridge raising
9. Operational Efficiency: 0.3 Acre/h
10. Main Fuel Consumption: ≤25 kg/hm²
11. Rotary Tillage Width: 800 mm
12. Ditching Width: 250 mm
13. Ditching Depth: 250 mm
14. Fertilizing Depth: ≥100 mm
15. Overall Dimensions (L×W×H): 1450 × 950 × 800 mm
16. Applicable Terrain: Orchards, large fields, greenhouses
17. Stability Features: Even-speed walking, high traction four-wheel drive
18. Control Type: Manual handle control
19. Patented Product: ZL201420279132.2
20. Working Mode: Walk-behind operation`
            },
            {
                title: "Integrated-Case All-Gear Garden Tiller (Diesel 186)",
                image: "/machines/7.png",
                description: "Integrated-case all-gear garden tiller powered by a high-output diesel engine, built for heavy-duty ditching, rotary tillage, earthing-up, and ridge forming in gardens and cash-crop fields.",

                features: [
                    "Engine Power: 6.3 kW diesel engine",
                    "Rotary Tillage Width: 130–160 mm",
                    "Operational Efficiency: 0.31 Acre/h"
                ],

                fullSpecs: `I. Product Parameters
1. Machine Type / Model: Integrated-case All-gear Garden Tiller (186 Type)
2. Engine Type: Diesel Engine
3. Rated Output Power: 6.3 kW
4. Drive Type: All-gear transmission with integrated casing
5. Transmission System: Full gear drive (travel + cutter shaft)
6. Travel Gears: Forward slow / Forward fast / Neutral / Reverse
7. Cutter Shaft Rotation: Forward / Reverse rotation with fast & slow speeds
8. Application Functions: Rotary tillage, ditching, earthing up, ridge forming, film covering
9. Crop Applications: Ginger, green onion, strawberry, flue-cured tobacco, vegetable fields
10. Operational Efficiency: 0.31 Acre/h
11. Main Fuel Consumption: ≤28 kg/hm²
12. Rotary Tillage Width: 130–160 mm
13. Ditching Depth: 250–400 mm
14. Ridge Forming Capability: Adjustable ridge height
15. Overall Dimensions (L×W×H): 1700 × 740 × 850 mm
16. Applicable Terrain: Gardens, vegetable plots, orchards, dry farmland
17. Control Type: Manual handle control
18. Structure Design: Integrated gearbox casing for durability and stability
19. Operating Mode: Walk-behind operation
20. Working Characteristics: High torque output, stable gear transmission, heavy-duty performance`
            },
            {
                title: "Direct-Drive Rear-Rotary Micro Tiller (Diesel)",
                image: "/machines/8.png",
                description: "Direct-drive rear-rotary micro tiller powered by a diesel engine, designed for high-torque rotary tillage, ditching, and fertilizing in tea gardens, orchards, and large agricultural fields.",

                features: [
                    "Engine Power: 4.0 kW diesel engine",
                    "Direct-drive Rear Rotary System",
                    "Operational Efficiency: 0.31 Acre/h"
                ],

                fullSpecs: `I. Product Parameters
1. Machine Type / Model: Direct-drive Rear-rotary Micro Tiller (173 Type)
2. Engine Type: Diesel Engine
3. Rated Output Power: 4.0 kW
4. Drive Type: Direct-drive rear rotary transmission
5. Transmission Mode: Direct transmission
6. Tool Gear Modes: Ditching / Rotary tillage / Neutral
7. Walking Gears: Fast / Slow / Reverse
8. Steering Mode: Differential steering
9. Application Functions: Rotary tillage, weeding, ditching, fertilizing
10. Application Areas: Tea gardens, orchards, greenhouses, large fields
11. Operational Efficiency: 0.31 Acre/h
12. Main Fuel Consumption: ≤25 kg/hm²
13. Rotary Tillage Width: 700 mm
14. Ditching Width: 250 mm
15. Ditching Depth: 250 mm
16. Fertilizing Depth: ≥100 mm
17. Overall Dimensions (L×W×H): 1480 × 800 × 850 mm
18. Control Type: Manual handle control
19. Structure Design: Compact rear-mounted rotary structure
20. Working Mode: Walk-behind operation`
            },
            {
                title: "Belt-Driven Garden Management Machine (Diesel 186)",
                image: "/machines/9.png",
                description: "Belt-driven garden management machine powered by a high-output diesel engine, designed for heavy-duty ridge forming, ditching, soil hilling, and crop cultivation in large garden and cash-crop fields.",

                features: [
                    "Engine Power: 6.3 kW diesel engine",
                    "Adjustable Ditching Width: 250–400 mm",
                    "Operational Efficiency: 0.31 Acre/h"
                ],

                fullSpecs: `I. Product Parameters
1. Machine Type / Model: Belt-driven Garden Management Machine (186 Type)
2. Engine Type: Diesel Engine
3. Rated Output Power: 6.3 kW
4. Drive Type: Belt-driven transmission
5. Transmission System: Walking box + tool gear box
6. Walking Gears: High speed / Low speed / Front neutral / Rear neutral
7. Tool Gears: High speed / Low speed / Neutral
8. Application Functions: Ridge furrowing, ditching, soil hilling, cultivation
9. Crop Applications: Flue-cured tobacco, ginger, green onion, grape burial, ridge crops
10. Operational Efficiency: 0.31 Acre/h
11. Main Fuel Consumption: ≤28 kg/hm²
12. Ditching Width: 250–400 mm
13. Ditching Depth: 250–300 mm
14. Overall Dimensions (L×W×H): 1800 × 740 × 1100 mm
15. Applicable Terrain: Large gardens, vegetable fields, dry farmland
16. Control Type: Manual handle control
17. Structure Design: Reinforced frame with belt-driven power transmission
18. Operating Mode: Walk-behind operation
19. Stability Features: Balanced chassis, steady ridge forming
20. Working Characteristics: High torque output, suitable for heavy garden management tasks`
            },
            {
                title: "Grain Bagging Machine (Model 200)",
                image: "/machines/10.png",
                description: "Self-propelled gasoline-powered grain bagging machine designed for efficient grain collection, lifting, and bagging with high throughput and foldable operation for easy transport and storage.",

                features: [
                    "Engine Power: 4.0 kW gasoline engine (170F)",
                    "Working Efficiency: 6000–8000 kg/h",
                    "Self-propelled with foldable operating structure"
                ],

                fullSpecs: `I. Product Parameters
1. Machine Type / Model: Grain Bagging Machine (Model 200)
2. Engine Type: Gasoline Engine (170F)
3. Rated Output Power: 4.0 kW
4. Fuel Type: Gasoline
5. Minimum Fuel Consumption Rate: 394 g/kW·h
6. Working Efficiency: 6000–8000 kg/h
7. Grain Collection & Return Width: Max. 1000 mm
8. Transmission Mode: Centrifugal clutch + worm gearbox + angular transmission gearbox
9. Walking Mode: Self-propelled
10. Auxiliary Function: Folding type structure (Working position, Handheld position, Folding position)
11. Collection Efficiency: ≥90%
12. Main Fuel Consumption: ≤25 kg/hm²
13. Overall Dimensions (L×W×H): 140 × 122 × 125 cm
14. Net Weight: 95 kg
15. Operation Type: Walk-behind operation
16. Structural Design: Integrated grain lifting and bagging mechanism
17. Application Scope: Grain harvesting, collection, and bagging operations
18. Mobility Features: Compact chassis with stable walking system`
            },
            {
                title: "173 Diesel Air-Cooled Chain-Driven Mini Tiller",
                image: "/machines/11.png",
                description: "173 diesel-powered air-cooled chain-driven mini tiller designed for reliable rotary tillage and soil preparation, suitable for small farms, orchards, and vegetable plots.",

                features: [
                    "Engine Power: 6 HP (≈4.0 kW) air-cooled diesel engine",
                    "Chain-driven transmission with forward and reverse gears",
                    "Fuel Consumption: 0.4–0.6 L/hour"
                ],

                fullSpecs: `I. Product Parameters
1. Machine Type / Model: 173 Diesel Air-Cooled Chain-Driven Mini Tiller
2. Engine Type: Single-cylinder, air-cooled diesel engine
3. Rated Output Power: 6 HP (approx. 4.0 kW)
4. Cooling Method: Air-cooled
5. Drive Type: Chain-driven transmission
6. Starting Method: Manual recoil start
7. Fuel Tank Capacity: 2.5 L
8. Fuel Consumption: 0.4–0.6 L/h
9. Working Efficiency: 2–3 mu/h
10. Transmission Gears: 1 / 0 / 2 / Reverse
11. Operational Efficiency: 0.31 Acre/h
12. Main Fuel Consumption: ≤25 kg/hm²
13. Walking Mode: Walk-behind operation
14. Applicable Functions: Rotary tillage, soil loosening, light ditching
15. Applicable Terrain: Small farms, orchards, vegetable fields
16. Machine Weight: 78 kg
17. Structure Design: Compact body with reinforced chain drive
18. Control Type: Manual handle control
19. Stability Features: Balanced chassis, steady operation
20. Maintenance Features: Simple mechanical structure for easy servicing`
            },
            {
                title: "Earth Auger (Gasoline)",
                image: "/machines/12.png",
                description: "Gasoline-powered earth auger designed for fast and efficient hole digging for planting, fencing, and foundation work, featuring a lightweight frame and stable wheeled support.",

                features: [
                    "Engine Power: 1.5 kW gasoline engine (1E48F)",
                    "Drill Bit Length: 800 mm (customizable)",
                    "Gearbox Transmission for high torque output"
                ],

                fullSpecs: `I. Product Parameters
1. Machine Type / Model: Earth Auger (Gasoline Engine)
2. Engine Model: 1E48F
3. Engine Type: Single-cylinder, air-cooled, 2-stroke gasoline engine
4. Engine Displacement: 63 cc
5. Rated Output Power: 1.5 kW (2.45 kW @ 8500 rpm max)
6. Rated Speed: 8500 rpm
7. Transmission Mode: Gearbox transmission
8. Fuel Type: Gasoline mixed with 2-stroke engine oil
9. Fuel Mix Ratio: 25:1 (Gasoline : Oil)
10. Fuel Tank Capacity: 1200 ml
11. Starting Method: Manual recoil start
12. Drill Bit Length: 800 mm (custom length available upon request)
13. Auger Type: Single-spiral earth drill
14. Operation Mode: Manual push with wheel-assisted support
15. Application Scope: Tree planting, fencing, pole installation, foundation holes
16. Applicable Terrain: Farmland, gardens, orchards, construction sites
17. Structure Design: Steel frame with stabilizing wheels
18. Mobility Features: Integrated wheel for easy transport
19. Safety Features: Protective handle frame and stable ground support
20. Working Characteristics: High torque, stable drilling, efficient soil penetration`
            },
            {
                title: "Earth Auger (Diesel)",
                image: "/machines/13.png",
                description: "Diesel-powered earth auger with a reinforced frame structure, designed for deep and wide hole drilling in agriculture, fencing, and foundation work with high torque and stable operation.",

                features: [
                    "Engine Power: 6 HP (≈4.0 kW) diesel engine",
                    "Maximum Drilling Depth: 800 mm",
                    "Adjustable Auger Width: 25–40 cm (up to 50 cm max)"
                ],

                fullSpecs: `I. Product Parameters
1. Machine Type / Model: Earth Auger (Diesel Engine)
2. Engine Type: Single-cylinder, air-cooled diesel engine
3. Engine Model: Diesel 173 (Air-cooled)
4. Rated Output Power: 6 HP (approx. 4.0 kW)
5. Cooling Method: Air-cooled
6. Transmission Mode: Gearbox transmission
7. Starting Method: Manual recoil start
8. Maximum Drilling Depth: 800 mm
9. Drilling Width Range: 250–400 mm
10. Maximum Supported Width: 500 mm
11. Auger Type: Heavy-duty single-spiral earth drill
12. Frame Structure: Vertical reinforced steel frame
13. Mobility Features: Integrated transport wheels
14. Operation Mode: Stand-mounted manual operation
15. Application Scope: Tree planting, fencing, pole installation, foundation drilling
16. Applicable Terrain: Farmland, orchards, construction sites
17. Stability Features: Rigid frame with ground support legs
18. Safety Features: Protective engine mount and stable handle structure
19. Working Characteristics: High torque output, deep drilling capability
20. Maintenance Features: Simple mechanical structure for easy servicing`
            },
            {
                title: "Ridger 3DL-80",
                image: "/machines/14.png",
                description: "PTO-driven blade-type ridger designed for efficient ridge forming with adjustable dimensions, suitable for large-scale field preparation using medium to high-power tractors.",

                features: [
                    "Ridge Height: Up to 80 cm",
                    "Adjustable Ridge Widths (Top & Bottom)",
                    "PTO Transmission with Three-point Hitch"
                ],

                fullSpecs: `I. Product Parameters
1. Machine Type / Model: Ridger (3DL-80)
2. Ridge Height: 80 cm
3. Ridge Top Width: 30–35 cm (adjustable)
4. Ridge Bottom Width: 40–75 cm (adjustable)
5. Ridge Slope: 30–35 cm (adjustable)
6. Ridge Surface Treatment: Edge-shaped
7. Ridge Shaping Method: Blade-type
8. Ridge Surface Shaping: Edge-shaped forming
9. Rotating Speed of Driving Wheel: 540 / 720 r/min
10. Transmission Mode: PTO transmission
11. Connection Form: Three-point hitch
12. Matching Power Requirement: 40–60 kW (≥40 hp)
13. Working Efficiency: 1500–2500 m/h
14. Applicable Soil Moisture Range: 30%–80%
15. Overall Dimensions (L×W×H): 1400 × 2300 × 1100 mm
16. Overall Weight: 500 kg
17. Installation Type: Tractor-mounted
18. Operating Mode: PTO-driven operation
19. Application Scope: Ridge forming for vegetables, cash crops, and field farming
20. Working Characteristics: Stable ridge shaping, high efficiency, adjustable ridge geometry`
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
    const [activeCategory, setActiveCategory] = useState('drones');
    const [productIndex, setProductIndex] = useState(0);
    const [width, setWidth] = useState(1200);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // keep scroll position when modal opens so we can restore it and prevent background scroll
    const scrollPosRef = useRef(0);

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

        const preventTouch = (e) => { e.preventDefault(); };

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