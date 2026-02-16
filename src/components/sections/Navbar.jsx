'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { mainNavLinks, aboutNavLinks } from '@/src/data/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const isAboutPage = pathname === '/about';
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinkStyles = {
        fontSize: '0.95rem',
        fontWeight: 500,
        color: '#ccc',
        textDecoration: 'none',
        transition: 'color 0.3s',
        display: 'inline-block'
    };

    const activeLinkStyles = {
        ...navLinkStyles,
        fontWeight: 700,
        color: 'white'
    };

    const linkVariants = {
        initial: { y: 0, color: '#ccc' },
        hover: { y: -2, color: '#F68D20' }
    };

    const menuVariants = {
        closed: { opacity: 0, y: -20, pointerEvents: 'none' },
        open: { opacity: 1, y: 0, pointerEvents: 'auto' }
    };

    const navLinks = isAboutPage ? aboutNavLinks : mainNavLinks;

    return (
        <nav style={{
            width: '100%',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'rgba(5, 5, 5, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
                height: '80px'
            }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
                    <Image
                        src="/discret-logo-colored.png"
                        alt="Discret Digital"
                        width={40}
                        height={40}
                        style={{ height: '40px', width: 'auto' }}
                        priority
                    />
                    <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>Discret</span>
                </Link>

                {/* Desktop Links */}
                <div style={{ display: 'flex', gap: 'clamp(12px, 3vw, 32px)', alignItems: 'center' }}>
                    <div className="desktop-only" style={{ display: 'flex', gap: '24px' }}>
                        {navLinks.map((link) => (
                            <motion.div key={link.name} initial="initial" whileHover="hover">
                                <Link href={link.href} style={link.active ? activeLinkStyles : navLinkStyles}>
                                    <motion.span variants={link.active ? { ...linkVariants, initial: { color: 'white' } } : linkVariants}>
                                        {link.name}
                                    </motion.span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <a
                        href="https://wa.me/923400568710"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            padding: '10px 20px',
                            fontSize: '0.85rem',
                            flexShrink: 0,
                            borderRadius: '100px'
                        }}
                    >
                        Contact Us
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-only"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '1.5rem',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {isOpen ? <span style={{ fontSize: '1.8rem' }}>&times;</span> : <span style={{ fontSize: '1.5rem' }}>&#9776;</span>}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            top: '80px',
                            left: 0,
                            width: '100%',
                            background: 'rgba(5, 5, 5, 0.95)',
                            backdropFilter: 'blur(10px)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            zIndex: 99
                        }}
                        className="mobile-only"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    ...navLinkStyles,
                                    fontSize: '1.25rem',
                                    color: link.active ? 'white' : '#ccc',
                                    fontWeight: link.active ? 700 : 500,
                                    padding: '12px 0',
                                    display: 'block',
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
