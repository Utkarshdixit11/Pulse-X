import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, LayoutDashboard, History, FileText, Settings, LogOut, ChevronRight, Stethoscope, Star, Download as DownloadIcon, Brain, Clock, BrainCircuit, Search as SearchIcon, Dna, Pill, Menu, X } from 'lucide-react';

export default function PatientDashboard() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('timeline');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-neutral-50 flex">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`w-64 bg-white border-r border-neutral-200 fixed h-full z-40 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 border-b border-neutral-100 flex items-center justify-between text-indigo-600">
                    <div className="flex items-center gap-2">
                        <Activity className="w-6 h-6" />
                        <span className="font-serif text-lg font-medium text-neutral-900">PulseX</span>
                    </div>
                    {/* Close button for mobile */}
                    <button className="md:hidden text-neutral-500 hover:text-neutral-900" onClick={() => setIsSidebarOpen(false)}>
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="p-4 flex-1 space-y-1 overflow-y-auto">
                    <SidebarItem icon={<LayoutDashboard />} label="Overview" active={activeTab === 'overview'} onClick={() => { setActiveTab('overview'); setIsSidebarOpen(false); }} />
                    <SidebarItem icon={<Clock />} label="My Timeline" active={activeTab === 'timeline'} onClick={() => { setActiveTab('timeline'); setIsSidebarOpen(false); }} />
                    <SidebarItem icon={<BrainCircuit />} label="AI Report" active={activeTab === 'ai-report'} onClick={() => { setActiveTab('ai-report'); setIsSidebarOpen(false); }} />
                    <SidebarItem icon={<Dna />} label="Genetic Map" active={activeTab === 'genetic-map'} onClick={() => { setActiveTab('genetic-map'); setIsSidebarOpen(false); }} />
                    <SidebarItem icon={<Pill />} label="Smart Cabinet" active={activeTab === 'smart-cabinet'} onClick={() => { setActiveTab('smart-cabinet'); setIsSidebarOpen(false); }} />
                    <SidebarItem icon={<SearchIcon />} label="Find Doctor" active={activeTab === 'find-doctor'} onClick={() => { setActiveTab('find-doctor'); setIsSidebarOpen(false); }} />
                </nav>

                <div className="p-4 border-t border-neutral-100">
                    <SidebarItem icon={<LogOut />} label="Log Out" onClick={() => navigate('/')} />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-4 md:p-8 w-full transition-all duration-300">
                <header className="flex justify-between items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg" onClick={() => setIsSidebarOpen(true)}>
                            <Menu className="w-6 h-6" />
                        </button>
                        <div>
                            <h1 className="text-xl md:text-2xl font-serif text-neutral-900">Welcome back, Vansh</h1>
                            <p className="text-xs text-neutral-500">Patient ID: PX-88293 • <span className="text-green-600">Premium Member</span></p>
                        </div>
                    </div>
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold border border-indigo-200 shrink-0">
                        VD
                    </div>
                </header>

                <div key={activeTab} className="animate-fade-in w-full max-w-[100vw] overflow-x-hidden">
                    {activeTab === 'timeline' && <TimelineView />}
                    {activeTab === 'ai-report' && <AiReportView />}
                    {activeTab === 'genetic-map' && <GeneticHistoryView />}
                    {activeTab === 'smart-cabinet' && <SmartCabinetView />}
                    {activeTab === 'find-doctor' && <DoctorSearchView />}
                    {activeTab === 'overview' && <OverviewView setActiveTab={setActiveTab} />}
                </div>

            </main>
        </div>
    );
}

function SidebarItem({ icon, label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${active ? 'bg-indigo-50 text-indigo-700' : 'text-neutral-600 hover:bg-neutral-50'}`}
        >
            {React.cloneElement(icon, { size: 18 })}
            {label}
        </button>
    );
}

// ---------------- VIEWS ----------------

function OverviewView({ setActiveTab }) {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                    <div className="flex items-center gap-3 text-indigo-600 mb-2">
                        <History className="w-5 h-5" />
                        <h3 className="font-semibold text-sm text-neutral-900">Medical History</h3>
                    </div>
                    <p className="text-2xl font-serif text-neutral-900 mb-1">12 Years</p>
                    <p className="text-xs text-neutral-500 mb-4">Tracked digitally</p>
                    <button onClick={() => setActiveTab('timeline')} className="text-xs text-indigo-600 font-medium hover:underline">View Timeline →</button>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                    <div className="flex items-center gap-3 text-purple-600 mb-2">
                        <Brain className="w-5 h-5" />
                        <h3 className="font-semibold text-sm text-neutral-900">AI Risk Score</h3>
                    </div>
                    <p className="text-2xl font-serif text-neutral-900 mb-1">Low Risk</p>
                    <p className="text-xs text-neutral-500 mb-4">Based on heredity & lifestyle</p>
                    <button onClick={() => setActiveTab('ai-report')} className="text-xs text-purple-600 font-medium hover:underline">View Analysis →</button>
                </div>
            </div>
        </div>
    )
}

function TimelineView() {
    const events = [
        { year: 2024, age: 35, title: "COVID-19 Follow-up", desc: "Mild symptoms, full recovery. Lung capacity 98%.", hospital: "City General Hospital", doctor: "Dr. Anjali Desai", date: "March 15, 2024", duration: "2 weeks" },
        { year: 2022, age: 33, title: "Routine Checkup", desc: "All vitals normal. Vitamin D deficiency noted.", hospital: "Wellness Clinic", doctor: "Dr. Rajesh Verma", date: "Nov 10, 2022", duration: "N/A" },
        { year: 2012, age: 23, title: "Fracture - Left Arm", desc: "Hairline fracture from sports injury. Healed with cast.", hospital: "Ortho Care Center", doctor: "Dr. Priya Kapoor", date: "June 22, 2012", duration: "8 weeks" },
        { year: 2001, age: 12, title: "Tuberculosis (TB)", desc: "Diagnosed early. 6-month course completed effectively.", hospital: "Community Health", doctor: "Dr. Amit Kumar", date: "Feb 10, 2001", duration: "6 months" },
    ];

    return (
        <div className="max-w-3xl">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-neutral-900">Lifetime Disease Timeline</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-semibold hover:bg-neutral-800">
                    <DownloadIcon className="w-4 h-4" /> Download Report
                </button>
            </div>

            <div className="relative border-l-2 border-indigo-100 ml-3 space-y-12 pb-12">
                {events.map((event, i) => (
                    <div key={i} className="relative pl-8 group">
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white bg-indigo-500 group-hover:scale-125 transition-transform shadow-md"></div>
                        <span className="text-xs font-bold text-indigo-500 mb-1 block uppercase tracking-wider">{event.year} • Age {event.age}</span>
                        <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-serif text-lg text-neutral-900 mb-2">{event.title}</h3>
                                    <p className="text-sm text-neutral-600">{event.desc}</p>
                                </div>
                                <button className="text-neutral-400 hover:text-indigo-600 transition-colors p-1" title="Download Report">
                                    <DownloadIcon className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Hover Details */}
                            <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                <div className="pt-4 mt-4 border-t border-neutral-100 grid grid-cols-2 gap-4 text-xs">
                                    <div>
                                        <p className="text-neutral-400 uppercase tracking-wider font-bold text-[10px] mb-1">Hospital</p>
                                        <p className="font-medium text-neutral-800">{event.hospital}</p>
                                    </div>
                                    <div>
                                        <p className="text-neutral-400 uppercase tracking-wider font-bold text-[10px] mb-1">Doctor</p>
                                        <p className="font-medium text-neutral-800">{event.doctor}</p>
                                    </div>
                                    <div className="col-span-2 grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-neutral-400 uppercase tracking-wider font-bold text-[10px] mb-1">Date Visited</p>
                                            <p className="font-medium text-neutral-800">{event.date}</p>
                                        </div>
                                        <div>
                                            <p className="text-neutral-400 uppercase tracking-wider font-bold text-[10px] mb-1">Duration of Cure</p>
                                            <p className="font-medium text-neutral-800">{event.duration}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function AiReportView() {
    return (
        <div className="max-w-4xl">
            <div className="bg-neutral-900 text-white p-8 rounded-3xl mb-8 relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-2 text-indigo-400 mb-2">
                        <Brain className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-widest">AI Analysis</span>
                    </div>
                    <h2 className="text-3xl font-serif mb-4">Future Health Prediction</h2>
                    <p className="text-neutral-400 text-sm max-w-2xl leading-relaxed">
                        Based on your history of <strong>TB at age 12</strong> and recent <strong>COVID-19</strong> recovery,
                        AI suggests monitoring respiratory health closely. There is a <span className="text-yellow-400 font-bold">15% higher risk</span> of
                        respiratory sensitivity in later years compared to the average population.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>

            <h3 className="font-semibold text-neutral-900 mb-4">Suggested Routine</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    "Daily 20m Cardio (Zone 2) to strengthen lungs",
                    "Annual Chest X-Ray recommended starting age 40",
                    "Vitamin D supplements to support immunity",
                    "Avoid high pollution areas or use N95 masks"
                ].map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-neutral-100 flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">{i + 1}</div>
                        <p className="text-sm text-neutral-700">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function DoctorSearchView() {
    const doctors = [
        { name: "Dr. Anjali Desai", spec: "MD, Cardiologist", rating: 4.9, reviews: 210, loc: "City Heart Center", img: "bg-red-100", visited: true },
        { name: "Dr. Rajesh Verma", spec: "MD, Dermatologist", rating: 4.8, reviews: 185, loc: "Skin & Glow Clinic", img: "bg-pink-100", visited: true },
        { name: "Dr. Priya Kapoor", spec: "MBBS, General Physician", rating: 4.5, reviews: 320, loc: "Community Medical", img: "bg-blue-100", visited: true },
        { name: "Dr. Amit Kumar", spec: "MD, Pediatrician", rating: 4.9, reviews: 412, loc: "Little Smiles Hospital", img: "bg-yellow-100", visited: true },
        { name: "Dr. Ishaan Kumar", spec: "MS, Orthopedist", rating: 4.6, reviews: 156, loc: "Bone & Joint Clinic", img: "bg-green-100" },
        { name: "Dr. Myra Singh", spec: "MD, Gynecologist", rating: 4.7, reviews: 289, loc: "Women's Wellness", img: "bg-purple-100" },
        { name: "Dr. Reyansh Joshi", spec: "MD, Neurologist", rating: 4.9, reviews: 134, loc: "Brain & Nerve Institute", img: "bg-indigo-100" },
        { name: "Dr. Sai Mehta", spec: "MS, Ophthalmologist", rating: 4.4, reviews: 198, loc: "Vision Care Center", img: "bg-teal-100" },
        { name: "Dr. Arjun Nair", spec: "MD, Psychiatrist", rating: 4.8, reviews: 145, loc: "Mind Harmony Clinic", img: "bg-orange-100" },
        { name: "Dr. Zara Khan", spec: "BDS, Dentist", rating: 4.5, reviews: 220, loc: "Bright Smiles Dental", img: "bg-cyan-100" },
        { name: "Dr. Vivaan Shah", spec: "MS, ENT Specialist", rating: 4.6, reviews: 176, loc: "Ear Nose Throat Care", img: "bg-lime-100" },
        { name: "Dr. Aditi Agarwal", spec: "MD, Endocrinologist", rating: 4.7, reviews: 112, loc: "Hormone Health Center", img: "bg-rose-100" },
        { name: "Dr. Kabir Malhotra", spec: "MS, Urologist", rating: 4.5, reviews: 98, loc: "Mens Health Clinic", img: "bg-sky-100" },
        { name: "Dr. Pari Choudhury", spec: "MD, Oncologist", rating: 4.9, reviews: 167, loc: "Hope Cancer Institute", img: "bg-fuchsia-100" },
        { name: "Dr. Rohan Saxena", spec: "MD, Gastroenterologist", rating: 4.6, reviews: 143, loc: "Digestive Care Clinic", img: "bg-emerald-100" },
        { name: "Dr. Vikram Singh", spec: "BDS, Dentist", rating: 1.5, reviews: 12, loc: "City Dental", img: "bg-gray-100", negativeFeedback: ["Unnecessary extractions suggested", "Hygiene concerns", "Rude behavior"] },
        { name: "Dr. Neha Kapoor", spec: "MD, Dermatologist", rating: 2.0, reviews: 28, loc: "Skin Deep Clinic", img: "bg-gray-100", negativeFeedback: ["Prescribed expensive supplements", "Rushed consultation", "Wait time > 2 hours"] },
        { name: "Dr. Rahul Malhotra", spec: "MS, Orthopedist", rating: 1.8, reviews: 15, loc: "Joint Care Center", img: "bg-gray-100", negativeFeedback: ["Misdiagnosed fracture", "Forced surgery option", "Unfriendly staff"] },
    ];

    return (
        <div className="max-w-3xl">
            <div className="bg-white p-2 rounded-xl border border-neutral-200 shadow-sm mb-8 flex gap-2">
                <input placeholder="Search symptoms (e.g. Tooth pain)" className="flex-1 px-4 py-2 text-sm outline-none" />
                <button className="bg-neutral-900 text-white px-6 py-2 rounded-lg text-xs font-semibold">Search</button>
            </div>

            <div className="space-y-4">
                {doctors.map((doc, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-neutral-200 flex flex-col sm:flex-row gap-5 items-start sm:items-center hover:border-indigo-300 transition-colors group">
                        <div className={`w-16 h-16 rounded-full ${doc.img} flex-shrink-0 flex items-center justify-center text-neutral-500 font-bold`}>
                            {doc.name.split(' ')[1][0]}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-serif text-lg text-neutral-900">{doc.name}</h3>
                                    <p className="text-xs text-neutral-500 uppercase tracking-wide">{doc.spec}</p>
                                </div>
                                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg border ${doc.rating <= 2 ? 'bg-red-50 border-red-100' : 'bg-neutral-50 border-neutral-100'}`}>
                                    <Star className={`w-3 h-3 ${doc.rating <= 2 ? 'text-red-500 fill-current' : (doc.rating > 4 ? 'text-yellow-400 fill-current' : 'text-neutral-300')}`} />
                                    <span className={`text-xs font-bold ${doc.rating <= 2 ? 'text-red-600' : 'text-neutral-700'}`}>{doc.rating}</span>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center gap-4 text-xs text-neutral-400">
                                <span>{doc.reviews} Feedback</span>
                                <span>•</span>
                                <span>{doc.loc}</span>
                            </div>

                            {/* Negative Feedback Hover */}
                            {doc.negativeFeedback && (
                                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                                    <div className="mt-3 pt-3 border-t border-red-100 bg-red-50 p-2 rounded-lg">
                                        <p className="text-[10px] font-bold text-red-800 uppercase tracking-wider mb-1">Patient Concerns</p>
                                        <ul className="list-disc pl-3">
                                            {doc.negativeFeedback.map((point, idx) => (
                                                <li key={idx} className="text-xs text-red-600">{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-2 w-full sm:w-auto">
                            <button className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-semibold hover:bg-indigo-100">Book Visit</button>
                            {doc.visited && (
                                <button className="px-4 py-2 border border-neutral-200 text-neutral-600 rounded-lg text-xs font-semibold hover:bg-neutral-50">Give Feedback</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function GeneticHistoryView() {
    const [selectedAncestor, setSelectedAncestor] = useState(null);

    const ancestors = [
        { id: 'gp1', role: 'Grandfather (Paternal)', condition: 'Hypertension', risk: 'High', x: 20, y: 10, riskColor: 'text-red-600', riskBg: 'bg-red-100', borderColor: 'border-red-200' },
        { id: 'gm1', role: 'Grandmother (Paternal)', condition: 'Healthy', risk: 'None', x: 80, y: 10, riskColor: 'text-green-600', riskBg: 'bg-green-100', borderColor: 'border-green-200' },
        { id: 'f1', role: 'Father', condition: 'Type 2 Diabetes', risk: 'Medium', x: 50, y: 40, riskColor: 'text-orange-600', riskBg: 'bg-orange-100', borderColor: 'border-orange-200' },
    ];

    return (
        <div className="max-w-4xl min-h-[600px] relative">
            <div className="mb-8">
                <div className="flex items-center gap-2 text-indigo-600 mb-2">
                    <Dna className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">Hereditary Health Map</span>
                </div>
                <h2 className="text-2xl font-serif text-neutral-900">Interactive Family Tree</h2>
                <p className="text-sm text-neutral-500">Click on an ancestor to trace genetic risk pathways.</p>
            </div>

            {/* Visualizaion Container */}
            <div className="relative h-[500px] bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden p-8">

                {/* SVG Lines Layer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {/* Grandparents to Father */}
                    <path d="M 180 110 C 180 200, 400 100, 400 240" fill="none" stroke="#e5e5e5" strokeWidth="2" />
                    <path d="M 680 110 C 680 200, 400 100, 400 240" fill="none" stroke="#e5e5e5" strokeWidth="2" />

                    {/* Father to User */}
                    <path d="M 400 320 C 400 380, 400 380, 400 450" fill="none" stroke="#e5e5e5" strokeWidth="2" />

                    {/* Active Risk Pathway Animation */}
                    {selectedAncestor?.id === 'gp1' && (
                        <>
                            <path d="M 180 110 C 180 200, 400 100, 400 240" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="10" className="animate-dash" />
                            <path d="M 400 320 C 400 380, 400 380, 400 450" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="10" className="animate-dash delay-700" />
                        </>
                    )}
                    {selectedAncestor?.id === 'f1' && (
                        <path d="M 400 320 C 400 380, 400 380, 400 450" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="10" className="animate-dash" />
                    )}
                </svg>

                {/* Nodes */}
                {/* Grandparents Row */}
                <div className="absolute top-10 left-10 right-10 flex justify-between px-20 z-10">
                    {ancestors.slice(0, 2).map(ancestor => (
                        <AncestorCard key={ancestor.id} data={ancestor} selected={selectedAncestor?.id === ancestor.id} onClick={() => setSelectedAncestor(ancestor)} />
                    ))}
                </div>

                {/* Parents Row */}
                <div className="absolute top-[240px] left-0 right-0 flex justify-center z-10">
                    <AncestorCard key={ancestors[2].id} data={ancestors[2]} selected={selectedAncestor?.id === ancestors[2].id} onClick={() => setSelectedAncestor(ancestors[2])} />
                </div>

                {/* User Node */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
                    <div className="w-48 bg-neutral-900 text-white p-4 rounded-xl border-2 border-neutral-800 shadow-xl flex flex-col items-center relative">
                        <div className="w-3 h-3 bg-neutral-900 border border-neutral-700 absolute -top-1.5 rotate-45"></div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">You</span>
                        <div className="font-serif">Vansh</div>

                        {selectedAncestor && (
                            <div className="mt-3 pt-3 border-t border-neutral-800 w-full text-center animate-fade-in">
                                <p className="text-[10px] text-neutral-400 mb-1">Inherited Risk:</p>
                                <p className={`text-xs font-bold ${selectedAncestor.riskColor.replace('text-', 'text-')}`}>{selectedAncestor.risk} from {selectedAncestor.role.split(' ')[0]}</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            <style>{`
                .animate-dash {
                    animation: dash 1.5s linear infinite;
                }
                @keyframes dash {
                    to {
                        stroke-dashoffset: -40;
                    }
                }
            `}</style>
        </div>
    );
}

function AncestorCard({ data, selected, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`w-40 bg-white p-4 rounded-xl border-2 text-left transition-all duration-300 relative ${selected ? `border-indigo-600 ring-4 ring-indigo-50 shadow-xl scale-105` : 'border-neutral-100 shadow-sm hover:border-indigo-200'}`}
        >
            <div className={`w-8 h-8 rounded-full mb-3 flex items-center justify-center text-xs font-bold ${data.riskBg} ${data.riskColor}`}>
                {data.role[0]}
            </div>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">{data.role}</p>
            <p className="text-sm font-semibold text-neutral-900 leading-tight mb-2">{data.condition}</p>
            <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${data.riskBg} ${data.riskColor}`}>
                {data.risk} Risk
            </div>

            {/* Connector Dot */}
            <div className={`absolute left-1/2 -bottom-1.5 w-3 h-3 bg-white border-2 border-inherit rounded-full -translate-x-1/2`}></div>
            {data.role.includes('Grand') && <div className={`absolute left-1/2 -bottom-1.5 w-3 h-3 bg-white border-2 border-inherit rounded-full -translate-x-1/2`}></div>}
        </button>
    )
}

function SmartCabinetView() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const drugDatabase = [
        { name: "Amoxicillin", type: "Antibiotic", interaction: "Critical: Allergic to Penicillin", score: 10, safe: false, reason: "Patient has history of severe reaction to Penicillin (2001)." },
        { name: "Aspirin", type: "Pain Reliever", interaction: "Caution: May irritate stomach lining", score: 65, safe: false, reason: "Patient has history of Gastritis (2022). Use with food." },
        { name: "Paracetamol", type: "Analgesic", interaction: "Safe: No known interactions", score: 98, safe: true, reason: "Compatible with current profile." },
        { name: "Ibuprofen", type: "NSAID", interaction: "Caution: Renal stress possible", score: 70, safe: true, reason: "Safe for short duration. Drink plenty of water." },
    ];

    const handleSearch = () => {
        const drug = drugDatabase.find(d => d.name.toLowerCase() === searchQuery.toLowerCase());
        setSearchResult(drug || { notFound: true });
    };

    return (
        <div className="max-w-2xl">
            <div className="mb-8">
                <div className="flex items-center gap-2 text-indigo-600 mb-2">
                    <Pill className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-widest">Smart Cabinet</span>
                </div>
                <h2 className="text-2xl font-serif text-neutral-900">Interaction Checker</h2>
                <p className="text-sm text-neutral-500">Scan or search a medication to verify safety against your lifetime history.</p>
            </div>

            <div className="bg-white p-2 rounded-xl border border-neutral-200 shadow-sm mb-8 flex gap-2">
                <input
                    placeholder="Search medication (e.g. Amoxicillin)"
                    className="flex-1 px-4 py-3 text-sm outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button onClick={handleSearch} className="bg-neutral-900 text-white px-6 py-2 rounded-lg text-xs font-semibold hover:bg-neutral-800">
                    Check Safety
                </button>
            </div>

            {searchResult && !searchResult.notFound && (
                <div className="animate-fade-in space-y-4">
                    <div className={`p-6 rounded-2xl border-2 ${searchResult.safe ? (searchResult.score < 80 ? 'bg-yellow-50 border-yellow-100' : 'bg-green-50 border-green-100') : 'bg-red-50 border-red-100'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-1">{searchResult.name}</h3>
                                <div className="inline-block px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider bg-white/50 text-neutral-500">{searchResult.type}</div>
                            </div>
                            <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center flex-col ${searchResult.safe ? (searchResult.score < 80 ? 'border-yellow-200 text-yellow-700' : 'border-green-200 text-green-700') : 'border-red-200 text-red-700'}`}>
                                <span className="text-xl font-bold">{searchResult.score}</span>
                                <span className="text-[8px] uppercase font-bold">Score</span>
                            </div>
                        </div>

                        <div className="bg-white/60 p-4 rounded-xl">
                            <h4 className={`text-sm font-bold mb-2 ${searchResult.safe ? (searchResult.score < 80 ? 'text-yellow-800' : 'text-green-800') : 'text-red-800'}`}>
                                {searchResult.interaction}
                            </h4>
                            <p className="text-xs text-neutral-600 leading-relaxed">
                                {searchResult.reason}
                            </p>
                        </div>
                    </div>

                    {!searchResult.safe && (
                        <div className="bg-neutral-900 text-white p-4 rounded-xl flex items-center gap-4">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shrink-0 animate-pulse">
                                <Activity className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Do Not Take</p>
                                <p className="text-xs text-neutral-400">High risk of adverse reaction. Consult Dr. Desai immediately.</p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {!searchResult && (
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-neutral-900 border-b border-neutral-100 pb-2 mb-2">My Smart Cabinet</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {drugDatabase.map((drug, i) => (
                            <button key={i} onClick={() => { setSearchQuery(drug.name); setSearchResult(drug); }} className="text-left p-3 rounded-xl border border-neutral-100 hover:border-indigo-200 hover:bg-neutral-50 transition-all group">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-neutral-900 text-sm">{drug.name}</span>
                                    <div className={`w-2 h-2 rounded-full ${drug.safe ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                </div>
                                <p className="text-[10px] text-neutral-500 uppercase tracking-wider">{drug.type}</p>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {searchResult && searchResult.notFound && (
                <div className="text-center py-12 bg-neutral-50 rounded-xl border border-dashed border-neutral-300">
                    <Pill className="w-8 h-8 text-neutral-300 mx-auto mb-2" />
                    <p className="text-sm text-neutral-500">Medication not found in database.</p>
                </div>
            )}
        </div>
    );
}
