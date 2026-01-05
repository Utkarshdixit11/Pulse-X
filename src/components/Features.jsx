import React from 'react';
import { Reveal } from './Reveal';

export default function Features() {
    return (
        <section id="features" className="py-32 px-6 bg-white border-b border-neutral-100">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <span className="text-neutral-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">The Ecosystem</span>
                            <h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900">Key Features</h2>
                        </div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    <Reveal>
                        <div className="group cursor-pointer" id="dual-portal">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-neutral-100">
                                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop" alt="Doctor and Patient Connection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wide rounded-sm">Dual Access</div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1 transition-colors group-hover:text-indigo-600">1. Two Connected Worlds</h3>
                                <p className="text-xs text-neutral-500 leading-relaxed mb-3">Dedicated modules for Doctors to manage records, while Patients view their personal health journey.</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay="delay-100">
                        <div className="group cursor-pointer" id="timeline">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-neutral-100">
                                <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1776&auto=format&fit=crop" alt="Timeline Data" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0 transition-all" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wide rounded-sm">Downloadable</div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1 transition-colors group-hover:text-indigo-600">2. Lifetime Timeline</h3>
                                <p className="text-xs text-neutral-500 leading-relaxed mb-3">Track history like "TB at 12 years". Download your complete medical autobiography instantly.</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay="delay-200">
                        <div className="group cursor-pointer" id="gemini-ai">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-neutral-100">
                                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" alt="AI Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wide rounded-sm text-indigo-600">AI Integrated</div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1 transition-colors group-hover:text-indigo-600">3. Gemini AI Analysis</h3>
                                <p className="text-xs text-neutral-500 leading-relaxed mb-3">AI analyzes your lifetime data to predict potential future diseases and suggests daily routines.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
