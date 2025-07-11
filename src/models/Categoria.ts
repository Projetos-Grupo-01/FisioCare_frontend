import type Exercicio from "./Exercicio";

export default interface Categoria {
  id: number | undefined;
  nome: string;
  descricao: string;
  exercicio?: Exercicio[] | null;
}
