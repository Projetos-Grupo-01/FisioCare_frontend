import { BarbellIcon, BookmarkSimpleIcon, HourglassHighIcon, RepeatIcon } from "@phosphor-icons/react"

function DeletarExercicio() {
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
            <h2 className="text-white text-xl font-bold">Abdominal</h2>
          </div>

        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-4 bg-white px-3.5">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-medium py-1.5">Elevação de Pernas</h3>
            <div className="grid grid-cols-3">
              <p className="col-span-2">3 Series</p>
              <p className="flex"><RepeatIcon size={24} /> 12</p>
              <p className="flex gap-1.5 col-span-2"><BarbellIcon size={24} /> Nenhum</p>
              <p className="flex"><HourglassHighIcon size={24} /> 1 min</p>
            </div>
            <p className="py-1.5"><span className="font-bold">Obs:</span> Mantenha a lombar em contato com o chão durante toda a execução para evitar lesões.</p>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://ik.imagekit.io/j8alkuh75t/image%204.png?updatedAt=1752172492873"
              alt="Elevação de Pernas"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center py-3 gap-1">
          <div className="w-full bg-green-700 hover:bg-green-900 transition delay-2 cursor-pointer flex justify-center text-white py-1.5 rounded">
            Sim
          </div>
          <div className="w-full bg-red-700 hover:bg-red-900 transition delay-2 cursor-pointer flex justify-center text-white py-1.5 rounded">
            Não
          </div>
        </div>
    </div>
  )
}

export default DeletarExercicio