import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import axios from 'axios';

// Registrasi komponen Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AdminDashboard() {
    const navigate = useNavigate();

    // State untuk dashboard
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);

    // State untuk modal registrasi
    const [showModal, setShowModal] = useState(false);
    const [regEmail, setRegEmail] = useState("");
    const [regLoading, setRegLoading] = useState(false);
    const emailInputRef = useRef();

    // Fungsi untuk registrasi
    const handleRegister = async (e) => {
        e.preventDefault();
        setRegLoading(true);
        try {
            await axios.post('http://localhost:5000/api/users', {
                email: regEmail,
                password: 'intern123',
                role: 'intern',
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            alert('Registrasi berhasil!');
            setShowModal(false);
            setRegEmail("");
        } catch (err) {
            alert(err.response?.data?.message || 'Registrasi gagal!');
        } finally {
            setRegLoading(false);
        }
    };

    // Efek untuk mengambil data statistik
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/stats/interns');
                setStats(res.data);
            } catch (err) {
                setStats([]);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    // Helper untuk mengubah '2025-08' menjadi 'Agustus 2025'
    const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const formatMonth = (str) => {
        const [year, month] = str.split('-');
        return monthNames[parseInt(month, 10) - 1] + ' ' + year;
    };

    const data = {
        labels: stats.map(item => formatMonth(item.month)),
        datasets: [
            {
                label: 'Jumlah Magang',
                data: stats.map(item => item.total),
                backgroundColor: 'rgba(232, 105, 37, 0.8)',
                borderColor: 'rgba(46, 121, 230, 1)',
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { 
                position: 'top',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            },
            title: { 
                display: true, 
                text: 'Statistik Magang per Bulan',
                font: {
                    size: 18,
                    weight: 'bold'
                },
                color: '#374151'
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                    precision: 0,
                    callback: function (value) { return Number(value).toFixed(0); },
                    font: { size: 12 }
                },
                grid: {
                    color: '#f3f4f6'
                }
            },
            x: {
                ticks: {
                    font: { size: 12 }
                },
                grid: {
                    display: false
                }
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
            <div className="container mx-auto px-6 py-8">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mb-6 shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        Dashboard Admin
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Kelola sistem magang dengan mudah. Pantau statistik dan lakukan registrasi magang baru melalui dashboard yang komprehensif ini.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Magang</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {stats.reduce((sum, item) => sum + item.total, 0)}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Bulan Aktif</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-blue-500 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Rata-rata</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {stats.length ? Math.round(stats.reduce((sum, item) => sum + item.total, 0) / stats.length) : 0}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chart Section */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-8 relative overflow-hidden">
                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full -mr-20 -mt-20 opacity-20"></div>
                    
                    <div className="relative">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Analisis Statistik</h2>
                        </div>

                        {loading ? (
                            <div className="flex items-center justify-center py-20">
                                <div className="flex items-center space-x-4">
                                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-gradient-to-r from-orange-500 to-blue-500 border-t-transparent"></div>
                                    <span className="text-gray-600 font-medium text-lg">Loading grafik...</span>
                                </div>
                            </div>
                        ) : (
                            <div className="h-96">
                                <Bar data={data} options={options} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => setShowModal(true)}
                        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        <span>Registrasi Magang</span>
                    </button>

                    <button
                        onClick={() => navigate('/admin/pegawai')}
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                        <span>Kelola Pegawai</span>
                    </button>
                </div>

                {/* Registration Modal */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
                        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden">
                            {/* Decorative background */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full -mr-16 -mt-16 opacity-30"></div>
                            
                            <div className="relative">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800">Registrasi Magang</h2>
                                </div>

                                <form onSubmit={handleRegister} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Magang
                                        </label>
                                        <input
                                            ref={emailInputRef}
                                            type="email"
                                            required
                                            placeholder="Masukkan email magang"
                                            value={regEmail}
                                            onChange={e => setRegEmail(e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gradient-to-r focus:from-orange-500 focus:to-blue-500 focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                                        />
                                        <p className="text-sm text-gray-500 mt-2">
                                            Password default: <span className="font-mono bg-gray-100 px-2 py-1 rounded">intern123</span>
                                        </p>
                                    </div>

                                    <div className="flex space-x-3">
                                        <button
                                            type="submit"
                                            disabled={regLoading}
                                            className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        >
                                            {regLoading ? (
                                                <div className="flex items-center justify-center space-x-2">
                                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                                    <span>Mendaftarkan...</span>
                                                </div>
                                            ) : (
                                                'Daftarkan'
                                            )}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="flex-1 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-300"
                                        >
                                            Batal
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminDashboard;