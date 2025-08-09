import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

function PegawaiList() {
    const [pegawai, setPegawai] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const rowsPerPage = 8;
    const totalPages = Math.ceil(pegawai.length / rowsPerPage);
    const currentData = pegawai.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    const fetchPegawai = async () => {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:5000/api/employees');
            setPegawai(res.data);
        } catch (err) {
            console.error('Gagal mengambil data pegawai', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPegawai();
    }, []);

    useEffect(() => {
        if (page > totalPages && totalPages > 0) setPage(totalPages);
    }, [pegawai, totalPages]);

    const handleDelete = async (id) => {
        if (!confirm('Yakin ingin menghapus data ini?')) return;
        try {
            setLoading(true);
            await axios.delete(`http://localhost:3000/api/pegawai/${id}`);
            fetchPegawai();
        } catch (err) {
            alert('Gagal menghapus data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex overflow-hidden">
            {/* Sidebar */}
            <div className="hidden md:block h-full py-8 pl-6 pr-2">
                <Sidebar active="pegawai" />
            </div>
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full">
                <div className="p-6 flex-1 flex flex-col overflow-hidden">
                    {/* Header Section */}
                    <div className="mb-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">Daftar Pegawai</h1>
                                <p className="text-gray-600">Kelola data pegawai Bank Nagari</p>
                            </div>
                            <Link
                                to="/admin/pegawai/tambah"
                                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
                            >
                                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M12 5v14M5 12h14"/>
                                </svg>
                                Tambah Pegawai
                            </Link>
                        </div>
                        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-400 rounded-full"></div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                        <circle cx="9" cy="7" r="4"/>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">{pegawai.length}</p>
                                    <p className="text-sm text-gray-600">Total Pegawai</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                        <polyline points="14,2 14,8 20,8"/>
                                        <line x1="16" y1="13" x2="8" y2="13"/>
                                        <line x1="16" y1="17" x2="8" y2="17"/>
                                        <polyline points="10,9 9,9 8,9"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">{totalPages}</p>
                                    <p className="text-sm text-gray-600">Total Halaman</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">{currentData.length}</p>
                                    <p className="text-sm text-gray-600">Halaman Ini</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table Container */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 flex-1 flex flex-col overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-800">Data Pegawai</h3>
                        </div>
                        
                        <div className="flex-1 overflow-auto">
                            {loading ? (
                                <div className="flex items-center justify-center h-64">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                        <span className="text-gray-600">Memuat data...</span>
                                    </div>
                                </div>
                            ) : (
                                <table className="w-full min-w-[900px]">
                                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100 sticky top-0">
                                        <tr>
                                            <th className="p-4 text-left font-semibold text-gray-700 border-b border-gray-200">Foto</th>
                                            <th className="p-4 text-left font-semibold text-gray-700 border-b border-gray-200">Nama</th>
                                            <th className="p-4 text-left font-semibold text-gray-700 border-b border-gray-200">Jabatan</th>
                                            <th className="p-4 text-left font-semibold text-gray-700 border-b border-gray-200">LinkedIn</th>
                                            <th className="p-4 text-center font-semibold text-gray-700 border-b border-gray-200">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentData.map((item, index) => (
                                            <tr key={item.id} className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all duration-300">
                                                <td className="p-4 border-b border-gray-100">
                                                    <div className="flex justify-center">
                                                        {item.photo_url ? (
                                                            <div className="relative">
                                                                <img
                                                                    src={`http://localhost:5000/${item.photo_url}`}
                                                                    alt={item.name}
                                                                    className="h-12 w-12 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                                            </div>
                                                        ) : (
                                                            <div className="h-12 w-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                                    <circle cx="12" cy="7" r="4"/>
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="p-4 border-b border-gray-100">
                                                    <div className="font-semibold text-gray-800">{item.name}</div>
                                                </td>
                                                <td className="p-4 border-b border-gray-100">
                                                    <span className="inline-flex px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-medium">
                                                        {item.position}
                                                    </span>
                                                </td>
                                                <td className="p-4 border-b border-gray-100">
                                                    {item.linkedin_url ? (
                                                        <a
                                                            href={item.linkedin_url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium"
                                                        >
                                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                            </svg>
                                                            Lihat Profil
                                                        </a>
                                                    ) : (
                                                        <span className="text-gray-400 italic">Tidak ada</span>
                                                    )}
                                                </td>
                                                <td className="p-4 border-b border-gray-100">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link
                                                            to={`/admin/pegawai/edit/${item.id}`}
                                                            className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white px-3 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm font-medium"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                                            </svg>
                                                            Edit
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(item.id)}
                                                            className="inline-flex items-center gap-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm font-medium"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                                <polyline points="3,6 5,6 21,6"/>
                                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                                            </svg>
                                                            Hapus
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>

                    {/* Enhanced Pagination */}
                    {!loading && totalPages > 0 && (
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                            <div className="text-sm text-gray-600">
                                Menampilkan {((page - 1) * rowsPerPage) + 1} - {Math.min(page * rowsPerPage, pegawai.length)} dari {pegawai.length} pegawai
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setPage(page - 1)}
                                    disabled={page === 1}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-600 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:transform-none"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <polyline points="15,18 9,12 15,6"/>
                                    </svg>
                                    Previous
                                </button>
                                
                                <div className="flex gap-1">
                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                        let pageNum;
                                        if (totalPages <= 5) {
                                            pageNum = i + 1;
                                        } else if (page <= 3) {
                                            pageNum = i + 1;
                                        } else if (page >= totalPages - 2) {
                                            pageNum = totalPages - 4 + i;
                                        } else {
                                            pageNum = page - 2 + i;
                                        }
                                        
                                        return (
                                            <button
                                                key={pageNum}
                                                onClick={() => setPage(pageNum)}
                                                className={`w-10 h-10 rounded-xl font-semibold transition-all duration-300 ${
                                                    page === pageNum 
                                                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-110' 
                                                        : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-600 hover:shadow-md hover:-translate-y-1'
                                                }`}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    })}
                                </div>
                                
                                <button
                                    onClick={() => setPage(page + 1)}
                                    disabled={page === totalPages}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-600 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:transform-none"
                                >
                                    Next
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <polyline points="9,18 15,12 9,6"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PegawaiList;