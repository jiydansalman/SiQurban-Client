import navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import heroPaket from "../assets/heroPaket.png";

const PaketPage = () => {
    return (
        <div className="bg-[#FDF6EC] min-h-screen font-sans">

            {/* HERO PAKET */}
            <section className="relative h-[680px] bg-cover bg-center flex items-center" 
            style = {{backgroundImage: `url(${heroPaket})`}}>
                <div className="w-full max-w-7xl mx-auto">
                    <h1 className="text-[#1F7A63] font-sans font-bold text-[70px] leading-tight text-left">
                        Pilih Paket Hewan <br />
                        Qurban Sesuai Niat & <br />
                        Kemampuan 
                    </h1>
                    <h3 className="text-black text-3xl leading-tight mt-16">
                        Pilih paket hewan qurban sesuai dengan kebutuhan <br />
                        dan anggaran Anda
                    </h3>
                    <div className=" relative max-w-md mt-8">
                        <input type="text" placeholder="Cari Hewan Qurban" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F7A63]" />
                        <span className="absolute top-1/2 -translate-y-1/2 text-gray-400 text-right">
                            🔍
                        </span>
                    </div>
                </div>
            </section>

            {/* Paket Hewan Qurban */}
            <section className="relative">
                <div className="flex gap-8 max-w-7xl mx-auto">
                    {/* Filter */}
                    <div className="w-[300px]">
                        <div className="border border-black rounded-lg shadow-lg p-4 mt-5">
                        
                        </div>
                    </div>

                    {/* Paket Hewan Qurban */}
                    <div className="w-[900px] px-4 gap-4">
                        <div>
                            <h2 className="flex items-start text-[40px] font-extrabold  font-nunito text-[#1F7A63]">
                                Paket Qurban
                            </h2>
                            <h3 className="text-black text-2xl">
                                Tekan "Lihat Detail" untuk melihat gambar asli dan detail hewan
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mt-8">
                            <h1>hellow</h1>
                            {/* Card Paket Qurban */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PaketPage;