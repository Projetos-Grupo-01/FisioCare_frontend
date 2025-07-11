import QuemSomos from "./pages/quemsomos/QuemSomos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import Sobre from "./pages/sobre/Sobre"
import LandingPage from "./pages/landingpage/LandingPage";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h[80vh]">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/quemsomos" element={<QuemSomos />} />
              
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />

              <Route path="/cadastrartema" element={<FormCategoria />} />
              <Route path="/editartema/:id" element={<FormCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
