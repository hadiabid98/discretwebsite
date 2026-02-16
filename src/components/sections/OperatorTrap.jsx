'use client';
import React from 'react';
import { motion } from 'framer-motion';

const OperatorTrap = () => {
    return (
        <section style={{
            padding: '120px 0',
            background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }} className="operator-trap-section">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8 }}
                    style={{
                        maxWidth: '1000px',
                        margin: '0 auto',
                        textAlign: 'center'
                    }}
                >
                    <div style={{
                        background: 'linear-gradient(to right, #F68D20, #F4145C)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        marginBottom: '20px',
                        display: 'inline-block'
                    }} className=" रियलिटी-चेक">
                        The Reality Check
                    </div>

                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: 800,
                        marginBottom: '24px',
                        lineHeight: 1.2,
                        letterSpacing: '-0.02em'
                    }} className="trap-heading">
                        The Problem – The <span style={{
                            background: 'linear-gradient(to right, #F68D20, #F4145C)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}>&quot;Operator&quot;</span> Trap
                    </h2>

                    <p style={{
                        fontSize: '1.4rem',
                        color: '#eee',
                        lineHeight: 1.6,
                        maxWidth: '800px',
                        margin: '0 auto 16px',
                        fontWeight: 500
                    }} className="trap-para-1">
                        You aren&apos;t scaling because you&apos;re too busy working.
                    </p>

                    <p style={{
                        fontSize: '1.15rem',
                        color: '#888',
                        lineHeight: 1.8,
                        maxWidth: '750px',
                        margin: '0 auto 60px'
                    }} className="trap-para-2">
                        Most founders are trapped in the <strong style={{ color: '#fff' }}>&quot;Operator&apos;s Loop&quot;</strong> — managing tech, answering leads, and fixing SOPs. If you stop working for a week, your revenue stops too. That&apos;s not a business; it&apos;s a job.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.01, borderColor: 'rgba(246, 141, 32, 0.3)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            background: 'rgba(15, 15, 15, 0.5)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid #222',
                            borderRadius: '24px',
                            padding: '50px 60px',
                            maxWidth: '850px',
                            margin: '0 auto',
                            position: 'relative',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                            transition: 'border-color 0.3s'
                        }}
                        className="solution-box"
                    >
                        <h3 style={{
                            fontSize: '2rem',
                            fontWeight: 700,
                            marginBottom: '16px',
                            color: 'white',
                            letterSpacing: '-0.02em'
                        }} className="solution-heading">
                            Discret Digital installs the <span style={{
                                background: 'linear-gradient(to right, #F68D20, #F4145C)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent'
                            }}>backend.</span>
                        </h3>

                        <p style={{
                            fontSize: '1.25rem',
                            lineHeight: 1.7,
                            color: '#aaa',
                            margin: 0,
                            maxWidth: '700px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }} className="solution-text">
                            We take over the operations, tech, and marketing so you can finally step into the <strong style={{ color: 'white' }}>&quot;Owner&quot;</strong> seat.
                        </p>
                    </motion.div>

                </motion.div>

            </div>
            <style jsx>{`
                @media (max-width: 1024px) {
                    .operator-trap-section { padding: 60px 0 !important; }
                    .trap-heading { font-size: 2.5rem !important; }
                    .trap-para-1 { font-size: 1.2rem !important; }
                    .trap-para-2 { font-size: 1rem !important; margin-bottom: 40px !important; }
                    .solution-box { padding: 40px 30px !important; }
                    .solution-heading { font-size: 1.6rem !important; }
                    .solution-text { font-size: 1.1rem !important; }
                }
                @media (max-width: 480px) {
                    .trap-heading { font-size: 2rem !important; }
                    .solution-box { padding: 30px 20px !important; }
                }
            `}</style>
        </section>
    );
};

export default OperatorTrap;
