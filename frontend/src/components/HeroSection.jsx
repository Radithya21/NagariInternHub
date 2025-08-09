import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

function HeroSection() {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      // Tambahkan threshold agar animasi hanya aktif jika 40% section masuk viewport
      const threshold = 0.4;
      const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
      const sectionHeight = rect.height || 1;
      const inView = (visibleHeight / sectionHeight) > threshold;
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 40 });
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [controls]);

  return (
    <motion.main
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex-1 flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Nagari Intern Hub</span>
      </h1>
      <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
        Platform internal Bank Nagari untuk mempermudah magang, dengan fitur absensi berbasis lokasi, panduan onboarding, dan direktori pegawai terhubung ke LinkedIn.
      </p>
    </motion.main>
  );
}

export default HeroSection;