import CardExercicio from "../cardexercicio/CardExercicio"


function ListarExercicios() {
  return (
    <div className="bg-[#DCD9C2] flex justify-center w-full py-7">
      <div className="container flex flex-col mx-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <CardExercicio />
          <CardExercicio />
          <CardExercicio />
          <CardExercicio />
        </div>
      </div>
    </div>
  )
}

export default ListarExercicios