import {useCountDown} from "../hooks/countDownDays";
import heroBG from "../assets/herobg.png";
import card1 from "../assets/card1rmv.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

const LandingPage = () => {

  const daysLeft = useCountDown("2026-05-27T00:00:00");

  return (
    <div className="bg-[#FCF8ED] min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative h-[710px] bg-cover bg-center flex items-center" 
      style={{ backgroundImage: `url(${heroBG})` }}>
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="font-sans text-[#05AD72] font-extrabold text-[70px] leading-tight text-left">
            Assalammu'alaikum <br />
            <span className="text-[#1F7A63] font-nunito">{daysLeft} </span><span>Hari Menuju</span>  <br />
            <span className="text-[#1F7A63] font-nunito">Idul Adha</span>
          </h1>
          <p className="text-gray-700 text-[24px] my-8 font-medium">
            Raih Kurban Impian dengan <br /> 
            Menabung Mudah
          </p>
          <div className="mt-8">
            <a href="#" 
            className="inline-flex items-center mt-8 bg-[#1F7A63] text-white px-5 py-4 rounded-3xl text-[25px] font-bold hover:bg-[#038a5f] transition shadow-lg">
              Menabung Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative ">
        {/* Card Features */}
        <div className="w-full max-w-7xl mx-auto py-1 flex items-center justify-center bg-[#FDF9EE] rounded-3xl shadow-xl border border-black/10">
          <div className="gap-4 flex items-center px-12">
            <img src={card1} alt=""  className="w-29 h-29 object-contain"/>
            <div className="text-left flex flex-col gap-4">
              <h3 className="text-[#1F7A63] font-bold text-[24px]">Pilih Hewan Qurban</h3>
              <p className="text-[#6b7280]">Sesuai dengan budget Anda</p>
            </div> 
          </div>
          <div className="gap-4 flex items-center px-12">
            <img src={card2} alt=""  className="w-28 h-28 object-contain"/>
            <div className="text-left flex flex-col gap-4">
              <h3 className="text-[#1F7A63] font-bold text-[24px]">Tracking Tabungan</h3>
              <p className="text-[#6b7280]">Progress Hewan Anda</p>
            </div> 
          </div>
          <div className="gap-4 flex items-center px-12">
            <img src={card3} alt=""  className="w-30 h-30 object-contain"/>
            <div className="text-left flex flex-col gap-4">
              <h3 className="text-[#1F7A63] font-bold text-[24px]">Hewan Sehat</h3>
              <p className="text-[#6b7280]">Sesuai dengan Syariat</p>
            </div> 
          </div> 
        </div>
        {/* Card Tabunganku */}
        <div className="w-full max-w-7xl mx-auto mt-20">
          <h2 className="text-[40px] font-extrabold text-left font-nunito text-[#1F7A63]">
            Tabungan Qurban Anda
          </h2>
          <div className="flex h-[400px] bg-[#FDF9EE] rounded-3xl shadow-xl border border-black/10">
            <div>
              {/* Isi Detail Tabungan Kiri */}
            </div>
            <div>
              {/* Gambar Paket yang Dipilih */}
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto mt-20">
          <div className="flex justify-between items-center">
            <h2 className="text-[40px] font-extrabold text-left font-nunito text-[#1F7A63]">
              Paket Hewan Qurban
            </h2>
            <a href="" className="underline mt-3 text-right">Lihat Lainnya</a>
          </div>
          <div>
            {/* Isi Kartu Paket Hewan Qurban */}
          </div>
        </div>
      </section>

    </div>
  );
} 
export default LandingPage;