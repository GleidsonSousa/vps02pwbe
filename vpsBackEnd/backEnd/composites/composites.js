class Aluno {
    constructor(id, nome, nascimento){
        this.id = id
        this.nome = nome
        this.nascimento = nascimento
    }

    cursos = []

    addComponent(cur){
        this.cursos.push(cur)
    }
}

class Curso {
    constructor(id, curso, duracao){
        this.id = id
        this.curso = curso
        this.data = data
        this.duracao = duracao
    }

    cursados = []

    addComponent(cursa){
        this.cursados.push(cursa)
    }
}


class Cursado{
    constructor(aluno, curso, data){
        this.aluno = aluno
        this.curso = curso
        this.data = data
    }
}