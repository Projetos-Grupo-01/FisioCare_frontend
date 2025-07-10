
function FormExercicio() {
  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        Cadastrar Exercício
      </h1>

      <form className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="nome">Nome do Exercício</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-1 border-black rounded-xl p-2 bg-white"

          /*value={exercicio.nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}*/
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="series">Número de Séries</label>
            <input
              type="number"
              placeholder="Séries"
              name="series"
              required
              className="border-1 border-black rounded-xl p-2 bg-white"

            /*value={exercicio.texto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}*/
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

            /*value={exercicio.texto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}*/
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

          /*value={exercicio.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}*/
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="equipamento">Equipamento utilizado</label>
          <input
            type="text"
            placeholder="Equipamento"
            name="equipamento"
            className="border-1 border-black rounded-xl p-2 bg-white"

          /*value={exercicio.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}*/
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="observacoes">Observações</label>
          <input
            type="text"
            placeholder="Observações"
            name="observacoes"
            className="border-1 border-black rounded-xl p-2 bg-white"

          /*value={exercicio.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}*/
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Foto do exercício</label>
          <input
            type="text"
            placeholder="Link da foto"
            name="foto"
            className="border-1 border-black rounded-xl p-2 bg-white"

          /*value={exercicio.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}*/
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Categoria do exercício</p>
          <select name="categoria" id="categoria" className="border-1 border-black rounded-xl p-2 bg-white"
            onChange={(e) => (e.currentTarget.value)}>

            <option value="" selected disabled>Selecione uma Categoria</option>



          </select>
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-[#904C77] hover:bg-[#482B3E] transition delay-2
          text-white font-bold w-1/2 mx-auto py-2 flex justify-center cursor-pointer mb-12"

        >

          <span>Cadastrar</span>

        </button>
      </form>
    </div>
  )
}

export default FormExercicio