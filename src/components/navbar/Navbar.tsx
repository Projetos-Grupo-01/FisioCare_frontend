import { SignInIcon, SignOutIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className='w-full flex px-19 py-4 bg-[#001427] text-white'>
        <Link to="/">
          <img className="w-52" src="./LogoFisioCare.png" alt="logo fisiocare" />
        </Link>

        <Link to="/sobre" className=" ml-auto text-[#BCCDB2] hover:text-white py-4 px-3">
          Sobre o Projeto
        </Link>
        <Link to="/quemsomos" className="text-[#BCCDB2] hover:text-white py-4 px-3">
          Quem Somos
        </Link>
        <Link to="login" className="text-[#BCCDB2] hover:text-white py-4 px-3">
          <SignInIcon size={32} />
        </Link>
        <Link to='/categorias' className='hover:underline'>Categoria</Link>
      </div>
    </>
  )
}

export default Navbar