const express = require('express');
const router = express.Router();

const RotaCursos = require("../controllers/cursosController");

router.get("/cursos/read/", RotaCursos.listaCursos);
router.get("/cursos/read/:id", RotaCursos.listaCurso);



module.exports = router;