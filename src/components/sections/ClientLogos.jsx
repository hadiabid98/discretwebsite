'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import '@/src/styles/ClientLogos.css';


import { clientLogos } from '@/src/data/clientLogos';

const ClientLogos = () => {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const updateLogos = () => {
            const centerScreen = window.innerWidth / 2;
            const slides = track.getElementsByClassName('logo-slide');

            for (let i = 0; i < slides.length; i++) {
                const slide = slides[i];
                const img = slide.querySelector('img');
                if (!img) continue;

                const rect = slide.getBoundingClientRect();
                const slideCenter = rect.left + rect.width / 2;

                // Calculate distance from center
                const dist = Math.abs(centerScreen - slideCenter);
                const maxDist = 400; // Wider range for smoother effect

                if (dist < maxDist) {
                    // Calculate intensity (0 to 1) based on closeness to center
                    const intensity = 1 - (dist / maxDist);

                    // Apply styles
                    // Scale: 1 at edges, 1.4 at center
                    // Opacity: 0.3 at edges, 1 at center

                    img.style.transform = `scale(${1 + (intensity * 0.4)})`;
                    img.style.opacity = `${0.2 + (intensity * 0.8)}`;

                    // Filter: 
                    // Edges: invert(1) grayscale(1) (White-ish/gray)
                    // Center: invert(1) grayscale(0) brightness(1.5) (Bright White/Clear)

                    img.style.filter = `invert(1) grayscale(${1 - intensity * 0.5}) brightness(${1 + intensity})`;

                } else {
                    // Reset to default "faded" state
                    img.style.transform = 'scale(1)';
                    img.style.opacity = '0.2';
                    img.style.filter = 'invert(1) grayscale(1) brightness(0.8)';
                }
            }
            requestAnimationFrame(updateLogos);
        };

        const animationId = requestAnimationFrame(updateLogos);
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section style={{
            padding: '60px 0',
            background: '#050505',
            overflow: 'hidden',
            borderTop: '1px solid #222',
            borderBottom: '1px solid #222',
            position: 'relative',
            marginTop: '40px'
        }}>

            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{
                    color: '#888',
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 500
                }}>
                    Clients Featured In
                </h3>
            </div>

            {/* Fade Gradients for smooth edges */}
            <div style={{
                position: 'absolute', top: 0, bottom: 0, left: 0, width: '150px',
                background: 'linear-gradient(to right, #050505, transparent)', zIndex: 2
            }}></div>
            <div style={{
                position: 'absolute', top: 0, bottom: 0, right: 0, width: '150px',
                background: 'linear-gradient(to left, #050505, transparent)', zIndex: 2
            }}></div>

            <div className="logos-slide-track" ref={trackRef}>
                {/* Double the logos to create seamless loop */}
                {[...clientLogos, ...clientLogos]
                    .map((logo, index) => (
                        <div key={index} className="logo-slide">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={150}
                                height={50}
                                className="logo-image"
                                style={{
                                    height: '50px',
                                    width: 'auto',
                                    objectFit: 'contain',
                                    willChange: 'transform, opacity, filter'
                                }}
                            />
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default ClientLogos;
