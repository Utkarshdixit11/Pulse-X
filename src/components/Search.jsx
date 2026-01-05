import React from 'react';
import { Search as SearchIcon, Star } from 'lucide-react';
import { Reveal } from './Reveal';

export default function Search() {
    return (
        <section id="search" className="py-24 px-6 bg-white border-b border-neutral-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <Reveal>
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-50 shadow-2xl shadow-neutral-200/50 border border-white">
                                <div className="absolute inset-0 flex flex-col p-6">
                                    <div className="w-full h-12 bg-white rounded-full shadow-sm border border-neutral-100 mb-6 flex items-center px-4 gap-3 text-sm text-neutral-400">
                                        <SearchIcon className="w-4 h-4 text-neutral-300" /> "Tooth pain", "Fever", "Anxiety"...
                                    </div>
                                    <div className="space-y-3">
                                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-between">
                                            <div className="flex gap-3 items-center">
                                                <div className="w-10 h-10 rounded-full bg-indigo-50"></div>
                                                <div>
                                                    <div className="h-3 w-24 bg-neutral-100 rounded mb-1"></div>
                                                    <div className="h-2 w-16 bg-neutral-50 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                                <span className="text-xs font-bold text-neutral-700">4.9</span>
                                            </div>
                                        </div>
                                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-between opacity-60">
                                            <div className="flex gap-3 items-center">
                                                <div className="w-10 h-10 rounded-full bg-orange-50"></div>
                                                <div>
                                                    <div className="h-3 w-24 bg-neutral-100 rounded mb-1"></div>
                                                    <div className="h-2 w-16 bg-neutral-50 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                                <span className="text-xs font-bold text-neutral-700">4.8</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="order-1 md:order-2">
                        <Reveal delay="delay-100">
                            <span className="text-indigo-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Community Trust</span>
                            <h2 className="text-4xl md:text-5xl tracking-tight text-neutral-900 mb-6">Find Doctors based on <span className="font-serif italic text-neutral-400">Symptoms & Ratings</span></h2>
                            <p className="text-neutral-500 font-light leading-relaxed mb-6">
                                Don't just look for a "Dentist." Search for "Tooth Pain" and find specialists who solve that specific problem. PulseX allows patients to rate doctors after every visit, helping the community.
                            </p>
                            <div className="grid grid-cols-2 gap-8 mt-8 border-t border-neutral-100 pt-8">
                                <div>
                                    <span className="block text-3xl font-serif text-neutral-900 mb-1">Smart</span>
                                    <span className="text-xs text-neutral-400 uppercase tracking-wide">Symptom Search</span>
                                </div>
                                <div>
                                    <span className="block text-3xl font-serif text-neutral-900 mb-1">5.0</span>
                                    <span className="text-xs text-neutral-400 uppercase tracking-wide">Real Ratings</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
