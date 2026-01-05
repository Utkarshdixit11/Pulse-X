import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';

export default function IntroScreen({ onComplete }) {
    const [phase, setPhase] = useState('pulse'); // pulse, expand, exit

    useEffect(() => {
        // Timeline orchestration
        const timer1 = setTimeout(() => setPhase('expand'), 2500); // Start exit sequence
        const timer2 = setTimeout(() => onComplete(), 3200); // Unmount

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-neutral-950 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-neutral-950 to-neutral-950"></div>
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Particles */}
            <Particles />

            {/* Central Logo Container */}
            <div className="relative z-10 flex flex-col items-center">

                {/* EKG Line Animation Behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] opacity-20 pointer-events-none">
                    <svg viewBox="0 0 300 100" className="w-full h-full stroke-indigo-500 fill-none stroke-2">
                        <motion.path
                            d="M0,50 L20,50 L30,20 L40,80 L50,50 L60,50 L70,20 L80,80 L90,50 L300,50"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "linear" }}
                        />
                    </svg>
                </div>

                <motion.div
                    className="relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: phase === 'expand' ? 20 : 1,
                        opacity: phase === 'expand' ? 0 : 1
                    }}
                    transition={{ duration: 0.8, ease: "circIn" }}
                >
                    {/* The Logo */}
                    <motion.div
                        className="w-24 h-24 bg-gradient-to-tr from-indigo-600 to-indigo-400 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.3)] mb-6"
                        animate={{
                            scale: [1, 1.05, 1],
                            boxShadow: [
                                "0 0 20px rgba(79,70,229,0.3)",
                                "0 0 60px rgba(79,70,229,0.6)",
                                "0 0 20px rgba(79,70,229,0.3)"
                            ]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.5, 1]
                        }}
                    >
                        <Activity className="w-12 h-12 text-white" />
                    </motion.div>
                </motion.div>

                {/* Text Reveal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: phase === 'expand' ? 0 : 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-2">PulseX</h1>
                    <p className="text-indigo-400 text-xs tracking-[0.3em] uppercase">Future Health</p>
                </motion.div>
            </div>

            {/* Loading Bar at Bottom */}
            <motion.div
                className="absolute bottom-12 w-48 h-1 bg-white/10 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <motion.div
                    className="h-full bg-indigo-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </motion.div>

        </motion.div>
    );
}

// Simple Particle System Component
function Particles() {
    // Generate static random positions for hydration consistency, typically you'd use a seed
    // For this demo we'll just map a fixed count
    const count = 20;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(count)].map((_, i) => (
                <Particle key={i} index={i} />
            ))}
        </div>
    );
}

function Particle({ index }) {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const duration = 3 + Math.random() * 5;

    return (
        <motion.div
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
            style={{
                left: `${randomX}%`,
                top: `${randomY}%`
            }}
            animate={{
                y: [0, -100],
                opacity: [0, 1, 0]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
            }}
        />
    )
}
