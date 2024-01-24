const express = require('express')
require('dotenv').config()
const app = express()
const userRoutes = require('./routes/userRoutes')
const port = process.env.PORT

app.use('/api/users', userRoutes)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})