const Pool = require('pg').Pool;

const pool = new Pool({
    user: "tatsatjha",
    host: "localhost",
    database: "trainer",
    password: "",
    port: 5432
})

module.exports = pool