import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Search from '../components/Search';
import Feedback from '../components/Feedback';
import AiInsights from '../components/AiInsights';

import Footer from '../components/Footer';

import { AnimatePresence } from 'framer-motion';
import IntroScreen from '../components/IntroScreen';

export default function Home() {
    const [showIntro, setShowIntro] = React.useState(true);

    return (
        <>
            <AnimatePresence>
                {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
            </AnimatePresence>
            <Navbar />
            <Hero />
            <main>
                <Features />
                <Search />
                <Feedback />
                <AiInsights />
            </main>
            <Footer />
        </>
    );
}
