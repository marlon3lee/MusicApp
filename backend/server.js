const express = require('express')
const dotenv = require('dotenv')

const port = 5000

const app = express()

app.listen(port, () => console.log('server started on port 5000'))