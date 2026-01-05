import React from 'react';
import { ArrowRight } from 'lucide-react';
import coverPhoto from '../assets/coverphoto.png';

export default function Hero() {
    return (
        <header className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden bg-neutral-950">
            <div className="absolute inset-0 w-full h-full animate-zoom-slow">
                <img src={coverPhoto} alt="Digital Health Dashboard" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/30"></div>
                <div className="bg-indigo-900/10 absolute top-0 right-0 bottom-0 left-0"></div>
            </div>

            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-12 md:pb-16">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.95] tracking-tight mb-4 animate-fade-in-up delay-100 drop-shadow-lg">
                        Your entire life's health, intelligent & <span className="italic font-light text-white/80">predictive.</span>
                    </h1>
                    <p className="text-neutral-300 text-sm md:text-base max-w-xl mb-8 font-light animate-fade-in-up delay-200">
                        Track diseases from childhood to adulthood. Let AI analyze your history to predict future risks and optimize your routine.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-200 mb-6">
                        <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/90 text-xs font-semibold hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-black/10 hover:shadow-indigo-500/10">
                            Explore Features <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white/70 group-hover:text-white" />
                        </button>
                    </div>

                </div>
                <div className="absolute bottom-12 right-6 animate-fade-in-up delay-300 hidden md:flex items-center gap-4 text-white/60">
                    <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
                    <div className="w-12 h-px bg-white/20"></div>
                </div>
            </div>
        </header>
    );
}
