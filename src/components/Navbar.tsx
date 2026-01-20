import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

 
const Navbar = () => {

    const navigate = useNavigate();
    const [user, setUser ] = useState<any>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const  storedUser = localStorage.getItem('user');
        if (storedUser){
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    }

    // Style Dasar Navbar
    const baseStyle = "hover:text-green-600 transition pb-1";
    // Style Navbar Saat Aktif
    const activeStyle = "border-b-2 border-green-600 text-green-600 ";
    return (
        <nav className="flex justify-center items-center py-6 px-10 backdrop-blur-sm fixed w-full z-10">
            <div className="flex gap-8 text-gray-600 font-medium items-center font-nunito font-semibold">
                {/* Beranda */}
                <NavLink to="/" 
                className={({isActive}) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>
                    Beranda
                </NavLink>
                {/* Paket */}
                <NavLink to="/paket"
                className={({isActive}) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>
                    Paket
                </NavLink>
                {/* TabunganKu */}
                <NavLink to="/tabunganku"
                className={({isActive}) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>
                    TabunganKu
                </NavLink>
                {/* Login & Username*/}
                {user ? (
                    <div className="relative">
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 hover:text-green-600 font-bold focus:outline-none">
                            <span>{user.username}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden py-1 z-20">
                                <NavLink to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-green-100 hover:text:text-green-600">
                                    Profile Saya
                                </NavLink>
                                <button onClick={handleLogout} 
                                className = "w-full text-left px-4 py-2 text-red-500 hover:bg-red-100 font-bold">
                                Logout    
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <NavLink to = "/login" className = {({isActive}) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>
                        Login
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Navbar;