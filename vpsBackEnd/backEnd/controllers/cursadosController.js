// Ia tentar fazer o composite mas não deu certo 
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
        this.duracao = duracao
    }

    cursados = []

    addComponent(cursa){
        this.cursados.push(cursa)
    }
}


class Cursados{
    constructor(aluno, curso, data){
        this.aluno = aluno
        this.curso = curso
        this.data = data
    }
}

const Cursado = require('../models/cursados');
const conDB = require('../DAO/bcdDAO');

const listaCursados = (req, res) => {
    conDB.query(Cursado.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}


const listaCursado = (req, res) => {
    conDB.query(Cursado.toReadId(req.params), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    listaCursados,
    listaCursado
}