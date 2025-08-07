import { useNavigate } from 'react-router-dom';

function OnboardingPage2() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-orange-200 rounded-full opacity-20 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-orange-200 to-blue-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full opacity-30 blur-2xl"></div>

      <div className="relative w-full max-w-6xl">
        {/* Main Content Container */}
        <div className="text-center mb-12">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mb-8 shadow-xl">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Apa itu Nagari Intern Hub?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
              Sebuah ekosistem digital yang dirancang khusus untuk mengoptimalkan pengalaman magang di Bank Nagari
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {/* Card 1: Absensi Berbasis Lokasi */}
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full -mr-16 -mt-16 opacity-30"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Absensi Berbasis Lokasi</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sistem absensi canggih yang menggunakan teknologi GPS untuk memastikan kehadiran yang akurat dan real-time. 
                  Tidak perlu lagi khawatir tentang absensi manual yang rentan kesalahan.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-semibold">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  GPS Tracking Akurat
                </div>
              </div>
            </div>

            {/* Card 2: Informasi Onboarding */}
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-100 to-blue-100 rounded-full -ml-16 -mb-16 opacity-30"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Informasi Onboarding</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Panduan komprehensif yang akan membantu Anda memulai perjalanan magang dengan lancar. 
                  Dari orientasi awal hingga pemahaman budaya perusahaan.
                </p>
                <div className="flex items-center text-orange-600 text-sm font-semibold">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Panduan Lengkap & Terstruktur
                </div>
              </div>
            </div>

            {/* Card 3: Direktori Pegawai */}
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden lg:col-span-2">
              <div className="absolute top-0 left-1/2 w-40 h-40 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full -translate-x-1/2 -mt-20 opacity-20"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Direktori Pegawai</h3>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl mx-auto">
                  Akses mudah ke informasi kontak dan profil seluruh pegawai Bank Nagari. 
                  Memudahkan komunikasi dan kolaborasi selama masa magang Anda.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center text-blue-600 font-semibold">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Pencarian Cepat
                  </div>
                  <div className="flex items-center text-orange-600 font-semibold">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Profil Lengkap
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Kontak Terintegrasi
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg max-w-2xl">
              <p className="text-lg text-gray-700 font-medium mb-2">Siap untuk memulai?</p>
              <p className="text-gray-600">Mari bergabung dengan ekosistem digital yang akan mengubah cara Anda bermagang!</p>
            </div>

            <button
              className="group px-12 py-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-bold text-lg rounded-2xl hover:from-blue-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-3"
              onClick={() => navigate('/login')}
            >
              <span>Masuk ke Platform</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Progress indicator */}
            <div className="flex space-x-2 mt-8">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage2;