import { Link, SignOut } from "@phosphor-icons/react"

function Navbar() {
    return (
        <>
            <div className='w-full flex px-19 py-4 bg-[#001427] text-white'>
                <img className="w-[200px]" src="./LogoFisioCare.png" alt="logo fisiocare" />

                <a href="#" className=" ml-auto text-[#BCCDB2] hover:text-white py-4 px-3">
                            Sobre o Projeto
                        </a>
                        <a href="#" className="text-[#BCCDB2] hover:text-white py-4 px-3">
                            Quem Somos
                        </a>
                        <a href="#" className="text-[#BCCDB2] hover:text-white py-4 px-3">
                            <SignOut size={32} /> 
                        </a>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Categoria</Link>
                </div>
<div>
                        
                    </div>
                <div className='w-full  flex py-0.5 bg-[#BCCDB2]'>

                
                      <div>  
                    </div>
                </div>
            
        </>
    )
}

export default Navbar