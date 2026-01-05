import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, LayoutDashboard, Users, Calendar, LogOut, Search as SearchIcon, FileText, ChevronRight, X, Menu } from 'lucide-react';

export default function DoctorDashboard() {
    const navigate = useNavigate();
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const patients = [
        { id: "PX-88293", name: "Vansh Dixit", age: 35, condition: "Post-COVID Monitoring", lastVisit: "2 days ago", risk: "Low", weight: "75 kg", height: "178 cm", bloodType: "O+", allergies: "None", history: [{ condition: "TB", date: "Feb 10, 2001", duration: "6 months" }, { condition: "Fracture", date: "June 22, 2012", duration: "8 weeks" }, { condition: "COVID", date: "Mar 15, 2024", duration: "2 weeks" }] },
        { id: "PX-99120", name: "Sita Sharma", age: 42, condition: "Hypertension", lastVisit: "1 week ago", risk: "Medium", weight: "68 kg", height: "165 cm", bloodType: "A+", allergies: "Penicillin", history: [{ condition: "Appendicitis", date: "Aug 12, 2010", duration: "Surgery" }, { condition: "Hypertension", date: "Nov 05, 2020", duration: "Ongoing" }] },
        { id: "PX-11234", name: "Rahul Gupta", age: 28, condition: "Dental Checkup", lastVisit: "Today", risk: "Low", weight: "80 kg", height: "182 cm", bloodType: "B+", allergies: "Pollen", history: [{ condition: "Root Canal", date: "Sep 20, 2018", duration: "3 sittings" }] },
        { id: "PX-77821", name: "Amit Patel", age: 50, condition: "Type 2 Diabetes", lastVisit: "3 days ago", risk: "High", weight: "95 kg", height: "175 cm", bloodType: "AB-", allergies: "Sulfa Drugs", history: [{ condition: "Diabetes Diagnosed", date: "Jan 15, 2015", duration: "Ongoing" }] },
        { id: "PX-33421", name: "Priya Singh", age: 29, condition: "Routine Checkup", lastVisit: "Yesterday", risk: "Low", weight: "62 kg", height: "168 cm", bloodType: "O-", allergies: "None", history: [] },
    ];

    const appointments = [
        { id: 1, patient: "Rahul Gupta", time: "10:00 AM", type: "Checkup", status: "Upcoming" },
        { id: 2, patient: "Sita Sharma", time: "11:30 AM", type: "Follow-up", status: "Upcoming" },
        { id: 3, patient: "Vansh Dixit", time: "02:00 PM", type: "Consultation", status: "Pending" },
    ];

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
                        <span className="font-serif text-lg font-medium text-neutral-900">PulseX Doctor</span>
                    </div>
                    {/* Close button for mobile */}
                    <button className="md:hidden text-neutral-500 hover:text-neutral-900" onClick={() => setIsSidebarOpen(false)}>
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="p-4 flex-1 space-y-1 overflow-y-auto">
                    <SidebarItem icon={<LayoutDashboard />} label="Dashboard" active={activeTab === 'dashboard' && !selectedPatient} onClick={() => { setActiveTab('dashboard'); setSelectedPatient(null); setIsSidebarOpen(false); }} />
                    <SidebarItem icon={<Users />} label="My Patients" active={activeTab === 'patients' && !selectedPatient} onClick={() => { setActiveTab('patients'); setSelectedPatient(null); setIsSidebarOpen(false); }} />
                    <SidebarItem icon={<Calendar />} label="Appointments" active={activeTab === 'appointments' && !selectedPatient} onClick={() => { setActiveTab('appointments'); setSelectedPatient(null); setIsSidebarOpen(false); }} />
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
                            <h1 className="text-xl md:text-2xl font-serif text-neutral-900">Dr. Sharma's Portal</h1>
                            <p className="text-xs text-neutral-500">Cardiology • License #MD-9982</p>
                        </div>
                    </div>
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200 shrink-0">
                        SM
                    </div>
                </header>

                {selectedPatient ? (
                    <div className="animate-fade-in w-full max-w-[100vw] overflow-x-hidden">
                        <PatientDetailView patient={selectedPatient} onBack={() => setSelectedPatient(null)} />
                    </div>
                ) : (
                    <div key={activeTab} className="animate-fade-in w-full max-w-[100vw] overflow-x-hidden">
                        {activeTab === 'dashboard' && <PatientListView patients={patients.slice(0, 3)} onSelect={setSelectedPatient} title="Recent Patients" />}
                        {activeTab === 'patients' && <PatientListView patients={patients} onSelect={setSelectedPatient} title="All Patients Directory" />}
                        {activeTab === 'appointments' && <AppointmentsView appointments={appointments} />}
                    </div>
                )}

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

function PatientListView({ patients, onSelect, title }) {
    return (
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-neutral-100 flex justify-between items-center flex-wrap gap-4">
                <h3 className="font-semibold text-neutral-900">{title}</h3>
                <div className="relative w-full md:w-auto">
                    <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                    <input placeholder="Search records..." className="w-full md:w-auto pl-9 pr-4 py-2 border border-neutral-200 rounded-lg text-xs outline-none focus:border-indigo-500" />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap">
                    <thead className="bg-neutral-50 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Patient Name</th>
                            <th className="px-6 py-4">ID</th>
                            <th className="px-6 py-4">Condition</th>
                            <th className="px-6 py-4">Risk Profile</th>
                            <th className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {patients.map((p, i) => (
                            <tr key={i} className="hover:bg-neutral-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-600">{p.name.split(' ')[0][0]}{p.name.split(' ')[1][0]}</div>
                                        <span className="text-sm font-medium text-neutral-900">{p.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-xs text-neutral-500">{p.id}</td>
                                <td className="px-6 py-4 text-xs text-neutral-700">{p.condition}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${p.risk === 'Low' ? 'bg-green-100 text-green-700' : p.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                                        {p.risk} Risk
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => onSelect(p)} className="text-indigo-600 hover:text-indigo-800 text-xs font-semibold">View Record</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function PatientDetailView({ patient, onBack }) {
    return (
        <div className="space-y-6">
            <button onClick={onBack} className="text-xs font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1">
                ← Back to list
            </button>

            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                    <div className="flex gap-4">
                        <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-xl font-bold text-neutral-500 shrink-0">
                            {patient.name.split(' ')[0][0]}{patient.name.split(' ')[1][0]}
                        </div>
                        <div>
                            <h2 className="text-xl font-serif text-neutral-900">{patient.name}</h2>
                            <p className="text-sm text-neutral-500">Age: {patient.age} • ID: {patient.id}</p>
                            <div className="mt-2 flex gap-2">
                                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded uppercase">Active Patient</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-neutral-100">
                    <div>
                        <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Weight</p>
                        <p className="font-medium text-neutral-900">{patient.weight}</p>
                    </div>
                    <div>
                        <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Height</p>
                        <p className="font-medium text-neutral-900">{patient.height}</p>
                    </div>
                    <div>
                        <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Blood Type</p>
                        <p className="font-medium text-neutral-900">{patient.bloodType}</p>
                    </div>
                    <div>
                        <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Allergies</p>
                        <p className={`font-medium ${patient.allergies !== 'None' ? 'text-red-600' : 'text-neutral-900'}`}>{patient.allergies}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                    <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-indigo-500" /> Medical History
                    </h3>
                    <div className="space-y-3">
                        {patient.history.map((h, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
                                <div className="mt-1 w-2 h-2 rounded-full bg-indigo-400 shrink-0"></div>
                                <div>
                                    <p className="text-sm font-medium text-neutral-900">{h.condition}</p>
                                    <p className="text-xs text-neutral-500">{h.date} • Duration: {h.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                    <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-green-500" /> Vitals & Notes
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                        Patient monitored for post-viral fatigue. Lung capacity showing improvement. Recommended follow-up in 3 months. AI suggests monitoring BP due to family history.
                    </p>
                </div>
            </div>
        </div>
    );
}

function AppointmentsView({ appointments }) {
    return (
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-neutral-100 flex justify-between items-center">
                <h3 className="font-semibold text-neutral-900">Today's Schedule</h3>
                <button className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100">+ New Appointment</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap">
                    <thead className="bg-neutral-50 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Time</th>
                            <th className="px-6 py-4">Patient Name</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {appointments.map((appt, i) => (
                            <tr key={i} className="hover:bg-neutral-50 transition-colors">
                                <td className="px-6 py-4 font-semibold text-neutral-900 text-sm">{appt.time}</td>
                                <td className="px-6 py-4 text-sm text-neutral-700">{appt.patient}</td>
                                <td className="px-6 py-4 text-xs text-neutral-500">{appt.type}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${appt.status === 'Upcoming' ? 'bg-indigo-100 text-indigo-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                        {appt.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-neutral-400 hover:text-indigo-600 mr-3"><FileText className="w-4 h-4" /></button>
                                    <button className="text-neutral-400 hover:text-red-600"><X className="w-4 h-4" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
