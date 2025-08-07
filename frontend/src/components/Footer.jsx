import logo from '../assets/logo.svg';

function Footer() {
    return (
        <footer className="w-full bg-gradient-to-b from-[#1a2233] to-[#181c24] text-gray-300 pt-12 pb-4 px-4 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
                {/* Brand & Description */}
                <div className="flex-1 mb-8 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-gradient-to-tr from-blue-400 to-orange-400 rounded-xl p-2 shadow">
                            <img src={logo} alt="Logo" className="w-8 h-8" />
                        </div>
                        <div>
                            <div className="text-xl font-bold text-white">Nagari Intern Hub</div>
                            <div className="text-sm text-blue-200">Bank Nagari Digital</div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-400 max-w-xs mb-4">
                        Membangun masa depan perbankan digital melalui program magang yang inovatif dan komprehensif.
                    </div>
                </div>
                {/* Quick Links */}
                <div className="flex-1 mb-8 md:mb-0">
                    <div className="font-semibold text-white mb-3">Quick Links</div>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#jadwal" className="hover:text-blue-400 transition">Jadwal Kerja</a></li>
                        <li><a href="#dresscode" className="hover:text-blue-400 transition">Dress Code</a></li>
                        <li><a href="#peraturan" className="hover:text-blue-400 transition">Peraturan</a></li>
                        <li><a href="#kontak" className="hover:text-blue-400 transition">Kontak</a></li>
                    </ul>
                </div>
                {/* Support */}
                <div className="flex-1">
                    <div className="font-semibold text-white mb-3">Support</div>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#faq" className="hover:text-orange-400 transition">FAQ</a></li>
                        <li><a href="#panduan" className="hover:text-orange-400 transition">Panduan</a></li>
                        <li><a href="#help" className="hover:text-orange-400 transition">Help Center</a></li>
                        <li><a href="#feedback" className="hover:text-orange-400 transition">Feedback</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
                <div>© 2025 Bank Nagari. All rights reserved.</div>
                <div className="mt-2 md:mt-0">Powered by <span className="text-blue-400 font-semibold">Nagari</span> Digital <span className="text-orange-400 font-semibold">Innovation</span></div>
            </div>
        </footer>
    );
}

export default Footer;
