const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.port || 5000

const app = express()

// loading artists router module into app
app.use('/artists', require('./routes/artistsRoutes'))

app.listen(port, () => console.log(`server started on port ${port}`))