const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const port = process.env.port || 5000

connectDB()

const app = express()

// middleware to recognize incoming request as json object or strings/arrays
app.use(express.json())
app.use(express.urlencoded({extended: false})) // parsing the URL-encoded data with querystring library (false)

// loading artists router module into app
app.use('/artists', require('./routes/artistsRoutes'))

app.use('/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))