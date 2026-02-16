'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

// --- Image Assets (Mapped from existing project) ---
const images = {
    ops: [
        '/kunfa/Screenshot 2026-02-05 215730.png',
        '/crustino/Screenshot 2026-02-06 201708.png',
        '/kunfa/Screenshot 2026-02-05 215343.png',
        '/kunfa/Screenshot 2026-02-05 215759.png',
        '/kunfa/Screenshot 2026-02-05 220133.png',
        '/crustino/Screenshot 2026-02-06 201755.png'
    ],
    tech: [
        '/Z/Screenshot 2026-02-05 221151.png',
        '/Z/Screenshot 2026-02-06 213305.png',
        '/Z/Screenshot 2026-02-06 231502.png',
        '/Z/Screenshot 2026-02-06 231041.png'
    ],
    marketing: [
        '/crustino/crustino pizza.png',
        '/personally fit/Screenshot 2026-02-06 161517.png',
        '/personally fit/Screenshot 2026-02-06 161225.png',
        '/personally fit/Screenshot 2026-02-06 161338.png'
    ],
    logistics: [
        '/scale/Screenshot 2026-02-06 232843.png',
        '/scale/Screenshot 2026-02-06 233220.png',
        '/scale/Screenshot 2026-02-06 233307.png',
        '/scale/Screenshot 2026-02-06 233513.png',
        '/scale/Screenshot 2026-02-06 232957.png',
        '/scale/Screenshot 2026-02-06 232843.png'
    ]
};

// --- Components ---

const GridCardSmall = ({ title, subtitle, description, tags, images }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card-container group"
        style={{
            height: '100%',
            background: '#0a0a0a',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            transition: 'border-color 0.5s'
        }}
    >
        {/* Images Grid Top */}
        <div style={{
            padding: '16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px',
            height: '200px',
            flexShrink: 0
        }}>
            {images.map((img, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'relative',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        background: 'rgba(255,255,255,0.05)'
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 * i }}
                >
                    <Image
                        src={img}
                        alt={`${title} - ${subtitle} Proof`}
                        fill
                        style={{
                            objectFit: 'cover',
                            opacity: 0.8,
                            transition: 'all 0.5s'
                        }}
                        className="hover-scale-img"
                    />
                </motion.div>
            ))}
        </div>

        {/* Content Bottom */}
        <div style={{
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            position: 'relative',
            zIndex: 10,
            background: 'linear-gradient(to top, #0a0a0a, rgba(10,10,10,0.9))',
            marginTop: '-16px'
        }}>
            <div style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '8px' }}>{title}</h3>
                <p style={{ color: '#F68D20', fontWeight: 500, fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '12px' }}>{subtitle}</p>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
                {description}
            </p>

            {/* Tags/ROI */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tags.map((tag, i) => (
                    <span key={i} style={{
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        fontSize: '0.75rem',
                        color: '#cbd5e1',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}>
                        <FaCheckCircle size={12} color="#F4145C" /> {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const GridCardLarge = ({ title, subtitle, description, tags, images }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card-container group"
        style={{
            height: '100%',
            background: '#0a0a0a',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            transition: 'border-color 0.5s'
        }}
    >
        {/* Background Grid - Faded Top */}
        <div style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', // Default to 4 cols (Desktop)
            gap: '8px',
            padding: '8px',
            opacity: 0.3,
            transition: 'opacity 0.7s',
            pointerEvents: 'none'
        }} className="bg-grid-fade">
            {/* Repeat images to ensure fill */}
            {[...images, ...images, ...images].slice(0, 12).map((img, i) => (
                <div key={i} style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative',
                    transform: i < 4 ? 'translateY(32px)' : 'none'
                }}>
                    <Image
                        src={img}
                        alt={`${title} Background Feature`}
                        fill
                        style={{
                            objectFit: 'cover',
                            filter: 'grayscale(100%)',
                            transition: 'all 0.7s'
                        }}
                        className="grayscale-hover-remove"
                    />
                </div>
            ))}
        </div>

        {/* Gradient Overlay for Text Readability */}
        <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, #0a0a0a 0%, rgba(10,10,10,0.95) 40%, rgba(10,10,10,0.4) 100%)'
        }} />

        {/* Content */}
        <div style={{
            position: 'relative',
            zIndex: 10,
            padding: '40px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            maxWidth: '600px'
        }}>
            <h3 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'white', marginBottom: '12px' }}>{title}</h3>
            <p style={{ color: '#F4145C', fontWeight: 500, fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '24px' }}>{subtitle}</p>

            <p style={{ color: '#cbd5e1', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '32px' }}>
                {description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {tags.map((tag, i) => (
                    <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        color: '#e2e8f0',
                        background: 'rgba(0,0,0,0.4)',
                        backdropFilter: 'blur(4px)',
                        padding: '12px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        width: 'fit-content'
                    }}>
                        <FaCheckCircle size={16} color="#F68D20" />
                        <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{tag}</span>
                    </div>
                ))}
            </div>

            {/* Button Removed as requested */}
        </div>
    </motion.div>
);

const ROIPillars = () => {
    return (
        <section className="roi-pillars-section" style={{ padding: '96px 0', background: '#050505', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient Background Elements */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '20%', left: '10%', width: '500px', height: '500px', background: '#F68D20', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.05 }} />
                <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '500px', height: '500px', background: '#F4145C', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.05 }} />
            </div>

            <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', maxWidth: '768px', margin: '0 auto 80px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 700, color: 'white', marginBottom: '24px', lineHeight: 1.1 }}
                    >
                        The Four Pillars of a <br />
                        <span className="text-gradient" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, #F68D20, #F4145C)' }}>Scalable Startup</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ color: '#94a3b8', fontSize: '1.25rem' }}
                    >
                        You provide the vision. We provide the infrastructure to support it.
                    </motion.p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px', marginBottom: '24px' }} className="grid-responsive">
                    {/* Row 1 Left: Growth Operations (Large 8 cols) */}
                    <div style={{ gridColumn: 'span 12' }} className="col-lg-8 pillar-card-height">
                        <GridCardLarge
                            title="Growth Operations"
                            subtitle="The Efficiency Pillar"
                            description="You’re drowning in $10/hr tasks and 'fighting fires' daily. We install the 'Business Brain' - custom SOPs, CRMs, and automated workflows that replace founder-dependency with system-consistency."
                            tags={[
                                "Save 20+ hours per week",
                                "Move from 'Busy Operator' to 'Strategic Owner'",
                                "Custom SOPs & Automated Workflows"
                            ]}
                            images={images.ops}
                        />
                    </div>

                    {/* Row 1 Right: Growth Tech (Small 4 cols) */}
                    <div style={{ gridColumn: 'span 12' }} className="col-lg-4 pillar-card-height">
                        <GridCardSmall
                            title="Growth Tech"
                            subtitle="The Infrastructure Pillar"
                            description="Clunky websites and fragmented tools that lose data and customers. We build high-speed, conversion-optimized websites and AI-powered tools."
                            tags={[
                                "24/7 Digital Salesperson",
                                "High-speed websites",
                                "Maximize LTV"
                            ]}
                            images={images.tech}
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }} className="grid-responsive">
                    {/* Row 2 Left: Growth Marketing (Small 4 cols) */}
                    <div style={{ gridColumn: 'span 12' }} className="col-lg-4 pillar-card-height">
                        <GridCardSmall
                            title="Growth Marketing"
                            subtitle="The Engine Pillar"
                            description="Great products that nobody knows about? We build a performance-led marketing engine. From SEO to paid media, we ensure your brand stays in front of the right people."
                            tags={[
                                "Generated $10M+ in revenue",
                                "Performance-led Engine",
                                "Metrics that matter"
                            ]}
                            images={images.marketing}
                        />
                    </div>

                    {/* Row 2 Right: Growth Logistics (Large 8 cols) */}
                    <div style={{ gridColumn: 'span 12' }} className="col-lg-8 pillar-card-height">
                        <GridCardLarge
                            title="Growth Logistics"
                            subtitle="The Scale Pillar"
                            description="Your backend collapses when sales double? We map and optimize your fulfillment, vendor management, and supply chain. Ensure your back-end remains 'bulletproof'."
                            tags={[
                                "Grow from 100 to 10,000 orders",
                                "Bulletproof Backend",
                                "No operational hiccups"
                            ]}
                            images={images.logistics}
                        />
                    </div>
                </div>
            </div>

            <style>{`
                .pillar-card-height {
                    height: 500px;
                }
                @media (min-width: 1024px) {
                    .col-lg-8 { grid-column: span 8 !important; }
                    .col-lg-4 { grid-column: span 4 !important; }
                }
                @media (max-width: 1024px) {
                    .pillar-card-height {
                        height: auto;
                        min-height: 400px;
                    }
                    .roi-pillars-section {
                        padding: 60px 0 !important;
                    }
                }
                @media (max-width: 480px) {
                    .pillar-card-height {
                        min-height: 380px;
                    }
                }
                .group:hover { border-color: rgba(246, 141, 32, 0.3) !important; }
                .hover-scale-img:hover { transform: scale(1.1); opacity: 1 !important; }
                .grayscale-hover-remove:hover { filter: grayscale(0%) !important; }
                .bg-grid-fade:hover { opacity: 0.4 !important; }
            `}</style>
        </section>
    );
};

export default ROIPillars;
