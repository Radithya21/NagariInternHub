import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NaraImg from '../assets/NARA.png';

function OnboardingPage1() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center"
      >
        {/* Character Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative mb-12"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-400 blur-2xl opacity-20 scale-110 animate-pulse"></div>

          {/* Main Image Container */}
          <div className="relative">
            <img
              src={NaraImg}
              alt="Nara"
              className="w-96 h-96 object-contain transition-transform duration-500 hover:scale-105 drop-shadow-2xl"
            />
          </div>

          {/* Floating Dots */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-500"></div>
          <div className="absolute top-8 -left-8 w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-1000"></div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="text-center mb-12 space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-gray-700">Halo, aku </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Nara
            </span>
            <span className="inline-block animate-bounce ml-2">👋</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 leading-relaxed">
            Selamat datang di{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-bold">
              Nagari Intern Hub
            </span>
          </h2>

          <p className="text-gray-500 max-w-md mx-auto text-lg leading-relaxed mt-6">
            Mari mulai perjalanan magang yang menyenangkan bersama kami! ✨
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          {/* Button Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl blur opacity-25 scale-110"></div>

          {/* Main Button */}
          <button
            className="relative px-12 py-4 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-bold text-lg rounded-2xl hover:from-orange-600 hover:to-blue-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3 group"
            onClick={() => navigate('/onboarding-2')}
          >
            <span>Mari Mulai</span>
            <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </motion.div>

      </motion.div>

      {/* Additional Styles for Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default OnboardingPage1;