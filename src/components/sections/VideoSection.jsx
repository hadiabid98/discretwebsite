'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const VideoSection = () => {
    return (
        <section className="video-section" style={{ padding: '80px 0', background: '#050505', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="container" style={{ maxWidth: '1000px', width: '100%', padding: '0 24px' }}>

                {/* Video Placeholder Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '16/9',
                        background: '#111',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        border: '1px solid #222',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                        marginBottom: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {/* Placeholder Content */}
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%',
                            background: 'rgba(255,255,255,0.1)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 20px',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            cursor: 'pointer'
                        }} className="group">
                            <FaPlay size={24} color="white" style={{ marginLeft: '4px' }} />
                        </div>
                        <p style={{ color: '#666', fontSize: '1.2rem', fontWeight: 500 }}>
                            Video Introduction Placeholder
                        </p>
                    </div>

                    {/* Optional: Overlay Gradient */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 30%)', pointerEvents: 'none' }} />
                </motion.div>

                {/* CTA Below Video */}


            </div>
            <style jsx>{`
                @media (max-width: 1024px) {
                    .video-section { padding: 60px 0 !important; }
                    .video-section p { font-size: 1.1rem !important; }
                }
            `}</style>
        </section>
    );
};

export default VideoSection;
