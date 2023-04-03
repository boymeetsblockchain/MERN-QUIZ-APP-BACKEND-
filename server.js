const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const questionRouter =require('./routes/questionRoute')
const resultRouter =require('./routes/resultRoute')
const connect = require('./database/conn')
// middlewares
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

// application port 
const PORT = process.env.PORT || 8080
connect().then(()=>{
   try {
    app.listen(PORT, ()=>{
        console.log(`Server connected to http://localhost:${PORT}`) 
    })
   } catch (error) {
     console.log('cannot connect to mongoDb')
   }
})
.catch(err => console.log(err, "Invalid Database Connection"))


// routes
app.use('/api',questionRouter)
app.use('/api',resultRouter)


