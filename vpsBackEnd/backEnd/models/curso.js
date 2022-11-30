const toReadAll = () => {
    return "SELECT * FROM cursos";
}

const toReadId = (model) => {
    return `SELECT * FROM cursos  WHERE id =  ${model.id}`;
}

module.exports = {
    toReadAll,
    toReadId
}