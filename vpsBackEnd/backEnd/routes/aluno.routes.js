const express = require('express');
const router = express.Router();

const RotaAlunos = require("../controllers/alunosController");

router.post("/alunos/create/", RotaAlunos.cadastrarAluno);
router.get("/alunos/read/", RotaAlunos.listaAlunos);
router.get("/alunos/read/:id", RotaAlunos.listaAluno);
router.delete("/alunos/delete/", RotaAlunos.excluirAluno);
router.put("/alunos/update/", RotaAlunos.editarAluno);


module.exports = router;