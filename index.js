const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5050

// Middleware

app.use(cors())
app.use(express.json())

// Starting URL

app.get("/", (req, res) => {
  res.send("Job Portal")
})
