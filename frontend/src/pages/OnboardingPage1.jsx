import { useNavigate } from 'react-router-dom';

function OnboardingPage1() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-blue-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-200 to-orange-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full opacity-30 blur-2xl"></div>

      <div className="relative w-full max-w-4xl">
        {/* Main Content Container */}
        <div className="text-center">
          {/* Hero Section */}
          <div className="mb-12">
            {/* Logo/Icon */}
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mb-8 shadow-2xl relative">
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-transparent bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text" fill="currentColor" viewBox="0 0 20 20">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e86925" />
                      <stop offset="100%" stopColor="#2E79E6" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#logoGradient)" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              {/* Floating particles */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
              Selamat Datang di
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-8">
              Nagari Intern Hub
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Platform inovatif untuk membantu magang di Bank Nagari menjadi lebih 
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent font-semibold"> mudah</span>, 
              <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent font-semibold"> terstruktur</span>, dan 
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent font-semibold"> efisien</span>.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Absensi Lokasi</h3>
              <p className="text-gray-600 text-sm">Sistem absensi berbasis GPS yang akurat dan real-time</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Onboarding</h3>
              <p className="text-gray-600 text-sm">Panduan lengkap untuk memulai perjalanan magang Anda</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-600 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Direktori Pegawai</h3>
              <p className="text-gray-600 text-sm">Akses mudah ke informasi kontak dan profil pegawai</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center space-y-4">
            <button
              className="group px-12 py-4 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-bold text-lg rounded-2xl hover:from-orange-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-3"
              onClick={() => navigate('/onboarding-2')}
            >
              <span>Mulai Perjalanan</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Progress indicator */}
            <div className="flex space-x-2 mt-8">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage1;