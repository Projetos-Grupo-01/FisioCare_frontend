import { BarbellIcon, BookmarkSimpleIcon, HourglassHighIcon, RepeatIcon } from "@phosphor-icons/react"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Exercicio from "../../../models/Exercicio"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../service/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { RotatingLines } from "react-loader-spinner"

function DeletarExercicio() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/exercicios/${id}`, setExercicio, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta('Você precisa estar logado', 'info')
      navigate('/')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function DeletarExercicio() {
    setIsLoading(true)

    try {
      await deletar(`/exercicios/${id}`, {
        headers: { Authorization: token }
      })

      ToastAlerta('Exercício deletado com sucesso', 'sucesso')
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout()
      } else {
        ToastAlerta('Erro ao deletar o exercício', 'erro')
      }
    }

    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/exercicios")
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Exercício</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza que deseja apagar o exercício a seguir?
      </p>

      <div className="rounded-3xl overflow-hidden max-w-2xl">
        <header className="bg-[#41413A] flex justify-between px-6 py-2 gap-1.5">
          <div className="flex items-center">
            <BookmarkSimpleIcon size={32} color="#fff" />
            <h2 className="text-white text-xl font-bold">{exercicio.categoria?.nome}</h2>
          </div>

        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-4 bg-white px-3.5">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-medium py-1.5">{exercicio.nome}</h3>
            <div className="grid grid-cols-3">
              <p className="col-span-2">{exercicio.numeroSeries} Series</p>
              <p className="flex"><RepeatIcon size={24} /> {exercicio.repeticoes}</p>
              <p className="flex gap-1.5 col-span-2"><BarbellIcon size={24} /> {exercicio.equipamento}</p>
              <p className="flex"><HourglassHighIcon size={24} /> {exercicio.intervalo}</p>
            </div>
            <p className="py-1.5"><span className="font-bold">Obs:</span> {exercicio.observacoes}</p>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={exercicio.midia}
              alt={exercicio.nome}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center py-3 gap-1">
        <button className="w-full bg-green-700 hover:bg-green-900 transition delay-2 cursor-pointer flex justify-center text-white py-1.5 rounded"
          onClick={DeletarExercicio}>
          {isLoading ?
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
            <span>Sim</span>
          }
        </button>
        <button className="w-full bg-red-700 hover:bg-red-900 transition delay-2 cursor-pointer flex justify-center text-white py-1.5 rounded"
          onClick={retornar}>
          Não
        </button>
      </div>
    </div>
  )
}

export default DeletarExercicio