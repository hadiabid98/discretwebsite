'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const SECTIONS = [
    {
        id: "about-me",
        subtitle: "MAN BEHIND DISCRET",
        title: "ABOUT ME",
        description: "I started Discret Digital with one goal, to prove that small teams with big ideas can make a massive impact. Every project we take on is more than work; it’s a shared dream we help bring to life.\n\nLittle about my background...\nHi! I am Hadi\n\nNext time you get stuck in your business or initiate that is impact driven, I am your Guy ...\n\nA Certified Full Stack Digital Marketer and Lean Based Business Consultant.",
        image: "/about page/Screenshot 2026-02-07 201418.png",
        color: "#F68D20"
    },
    {
        id: "who-are-we",
        subtitle: "OUR AGENCY",
        title: "WHO ARE WE!",
        description: "Discret Digital is a full-stack growth partner for solopreneurs and small startups. We help founders build businesses that don’t just survive — they scale.\n\nWhere most agencies only offer marketing or design, we bring together four pillars: Growth Operations, Growth Marketing, Growth Tech, and Growth Logistics.\n\nEnd-to-end support. One partner. Zero overwhelm. Our job is simple: We take over the backend of your business so you can focus on the vision.",
        image: "/about page/who are we.png",
        color: "#F4145C"
    },
    {
        id: "my-journey",
        subtitle: "FOUNDER STORY",
        title: "MY JOURNEY",
        description: "“Every founder starts alone; I did too.”\n\nWhen I started Discret, I wasn’t trying to build an agency. I was trying to solve a problem I felt deeply as a young entrepreneur:\n\nGrowing a business is overwhelming when you don’t have the right support.\n\nI lived that chaos. I felt the burnout. I experienced the “do everything yourself” struggle that kills the confidence of so many brilliant founders.\n\nDiscret Digital was born from that promise.\n\n— Abdul Hadi\nFounder, Discret Digital",
        image: "/about page/my journey.jpg",
        color: "#B10F43"
    }
];

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [index, setIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
        // Determine index based on scroll position - More proactive thresholds
        if (latest < 0.25) setIndex(0);
        else if (latest < 0.6) setIndex(1);
        else setIndex(2);
    });

    return (
        <div ref={containerRef} style={{ position: 'relative', height: '400vh', backgroundColor: '#050505' }}>
            <div className="about-grid" style={{
                maxWidth: '1280px',
                margin: '0 auto',
                width: '100%',
                position: 'relative'
            }}>
                <style>{`
                    .about-grid {
                        display: grid;
                        grid-template-columns: 1.2fr 0.8fr;
                        gap: 80px;
                        padding: 0 80px;
                    }
                    .about-image-container {
                        height: 65vh;
                    }
                    @media (max-width: 1024px) {
                        .about-grid {
                            gap: 40px;
                            padding: 0 40px;
                        }
                    }
                    @media (max-width: 768px) {
                        .about-grid {
                            gap: 20px;
                            padding: 0 20px;
                        }
                        .about-image-container {
                            height: 40vh;
                            border-radius: 24px !important;
                        }
                        .about-text-content {
                            padding-right: 0px !important;
                        }
                    }
                    @media (max-width: 480px) {
                        .about-grid {
                            grid-template-columns: 1.1fr 0.9fr;
                            gap: 12px;
                            padding: 0 12px;
                        }
                    }
                `}</style>
                {/* Left Side: Scrolling Content */}
                <div className="about-text-content" style={{ display: 'flex', flexDirection: 'column' }}>
                    {SECTIONS.map((section, i) => (
                        <div
                            key={section.id}
                            style={{
                                height: '120vh', // Increased height for more gap between sections
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '20px'
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-20%" }}
                                transition={{ duration: 0.8 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: section.color }} />
                                    <span style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.4em' }}>
                                        {section.subtitle}
                                    </span>
                                </div>

                                {i === 0 ? (
                                    <h1 style={{ fontSize: 'clamp(1.5rem, 6vw, 5.5rem)', fontWeight: 900, lineHeight: 0.9, textTransform: 'uppercase', color: 'white', margin: 0, letterSpacing: '-0.03em' }}>
                                        {section.title.split(" ").map((word, idx) => (
                                            <span key={idx} style={{ display: 'block' }}>{word}</span>
                                        ))}
                                    </h1>
                                ) : (
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 5.5rem)', fontWeight: 900, lineHeight: 0.9, textTransform: 'uppercase', color: 'white', margin: 0, letterSpacing: '-0.03em' }}>
                                        {section.title.split(" ").map((word, idx) => (
                                            <span key={idx} style={{ display: 'block' }}>{word}</span>
                                        ))}
                                    </h2>
                                )}

                                <div style={{ maxWidth: '450px' }}>
                                    <p style={{ color: '#999', fontSize: 'clamp(0.8rem, 2vw, 1.05rem)', lineHeight: 1.6, whiteSpace: 'pre-line', fontWeight: 500 }}>
                                        {section.description}
                                    </p>
                                </div>

                                {i === 0 && (
                                    <div style={{ display: 'flex', gap: '12px', paddingTop: '8px' }}>
                                        {[Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                            <motion.a
                                                key={idx}
                                                href="#"
                                                whileHover={{ y: -5, scale: 1.1, color: section.color, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                                style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50%', transition: 'all 0.3s', border: '1px solid rgba(255,255,255,0.08)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            >
                                                <Icon size={16} />
                                            </motion.a>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Sticky Frame */}
                <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <div className="about-image-container" style={{
                        position: 'relative',
                        aspectRatio: '4/5',
                        borderRadius: '56px',
                        overflow: 'hidden',
                        backgroundColor: '#000',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                        width: '100%'
                    }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{
                                    opacity: 0,
                                    scale: 1.05,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    zIndex: 0
                                }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                style={{ width: '100%', height: '100%', zIndex: 1 }}
                            >
                                <Image
                                    src={SECTIONS[index].image}
                                    alt={SECTIONS[index].title}
                                    fill
                                    style={{
                                        objectFit: index === 1 ? 'contain' : 'cover',
                                        backgroundColor: index === 1 ? '#000' : 'transparent',
                                        filter: 'grayscale(0.5) brightness(0.8)',
                                        transition: 'filter 0.5s ease-out'
                                    }}
                                />
                            </motion.div>
                        </AnimatePresence>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent 30%)', pointerEvents: 'none' }} />
                    </div>
                </div>
            </div>

            {/* Progress Line */}
            <div style={{ position: 'sticky', left: '40px', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '32px', zIndex: 40, width: 'fit-content' }}>
                {SECTIONS.map((section, i) => (
                    <motion.div
                        key={section.id}
                        initial={false}
                        animate={{
                            height: index === i ? 40 : 10,
                            backgroundColor: index === i ? section.color : "rgba(255,255,255,0.15)",
                            width: index === i ? '3px' : '2px'
                        }}
                        style={{ borderRadius: '4px', transition: 'all 0.6s ease' }}
                    />
                ))}
            </div>

            {/* Footer Spacer */}
            <div style={{ height: '20vh' }} />
        </div>
    );
}
