import bgSignup from "../assets/bg signup.png";
import logoHitam from "../assets/logo_hitam.png";

const SignupPage = () => {
return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center font-nunito"
      style={{ backgroundImage: `url(${bgSignup})` }}
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center">

        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
            
            {/* Logo */}
            <div className="flex flex-col items-center mb-2">
              <img
                src={logoHitam}
                alt="Siddiq Qurban Logo"
                className="w-20"
              />
            </div>

            <h2 className="text-center text-lg font-poppins font-semibold text-[#1F7A63] mb-6">
              Daftar akun baru
            </h2>

            {/* Username */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                focus:outline-none focus:ring-2 focus:ring-[#1F7A63]"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
                <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                focus:outline-none focus:ring-2 focus:ring-[#1F7A63]"/>
            </div>

            {/* Password */}
            <div className="mb-2">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                focus:outline-none focus:ring-2 focus:ring-[#1F7A63]"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-2">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                focus:outline-none focus:ring-2 focus:ring-[#1F7A63]"
              />
            </div>

            <div className="text-right text-sm text-gray-500 mb-4">
              <a href="#" className="hover:text-[#1F7A63]">
                Lupa password?
              </a>
            </div>

            <button className="w-full bg-[#1F7A63] hover:bg-[#17614F] text-white py-3 rounded-lg font-semibold transition">
              Daftar
            </button>

            <div className="text-center mt-4 text-sm">
              <a href="#" className="text-[#1F7A63] font-medium hover:underline">
                Sudah punya akun
              </a>
            </div>

            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="px-3 text-xs text-gray-500">
                atau masuk dengan
              </span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">Google</span>
            </button>

            <p className="text-center text-xs text-gray-500 mt-6">
              Setiap rupiah adalah niat baik.
            </p>
        <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

