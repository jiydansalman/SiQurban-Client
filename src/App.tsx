import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import LandingPage from "./pages/LandingPage";
import PaketPage from "./pages/PaketPage"; 
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/paket" element={<PaketPage />} />
          <Route path="/tabunganku" element={<PaketPage />} />
        </Route>

        {/* Login and Signup Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>  
  );
}; 

export default App;