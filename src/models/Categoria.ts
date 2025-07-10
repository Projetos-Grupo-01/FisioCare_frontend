import type Exercicio from "./Exercicio";

export default interface Tema {
  id: number | undefined;
  nome: string;
  descricao: string;
  exercicio?: Exercicio[] | null;
}
