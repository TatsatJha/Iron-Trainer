const getPrograms = "SELECT * FROM programs";
const getProgramById = "SELECT * FROM programs WHERE id = $1";
const addProgram = "INSERT INTO programs (name, sessions) VALUES ($1, $2)";
const deleteProgram = "DELETE FROM programs WHERE id = $1";
const updateProgram = "UPDATE programs SET name = $1 WHERE id = $2"; //need to update

module.exports = {
    getPrograms,
    getProgramById,
    addProgram,
    deleteProgram,
    updateProgram
};