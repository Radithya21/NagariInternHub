import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import BottomNav from '../components/BottomNav';

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            when: 'beforeChildren',
            staggerChildren: 0.13
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1]
        }
    }
};

const FILTER_OPTIONS = [
    { label: 'Semua Posisi', value: '' },
    { label: 'IT Support', value: 'IT Support' },
    { label: 'Quality Assurance', value: 'Quality Assurance' },
    { label: 'Keamanan Siber', value: 'Keamanan Siber' },
    { label: 'Pengembangan', value: 'Pengembangan' },
];

const Connect = () => {
    const navigate = useNavigate();
    const [pegawai, setPegawai] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [filteredPegawai, setFilteredPegawai] = useState([]);

    useEffect(() => {
        // Proteksi autentikasi
        const token = localStorage.getItem('token');
        if (!token) {
            if (!sessionStorage.getItem('redirectedToLogin')) {
                toast.dismiss();
                toast.error('Anda harus login untuk mengakses halaman ini.');
                sessionStorage.setItem('redirectedToLogin', 'true');
            }
            navigate('/login', { replace: true });
            return;
        }
        // Jika sudah login, hapus flag agar toast bisa muncul lagi jika logout
        sessionStorage.removeItem('redirectedToLogin');
    }, [navigate]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/employees')
            .then((res) => setPegawai(res.data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        let result = pegawai;
        if (filter) {
            result = result.filter(p => p.position && p.position.toLowerCase() === filter.toLowerCase());
        }
        if (search) {
            result = result.filter(p =>
                p.name.toLowerCase().includes(search.toLowerCase()) ||
                (p.nickname && p.nickname.toLowerCase().includes(search.toLowerCase())) ||
                (p.division && p.division.toLowerCase().includes(search.toLowerCase()))
            );
        }
        setFilteredPegawai(result);
    }, [pegawai, search, filter]);

    const handleSearch = (e) => {
        e.preventDefault();
        // search/filter already handled by useEffect
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col pb-24">
            <Toaster position="top-center" />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 flex flex-col"
            >
                <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 pt-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2">Member Directory</h1>
                    <p className="text-gray-500 text-center mb-8">Temukan anggota tim terbaik kami</p>
                    <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center gap-3 mb-8">
                        <div className="relative flex-1 w-full">
                            <input
                                type="text"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Cari nama, nickname, atau divisi..."
                                className="w-full rounded-full border-2 border-blue-100 px-5 py-3 pr-24 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white shadow-lg text-base transition-all duration-200 focus:bg-blue-50 placeholder-gray-400"
                                style={{ boxShadow: '0 4px 24px 0 rgba(30,64,175,0.06)' }}
                            />
                            {search && (
                                <button type="button" onClick={() => setSearch("")} className="absolute right-20 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 text-xl font-bold px-2 transition-colors duration-150">
                                    ×
                                </button>
                            )}
                            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 px-7 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-200 text-base flex items-center gap-2" style={{ minWidth: 70 }}>
                                Find
                            </button>
                        </div>
                        <div className="relative w-full md:w-auto">
                            <select
                                value={filter}
                                onChange={e => setFilter(e.target.value)}
                                className="rounded-full border-2 border-blue-100 px-5 py-3 bg-white shadow-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 focus:bg-blue-50 min-w-[180px] appearance-none pr-10"
                                style={{ boxShadow: '0 4px 24px 0 rgba(30,64,175,0.06)' }}
                            >
                                {FILTER_OPTIONS.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-400" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l3 3 3-3" /></svg>
                        </div>
                    </form>
                    <div className="text-gray-500 text-sm mb-4">Menampilkan {filteredPegawai.length} dari {pegawai.length} anggota</div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredPegawai.map((pgw, idx) => (
                            <motion.div
                                key={pgw.id}
                                variants={cardVariants}
                                className={`bg-white rounded-2xl shadow p-6 flex flex-col items-center relative group transition hover:shadow-lg ${idx === 0 ? "lg:col-span-5" : ""}`}
                                whileHover={{ scale: 1.025, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
                            >
                                <div className="relative mb-4">
                                    {pgw.photo_url ? (
                                        <img
                                            src={`http://localhost:5000/${pgw.photo_url}`}
                                            alt={pgw.name}
                                            className="h-28 w-28 object-cover rounded-full border-4 border-gray-100 shadow"
                                        />
                                    ) : (
                                        <div className="h-28 w-28 rounded-full bg-gray-100 flex items-center justify-center text-gray-300 text-4xl font-bold border-4 border-gray-100 shadow">
                                            {pgw.name[0]}
                                        </div>
                                    )}
                                    <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-white bg-gradient-to-tr from-blue-400 to-orange-400"></span>
                                </div>
                                <div className="text-lg font-bold text-gray-900 text-center leading-tight">{pgw.name}</div>
                                <div className="text-gray-500 text-center text-base mb-1">"{pgw.nickname || pgw.name.split(' ')[0]}"</div>
                                {pgw.division && (
                                    <div className="mb-2">
                                        <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-blue-700 font-medium text-xs shadow-sm border border-blue-100">{pgw.division}</span>
                                    </div>
                                )}
                                <div className="flex flex-wrap items-center gap-2 mt-2 justify-center w-full">
                                    <a
                                        href={pgw.linkedin_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 px-4 py-1.5 border border-blue-500 text-blue-600 rounded-full font-medium text-sm hover:bg-blue-50 transition"
                                    >
                                        <svg width="16" height="16" fill="currentColor" className="inline-block"><path d="M14.5 2h-13A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2zM5 12H3V6h2zm-1-7a1 1 0 110-2 1 1 0 010 2zm9 7h-2V9c0-.6-.4-1-1-1s-1 .4-1 1v3H7V6h2v1c.3-.6 1-1 1.7-1 1.3 0 2.3 1 2.3 2.3V12z" /></svg>
                                        LinkedIn
                                    </a>
                                    {pgw.position && (
                                        <span className="inline-flex items-center gap-1 text-xs font-semibold rounded-full shadow bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-1.5 min-w-[120px] justify-center">
                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9 12l2 2 4-4" /><circle cx="8" cy="8" r="7" /></svg>
                                            <span className="truncate">{pgw.position}</span>
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
            <BottomNav />
        </div>
    );
};

export default Connect;
