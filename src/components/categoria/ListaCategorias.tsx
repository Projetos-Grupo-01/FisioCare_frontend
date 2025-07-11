import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type Categoria from "../../models/Categoria";
import { buscar } from "../../service/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

import CardCategorias from "./CardCategorias"
import { AuthContext } from "../../contexts/AuthContext";
import { InfinitySpin } from "react-loader-spinner";




function ListaCategorias() {

    const navigate = useNavigate();

    const[categorias, setCategorias] = useState<Categoria[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarCategorias() {
       try {
         await buscar('/categorias', setCategorias, {
            headers: { Authorization: token }

         }) 
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       } catch (error: any) {
        if (error.toString().includes('403')) {
                handleLogout()
            }  
       }
    }
     useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    useEffect(() => {
        buscarCategorias()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorias.length])



  return (
    <>
       {categorias.length === 0 && (
         <InfinitySpin
            width="200"
            color="#4fa94d"
        />
       )}
       <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2
                                    lg:grid-cols-3 gap-8">
                    {categorias.map((categoria) =>(
                        <CardCategorias key={categoria.id} categoria={categoria} />
                    ))}
                        
                </div>
            </div>
        </div>
     
    </>
  )
}

export default ListaCategorias
