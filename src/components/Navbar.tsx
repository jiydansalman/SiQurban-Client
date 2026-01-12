const Navbar = () => {
    return (
        <nav className="flex justify-center items-center py-6 px-10 bg-transparent absolute w-full z-10">
            <div className="flex gap-8 text-gray-600 font-medium items-center">
                <a href="#" className="borde-b-2 border-green-600 text-green-600 pb-1">Beranda</a>
                <a href="#" className="hover:text-green-600 transition">Paket</a>
                <a href="#" className="hover:text-green-600 transition">TabunganKu</a>
                <a href="#" className="hover:text-green-600 transition">Profile</a>
                <button className="ml-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;