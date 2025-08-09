import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import JadwalKerjaSection from '../components/JadwalKerjaSection';
import DressCodeSection from '../components/DressCodeSection';
import RulesGuidelinesSection from '../components/RulesGuidelinesSection';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f8fafc]">
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