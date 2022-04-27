const express = require("express")
const app = express()
const cors = require('cors')
const {getAllAbsences} = require('./controllers/absences.js')

app.use(cors())
app.get("/api/absences", getAllAbsences )




app.listen(5000, ()=>{
    console.log("Listening port 5000")
})