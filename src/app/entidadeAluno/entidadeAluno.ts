import { Responsavel } from '../entidadeResponsavel/entidadeResponsavel';

export class Aluno{
  nomealuno: string;
  matricula: string;
  dtnasc: string;
  curso: string;
  responsavel: Responsavel = new Responsavel();
}
