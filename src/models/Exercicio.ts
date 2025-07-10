import type Categoria from "./Categoria";
import type Usuario from "./Usuario";

export default interface Exercicio {
  id: number;
  nome: string;
  numeroSeries: number;
  repeticoes: number;
  intervalo: string;
  equipamento: string;
  observacoes: string;
  midia: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
