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
import Perfil from "./pages/perfil/Perfil";
import DeletarCategoria from "./components/categoria/DeletarCategoria";
import ListaCategorias from "./components/categoria/ListaCategorias";
import DeletarExercicio from "./components/exercicios/deletarexercicio/DeletarExercicio";
import FormExercicio from "./components/exercicios/formexercicio/FormExercicio";
import ListarExercicios from "./components/exercicios/listarexercicios/ListarExercicios";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/quemsomos" element={<QuemSomos />} />
              <Route path="/perfil" element={<Perfil />} />
              
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />

              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />

              <Route path="/exercicios" element={<ListarExercicios />} />
              <Route path="/deletarexercicio/:id" element={<DeletarExercicio />} />
              <Route path="/cadastrarexercicio" element={<FormExercicio />} />
              <Route path="/editarexercicio/:id" element={<FormExercicio />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
