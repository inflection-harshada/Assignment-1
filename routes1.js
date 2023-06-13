const express = require('express')
const app = express()
const port = 4000
app.get('/',(req, res) => {
    res.send('hello nodeJs')
})
app.post('/',(req, res) => {
    res.send('posted')
})
app.put('/student',(req, res) => {
    res.send('put')
})
app.delete('/',(req, res) => {
    res.send('delete')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})