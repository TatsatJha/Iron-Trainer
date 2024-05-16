const express = require("express")
const programRoutes = require("./programs/routes.js")

const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.use('/api/v1/programs', programRoutes )

app.listen(port, ()=>console.log(`listenign on port ${port}`))