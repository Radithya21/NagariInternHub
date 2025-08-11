import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import BottomNav from '../components/BottomNav';
import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion } from 'framer-motion';

function AbsensiPage() {
    const navigate = useNavigate();
    const [position, setPosition] = useState(null);
    const [isNearby, setIsNearby] = useState(false);
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [locationLoading, setLocationLoading] = useState(true);
    const [sudahAbsenHariIni, setSudahAbsenHariIni] = useState(false);

    // Koordinat kantor
    const kantorLat = -0.98307;
    const kantorLng = 100.39445;

    // Radius yang diizinkan (dalam meter)
    const radius = 200;

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
        sessionStorage.removeItem('redirectedToLogin');
    }, [navigate]);

    useEffect(() => {
        if (!navigator.geolocation) {
            setStatus('Geolocation tidak didukung browser ini.');
            setLocationLoading(false);
            return;
        }

        const geoOptions = {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0,
        };

        setStatus('Mencari lokasi Anda...');

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                console.log('Lokasi pengguna:', { latitude, longitude });
                setPosition({ latitude, longitude });
                setLocationLoading(false);

                const distance = getDistanceFromLatLonInMeters(
                    latitude,
                    longitude,
                    kantorLat,
                    kantorLng
                );
                console.log('Jarak ke kantor:', distance);

                if (distance <= radius) {
                    setIsNearby(true);
                    setStatus(`Anda berada dalam area kantor`);
                } else {
                    setIsNearby(false);
                    setStatus(`Anda berada di luar area kantor`);
                }
            },
            (err) => {
                setStatus('Gagal mendapatkan lokasi: ' + err.message);
                setLocationLoading(false);
            },
            geoOptions
        );
    }, [kantorLat, kantorLng]);

    // Fungsi untuk menghitung jarak dua koordinat dalam meter
    const getDistanceFromLatLonInMeters = (lat1, lon1, lat2, lon2) => {
        const R = 6371e3;
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) *
            Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    const getCurrentDateKey = () => {
        // Format: absen_YYYY-MM-DD
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        return `absen_${yyyy}-${mm}-${dd}`;
    };

    useEffect(() => {
        // Cek status absen hari ini di localStorage
        const absenKey = getCurrentDateKey();
        if (localStorage.getItem(absenKey) === 'true') {
            setSudahAbsenHariIni(true);
        }
    }, [kantorLat, kantorLng]);

    const handleAbsen = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:5000/api/attendance', {
                latitude: position.latitude,
                longitude: position.longitude,
                location_name: 'Kantor',
                timestamp: new Date().toISOString(),
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success(response.data.message);
            // Set status absen hari ini di localStorage
            const absenKey = getCurrentDateKey();
            localStorage.setItem(absenKey, 'true');
            setSudahAbsenHariIni(true);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Gagal absen!');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const kantorIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
    });

    const userIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    const formatDistance = (dist) => {
        if (dist < 1000) {
            return `${dist.toFixed(0)} m`;
        } else {
            return `${(dist / 1000).toFixed(1)} km`;
        }
    };

    const getCurrentDate = () => {
        return new Date().toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="px-0 py-6 pb-24 max-w-full"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Absensi Intern</h1>
                    <p className="text-gray-600">Pastikan Anda berada di area kantor untuk melakukan absensi</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100"
                >
                    <div className="text-center">
                        <p className="text-m text-gray-500 mb-1">Hari ini</p>
                        <p className="text-lg font-semibold text-gray-800 mb-2">{getCurrentDate()}</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100 flex flex-col md:flex-row items-center gap-6"
                >
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-3xl ${locationLoading ? 'bg-yellow-100 text-yellow-600' : isNearby ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                        {locationLoading ? (
                            <svg className="w-8 h-8 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : isNearby ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 mb-1 text-lg flex items-center gap-2">
                            Status Lokasi
                            {isNearby && !locationLoading && (
                                <span className="inline-block px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-bold ml-2">Dalam Area</span>
                            )}
                            {!isNearby && !locationLoading && (
                                <span className="inline-block px-2 py-0.5 rounded bg-red-100 text-red-700 text-xs font-bold ml-2">Luar Area</span>
                            )}
                        </h3>
                        <p className={`text-base font-medium ${locationLoading ? 'text-yellow-600' : isNearby ? 'text-green-600' : 'text-red-600'}`}>{status}</p>
                        {position && !locationLoading && (
                            <div className="mt-2 space-y-1">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    </svg>
                                    <span>Jarak ke kantor: <span className="font-semibold text-blue-600">{formatDistance(getDistanceFromLatLonInMeters(position.latitude, position.longitude, kantorLat, kantorLng))}</span></span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-blue-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11V7m0 4v4" />
                                    </svg>
                                    <span>Lokasi Anda: <span className="font-semibold">{position.latitude}, {position.longitude}</span></span>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6 border border-gray-100"
                >
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600">
                        <h3 className="font-semibold text-white flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                            </svg>
                            Peta Lokasi Kantor
                        </h3>
                        <p className="text-blue-100 text-sm mt-1">Area biru menunjukkan zona absensi yang diizinkan</p>
                    </div>
                    <div className="relative">
                        <MapContainer center={[kantorLat, kantorLng]} zoom={17} style={{ height: '450px', width: '100%' }} className="z-10">
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors" />
                            <Marker position={[kantorLat, kantorLng]} icon={kantorIcon} />
                            {position && <Marker position={[position.latitude, position.longitude]} icon={userIcon} />}
                            <Circle center={[kantorLat, kantorLng]} radius={radius} pathOptions={{ color: '#3B82F6', fillColor: '#3B82F6', fillOpacity: 0.15, weight: 2 }} />
                        </MapContainer>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                >
                    <div className="text-center">
                        <button
                            onClick={handleAbsen}
                            disabled={!isNearby || loading || locationLoading || sudahAbsenHariIni}
                            className={`relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform ${isNearby && !locationLoading && !sudahAbsenHariIni ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Memproses...</span>
                                </div>
                            ) : locationLoading ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    </svg>
                                    <span>Mencari Lokasi...</span>
                                </div>
                            ) : sudahAbsenHariIni ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Sudah Absen Hari Ini</span>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Absen Sekarang</span>
                                </div>
                            )}
                        </button>
                    </div>
                </motion.div>
            </motion.div>
            <BottomNav />
        </div>
    );
}

export default AbsensiPage;