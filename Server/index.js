import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello Server")
})

app.listen(port, () => {
    console.log("SERVER IS RUNNIG AT PORT", port);
})