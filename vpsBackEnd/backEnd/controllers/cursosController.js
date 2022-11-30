const Curso = require('../models/curso');
const conDB = require('../DAO/bcdDAO');

const listaCursos = (req, res) => {
    conDB.query(Curso.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}


const listaCurso = (req, res) => {
    conDB.query(Curso.toReadId(req.params), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    listaCursos,
    listaCurso
}