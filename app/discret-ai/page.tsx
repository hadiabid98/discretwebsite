'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Import all Discret AI section components ───────────────────────
import DiscretAiHero from '@/src/components/discret-ai/Hero';
import Stats from '@/src/components/discret-ai/Stats';
import SelfSelectionBar from '@/src/components/discret-ai/SelfSelectionBar';
import Features from '@/src/components/discret-ai/Features';
import AdvantageGrid from '@/src/components/discret-ai/AdvantageGrid';
import AudioDemo from '@/src/components/discret-ai/AudioDemo';
import EconomicsSection from '@/src/components/discret-ai/EconomicsSection';
import SocialProof from '@/src/components/discret-ai/SocialProof';
import HowItWorks from '@/src/components/discret-ai/HowItWorks';
import LeadCapture from '@/src/components/discret-ai/LeadCapture';
import WhatsAppWidget from '@/src/components/discret-ai/WhatsAppWidget';

export default function DiscretAiPage() {
    return (
        <div style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
            <main>
                <DiscretAiHero />
                <Stats />
                <SelfSelectionBar />
                <Features />
                <AdvantageGrid />
                <AudioDemo />
                <EconomicsSection />
                <SocialProof />
                <HowItWorks />
                <LeadCapture />
            </main>

            <WhatsAppWidget />
        </div>
    );
}
