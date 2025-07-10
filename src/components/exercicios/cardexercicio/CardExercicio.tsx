import { BarbellIcon, BookmarkSimpleIcon, HourglassHighIcon, RepeatIcon } from "@phosphor-icons/react"
import { useState } from "react";
import ModalExercicio from "../modalexercio/ModalExercicio";


function CardExercicio() {

  const [modalAberto, setModalAberto] = useState<boolean>(false);
  const abrirModal = () => setModalAberto(true)
  const fecharModal = () => setModalAberto(false)

  return (
    <>
      <div className="rounded-3xl overflow-hidden cursor-pointer" onClick={abrirModal}>
        <header className="bg-[#41413A] flex items-center px-3 py-2 gap-1.5">
          <BookmarkSimpleIcon size={32} color="#fff" />
          <h2 className="text-white text-xl font-bold">Abdominal</h2>
        </header>
        <div className="px-3.5 py-2 bg-white">
          <h3 className="text-xl font-medium py-1.5">Elevação de Pernas</h3>
          <div className="grid grid-cols-3">
            <p className="col-span-2">3 Series</p>
            <p className="flex"><RepeatIcon size={24} /> 12</p>
            <p className="flex gap-1.5 col-span-2"><BarbellIcon size={24} /> Nenhum</p>
            <p className="flex"><HourglassHighIcon size={24} /> 1 min</p>
          </div>
          <p className="py-1.5 truncate"><span className="font-bold">Obs:</span> Mantenha a lombar em contato com o chão durante toda a execução para evitar lesões.</p>
        </div>
      </div>
      <ModalExercicio isOpen={modalAberto} onClose={fecharModal} />
    </>
  )
}

export default CardExercicio