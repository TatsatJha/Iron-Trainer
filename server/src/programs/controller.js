const { error } = require('console');
const pool = require('../db.js')
const queries = require("./queries.js");

const getPrograms = (req, res)=>{
    pool.query(queries.getPrograms, (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const getProgramById = (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getProgramById, [id], (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

//TODO destructure based on what a program is going to have
const addProgram = (req, res)=>{
    const {name, sessions} = req.body;

    console.log(` sessions: ${String(sessions)}`)

    pool.query(queries.addProgram, [name, sessions], (error, results)=>{
        if(error) throw error;
        res.status(201).send("program created successfully")
    })
}

const deleteProgram =(req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getProgramById, [id], (error, results) =>{
        const noProgramFound = !results.rows.length;
        if(noProgramFound)
            res.send("Program does not exist")

        pool.query(queries.deleteProgram, [id], (error, results) =>{
            if(error) throw error;
            res.status(200).send("Program removed successfully")
        })

    })
}

const updateProgram = (req, res)=>{
    const id = parseInt(req.params.id);
    const {var1} = req.body;

    pool.query(queries.getProgramById, [id], (error, results) =>{
        const noProgramFound = !results.rows.length;
        if(noProgramFound)
            res.send("Program does not exist")

        pool.query(queries.updateProgram, [var1, id], (error, results) =>{
            if(error) throw error
            res.status(200).send("program updated successfully")
        })
    })
}
// const someJson = [
//     {
//         "name": "Day 1", 
//         "Exercise List": [
//             {
//                 "name": "Bench Press",
//                 "sets": "4",
//                 "bottom rep": "8",
//                 "top rep": "12",
//             },
//             {
//                 "name": "Squat",
//                 "sets": "3",
//                 "bottom rep": "6",
//                 "top rep": "12",
//             },
//             {
//                 "name": "Deadlift",
//                 "sets": "2",
//                 "bottom rep": "3",
//                 "top rep": "5",
//             }
//         ]
//     },
//     {"name": "Day 2", "Exercise List": [{"name": " Press","sets": "4","bottom rep": "8","top rep": "12",},{"name": "at","sets": "3","bottom rep": "6","top rep": "12",},{"name": "lift","sets": "2","bottom rep": "3","top rep": "5",}]},{"name": "Day 3", "Exercise List": [{"name": "Bench ","sets": "4","bottom rep": "8","top rep": "12",},{"name": "Sq","sets": "3","bottom rep": "6","top rep": "12",},{"name": "Dead","sets": "2","bottom rep": "3","top rep": "5",}]}]

//     const someotherJson = '[{"name": "Day 1"},{"name": "Day 2"}]'
module.exports = {
    getPrograms,
    getProgramById,
    addProgram,
    deleteProgram,
    updateProgram
}