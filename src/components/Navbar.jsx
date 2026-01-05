import React, { useState, useEffect } from 'react';
import { Activity, Menu, X, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 group/nav`}>
            <div className={`absolute inset-0 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-sm' : 'bg-transparent'}`}></div>

            <div className="relative flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
                <a href="#" className="flex items-center gap-2 z-50 relative">
                    <div className="w-8 h-8 transition-all duration-300 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                        <Activity className="w-5 h-5" />
                    </div>
                    <span className={`font-serif text-lg tracking-tight font-medium transition-colors duration-300 ${isScrolled || isLoginPage ? 'text-neutral-900' : 'text-white'}`}>
                        PulseX
                    </span>
                </a>

                {/* Desktop Menu */}
                {!isLoginPage && (
                    <div className={`hidden lg:flex items-center gap-1 backdrop-blur-md rounded-full px-2 py-1.5 border transition-colors duration-300 ${isScrolled ? 'bg-neutral-100/50 border-neutral-200' : 'bg-white/5 border-white/10'}`}>
                        <a href="#" className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${isScrolled ? 'text-neutral-600 hover:text-neutral-900 hover:bg-white' : 'text-white/90 hover:text-white'}`}>App Overview</a>

                        <div className="group relative">
                            <button className={`flex items-center gap-1 px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${isScrolled ? 'text-neutral-600 hover:text-neutral-900 hover:bg-white' : 'text-white/90 hover:text-white'}`}>
                                Features <ChevronDown className="w-3 h-3 opacity-70" />
                            </button>
                            <div className="absolute top-full left-0 mt-4 w-56 bg-neutral-900 border border-white/10 rounded-xl shadow-xl shadow-black/50 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out p-1.5">
                                <a href="#dual-portal" className="block px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-white/5 rounded-lg transition-colors hover:text-white">Patient & Doctor Portals</a>
                                <a href="#timeline" className="block px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-white/5 rounded-lg transition-colors hover:text-white">Lifetime History Tracker</a>
                                <a href="#gemini-ai" className="block px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-white/5 rounded-lg transition-colors hover:text-white">AI Analysis</a>
                            </div>
                        </div>

                        <div className="group relative">
                            <button className={`flex items-center gap-1 px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${isScrolled ? 'text-neutral-600 hover:text-neutral-900 hover:bg-white' : 'text-white/90 hover:text-white'}`}>
                                For Patients <ChevronDown className="w-3 h-3 opacity-70" />
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-neutral-900 border border-white/10 rounded-xl shadow-2xl shadow-black/50 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out overflow-hidden p-6">
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <h6 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4">Health Tracking</h6>
                                        <div className="space-y-1">
                                            <a href="#" className="block px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-white/5 rounded-lg transition-colors hover:text-white">Timeline View (Childhood to Now)</a>
                                            <a href="#" className="block px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-white/5 rounded-lg transition-colors hover:text-white">Download Reports</a>
                                            <a href="#" className="block px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-white/5 rounded-lg transition-colors hover:text-white">AI Future Predictions</a>
                                        </div>
                                    </div>
                                    <div className="border-l border-white/10 pl-8">
                                        <h6 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4">Doctor Interaction</h6>
                                        <div className="space-y-1">
                                            <a href="#search" className="block px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-white/5 rounded-lg transition-colors hover:text-white">Find by Symptom</a>
                                            <a href="#" className="block px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-white/5 rounded-lg transition-colors hover:text-white">Rate & Review Doctors</a>
                                            <a href="#" className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors mt-2 text-indigo-400 hover:bg-indigo-500/10">
                                                View Dashboard <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="#" className={`px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${isScrolled ? 'text-neutral-600 hover:text-neutral-900 hover:bg-white' : 'text-white/90 hover:text-white'}`}>For Providers</a>
                    </div>
                )}

                {!isLoginPage && (
                    <div className="hidden lg:flex items-center gap-4 z-50">
                        <a href="/login" className={`px-5 py-2 rounded-full text-xs font-semibold transition-colors shadow-lg ${isScrolled ? 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/10' : 'bg-white text-neutral-950 hover:bg-neutral-200 shadow-white/5'}`}>Log In</a>
                    </div>
                )}

                {!isLoginPage && (
                    <button
                        className={`lg:hidden p-2 z-50 relative ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                )}
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-neutral-950 z-40 flex flex-col pt-24 px-6 transition-all duration-300 lg:hidden overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col gap-6 pb-20">
                    <a href="#" className="text-xl font-serif text-white border-b border-white/10 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400">App Features</h3>
                        <a href="#dual-portal" className="text-lg text-neutral-300 font-light" onClick={() => setIsMobileMenuOpen(false)}>Doctor & Patient View</a>
                        <a href="#timeline" className="text-lg text-neutral-300 font-light" onClick={() => setIsMobileMenuOpen(false)}>Lifetime Timeline</a>
                        <a href="#gemini-ai" className="text-lg text-neutral-300 font-light" onClick={() => setIsMobileMenuOpen(false)}>AI Predictions</a>
                    </div>
                    <div className="flex flex-col gap-3 mt-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Tools</h3>
                        <a href="#search" className="text-lg text-neutral-300 font-light" onClick={() => setIsMobileMenuOpen(false)}>Find a Doctor</a>
                        <a href="/login" className="text-sm font-semibold text-white mt-2" onClick={() => setIsMobileMenuOpen(false)}>Log In →</a>
                    </div>

                </div>
            </div>
        </nav>
    );
}
