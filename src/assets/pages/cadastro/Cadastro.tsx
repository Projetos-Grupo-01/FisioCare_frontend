import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import "./Cadastro.css";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import type Usuario from "../../../models/Usuario";
import { cadastrarUsuario } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    altura: undefined,
    peso: undefined,
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario.id]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovousuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario("/usuarios/cadastrar", usuario, setUsuario);
        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar usuário", "erro");
        console.error(error);
      }
    } else {
      ToastAlerta("Senhas diferentes!", "erro");
      setUsuario({
        ...usuario,
        senha: "",
      });
    }

    setIsLoading(false);
  }

  console.log(JSON.stringify(usuario));
  console.log(confirmaSenha);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Coluna com imagem de fundo */}
        <div className="fundoCadastro hidden lg:block"></div>

        {/* Formulário */}
        <div className="bg-[#dcd9c2d8] flex items-center justify-center px-6">
          <form
            onSubmit={cadastrarNovousuario}
            className="w-full max-w-md flex flex-col gap-3 font"
          >
            <h2 className="text-[#001427] text-5xl text-center mb-2 font-bold">
              Cadastro
            </h2>

            {/* Nome */}
            <div className="flex flex-col w-full">
              <label htmlFor="nome" className="font-bold">
                Nome completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="rounded-lg p-3 border border-slate-500 bg-white"
                value={usuario.nome}
                onChange={atualizarEstado}
                placeholder="Maria de Souza"
              />
            </div>

            {/* User */}
            <div className="flex flex-col w-full">
              <label htmlFor="usuario" className="font-bold">
                Usuário
              </label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                className="rounded-lg p-3 border border-slate-500 bg-white"
                value={usuario.usuario}
                onChange={atualizarEstado}
                placeholder="maria.souza@email.com"
              />
            </div>

            {/* Corfimação de senhas */}
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="senha" className="font-bold">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  className="rounded-lg p-3 border border-slate-500 bg-white w-full"
                  value={usuario.senha}
                  onChange={atualizarEstado}
                  placeholder="Senha"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="confirmarSenha" className="font-bold">
                  Confirma Senha
                </label>
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  className="rounded-lg p-3 border border-slate-500 bg-white w-full"
                  value={confirmaSenha}
                  onChange={handleConfirmarSenha}
                  placeholder="Confirme a senha"
                />
              </div>
            </div>

            {/* Foto */}
            <div className="flex flex-col w-full">
              <label htmlFor="foto" className="font-bold">
                Foto
              </label>
              <input
                type="text"
                id="foto"
                name="foto"
                className="rounded-lg p-3 border border-slate-500 bg-white"
                value={usuario.foto}
                onChange={atualizarEstado}
              />
            </div>

            {/* Altura e peso */}
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="altura" className="font-bold">
                  Altura
                </label>
                <input
                  type="number"
                  id="altura"
                  name="altura"
                  className="rounded-lg p-3 border border-slate-500 bg-white w-full"
                  value={usuario.altura}
                  onChange={atualizarEstado}
                  placeholder="1.75"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="peso" className="font-bold">
                  Peso
                </label>
                <input
                  type="number"
                  id="peso"
                  name="peso"
                  className="rounded-lg p-3 border border-slate-500 bg-white w-full"
                  value={usuario.peso}
                  onChange={atualizarEstado}
                  placeholder="Peso em kg"
                />
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex gap-4 w-full mt-2">
              <button
                type="submit"
                className="bg-[#924D75] hover:bg-[#7b3e61] text-white py-2 px-4 rounded-lg w-1/2 flex justify-center items-center transition"
              >
                {isLoading ? (
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  />
                ) : (
                  "Cadastrar"
                )}
              </button>

              <button
                type="button"
                onClick={retornar}
                className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-lg w-1/2 transition"
              >
                Cancelar
              </button>
            </div>

            {/* Link para login */}
            <hr className="my-3 border-[#66626279]" />
            <p className="text-center text-lg text-[#001427]">
              Já possui uma conta?{" "}
              <a
                href="/login"
                className="text-[#924D75] hover:underline font-semibold"
              >
                Faça login
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
