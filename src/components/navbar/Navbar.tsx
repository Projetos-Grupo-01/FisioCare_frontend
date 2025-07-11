import { SignInIcon, SignOutIcon } from "@phosphor-icons/react"
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout()
    ToastAlerta('O Usuário foi desconectado com sucesso', 'sucesso')
    navigate('/')
  }

  return (
    <>
      <div className='w-full flex px-19 py-4 bg-[#001427] text-white text-lg'>
        <Link to={usuario.id === 0 ? "/" : "/home"}>
          <img className="w-52" src="./LogoFisioCare.png" alt="logo fisiocare" />
        </Link>

        <Link to="/sobre" className=" ml-auto text-[#BCCDB2] hover:text-white py-4 px-3">
          Sobre o Projeto
        </Link>
        <Link to="/quemsomos" className="text-[#BCCDB2] hover:text-white py-4 px-3">
          Quem Somos
        </Link>

        {usuario.id !== 0 && (

          <><Link to="/categorias" className=" text-[#BCCDB2] hover:text-white py-4 px-3">
            Categorias
          </Link><Link to="/exercicios" className="text-[#BCCDB2] hover:text-white py-4 px-3">
              Exercicios
            </Link></>
        )}

        <Link to="/perfil" className="text-[#BCCDB2] hover:text-white py-4 px-3">
          <img src={usuario.foto} alt={usuario.nome} className="rounded-full w-7" />
        </Link>

        <Link to="" onClick={logout} className="text-[#BCCDB2] hover:text-white py-4 px-3 flex items-center">
          {usuario.id === 0 ?
            <SignInIcon size={32} />
            : <SignOutIcon size={32} />}
        </Link>
      </div>
    </>
  )
}

export default Navbar