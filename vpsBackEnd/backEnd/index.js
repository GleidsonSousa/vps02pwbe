const express = require('express');
const cors = require('cors');

const alunoRouter = require('./routes/aluno.routes');
const cursoRouter = require('./routes/curso.routes');
const cursadoRouter = require('./routes/cursado.routes');



const app = express();
app.use(express.json())
app.use(cors())
app.use(alunoRouter)
app.use(cursoRouter)
app.use(cursadoRouter);



app.listen(3300, () => {
    console.log("API ON PORTA: 3300");
});