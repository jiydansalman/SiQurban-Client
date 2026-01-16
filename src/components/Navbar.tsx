import { NavLink } from 'react-router-dom';


 
const Navbar = () => {
    // Style Dasar Navbar
    const baseStyle = "hover:text-green-600 transition pb-1";
    // Style Navbar Saat Aktif
    const activeStyle = "border-b-2 border-green-600 text-green-600 ";
    return (
        <nav className="flex justify-center items-center py-6 px-10 bg-transparent absolute w-full z-10">
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
                {/* Login */}
                <NavLink to="/login"
                className={({isActive}) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>
                    Login
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;