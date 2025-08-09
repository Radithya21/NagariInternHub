import { useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaComments, FaUserEdit, FaKey, FaUserFriends, FaRegCalendarCheck, FaIdBadge, FaUserCircle } from 'react-icons/fa';

const navs = [
    { label: 'Home', icon: <FaHome />, path: '/home' },
    { label: 'Absensi', icon: <FaRegCalendarCheck />, path: '/absensi' },
    { label: 'Connect', icon: <FaUserFriends />, path: '/direktori' },
    { label: 'Profile', icon: <FaUserCircle />, path: '/profile' },
];

function BottomNav() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-200 rounded-full flex px-4 py-2 shadow-lg z-50">
            {navs.map((nav) => {
                const active = location.pathname === nav.path;
                return (
                    <button
                        key={nav.label}
                        onClick={() => navigate(nav.path)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors duration-200
              ${active ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
                    >
                        {nav.icon}
                        <span>{nav.label}</span>
                    </button>
                );
            })}
        </nav>
    );
}

export default BottomNav;
