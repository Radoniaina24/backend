const express = require('express')
const mongoose =require('mongoose')
require('dotenv').config()
const app = express()
const userRoutes = require('./routes/userRoutes')
const port = process.env.PORT

app.use(express.json())

mongoose.connect(process.env.URI)
    .then(()=>{
      app.listen(port, () => {
        console.log(`connected db and app listening on port ${port}`)
      })
    })
    .catch(error =>{
      console.log(error)
    })

app.use('/api/users', userRoutes)

