import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import type Exercicio from "../../../models/Exercicio";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { RotatingLines } from "react-loader-spinner";


function FormExercicio() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categorias, setCategorias] = useState<Categoria[]>([])

  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '', descricao: '', })
  const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarExercicioPorId(id: string) {
    try {
      await buscar(`/exercicios/${id}`, setExercicio, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout()
      }
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout()
      }
    }
  }

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
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
    buscarCategorias()

    if (id !== undefined) {
      buscarExercicioPorId(id)
    }
  }, [id])

  useEffect(() => {
    setExercicio({
      ...exercicio,
      categoria: categoria
    })
  }, [categoria])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setExercicio({
      ...exercicio,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario
    })
  }

  function retornar() {
    navigate('/exercicios')
  }

  async function gerarNovoExercicio(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar('/exercicios', exercicio, setExercicio, {
          headers: { Authorization: token }
        })

        ToastAlerta('Exercício atualizado com sucesso', 'sucesso')

      } catch (error: any) {
        if (error.toString.includes("403")) {
          handleLogout()
        } else {
          ToastAlerta('Erro ao atualizar o Exercício', 'erro')
        }
      }
    } else {
      try {
        await cadastrar('/exercicios', exercicio, setExercicio, {
          headers: { Authorization: token }
        })

        ToastAlerta('Exercício cadastrado com sucesso', 'sucesso')

      } catch (error: any) {
        if (error.toString.includes("403")) {
          handleLogout()
        } else {
          ToastAlerta('Erro ao cadastrar o Exercício', 'erro')
        }
      }
    }

    setIsLoading(false)
    retornar()
  }

  const carregandoCategoria = categoria.nome === ''

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Exercício" : "Cadastrar Exercício"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoExercicio}>
        <div className="flex flex-col gap-1">
          <label htmlFor="nome">Nome do Exercício</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-1 border-black rounded-xl p-2 bg-white"

            value={exercicio.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="numeroSeries">Número de Séries</label>
            <input
              type="number"
              placeholder="Séries"
              name="numeroSeries"
              required
              className="border-1 border-black rounded-xl p-2 bg-white"

              value={exercicio.numeroSeries}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="repeticoes">Quantidade de Repetições</label>
            <input
              type="number"
              placeholder="Repetições"
              name="repeticoes"
              required
              className="border-1 border-black rounded-xl p-2 bg-white"

              value={exercicio.repeticoes}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="intervalo">Intervalo entre séries</label>
          <input
            type="text"
            placeholder="Intervalo"
            name="intervalo"
            required
            className="border-1 border-black rounded-xl p-2 bg-white"

            value={exercicio.intervalo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="equipamento">Equipamento utilizado</label>
          <input
            type="text"
            placeholder="Equipamento"
            name="equipamento"
            className="border-1 border-black rounded-xl p-2 bg-white"

            value={exercicio.equipamento}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="observacoes">Observações</label>
          <input
            type="text"
            placeholder="Observações"
            name="observacoes"
            className="border-1 border-black rounded-xl p-2 bg-white"

            value={exercicio.observacoes}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="midia">Foto do exercício</label>
          <input
            type="text"
            placeholder="Link da foto"
            name="midia"
            className="border-1 border-black rounded-xl p-2 bg-white"

            value={exercicio.midia}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Categoria do exercício</p>
          <select name="categoria" id="categoria" className="border-1 border-black rounded-xl p-2 bg-white"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>

            <option value="" selected disabled>Selecione uma Categoria</option>

            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.nome}</option>
              </>
            ))}

          </select>
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-[#904C77] hover:bg-[#482B3E] transition delay-2
          text-white font-bold w-1/2 mx-auto py-2 flex justify-center cursor-pointer mb-12"
          disabled={carregandoCategoria}
        >
          {isLoading ?
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          }
        </button>
      </form>
    </div>
  )
}

export default FormExercicio