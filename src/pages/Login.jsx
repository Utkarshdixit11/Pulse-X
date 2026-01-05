import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Stethoscope, UserCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Login() {
    const [role, setRole] = useState('patient');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (role === 'patient') {
            navigate('/patient/dashboard');
        } else {
            navigate('/doctor/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col">
            <Navbar />

            <div className="flex-1 flex items-center justify-center p-6 pt-24">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden">

                    <div className="p-8 text-center border-b border-neutral-50 bg-neutral-900 text-white">
                        <Activity className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
                        <h2 className="text-2xl font-serif">Welcome Back</h2>
                        <p className="text-neutral-400 text-xs">Sign in to access your health ecosystem</p>
                    </div>

                    <div className="p-8">
                        <div className="flex bg-neutral-100 p-1 rounded-xl mb-8">
                            <button
                                onClick={() => setRole('patient')}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg transition-all ${role === 'patient' ? 'bg-white text-indigo-600 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`}
                            >
                                <UserCircle className="w-4 h-4" /> Patient
                            </button>
                            <button
                                onClick={() => setRole('doctor')}
                                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg transition-all ${role === 'doctor' ? 'bg-white text-indigo-600 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`}
                            >
                                <Stethoscope className="w-4 h-4" /> Doctor
                            </button>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-neutral-600 mb-1.5">{role === 'patient' ? 'Patient ID / Email' : 'Doctor License / Email'}</label>
                                <input
                                    type="email"
                                    defaultValue="demo@pulsex.com"
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all bg-neutral-50"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-neutral-600 mb-1.5">Password</label>
                                <input
                                    type="password"
                                    defaultValue="password"
                                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all bg-neutral-50"
                                />
                            </div>

                            <button type="submit" className="w-full py-3.5 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all active:scale-[0.99] shadow-lg shadow-indigo-200">
                                Log In as {role === 'patient' ? 'Patient' : 'Doctor'}
                            </button>
                        </form>
                    </div>

                    <div className="bg-neutral-50 p-4 text-center border-t border-neutral-100">
                        <span className="text-xs text-neutral-500">Don't have an account? <a href="#" className="text-indigo-600 font-semibold hover:underline">Sign up</a></span>
                    </div>

                </div>
            </div>
        </div>
    );
}
