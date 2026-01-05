import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BrainCircuit, Sparkles, ChevronsLeftRight } from 'lucide-react';
import { Reveal } from './Reveal';

export default function AiInsights() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);
    const beforeImageRef = useRef(null);

    const updateSliderPosition = useCallback((clientX) => {
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        let position = ((clientX - rect.left) / rect.width) * 100;
        if (position < 0) position = 0;
        if (position > 100) position = 100;
        setSliderPosition(position);
    }, []);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = useCallback((e) => {
        if (!isDragging) return;
        updateSliderPosition(e.clientX);
    }, [isDragging, updateSliderPosition]);

    const handleTouchStart = () => setIsDragging(true);
    const handleTouchEnd = () => setIsDragging(false);

    const handleTouchMove = useCallback((e) => {
        if (!isDragging) return;
        updateSliderPosition(e.touches[0].clientX);
    }, [isDragging, updateSliderPosition]);

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    // Effect to keep the before image width synced with slider width to create the reveal effect
    useEffect(() => {
        const updateWidth = () => {
            if (sliderRef.current && beforeImageRef.current) {
                beforeImageRef.current.style.width = `${sliderRef.current.offsetWidth}px`;
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);


    return (
        <section id="ai-insights" className="py-32 px-6 bg-neutral-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-5">
                        <Reveal>
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block text-indigo-400">AI Integration</span>
                            <h2 className="text-4xl md:text-5xl tracking-tight mb-6">Predicting Your <br /><span className="font-serif italic text-neutral-500">Future Health</span></h2>
                            <p className="text-neutral-400 font-light leading-relaxed mb-6 text-sm">
                                PulseX analyzes lifetime disease patterns (like TB at 12 and COVID at 35) to forecast potential risks. It suggests preventive measures customized to your unique biological history.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-4 p-4 border border-white/10 rounded-lg bg-white/5">
                                    <div className="p-2 rounded-md bg-indigo-500/10 text-indigo-400">
                                        <BrainCircuit className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold mb-1">Pattern Recognition</h4>
                                        <p className="text-xs text-neutral-400">Identifies correlations between childhood illnesses and adult conditions.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 border border-white/10 rounded-lg bg-white/5">
                                    <div className="p-2 rounded-md bg-indigo-500/10 text-indigo-400">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold mb-1">Preventive Routines</h4>
                                        <p className="text-xs text-neutral-400">Generates daily health checklists to mitigate future risks.</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-7">
                        <Reveal delay="delay-100">
                            <div
                                className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shadow-2xl comparison-slider group"
                                id="comparisonSlider"
                                ref={sliderRef}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                            >
                                {/* AI Projection Layer */}
                                <div className="absolute inset-0 w-full h-full bg-indigo-900 flex items-center justify-center select-none">
                                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay pointer-events-none" alt="AI Projection" />
                                    <div className="relative z-10 text-center pointer-events-none">
                                        <h3 className="text-2xl font-serif text-white mb-2">AI Projected Health Path</h3>
                                        <p className="text-indigo-200 text-xs">Optimized Routine + Risk Mitigation</p>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-indigo-600/90 backdrop-blur px-2 py-1 text-[10px] font-bold tracking-wider rounded text-white z-10 pointer-events-none">AI PREDICTION</div>

                                {/* Raw Data Layer */}
                                <div className="comparison-item z-20 shadow-[4px_0_24px_rgba(0,0,0,0.5)] border-r border-white/20" style={{ width: `${sliderPosition}%` }}>
                                    <div className="absolute inset-0 h-full bg-neutral-800 flex items-center justify-center select-none" ref={beforeImageRef}>
                                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay pointer-events-none" alt="Raw Medical Records" />
                                        <div className="relative z-10 text-center pointer-events-none">
                                            <h3 className="text-2xl font-serif text-white mb-2">Raw Medical History</h3>
                                            <p className="text-neutral-400 text-xs">TB (12y) • COVID (35y) • Fractures</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-2 py-1 text-[10px] font-bold tracking-wider rounded text-white pointer-events-none">YOUR HISTORY</div>
                                </div>

                                {/* Handle */}
                                <div className="comparison-handle" style={{ left: `${sliderPosition}%` }}>
                                    <div className="comparison-circle group-hover:scale-110">
                                        <ChevronsLeftRight className="w-4 h-4 text-neutral-900" />
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
