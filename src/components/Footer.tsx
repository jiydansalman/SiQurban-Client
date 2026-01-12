const Footer = () =>{
    return (
        <footer className="bg-[#1F7A63] text-white">
      <div className="px-20 py-14 grid grid-cols-5 gap-10">
        {/* LOGO */}
        <div className="col-span-1">
          <img
            src="/images/logo-white.png"
            alt="Siddiq Qurban"
            className="w-40 mb-3"
          />
          <p className="text-xs opacity-80">
            Kepercayaan adalah kehormatan
          </p>
        </div>

        {/* MENU */}
        <div>
          <h4 className="font-semibold mb-4">Menu</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Home</li>
            <li>Paket Hewan Qurban</li>
            <li>Tabunganku</li>
            <li>Tentang Kami</li>
          </ul>
        </div>

        {/* LAYANAN */}
        <div>
          <h4 className="font-semibold mb-4">Layanan</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Menabung Qurban</li>
            <li>Pemotongan Hewan Qurban</li>
            <li>Antar Lokasi Tujuan</li>
            <li>Pelaporan Qurban</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p className="text-sm opacity-90">
            Customer Service:
            <br />
            <span className="font-medium">
              +62 895368323817
            </span>
          </p>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="font-semibold mb-4">Social</h4>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-4 h-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/20 mx-20"></div>

      {/* COPYRIGHT */}
      <div className="text-center py-6 text-sm opacity-80">
        © 2026 Siddiq Qurban | All Rights Reserved
      </div>
    </footer>
    );
}

export default Footer;