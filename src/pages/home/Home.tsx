import { useContext } from "react";
import ListarExercicios from "../../components/exercicios/listarexercicios/ListarExercicios"
import { AuthContext } from "../../contexts/AuthContext";


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