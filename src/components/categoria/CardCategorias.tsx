import { FaEdit, FaTrash } from "react-icons/fa";
import type Categoria from "../../models/Categoria";
import { Link } from "react-router-dom";


interface CardCategoriasProps{
    categoria: Categoria 
}


function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
    <div className="w-64 rounded-lg overflow-hidden shadow-md border border-gray-200">
      <header className="bg-[#1A1A2E] text-white text-center py-2 rounded-t-lg font-semibold">
        Categoria
      </header>

      <div className="bg-white p-4 rounded-b-lg text-center h-full">
        <p className="text-[#1a2238] mb-4">{categoria.descricao}</p>

        <div className="flex justify-center gap-4">
          <Link to={`/editarcategoria/${categoria.id}`}>
            <button
              title="Editar"
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow transition duration-200"
            >
              <FaEdit />
            </button>
          </Link>

          <Link to={`/deletarcategoria/${categoria.id}`}>
            <button
              title="Deletar"
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow transition duration-200"
            >
              <FaTrash />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardCategorias
