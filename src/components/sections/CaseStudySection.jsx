'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { caseStudies } from '@/src/data/caseStudies';

const CaseStudySection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeStudy = caseStudies[activeIndex];

    return (
        <section className="case-study-section" style={{
            padding: '80px 0',
            background: '#050505',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                {/* Section Header - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        textAlign: 'center',
                        marginBottom: '60px',
                        maxWidth: '900px',
                        margin: '0 auto 60px'
                    }}
                >
                    {/* Small Tag */}
                    <div style={{
                        color: '#F68D20',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        marginBottom: '20px'
                    }}>
                        Client Transformations
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-fluid-h2" style={{
                        fontWeight: 800,
                        marginBottom: '25px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        lineHeight: 1.2
                    }}>
                        Success Stories
                    </h2>

                    {/* Inspirational Quote */}
                    <p className="text-fluid-p" style={{
                        color: '#ccc',
                        lineHeight: 1.7,
                        fontStyle: 'italic',
                        maxWidth: '750px',
                        margin: '0 auto',
                        position: 'relative',
                        paddingLeft: '30px',
                        paddingRight: '30px'
                    }}>
                        <span style={{
                            position: 'absolute',
                            left: '0',
                            top: '-10px',
                            fontSize: '3rem',
                            color: '#F68D20',
                            opacity: 0.3,
                            fontFamily: 'Georgia, serif'
                        }}>&quot;</span>
                        Actual work. Real results. These are the companies we&apos;ve helped scale from chaos to clarity.
                        <span style={{
                            position: 'absolute',
                            right: '0',
                            bottom: '-20px',
                            fontSize: '3rem',
                            color: '#F68D20',
                            opacity: 0.3,
                            fontFamily: 'Georgia, serif'
                        }}>&quot;</span>
                    </p>
                </motion.div>

                {/* Navigation Dots */}
                <div style={{
                    display: 'flex',
                    gap: '12px',
                    marginBottom: '40px',
                    justifyContent: 'center'
                }}>
                    {caseStudies.map((study, index) => (
                        <button
                            key={study.id}
                            onClick={() => setActiveIndex(index)}
                            style={{
                                width: activeIndex === index ? '40px' : '12px',
                                height: '12px',
                                borderRadius: '6px',
                                background: activeIndex === index ? '#F68D20' : '#333',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                padding: 0
                            }}
                            aria-label={`View ${study.companyName}`}
                        />
                    ))}
                </div>

                {/* Main Content: Equal 1fr 1fr Split */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStudy.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="case-study-content"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '50px',
                            alignItems: 'center'
                        }}
                    >

                        {/* Left: Compact Grid of Flying Images */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gridAutoRows: 'clamp(100px, 15vw, 150px)',
                            gap: '12px',
                            perspective: '1000px'
                        }}>
                            {activeStudy.images.map((img, index) => {
                                const isFeature = index === 0;
                                const entrances = [
                                    { x: -100, y: 0 }, { x: 100, y: 0 },
                                    { x: 0, y: -100 }, { x: 0, y: 100 }
                                ];
                                const start = entrances[index % 4];

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: start.x, y: start.y }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: index * 0.15,
                                            type: "spring",
                                            bounce: 0.2
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            zIndex: 20,
                                            boxShadow: '0 20px 40px rgba(246, 141, 32, 0.4)',
                                            transition: { duration: 0.3 }
                                        }}
                                        style={{
                                            gridColumn: isFeature ? 'span 2' : 'span 1',
                                            gridRow: isFeature ? 'span 2' : 'span 1',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                            border: '1px solid #222',
                                            backgroundColor: '#111',
                                            position: 'relative',
                                            cursor: 'pointer',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                                        }}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${activeStudy.companyName} (${activeStudy.industry}) - Case Study Image ${index + 1}`}
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'top',
                                                filter: 'brightness(0.9)',
                                                transition: 'filter 0.4s ease',
                                                backgroundColor: 'transparent'
                                            }}
                                            sizes={isFeature ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Right: Text Content */}
                        <div style={{ textAlign: 'inherit' }} className="case-study-text">
                            {/* Header Logo/Title */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }} className="case-study-header">
                                <div style={{
                                    width: '60px', height: '60px',
                                    background: '#fff',
                                    borderRadius: '50%',
                                    color: '#000',
                                    fontWeight: 900,
                                    fontSize: '1.5rem',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 0 20px rgba(255,255,255,0.1)',
                                    flexShrink: 0
                                }}>{activeStudy.logo}</div>
                                <div>
                                    <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, lineHeight: 1, marginBottom: '5px' }}>
                                        {activeStudy.companyName}
                                    </h3>
                                    <span style={{ color: '#F68D20', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '2px' }}>
                                        {activeStudy.industry}
                                    </span>
                                </div>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <p style={{
                                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                                    lineHeight: 1.6,
                                    color: '#ccc',
                                    marginBottom: '20px'
                                }}>
                                    &quot;{activeStudy.quote}&quot;
                                </p>
                                <div style={{ paddingLeft: '15px', borderLeft: '4px solid #F68D20', textAlign: 'left' }}>
                                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>
                                        {activeStudy.personTitle}
                                    </div>
                                    <div style={{ color: '#888', fontSize: '0.9rem' }}>
                                        {activeStudy.companyName}
                                    </div>
                                </div>
                            </div>

                            {/* Services */}
                            <div>
                                <h5 style={{
                                    color: '#F68D20',
                                    fontWeight: 700,
                                    marginBottom: '15px',
                                    textTransform: 'uppercase',
                                    fontSize: '0.85rem',
                                    letterSpacing: '1px'
                                }}>
                                    Transformation Delivered
                                </h5>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '10px'
                                }} className="case-study-tags">
                                    {activeStudy.services.map((tag, i) => (
                                        <span key={i} style={{
                                            color: '#ddd',
                                            fontSize: '0.8rem',
                                            background: '#1a1a1a',
                                            padding: '6px 12px',
                                            borderRadius: '4px',
                                            border: '1px solid #333'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </motion.div>
                </AnimatePresence>

                <style>{`
                    @media (max-width: 1024px) {
                        .case-study-content {
                            grid-template-columns: 1fr !important;
                            gap: 40px !important;
                        }
                        .case-study-text {
                            text-align: center !important;
                        }
                        .case-study-header {
                            justify-content: center !important;
                        }
                        .case-study-tags {
                            justify-content: center !important;
                        }
                        .case-study-section {
                            padding: 60px 0 !important;
                        }
                        .case-study-content > div:first-child {
                            grid-auto-rows: clamp(80px, 12vw, 120px) !important;
                            gap: 8px !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default CaseStudySection;
