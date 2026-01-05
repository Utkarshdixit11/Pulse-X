import React from 'react';
import { Check, ShieldCheck, Brain, Smartphone } from 'lucide-react';

export default function Download() {
    return (
        <section id="download" className="py-24 px-6 bg-white border-t border-neutral-200">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100 flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-neutral-950 p-10 text-white flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-serif mb-4">Start Your Journey</h3>
                        <p className="text-xs text-neutral-400 mb-8 leading-relaxed">Take control of your lifetime health data. Available for iOS and Android.</p>
                        <ul className="space-y-4 text-xs text-neutral-300">
                            <li className="flex items-center gap-3"><Check className="w-3 h-3" /> Secure Data Encryption</li>
                            <li className="flex items-center gap-3"><ShieldCheck className="w-3 h-3" /> Verified Doctors Only</li>
                            <li className="flex items-center gap-3"><Brain className="w-3 h-3" /> AI Health Insights</li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Support</p>
                        <p className="text-sm font-medium">help@pulsex.com</p>
                    </div>
                </div>
                <div className="md:w-2/3 p-10 flex flex-col justify-center">
                    <div className="mb-8">
                        <h4 className="text-neutral-900 font-bold mb-2">Get the Link</h4>
                        <p className="text-xs text-neutral-500 mb-6">Enter your details to receive the download link and early access profile.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <label className="cursor-pointer group">
                            <input type="radio" name="role" className="peer sr-only" defaultChecked />
                            <div className="p-4 rounded-xl border border-neutral-200 bg-white peer-checked:ring-1 transition-all hover:border-indigo-200 peer-checked:border-indigo-500 peer-checked:ring-indigo-500">
                                <span className="text-sm font-semibold text-neutral-900 block">I am a Patient</span>
                                <span className="text-[10px] text-neutral-400">Track History & Find Doctors</span>
                            </div>
                        </label>
                        <label className="cursor-pointer group">
                            <input type="radio" name="role" className="peer sr-only" />
                            <div className="p-4 rounded-xl border border-neutral-200 bg-white peer-checked:ring-1 transition-all hover:border-indigo-200 peer-checked:border-indigo-500 peer-checked:ring-indigo-500">
                                <span className="text-sm font-semibold text-neutral-900 block">I am a Doctor</span>
                                <span className="text-[10px] text-neutral-400">Manage Patients & Records</span>
                            </div>
                        </label>
                    </div>
                    <div className="space-y-4 mb-8">
                        <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                    </div>
                    <button className="w-full py-3.5 bg-neutral-900 text-white rounded-lg text-sm font-semibold hover:bg-neutral-800 transition-transform active:scale-[0.99]">Send Download Link</button>
                </div>
            </div>
        </section>
    );
}
