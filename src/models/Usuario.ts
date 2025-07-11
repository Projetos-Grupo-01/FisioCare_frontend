import type Exercicio from "./Exercicio";

export default interface Usuario {
  id: number | undefined;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  altura?: number;
  peso?: number;
  imc?: number;
  exercicio?: Exercicio[] | null;
}
