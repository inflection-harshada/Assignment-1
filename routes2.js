const express = require('express')
const app = express()
const port = 5000

app.route("/student")

.get((req, res) => {
    res.send("get stdnt")
})
.put((req, res) => {
    res.send("user updated")
})
.post((req, res) => {
    res.send("user created")
})
.delete((req, res) => {
    res.send("user deleted")
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})