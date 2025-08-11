import { Routes, Route } from 'react-router-dom';
import OnboardingPage1 from './pages/OnboardingPage1';
import OnboardingPage2 from './pages/OnboardingPage2';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import AbsensiPage from './pages/AbsensiPage';
import Connect from './pages/Connect';
import PegawaiList from './pages/admin/PegawaiList';
import InternProfilePage from './pages/InternProfilePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage1 />} />
      <Route path="/onboarding-2" element={<OnboardingPage2 />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/absensi" element={<AbsensiPage />} />
      <Route path="/direktori" element={<Connect />} />
      <Route path="/admin/pegawai" element={<PegawaiList />} />
      <Route path="/profile" element={<InternProfilePage />} />
    </Routes>
  );
}

export default App;
