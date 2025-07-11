import { BarbellIcon, BookmarkSimpleIcon, HourglassHighIcon, RepeatIcon } from "@phosphor-icons/react"
import type Exercicio from "../../../models/Exercicio";
import { Link } from "react-router-dom";

interface ModalExercicioProps {
  isOpen: boolean;
  exercicio: Exercicio;
  onClose: () => void;
}

const ModalExercicio = ({ isOpen, exercicio, onClose }: ModalExercicioProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center mx-5">
      <div className="rounded-3xl overflow-hidden max-w-2xl">
        <header className="bg-[#41413A] flex justify-between px-6 py-2 gap-1.5">
          <div className="flex items-center">
            <BookmarkSimpleIcon size={32} color="#fff" />
            <h2 className="text-white text-xl font-bold">{exercicio.categoria?.nome}</h2>
          </div>

          <button
            className="top-2 right-2 text-gray-200 hover:text-white text-2xl font-bold cursor-pointer mr-2"
            onClick={onClose}
            aria-label="Fechar"
            style={{ background: "none", border: "none" }}
          >
            &times;
          </button>

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
            <div className="flex justify-center py-3 gap-1">
              <Link to={`/editarexercicio/${exercicio.id}`} className="w-full bg-green-700 hover:bg-green-900 transition delay-2 cursor-pointer flex justify-center text-white py-1.5 rounded">
                Editar
              </Link>
              <Link to={`/deletarexercicio/${exercicio.id}`} className="w-full bg-red-700 hover:bg-red-900 transition delay-2 cursor-pointer flex justify-center text-white py-1.5 rounded"> 
                Apagar
              </Link> 
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={exercicio.midia}
              alt={exercicio.nome}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalExercicio