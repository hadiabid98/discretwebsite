'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ResultsSection = () => {
    return (
        <section style={{
            padding: '80px 0',
            background: '#050505',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Animations */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                        x: [0, 50, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-10%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(246, 141, 32, 0.15), transparent 70%)',
                        borderRadius: '50%'
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.1, 0.2, 0.1],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        bottom: '-20%',
                        right: '-10%',
                        width: '800px',
                        height: '800px',
                        background: 'radial-gradient(circle, rgba(244, 20, 92, 0.1), transparent 70%)',
                        borderRadius: '50%'
                    }}
                />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 style={{ color: '#F68D20', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '16px' }}>
                        Our Results
                    </h4>
                    <h2 className="text-fluid-h2" style={{ fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
                        It&apos;s All About The <br /> <span className="text-gradient">Impact We Created</span>
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    justifyContent: 'center',
                    gap: 'clamp(10px, 2vw, 30px)',
                    margin: '60px 0'
                }}>
                    {[
                        { label: 'Success Stories', value: '120+' },
                        { label: 'Revenue Generated', value: '$10M+' },
                        { label: 'Clutch Creative Agency', value: 'Top 50' }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            style={{ textAlign: 'center' }}
                        >
                            <div style={{ fontSize: 'clamp(1.2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', marginBottom: '8px' }}>
                                {stat.value}
                            </div>
                            <div style={{ color: '#888', fontSize: 'clamp(0.6rem, 1.5vw, 1.1rem)', fontWeight: 500, lineHeight: 1.2 }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <a
                        href="https://wa.me/923400568710"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: '18px 40px', fontSize: 'clamp(1rem, 2vw, 1.2rem)', width: 'auto', maxWidth: '100%' }}
                    >
                        Claim Your Free Strategy Session
                    </a>
                    <p style={{ marginTop: '20px', color: '#666', fontStyle: 'italic' }}>
                        Actual work. Real results.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default ResultsSection;
