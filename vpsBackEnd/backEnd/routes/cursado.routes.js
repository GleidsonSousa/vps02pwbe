const express = require('express');
const router = express.Router();

const RotaCursados = require("../controllers/cursadosController");

router.get("/cursados/read/", RotaCursados.listaCursados);
router.get("/cursados/read/alunos/:id_aluno", RotaCursados.listaCursado);



module.exports = router;