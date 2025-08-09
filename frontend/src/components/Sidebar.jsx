import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Sidebar({ active }) {
    const navigate = useNavigate();
    return (
        <div className="h-full w-80 bg-gradient-to-b from-blue-600 to-blue-400 text-white flex flex-col rounded-[2.2rem] shadow-xl p-6 items-center justify-between min-h-[90vh] max-h-[98vh] mt-4 mb-4 ml-2">
            {/* Logo & Cabang */}
            <div className="w-full flex flex-col items-center">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-4 mt-2">
                    <img src={logo} alt="Logo" className="w-16 h-16 filter brightness-0 invert" />
                </div>
                <div className="font-bold text-2xl tracking-wide mb-2">Nagari Intern</div>
                <div className="bg-blue-500/30 text-xs px-4 py-1 rounded-xl mb-6 font-semibold">CABANG PAGAMBIRAN</div>
                <nav className="flex flex-col gap-2 w-full">
                    <button
                        className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all text-lg ${active === 'dashboard' ? 'bg-white/20 text-white' : 'hover:bg-white/10 text-blue-50'}`}
                        onClick={() => navigate('/admin/dashboard')}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Dashboard
                    </button>
                    <button
                        className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all text-lg ${active === 'register' ? 'bg-white/20 text-white' : 'hover:bg-white/10 text-blue-50'}`}
                        onClick={() => window.dispatchEvent(new CustomEvent('open-register-intern'))}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Tambah Akun Intern
                    </button>
                    <button
                        className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all text-lg ${active === 'pegawai' ? 'bg-white/20 text-white' : 'hover:bg-white/10 text-blue-50'}`}
                        onClick={() => navigate('/admin/pegawai')}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><path d="M12 15v2m0-8v2m4 4h2m-8 0H6" /></svg>
                        Daftar Pegawai
                    </button>
                </nav>
            </div>
            {/* Logout */}
            <button
                className="flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all hover:bg-white/10 text-blue-50 w-full mb-2 text-lg"
                onClick={() => { localStorage.removeItem('token'); navigate('/login'); }}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Log Out
            </button>
        </div>
    );
}

export default Sidebar;
