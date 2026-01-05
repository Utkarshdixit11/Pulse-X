import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Reveal } from './Reveal';

export default function Feedback() {
    return (
        <section id="feedback" className="py-24 px-6 bg-white border-b border-neutral-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    <div className="md:w-1/2">
                        <Reveal>
                            <span className="text-indigo-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Transparent Healthcare</span>
                            <h2 className="text-4xl md:text-5xl tracking-tight text-neutral-900 mb-6">Real-Time <span className="font-serif italic text-neutral-400">Doctor Feedback</span></h2>
                            <p className="text-neutral-500 font-light leading-relaxed mb-8">
                                Your voice filters the ecosystem. After every visit, patients submit verified reviews. This authentic data helps the community identify the most compassionate care providers and avoid those who fall short.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start group hover:bg-neutral-50 p-4 rounded-xl transition-colors duration-300">
                                    <div className="p-3 bg-green-50 text-green-600 rounded-lg group-hover:scale-110 transition-transform">
                                        <ThumbsUp className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-neutral-900 text-sm">Recognize Excellence</h4>
                                        <p className="text-xs text-neutral-500 mt-1">Found a gem? Upvote doctors who listen and care.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start group hover:bg-neutral-50 p-4 rounded-xl transition-colors duration-300">
                                    <div className="p-3 bg-red-50 text-red-500 rounded-lg group-hover:scale-110 transition-transform">
                                        <ThumbsDown className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-neutral-900 text-sm">Flag Concerns</h4>
                                        <p className="text-xs text-neutral-500 mt-1">Help others avoid bad experiences by sharing honest concerns.</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <Reveal delay="delay-100">
                            <div className="relative">
                                {/* Abstract Decorative Elements */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
                                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-50 rounded-full blur-3xl opacity-60"></div>

                                {/* Review Card 1 (Positive) */}
                                <div className="relative bg-white p-6 rounded-2xl shadow-xl shadow-neutral-200/50 border border-neutral-100 mb-4 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex gap-3">
                                            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs">JD</div>
                                            <div>
                                                <h5 className="text-sm font-semibold text-neutral-900">Dr. Ananya Sharma</h5>
                                                <p className="text-[10px] text-neutral-500">Cardiologist • Seen 2 days ago</p>
                                            </div>
                                        </div>
                                        <div className="flex text-yellow-400 gap-0.5">
                                            <Star className="w-3 h-3 fill-current" />
                                            <Star className="w-3 h-3 fill-current" />
                                            <Star className="w-3 h-3 fill-current" />
                                            <Star className="w-3 h-3 fill-current" />
                                            <Star className="w-3 h-3 fill-current" />
                                        </div>
                                    </div>
                                    <p className="text-xs text-neutral-600 italic bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                                        "Actually listened to my concerns about chest pain instead of rushing. The AI timeline feature helped show her my history perfectly."
                                    </p>
                                    <div className="flex gap-2 mt-3 justify-end">
                                        <span className="text-[10px] bg-green-50 text-green-600 px-2 py-1 rounded-full font-medium flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Verified Visit</span>
                                    </div>
                                </div>

                                {/* Review Card 2 (Negative - illustrating the transparency) */}
                                <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-neutral-100 opacity-60 hover:opacity-100 transform -rotate-1 hover:rotate-0 transition-all duration-500 scale-95 translate-y-[-10px] -z-10 hover:z-10 hover:scale-100 hover:translate-y-0">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex gap-3">
                                            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 font-bold text-xs">AS</div>
                                            <div>
                                                <h5 className="text-sm font-semibold text-neutral-900">Dr. Rajesh Gupta</h5>
                                                <p className="text-[10px] text-neutral-500">Dentist • Seen 1 week ago</p>
                                            </div>
                                        </div>
                                        <div className="flex text-neutral-300 gap-0.5">
                                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                            <Star className="w-3 h-3" />
                                            <Star className="w-3 h-3" />
                                            <Star className="w-3 h-3" />
                                        </div>
                                    </div>
                                    <p className="text-xs text-neutral-600 italic bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                                        "Wait time was over 45 minutes and the diagnosis felt rushed. Would not recommend."
                                    </p>
                                </div>

                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
