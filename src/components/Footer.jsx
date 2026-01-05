import React from 'react';
import { Activity, Instagram, Twitter, Linkedin, Smartphone } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-neutral-950 text-white pt-20 pb-10 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <a href="#" className="font-serif text-2xl text-white mb-6 flex items-center gap-2">
                            <Activity className="w-6 h-6 text-indigo-500" /> PulseX
                        </a>
                        <div className="flex gap-4 text-neutral-400">
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-6 text-neutral-200">Product</h4>
                        <ul className="space-y-3 text-xs text-neutral-400 font-light">
                            <li><a href="#" className="hover:text-white">Overview</a></li>
                            <li><a href="#features" className="hover:text-white">Features</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-6 text-neutral-200">Support</h4>
                        <ul className="space-y-3 text-xs text-neutral-400 font-light">
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms</a></li>
                        </ul>
                    </div>

                </div>
                
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
                    <p>© 2026 PulseX Health Technologies. All rights reserved.</p>
                    <div className="flex gap-6"><a href="#" className="hover:text-white">Privacy</a><a href="#" class="hover:text-white">Security</a></div>
                </div>
            </div>
        </footer>
    );
}
