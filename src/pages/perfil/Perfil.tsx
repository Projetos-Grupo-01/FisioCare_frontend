import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { buscar } from "../../service/Service";
import type Usuario from "../../models/Usuario";
import { DNA } from "react-loader-spinner";
import "./Perfil.css";

function getImcStatus(imc: number) {
  if (imc < 18.5) {
    return { texto: "Abaixo do peso", cor: "text-orange-500" };
  } else if (imc < 25) {
    return { texto: "Peso normal", cor: "text-green-600" };
  } else if (imc < 30) {
    return { texto: "Sobrepeso", cor: "text-orange-500" };
  } else {
    return { texto: "Obesidade", cor: "text-red-600" };
  }
}

function Perfil() {
  const navigate = useNavigate();
  const [usuarioCompleto, setUsuarioCompleto] = useState<Usuario>(
    {} as Usuario
  );
  const [loading, setLoading] = useState(true);

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    } else {
      buscarDadosUsuario();
    }
  }, [usuario.token]);

  async function buscarDadosUsuario() {
    setLoading(true);
    try {
      await buscar(`/usuarios/${usuario.id}`, setUsuarioCompleto, {
        headers: {
          Authorization: usuario.token,
        },
      });

      try {
        await buscar(
          `/usuarios/imc/${usuario.id}`,
          (imcData: any) => {
            setUsuarioCompleto((prev) => ({
              ...prev,
              imc: imcData.imc,
            }));
          },
          {
            headers: {
              Authorization: usuario.token,
            },
          }
        );
      } catch (imcError) {
        console.error("Erro ao buscar IMC do usuário:", imcError);
      }
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
      setUsuarioCompleto({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        altura: undefined,
        peso: undefined,
        imc: undefined,
        exercicio: null,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="fundoPerfil bg-[#dcd9c2d8] hidden lg:block"></div>
          <div className="bg-[#dcd9c2d8] flex items-center justify-center px-6">
            <DNA
              visible={true}
              height="200"
              width="200"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper mx-auto"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Coluna com imagem de fundo */}
          <div className="fundoPerfil bg-[#dcd9c2d8] hidden lg:block"></div>

          {/* Área de conteúdo do perfil */}
          <div className="bg-[#dcd9c2d8] py-20 flex items-center justify-center px-6">
            <div className="w-full max-w-md flex flex-col gap-6">
              <h2 className="text-[#001427] text-5xl text-center mb-4 font-bold">
                Meu Perfil
              </h2>

              {/* Foto de perfil */}
              <div className="flex justify-center">
                <img
                  className="rounded-full w-32 h-32 object-cover border-4 border-[#924D75] shadow-lg"
                  src={usuario.foto}
                  alt={`Foto de perfil de ${usuario.nome}`}
                />
              </div>

              {/* Informações do usuário */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label className="font-bold text-[#001427] mb-2">
                      Nome Completo
                    </label>
                    <div className="rounded-lg p-3 border border-slate-300 bg-gray-50 text-[#001427]">
                      {usuario.nome}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-bold text-[#001427] mb-2">
                      Email
                    </label>
                    <div className="rounded-lg p-3 border border-slate-300 bg-gray-50 text-[#001427]">
                      {usuario.usuario}
                    </div>
                  </div>

                  {usuarioCompleto.altura !== undefined &&
                    usuarioCompleto.altura !== null &&
                    usuarioCompleto.altura > 0 && (
                      <div className="flex flex-col">
                        <label className="font-bold text-[#001427] mb-2">
                          Altura
                        </label>
                        <div className="rounded-lg p-3 border border-slate-300 bg-gray-50 text-[#001427]">
                          {usuarioCompleto.altura}m
                        </div>
                      </div>
                    )}

                  {usuarioCompleto.peso !== undefined &&
                    usuarioCompleto.peso !== null &&
                    usuarioCompleto.peso > 0 && (
                      <div className="flex flex-col">
                        <label className="font-bold text-[#001427] mb-2">
                          Peso
                        </label>
                        <div className="rounded-lg p-3 border border-slate-300 bg-gray-50 text-[#001427]">
                          {usuarioCompleto.peso}kg
                        </div>
                      </div>
                    )}

                  {usuarioCompleto.imc !== undefined &&
                    usuarioCompleto.imc !== null &&
                    usuarioCompleto.imc > 0 && (
                      <div className="flex flex-col">
                        <label className="font-bold text-[#001427] mb-2">
                          IMC
                        </label>
                        <div className="flex justify-between items-center rounded-lg p-3 border border-slate-300 bg-gray-50 text-[#001427]">
                          <span className="font-bold">
                            {usuarioCompleto.imc.toFixed(2)}
                          </span>
                          <span
                            className={`ml-4 font-semibold ${
                              getImcStatus(usuarioCompleto.imc).cor
                            }`}
                          >
                            {getImcStatus(usuarioCompleto.imc).texto}
                          </span>
                        </div>
                      </div>
                    )}
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex justify-center w-full mt-4">
                <button
                  onClick={() => navigate("/home")}
                  className="bg-[#924D75] hover:bg-[#7b3e61] cursor-pointer text-white py-2 px-4 rounded-lg w-1/2 flex justify-center items-center transition"
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Perfil;
