function JadwalKerjaSection() {
    return (
        <section id="jadwal" className="flex flex-col items-center justify-center px-4 mt-8">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-50 text-blue-700 font-medium text-sm">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle text-blue-500 mr-1"><circle cx="9" cy="9" r="7" /><path d="M9 5v4l3 2" /></svg>
                Jadwal & Waktu
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                Jadwal Kerja <span className="text-blue-600">Bank Nagari</span>
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto mb-6">
                Sistem kerja yang fleksibel namun terstruktur untuk pengalaman belajar optimal
            </p>
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 mb-8 flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex-1 flex flex-col items-center">
                    <div className="text-gray-700 font-semibold mb-1">Break Time</div>
                    <div className="text-xs text-gray-500 mb-2">Senin - Kamis</div>
                    <div className="text-2xl font-bold text-blue-600">12:00 - 13:00</div>
                </div>
                <div className="flex-1 bg-blue-50 rounded-xl p-4 flex flex-col items-center">
                    <div className="text-gray-700 font-semibold mb-1">Jam Kerja</div>
                    <div className="text-xs text-gray-500 mb-2">Senin - Jumat</div>
                    <div className="text-2xl font-bold text-blue-600">07:45 - 16:45</div>
                </div>
                <div className="flex-1 flex flex-col items-center">
                    <div className="text-gray-700 font-semibold mb-1">Break Time</div>
                    <div className="text-xs text-gray-500 mb-2">Jumat</div>
                    <div className="text-2xl font-bold text-blue-600">11:00 - 13:30</div>
                </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition mb-8">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="16" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
                Detail Informasi Jadwal
            </button>
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="font-bold text-lg mb-2">Ketentuan Kehadiran</div>
                    <ul className="text-gray-700 text-sm space-y-2">
                        <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Tidak ada toleransi keterlambatan</li>
                        <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Wajib absen masuk dan pulang</li>
                        <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Izin/sakit harus dikonfirmasi H-1</li>
                    </ul>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="font-bold text-lg mb-2">Tips Produktivitas</div>
                    <ul className="text-gray-700 text-sm space-y-2">
                        <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Datang 10 menit sebelum jam kerja</li>
                        <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Siapkan agenda harian di pagi hari</li>
                        <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Manfaatkan waktu istirahat dengan baik</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default JadwalKerjaSection;