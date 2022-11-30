const Aluno = require('../models/aluno');
const conDB = require('../DAO/bcdDAO');


const cadastrarAluno = (req, res) => {
    conDB.query(Aluno.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};

const excluirAluno = (req, res) => {
    conDB.query(Aluno.toDelete(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};

const editarAluno = (req, res) => {
    conDB.query(Aluno.toUpdate(req.body), (err, result) => {
        if (result.affectedRows > 0) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};
const listaAlunos = (req, res) => {
    conDB.query(Aluno.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}


const listaAluno = (req, res) => {
    conDB.query(Aluno.toReadId(req.params), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    cadastrarAluno,
    editarAluno,
    excluirAluno,
    listaAlunos,
    listaAluno
}