import { useEffect, useState } from 'react';
import axios from 'axios';
import BottomNav from '../components/BottomNav';

function AbsensiPage() {
    const [position, setPosition] = useState(null);
    const [isNearby, setIsNearby] = useState(false);
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    // Koordinat kantor
    const kantorLat = -0.98307;
    const kantorLng = 100.39445;

    // Radius yang diizinkan (dalam meter)
    const radius = 200;

    useEffect(() => {
        if (!navigator.geolocation) {
            setStatus('Geolocation tidak didukung browser ini.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                setPosition({ latitude, longitude });

                const distance = getDistanceFromLatLonInMeters(
                    latitude,
                    longitude,
                    kantorLat,
                    kantorLng
                );

                if (distance <= radius) {
                    setIsNearby(true);
                    setStatus(`Berada dalam jangkauan kantor (${distance.toFixed(1)} m)`);
                } else {
                    setIsNearby(false);
                    setStatus(`Terlalu jauh dari kantor (${distance.toFixed(1)} m)`);
                }
            },
            (err) => {
                setStatus('Gagal mendapatkan lokasi: ' + err.message);
            }
        );
    }, []);

    // Fungsi untuk menghitung jarak dua koordinat dalam meter
    const getDistanceFromLatLonInMeters = (lat1, lon1, lat2, lon2) => {
        const R = 6371e3; // Radius bumi dalam meter
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) *
            Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

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
            alert(response.data.message);
        } catch (error) {
            alert(error.response?.data?.message || 'Gagal absen!');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 pb-20 text-center">
            <h1 className="text-2xl font-bold mb-4">Halaman Absensi</h1>
            <p className="mb-2">{status}</p>
            {position && (
                <p className="mb-4 text-gray-600">
                    Lokasi Anda: {position.latitude.toFixed(5)}, {position.longitude.toFixed(5)}
                </p>
            )}
            <button
                onClick={handleAbsen}
                disabled={!isNearby || loading}
                className={`px-6 py-2 rounded text-white ${isNearby ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}
            >
                {loading ? 'Mengirim...' : 'Absen Sekarang'}
            </button>
            <BottomNav />
        </div>
    );
}

export default AbsensiPage;
