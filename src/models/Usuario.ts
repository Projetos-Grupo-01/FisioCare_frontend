import type Exercicio from "./Exercicio";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  altura: number;
  peso: number;
  exercicio?: Exercicio[] | null;
}
