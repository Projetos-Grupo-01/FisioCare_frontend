import { useContext } from "react";
import ListarExercicios from "../../components/exercicios/listarexercicios/ListarExercicios"
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";


function Home() {

  const { usuario } = useContext(AuthContext);

  return (
    <>
      <div className="flex justify-center bg-[#001427]">
        <div className="container grid grid-cols-1 sm:grid-cols-2 text-white py-9">
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-5xl font-semibold">
              Seja bem vindo <br />
              {usuario.nome}!
            </h2>
            <div className="flex justify-center space-x-4">
              <Link to="/cadastrarcategoria" className="flex justify-center w-42 py-3 bg-[#904C77] text-white font-semibold rounded-lg shadow-md hover:bg-[#5B364E] transition duration-300 cursor-pointer">
                Criar Categoria
              </Link>
              <Link to="/cadastrarexercicio" className="flex justify-center w-42 py-3 bg-[#C9D5B5] text-black hover:bg-white font-semibold rounded-lg shadow-md transition duration-300 cursor-pointer">
                Criar Exercício
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="homeImage.png"
              alt="Imagem da página Home"
              className="w-2/3 max-w-96 py-9"
            />
          </div>
        </div>
      </div>

      <ListarExercicios />
    </>
  )
}

export default Home