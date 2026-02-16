'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { steps } from '@/src/data/processSteps';

const Process = () => {
    return (
        <section style={{ padding: '128px 0', background: '#050505', color: 'white', position: 'relative', overflow: 'hidden' }}>
            {/* Background Ambient Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '300px',
                background: 'rgba(246, 141, 32, 0.05)',
                filter: 'blur(100px)',
                borderRadius: '9999px',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '96px' }} className="process-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px' }}
                        className="process-title"
                    >
                        The Process – 3 Steps to $10M+
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: '#94a3b8', fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto' }}
                        className="process-text"
                    >
                        A simple, transparent journey from where you are to where you want to be.
                    </motion.p>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    position: 'relative',
                    maxWidth: '1152px',
                    margin: '0 auto'
                }} className="process-steps-container">

                    <div className="desktop-line" style={{
                        position: 'absolute',
                        top: '64px',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'rgba(255,255,255,0.1)',
                        zIndex: 0
                    }} />

                    {steps.map((step, index) => {
                        const stepDelay = index * 1.2;
                        const lineDelay = stepDelay + 0.6;

                        return (
                            <div key={index} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative',
                                width: '100%',
                                flex: 1
                            }} className="process-step">

                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="desktop-line-anim"
                                        style={{
                                            position: 'absolute',
                                            top: '64px',
                                            left: '50%',
                                            width: '100%',
                                            height: '2px',
                                            background: 'linear-gradient(to right, #F68D20, #F4145C)',
                                            transformOrigin: 'left',
                                            zIndex: 0
                                        }}
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: lineDelay,
                                            duration: 0.6,
                                            ease: "easeInOut"
                                        }}
                                    />
                                )}

                                <motion.div
                                    style={{ position: 'relative', zIndex: 10, marginBottom: '32px' }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: stepDelay,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20
                                    }}
                                    className="icon-container"
                                >
                                    <div style={{
                                        width: '128px',
                                        height: '128px',
                                        borderRadius: '50%',
                                        background: '#0a0a0a',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                        transition: 'border-color 0.5s'
                                    }} className="icon-circle">
                                        <svg style={{
                                            position: 'absolute',
                                            inset: 0,
                                            width: '100%',
                                            height: '100%',
                                            transform: 'rotate(-90deg)',
                                            pointerEvents: 'none'
                                        }}>
                                            <motion.circle
                                                cx="50%" cy="50%" r="48%"
                                                stroke={step.color}
                                                strokeWidth="2"
                                                fill="transparent"
                                                strokeDasharray="400"
                                                strokeDashoffset="400"
                                                whileInView={{ strokeDashoffset: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: stepDelay + 0.2, duration: 1.5, ease: "easeOut" }}
                                            />
                                        </svg>

                                        <step.icon size={40} color="white" style={{ position: 'relative', zIndex: 10 }} className="process-icon" />

                                        <motion.div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                width: '32px',
                                                height: '32px',
                                                background: 'white',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: '0.875rem',
                                                boxShadow: '0 0 15px rgba(255,255,255,0.4)'
                                            }}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: stepDelay + 0.4, type: "spring" }}
                                        >
                                            {step.id}
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    style={{ textAlign: 'center', padding: '0 16px' }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: stepDelay + 0.3, duration: 0.5 }}
                                >
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '16px' }}>{step.title}</h3>
                                    <p style={{ color: '#94a3b8', lineHeight: 1.6, maxWidth: '320px', margin: '0 auto', fontSize: '1rem' }}>
                                        {step.description}
                                    </p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .process-header { margin-bottom: 60px !important; }
                    .process-title { font-size: 2.2rem !important; }
                    .process-text { font-size: 1.1rem !important; }
                    .icon-circle { width: 96px !important; height: 96px !important; }
                    .process-icon { font-size: 28px !important; }
                    .icon-container { margin-bottom: 32px !important; }
                    .desktop-line { top: 48px !important; }
                    .desktop-line-anim { top: 48px !important; }
                    .mobile-line-anim { 
                        top: 96px !important; 
                        height: 80px !important;
                        left: 50% !important;
                        transform: translateX(-50%) !important;
                    }
                }
                @media (min-width: 768px) {
                    .process-steps-container {
                        flex-direction: row !important;
                    }
                    .process-step {
                        width: 33.333% !important;
                    }
                    .mobile-line-anim {
                        display: none !important;
                    }
                }
                @media (max-width: 767px) {
                    .process-steps-container {
                        gap: 110px !important;
                    }
                    .desktop-line {
                        display: none !important;
                    }
                    .desktop-line-anim {
                        display: none !important;
                    }
                    .process-step {
                        height: auto !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Process;
