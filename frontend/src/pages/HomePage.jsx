import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Footer from '../components/Footer';
import cowokImg from '../assets/cowok.jpg';
import cewekImg from '../assets/cewek.jpg';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f8fafc]">
      
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Nagari Intern Hub</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
          Bergabunglah dengan revolusi digital perbankan. Dapatkan pengalaman magang yang akan membentuk masa depan karir Anda di industri finansial.
        </p>
        
      </main>
      
      {/* Jadwal Kerja Section */}
      <section className="flex flex-col items-center justify-center px-4 mt-8">
        <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-50 text-blue-700 font-medium text-sm">
          <span role="img" aria-label="clock">🕒</span> Jadwal & Waktu
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
          Jadwal Kerja <span className="text-blue-600">Bank Nagari</span>
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto mb-6">
          Sistem kerja yang fleksibel namun terstruktur untuk pengalaman belajar optimal
        </p>
        <div className="flex gap-2 mb-6">
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition flex items-center gap-2">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="14" height="12" rx="2" /><path d="M16 2v2M8 2v2" /></svg>
            Hari Ini
          </button>
          <button className="px-4 py-2 rounded-lg bg-white text-gray-700 font-semibold shadow border hover:bg-gray-50 transition flex items-center gap-2">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="14" height="12" rx="2" /><path d="M16 2v2M8 2v2" /></svg>
            Bulan Ini
          </button>
          <button className="px-4 py-2 rounded-lg bg-white text-gray-700 font-semibold shadow border hover:bg-gray-50 transition">Ketentuan</button>
        </div>
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 mb-8 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex-1 bg-blue-50 rounded-xl p-4 flex flex-col items-center">
            <div className="text-gray-700 font-semibold mb-1">Jam Kerja</div>
            <div className="text-xs text-gray-500 mb-2">Senin - Kamis</div>
            <div className="text-2xl font-bold text-blue-600">08:00 - 16:00</div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-gray-700 font-semibold mb-1">Jam Kerja</div>
            <div className="text-xs text-gray-500 mb-2">Jumat</div>
            <div className="text-2xl font-bold text-blue-600">08:00 - 16:30</div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-gray-700 font-semibold mb-1">Break Time</div>
            <div className="text-xs text-gray-500 mb-2">Istirahat</div>
            <div className="text-2xl font-bold text-blue-600">12:00 - 13:00</div>
          </div>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition mb-8">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="16" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
          Lihat Detail Jadwal
        </button>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="font-bold text-lg mb-2">Ketentuan Kehadiran</div>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Toleransi keterlambatan maksimal 15 menit</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Wajib absen masuk dan pulang</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Izin/sakit harus dikonfirmasi H-1</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Maksimal alpha 3 hari dalam sebulan</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="font-bold text-lg mb-2">Tips Produktivitas</div>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Datang 10 menit sebelum jam kerja</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Siapkan agenda harian di pagi hari</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Manfaatkan waktu istirahat dengan baik</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Konsultasi rutin dengan supervisor</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Dress Code Section */}
      <section className="flex flex-col items-center justify-center px-4 mt-16">
        <div className="inline-block px-4 py-1 mb-4 rounded-full bg-orange-50 text-orange-700 font-medium text-sm">
          <span role="img" aria-label="style">🧑‍💼</span> Professional Style
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
          <span className="text-orange-600">Dress Code</span>
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto mb-8">
          Tampil profesional dengan panduan berpakaian yang modern dan sesuai standar perbankan
        </p>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Untuk Pria */}
          <div className="bg-blue-50 rounded-2xl shadow-lg p-6 border-t-4 border-blue-500 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500 text-white rounded-lg p-2">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <span className="text-xl font-bold text-blue-700">Untuk Pria</span>
            </div>
            <div className="relative flex flex-col items-center mb-4">
              <img src={cowokImg} alt="Pria" className="w-32 h-40 object-contain rounded-xl shadow" />
              {/* Label overlays */}
              <span className="absolute left-0 top-8 bg-white text-xs px-2 py-1 rounded shadow">Kemeja Putih</span>
              <span className="absolute left-0 bottom-8 bg-white text-xs px-2 py-1 rounded shadow">Dasi</span>
              <span className="absolute right-0 bottom-8 bg-white text-xs px-2 py-1 rounded shadow">Celana Hitam</span>
              <span className="absolute right-0 bottom-0 bg-white text-xs px-2 py-1 rounded shadow">Sepatu Pantofel</span>
            </div>
            <div className="w-full bg-white rounded-xl p-4 mt-2 mb-4">
              <div className="font-semibold mb-2">Pakaian Formal</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Kemeja lengan panjang (putih/biru muda)</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Celana panjang formal (hitam/abu-abu/navy)</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Dasi (warna netral)</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Sepatu pantofel hitam/coklat</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Kaos kaki (warna gelap)</li>
              </ul>
            </div>
            <div className="w-full bg-red-50 rounded-xl p-4">
              <div className="font-semibold text-red-700 mb-2">Tidak Diperbolehkan</div>
              <ul className="text-sm text-red-700 space-y-1">
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-red-500 inline-block"></span>Kaos/t-shirt</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-red-500 inline-block"></span>Celana jeans</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-red-500 inline-block"></span>Sandal/sepatu casual</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-red-500 inline-block"></span>Aksesoris berlebihan</li>
              </ul>
            </div>
          </div>
          {/* Untuk Wanita */}
          <div className="bg-orange-50 rounded-2xl shadow-lg p-6 border-t-4 border-orange-500 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 text-white rounded-lg p-2">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <span className="text-xl font-bold text-orange-700">Untuk Wanita</span>
            </div>
            <div className="relative flex flex-col items-center mb-4">
              <img src={cewekImg} alt="Wanita" className="w-32 h-40 object-contain rounded-xl shadow" />
              {/* Label overlays */}
              <span className="absolute left-0 top-8 bg-white text-xs px-2 py-1 rounded shadow">Blouse Putih</span>
              <span className="absolute left-0 bottom-8 bg-white text-xs px-2 py-1 rounded shadow">Formal</span>
              <span className="absolute right-0 bottom-8 bg-white text-xs px-2 py-1 rounded shadow">Rok/Celana</span>
              <span className="absolute right-0 bottom-0 bg-white text-xs px-2 py-1 rounded shadow">Sepatu Formal</span>
            </div>
            <div className="w-full bg-white rounded-xl p-4 mt-2 mb-4">
              <div className="font-semibold mb-2">Pakaian Formal</div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Blouse/kemeja (warna netral)</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Celana panjang/rok formal (panjang di atas lutut)</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Blazer (opsional)</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Sepatu pantofel/heels rendah</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Hijab rapi (bagi yang berhijab)</li>
              </ul>
            </div>
            <div className="w-full bg-red-50 rounded-xl p-4">
              <div className="font-semibold text-red-700 mb-2">Tidak Diperbolehkan</div>
              <ul className="text-sm text-red-700 space-y-1">
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-red-500 inline-block"></span>Pakaian ketat/transparan</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-red-500 inline-block"></span>Rok mini</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-red-500 inline-block"></span>Sandal/sepatu casual</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-red-500 inline-block"></span>Makeup berlebihan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rules & Guidelines Section */}
      <section className="flex flex-col items-center justify-center px-4 mt-16 mb-16">
        <div className="inline-block px-4 py-1 mb-4 rounded-full bg-purple-50 text-purple-700 font-medium text-sm">
          <span role="img" aria-label="rules">📋</span> Rules & Guidelines
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
          Peraturan <span className="text-purple-600">& Tata Tertib</span>
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto mb-10">
          Framework kerja yang mendukung produktivitas dan profesionalisme di lingkungan digital banking
        </p>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Keamanan & Kerahasiaan */}
          <div className="bg-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-blue-400">
            <div className="bg-blue-500 text-white rounded-lg p-3 mb-4">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <div className="font-bold text-lg mb-4 text-center">Keamanan & Kerahasiaan</div>
            <ul className="w-full text-sm space-y-3">
              <li className="flex items-center gap-2 bg-white rounded px-3 py-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Menjaga kerahasiaan data nasabah</li>
              <li className="flex items-center gap-2 bg-white rounded px-3 py-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Tidak mengambil foto di area kerja</li>
              <li className="flex items-center gap-2 bg-white rounded px-3 py-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Menggunakan ID card setiap saat</li>
              <li className="flex items-center gap-2 bg-white rounded px-3 py-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Tidak membawa tamu tanpa izin</li>
            </ul>
          </div>
          {/* Perilaku & Etika */}
          <div className="bg-orange-50 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-orange-400">
            <div className="bg-orange-500 text-white rounded-lg p-3 mb-4">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4" /><path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2" /></svg>
            </div>
            <div className="font-bold text-lg mb-4 text-center">Perilaku & Etika</div>
            <ul className="w-full text-sm space-y-3">
              <li className="flex items-center gap-2 bg-white rounded px-3 py-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Bersikap sopan dan ramah</li>
              <li className="flex items-center gap-2 bg-white rounded px-3 py-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Tidak menggunakan HP saat jam kerja</li>
              <li className="flex items-center gap-2 bg-white rounded px-3 py-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Menjaga kebersihan area kerja</li>
              <li className="flex items-center gap-2 bg-white rounded px-3 py-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Aktif bertanya dan belajar</li>
            </ul>
          </div>
          {/* Administrasi */}
          <div className="bg-purple-50 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-purple-400">
            <div className="bg-purple-500 text-white rounded-lg p-3 mb-4">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="20" rx="2" /><path d="M8 8h8M8 12h8M8 16h4" /></svg>
            </div>
            <div className="font-bold text-lg mb-4 text-center">Administrasi</div>
            <ul className="w-full text-sm space-y-3">
              <li className="flex items-center gap-2 bg-white rounded px-3 py-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>Mengisi logbook harian</li>
              <li className="flex items-center gap-2 bg-white rounded px-3 py-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>Laporan mingguan ke supervisor</li>
              <li className="flex items-center gap-2 bg-white rounded px-3 py-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>Mengumpulkan tugas tepat waktu</li>
              <li className="flex items-center gap-2 bg-white rounded px-3 py-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>Evaluasi bulanan dengan HRD</li>
            </ul>
          </div>
        </div>
      </section>
      <BottomNav />
      <Footer />
    </div>
  );
}

export default HomePage;
