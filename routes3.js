const express = require('express')
const app = express()
const port = 4000
const studentRouter = express.Router()
app.use("/student", studentRouter)
studentRouter.get('/',(req, res) => {
    res.send({
        Message: "got requuest",
        Url : req.baseUrl,
        Method : req.method
    });
})
studentRouter.post('/',(req, res) => {
    res.send({
        Message: "post request",
        Url : req.baseUrl,
        Method : req.method
    });
    
})
studentRouter.put('/student',(req, res) => {
    res.send({
        Message: "put requuest",
        Url : req.baseUrl,
        Method : req.method
    });
    
})
studentRouter.delete('/',(req, res) => {
    res.send({
        Message: "delete requuest",
        Url : req.baseUrl,
        Method : req.method
    });
   
})
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})