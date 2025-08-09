import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function OnboardingPage2() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: 'linear' }}
      className="h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center p-4 relative"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-blue-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-200 to-orange-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full opacity-30 blur-2xl"></div>

      <div className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-full flex flex-col justify-between py-4">
        {/* Main Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, type: 'spring', stiffness: 60, damping: 14 }}
          className="text-center flex-1 flex flex-col justify-center"
        >
          {/* Hero Section */}
          <div className="mb-8 md:mb-12">
            {/* Logo/Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mb-6 md:mb-8 shadow-2xl relative">
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 md:w-16 md:h-16 text-transparent bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text" fill="currentColor" viewBox="0 0 20 20">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e86925" />
                      <stop offset="100%" stopColor="#2E79E6" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#logoGradient)" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              {/* Floating particles */}
              <div className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 md:w-4 md:h-4 bg-blue-400 rounded-full animate-ping"></div>
            </div>

            {/* Main Title */}
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-4 md:mb-6">
              Nagari Intern Hub
            </h2>

            {/* Subtitle - Hidden on mobile */}
            <p className="hidden md:block text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Aplikasi untuk membantu magang di Bank Nagari menjadi lebih
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent font-semibold"> mudah</span>,
              <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent font-semibold"> terstruktur</span>, dan
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent font-semibold"> efisien</span>.
            </p>

            {/* Mobile Subtitle - Shorter version */}
            <p className="md:hidden text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
              Platform magang Bank Nagari yang
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent font-semibold">mudah</span> dan
              <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent font-semibold">efisien</span>
            </p>
          </div>

          {/* Features Preview - Larger */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 max-w-3xl md:max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4 md:p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-5">
                <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 md:mb-3 text-sm md:text-lg">Absensi</h3>
              <p className="text-gray-600 text-xs md:text-base hidden md:block">Sistem absensi berbasis GPS </p>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4 md:p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-5">
                <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 md:mb-3 text-sm md:text-lg">Panduan</h3>
              <p className="text-gray-600 text-xs md:text-base hidden md:block">Panduan lengkap diawal masa magang</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4 md:p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-r from-orange-600 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-5">
                <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 md:mb-3 text-sm md:text-lg">Direktori</h3>
              <p className="text-gray-600 text-xs md:text-base hidden md:block">Informasi kontak dan profil pegawai</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - CTA and Progress */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7, type: 'spring', stiffness: 80, damping: 16 }}
          className="flex flex-col items-center space-y-5 md:space-y-6"
        >
          <button
            className="group px-10 py-4 md:px-16 md:py-5 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-bold text-lg md:text-xl rounded-2xl hover:from-orange-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-3"
            onClick={() => navigate('/login')}
          >
            <span>Mulai Perjalanan</span>
            <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default OnboardingPage2;