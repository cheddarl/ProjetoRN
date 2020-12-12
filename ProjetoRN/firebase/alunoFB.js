import { conexaoFS } from './conexaoFB';

export class AlunoFB{
    state = {
        usuarios: conexaoFS.collection('ProjetoRN/Perfil/Alunos')
    };

    pegarAluno(){
        return this.state.usuarios;
    }

    adicionarAluno(aluno){
        this.state.usuarios.add(aluno);
    }

    editarAluno(aluno){
        const {id} = aluno;
        delete aluno.id;

        this.state.usuarios.doc(id).update(aluno);
    }

    removerAluno(aluno){
        this.state.usuarios.doc(aluno.id).delete();
    }
} 