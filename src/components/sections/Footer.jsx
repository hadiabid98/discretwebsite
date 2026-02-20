'use client';

import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const isDiscretAi = pathname === '/discret-ai';

    return (
        <footer style={{ background: '#020202', color: 'white', paddingTop: '80px', borderTop: '1px solid #111' }}>
            <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', marginBottom: '80px' }} className="footer-grid">

                    {/* Column 1: Branding */}
                    <div style={{ gridColumn: 'span 12' }} className={isDiscretAi ? 'col-lg-4' : 'col-lg-3'}>
                        <div style={{ marginBottom: '24px' }}>
                            <Image src="/discret-logo-colored.png" alt="Discret Digital Logo" width={150} height={50} style={{ height: '50px', width: 'auto', marginBottom: '16px' }} />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Discret Digital LTD</h3>
                            <p style={{ color: '#888', lineHeight: 1.6, maxWidth: '300px' }}>
                                A creative agency that empowers entrepreneurs with the operations, marketing, and tech support they need to turn early momentum into long-term growth.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px' }}>Follow</h4>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <a href="https://www.instagram.com/discretdigital?igsh=MWljNWF4ZGhyYXA3eA==" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><FaInstagram /></a>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><FaFacebookF /></a>
                                <a href="https://www.linkedin.com/company/discret-digital/" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div style={{ gridColumn: 'span 12' }} className={isDiscretAi ? 'col-lg-4' : 'col-lg-2'}>
                        <div style={{ marginBottom: '40px' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px' }}>Quick Links</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Terms of Use</a></li>
                                <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Privacy & Cookies</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Get in Touch */}
                    <div style={{ gridColumn: 'span 12' }} className={isDiscretAi ? 'col-lg-4' : 'col-lg-3'}>
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px' }}>Get in touch</h4>
                            <div style={{ color: '#ccc', lineHeight: 1.6 }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <strong style={{ color: 'white', display: 'block', marginBottom: '4px', fontSize: '0.95rem' }}>Pakistan:</strong>
                                    29, Upper Banigala Road, Islamabad
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <strong style={{ color: 'white', display: 'block', marginBottom: '4px', fontSize: '0.95rem' }}>UK:</strong>
                                    71-75 Shelton Street, London, England, WC2H 9JQ
                                </div>
                                <div style={{ marginBottom: '8px' }}>(92) 340-056-8710</div>
                                <div><a href="mailto:connect@discretdigital.com" style={{ color: '#F68D20', textDecoration: 'none' }}>connect@discretdigital.com</a></div>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Contact Form - Hidden on Discret AI page */}
                    {!isDiscretAi && (
                        <div style={{ gridColumn: 'span 12' }} className="col-lg-4">
                            {/* Embedded Contact Form */}
                            <div id="contact-form" style={{ background: '#111', padding: '24px', borderRadius: '16px', border: '1px solid #222' }}>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px' }}>Get Started</h4>
                                <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', color: '#888', marginBottom: '8px' }}>Name</label>
                                        <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid #333', borderRadius: '8px', color: 'white' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', color: '#888', marginBottom: '8px' }}>Email</label>
                                        <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid #333', borderRadius: '8px', color: 'white' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.9rem', color: '#888', marginBottom: '8px' }}>Message</label>
                                        <textarea placeholder="Tell us about your project..." rows="3" style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid #333', borderRadius: '8px', color: 'white', resize: 'vertical' }}></textarea>
                                    </div>
                                    <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', borderRadius: '8px', fontWeight: 700, marginTop: '8px' }}>Send Message</button>
                                </form>
                            </div>
                        </div>
                    )}

                </div>

                <div style={{ borderTop: '1px solid #111', padding: '32px 0', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
                    ©2026. All rights reserved.
                </div>

            </div>

            <style>{`
                @media (min-width: 1024px) {
                    .col-lg-3 { grid-column: span 3 !important; }
                    .col-lg-2 { grid-column: span 2 !important; }
                    .col-lg-4 { grid-column: span 4 !important; }
                }
                @media (max-width: 1024px) {
                    footer {
                        padding-top: 50px !important;
                    }
                    .footer-grid {
                        text-align: center;
                        gap: 30px !important;
                        margin-bottom: 50px !important;
                    }
                    .footer-grid > div {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .footer-grid ul {
                        align-items: center !important;
                    }
                    .footer-grid p {
                        margin-left: auto;
                        margin-right: auto;
                        font-size: 0.95rem !important;
                    }
                    #contact-form {
                        padding: 20px !important;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
