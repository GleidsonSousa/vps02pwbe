const toReadAll = () => {
    return "SELECT * FROM vw_cursados";
}

const toReadId = (model) => {
    return `SELECT * FROM vw_cursados  WHERE id_aluno =  ${model.id_aluno}`;
}

module.exports = {
    toReadAll,
    toReadId
}