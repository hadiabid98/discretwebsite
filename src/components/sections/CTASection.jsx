'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const CTASection = () => {
    return (
        <section style={{ padding: '100px 0', background: '#050505', color: 'white', position: 'relative', overflow: 'hidden' }}>

            {/* Background Gradient/Image */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(5,5,5,0.9), rgba(5,5,5,0.7)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{
                        fontSize: '4rem',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: '24px',
                        textTransform: 'uppercase'
                    }} className="cta-title">
                        Ready to stop &quot;managing&quot; <br className="desktop-only" />
                        <span style={{ color: '#F68D20' }}>and start scaling?</span>
                    </h2>

                    <p style={{
                        color: '#bbb',
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '0 auto 40px',
                        lineHeight: 1.6
                    }} className="cta-description">
                        You&apos;ve done the hard work of starting. Let us do the hard work of scaling. Join 120+ founders who have offloaded their backend to Discret Digital.
                    </p>

                    <a
                        href="#contact-form"
                        className="btn-primary"
                        style={{
                            padding: '20px 48px',
                            fontSize: '1.2rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '24px',
                            borderRadius: '100px'
                        }}
                    >
                        Book Your 15-Min Strategy Session <BsArrowRight size={20} />
                    </a>

                    <p style={{
                        color: '#F4145C',
                        fontWeight: 700,
                        fontSize: '1rem',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                    }}>
                        Only 4 spots available for new partners this month.
                    </p>
                </motion.div>

            </div>
            <style jsx>{`
                @media (max-width: 1024px) {
                    .cta-title { font-size: 2.5rem !important; }
                    .cta-description { font-size: 1.1rem !important; }
                    .btn-primary { padding: 16px 32px !important; font-size: 1.1rem !important; }
                }
                @media (max-width: 480px) {
                    .cta-title { font-size: 2rem !important; }
                }
            `}</style>
        </section>
    );
};

export default CTASection;
