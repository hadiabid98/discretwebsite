'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaBolt, FaChartBar } from 'react-icons/fa';
import ClientLogos from '@/src/components/sections/ClientLogos';
import ResultsSection from '@/src/components/sections/ResultsSection';
import OperatorTrap from '@/src/components/sections/OperatorTrap';
import ROIPillars from '@/src/components/sections/ROIPillars';
import CaseStudySection from '@/src/components/sections/CaseStudySection';
import Process from '@/src/components/sections/Process';
import VideoSection from '@/src/components/sections/VideoSection';
import CTASection from '@/src/components/sections/CTASection';

const DashboardAnimation = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
      aspectRatio: '1.2 / 1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} className="dashboard-container">
      <div style={{
        position: 'absolute',
        width: '80%',
        height: '80%',
        background: 'radial-gradient(circle, rgba(246, 141, 32, 0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0
      }}></div>

      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1 }}
        style={{
          width: '90%',
          height: '60%',
          background: '#0a0a0a',
          border: '1px solid #222',
          borderRadius: 'clamp(12px, 2vw, 24px)',
          padding: 'clamp(12px, 2vw, 20px)',
          position: 'relative',
          zIndex: 1,
          boxShadow: '0 20px 50px -10px rgba(0,0,0,0.8)',
          perspective: '1000px'
        }}
      >
        <div style={{ display: 'flex', gap: '8px', marginBottom: 'clamp(10px, 4vw, 30px)' }}>
          <div style={{ width: 'clamp(8px, 1.5vw, 12px)', height: 'clamp(8px, 1.5vw, 12px)', borderRadius: '50%', background: '#EF4444' }}></div>
          <div style={{ width: 'clamp(8px, 1.5vw, 12px)', height: 'clamp(8px, 1.5vw, 12px)', borderRadius: '50%', background: '#F59E0B' }}></div>
          <div style={{ width: 'clamp(8px, 1.5vw, 12px)', height: 'clamp(8px, 1.5vw, 12px)', borderRadius: '50%', background: '#10B981' }}></div>
        </div>
        <div style={{ display: 'flex', gap: '20px', height: '100%' }}>
          <div style={{ flex: 1, background: '#111', borderRadius: '12px', height: '30%' }}></div>
          <div style={{ flex: 1, background: '#111', borderRadius: '12px', height: '30%' }}></div>
          <div style={{ flex: 0.8, borderRadius: '12px', height: '30%' }}></div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-10, 0, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '55%',
          left: '0%',
          width: '45%',
          padding: 'clamp(10px, 2vw, 20px)',
          background: '#0F0F0F',
          border: '1px solid #333',
          borderRadius: '20px',
          zIndex: 3,
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', marginBottom: '5px', fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)' }}>
          <span>Active Users</span>
          <FaGlobe color="#38bdf8" className="desktop-only" />
        </div>
        <div style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: 'bold', color: 'white', marginBottom: '5px' }}>8,420</div>
        <div style={{ color: '#10B981', fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span>↗</span> 12% vs last week
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '-2%',
          width: '45%',
          padding: 'clamp(10px, 2vw, 20px)',
          background: '#0F0F0F',
          border: '1px solid #333',
          borderRadius: '20px',
          zIndex: 4,
          boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{
            width: 'clamp(25px, 4vw, 40px)', height: 'clamp(25px, 4vw, 40px)',
            background: 'rgba(246, 141, 32, 0.2)',
            borderRadius: '10px',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            color: '#F68D20',
            flexShrink: 0
          }}>
            <FaBolt size={16} />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ color: '#888', fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)', fontWeight: 600 }}>VELOCITY</div>
            <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', fontWeight: 'bold', color: 'white' }}>+240%</div>
          </div>
        </div>
        <div style={{ width: '100%', height: '4px', background: '#333', borderRadius: '3px', marginTop: '10px' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
            transition={{ duration: 1.5, delay: 1 }}
            style={{ height: '100%', background: '#F68D20', borderRadius: '3px' }}
          />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          width: '45%',
          padding: 'clamp(10px, 2vw, 20px)',
          background: '#1E0034',
          border: '1px solid #F4145C',
          borderRadius: '20px',
          zIndex: 5,
          boxShadow: '0 0 40px rgba(244, 20, 92, 0.2)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{
            width: 'clamp(30px, 4.5vw, 45px)', height: 'clamp(30px, 4.5vw, 45px)',
            background: 'linear-gradient(135deg, #F68D20, #F4145C)',
            borderRadius: '50%',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            color: 'white',
            flexShrink: 0
          }}>
            <FaChartBar size={16} />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ color: '#F4145C', fontSize: 'clamp(0.6rem, 1.2vw, 0.8rem)', fontWeight: 600, letterSpacing: '1px' }}>REVENUE</div>
            <div style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', fontWeight: 'bold', color: 'white' }}>$124.5k</div>
          </div>
        </div>
      </motion.div>

      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '15%',
        display: 'flex',
        alignItems: 'flex-end',
        gap: '2%',
        zIndex: 2,
        width: '40%',
        height: '25%'
      }}>
        {[30, 50, 40, 70, 50, 90, 60, 80].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              flex: 1,
              background: 'linear-gradient(to top, #B10F43, #F4145C)',
              borderRadius: '2px 2px 0 0',
              opacity: 0.8
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <header className="hero-section" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        alignItems: 'center',
        minHeight: '85vh',
        gap: '40px',
        padding: '40px 0'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ zIndex: 2 }}
        >
          <div style={{
            marginBottom: '16px',
            color: 'var(--color-orange)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontSize: 'clamp(0.7rem, 2vw, 0.85rem)'
          }}>
            Scalable Systems for Growth
          </div>

          <h1 className="text-fluid-h1" style={{
            lineHeight: 1.1,
            marginBottom: '24px',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            We Build Systems <br className="desktop-only" />
            That Helps Entrepreneurs <br className="desktop-only" />
            Build Startups That <br className="desktop-only" />
            <span className="text-gradient">Actually Scale.</span>
          </h1>

          <p className="text-fluid-p" style={{
            color: 'var(--color-text-secondary)',
            maxWidth: '580px',
            marginBottom: '40px',
            lineHeight: 1.6
          }}>
            Stop being the bottleneck in your own business. We empower founders with the automation, marketing, and operational infrastructure that turn small startups into $10M+ scalable engines.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }}>
            <a
              href="#contact-form"
              className="btn-primary"
              style={{ padding: 'clamp(14px, 2vw, 18px) clamp(28px, 4vw, 36px)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', borderRadius: '100px' }}
            >
              Claim My Growth Strategy
            </a>
            <p style={{ fontStyle: 'italic', color: '#666', fontSize: '0.9rem' }}>
              100% Free Audit. No Pitch. Just ROI.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ width: '100%', position: 'relative' }}
        >
          <DashboardAnimation />
        </motion.div>
      </header>

      <ClientLogos />
      <div id="results"><ResultsSection /></div>
      <OperatorTrap />
      <div id="services"><ROIPillars /></div>
      <div id="work"><CaseStudySection /></div>
      <div id="process"><Process /></div>
      <VideoSection />
      <CTASection />

      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr;
            text-align: center;
            padding-top: 60px;
            min-height: 70vh !important;
            gap: 20px !important;
          }
          .hero-section > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-section p {
            margin-left: auto;
            margin-right: auto;
            max-width: 90% !important;
          }
          .dashboard-container {
            max-width: 480px !important;
            aspect-ratio: 1.3 / 1 !important;
          }
        }
      `}</style>
    </>
  );
}
