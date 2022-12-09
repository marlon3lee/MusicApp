const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.port || 5000

const app = express()

app.get("/api", (req, res) => {
    res.json({ message: "get"})
})

app.listen(port, () => console.log(`server started on port ${port}`))