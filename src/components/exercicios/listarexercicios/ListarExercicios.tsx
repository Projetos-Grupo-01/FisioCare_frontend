import { useNavigate } from "react-router-dom"
import CardExercicio from "../cardexercicio/CardExercicio"
import { useContext, useEffect, useState } from "react"
import type Exercicio from "../../../models/Exercicio"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar } from "../../../service/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { DNA } from "react-loader-spinner"


function ListarExercicios() {

  const navigate = useNavigate()

  const [exercicios, setExercicios] = useState<Exercicio[]>([])

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarExercicios() {
    try {
      await buscar('/exercicios', setExercicios, {
        headers: {
          Authorization: token
        }
      })
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      ToastAlerta('Você precisa estar logado', 'info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    buscarExercicios()
  }, [exercicios.length])

  return (
    <>
      {exercicios.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className="bg-[#DCD9C2] flex justify-center w-full py-7">
        <div className="container flex flex-col mx-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {exercicios.map((exercicio) => (
              <CardExercicio key={exercicio.id} exercicio={exercicio}/>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default ListarExercicios