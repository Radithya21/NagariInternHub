import BottomNav from '../components/BottomNav';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import JadwalKerjaSection from '../components/JadwalKerjaSection';
import DressCodeSection from '../components/DressCodeSection';
import RulesGuidelinesSection from '../components/RulesGuidelinesSection';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    // Cek autentikasi
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
    // Cek apakah toast sudah ditampilkan sebelumnya
    const toastShown = localStorage.getItem('toastShown');
    if (!toastShown) {
      toast.success('Login berhasil! Selamat datang di Nagari Intern Hub!');
      localStorage.setItem('toastShown', 'true');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f8fafc]">
      <Toaster position="top-center" />
      <div className="flex-1 flex flex-col">
        <div className="min-h-screen flex flex-col"><HeroSection /></div>
        <div className="min-h-screen flex flex-col"><JadwalKerjaSection /></div>
        <div className="min-h-screen flex flex-col"><DressCodeSection /></div>
        <div className="min-h-screen flex flex-col"><RulesGuidelinesSection /></div>
      </div>
      <BottomNav />
      <Footer />
    </div>
  );
}

export default HomePage;