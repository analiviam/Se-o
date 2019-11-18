import { Aluno } from '../entidadeAluno/entidadeAluno';

export class Responsavel{
 nome: string;
 email: string;
 senha: string;
 telefone: string;
 alunos: Array<Aluno>;
}
