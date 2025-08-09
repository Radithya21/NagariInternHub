import { useEffect, useState } from 'react';
import axios from 'axios';
import BottomNav from '../components/BottomNav';

const Connect = () => {
    const [pegawai, setPegawai] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/employees')
            .then((res) => setPegawai(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col pb-24">
            <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 pt-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2">Member Directory</h1>
                <p className="text-gray-500 text-center mb-8">Temukan anggota tim terbaik kami</p>
                <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                    <input
                        type="text"
                        placeholder="keywords"
                        className="flex-1 rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white shadow-sm"
                        // onChange={...} // search logic if needed
                    />
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium shadow-sm">
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            Semua Posisi
                        </button>
                        <button className="px-5 py-2 rounded-lg bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition">Search</button>
                    </div>
                </div>
                <div className="text-gray-500 text-sm mb-4">Menampilkan {pegawai.length} dari {pegawai.length} anggota</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pegawai.map((pgw) => (
                        <div key={pgw.id} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center relative group transition hover:shadow-lg">
                            <div className="relative mb-4">
                                {pgw.photo_url ? (
                                    <img
                                        src={`http://localhost:5000/${pgw.photo_url}`}
                                        alt={pgw.name}
                                        className="h-28 w-28 object-cover rounded-full border-4 border-gray-100 shadow"
                                    />
                                ) : (
                                    <div className="h-28 w-28 rounded-full bg-gray-100 flex items-center justify-center text-gray-300 text-4xl font-bold border-4 border-gray-100 shadow">
                                        <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="20" cy="12" r="8" /><path d="M2 38v-2a8 8 0 018-8h20a8 8 0 018 8v2" /></svg>
                                    </div>
                                )}
                                <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-white bg-gradient-to-tr from-blue-400 to-orange-400"></span>
                            </div>
                            <div className="text-lg font-bold text-gray-900 text-center leading-tight">{pgw.name}</div>
                            <div className="text-gray-500 text-center text-base mb-1">"{pgw.nickname || pgw.name.split(' ')[0]}"</div>
                            <div className="mb-3">
                                <span className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white font-semibold text-sm shadow">{pgw.division}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <a
                                    href={pgw.linkedin_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-4 py-1.5 border border-blue-500 text-blue-600 rounded-full font-medium text-sm hover:bg-blue-50 transition"
                                >
                                    <svg width="16" height="16" fill="currentColor" className="inline-block"><path d="M14.5 2h-13A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2zM5 12H3V6h2zm-1-7a1 1 0 110-2 1 1 0 010 2zm9 7h-2V9c0-.6-.4-1-1-1s-1 .4-1 1v3H7V6h2v1c.3-.6 1-1 1.7-1 1.3 0 2.3 1 2.3 2.3V12z"/></svg>
                                    LinkedIn
                                </a>
                                <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><circle cx="7" cy="7" r="6" /><path d="M7 4v3l2 1" /></svg>
                                    Verified
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BottomNav />
        </div>
    );
};

export default Connect;
