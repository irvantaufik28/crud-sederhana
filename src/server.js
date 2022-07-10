const port =3000
const express = require ("express")
const server = express ()
const namaController = require ("../controller/nama.controller")

server.use("/nama", namaController)


server.use("/", (request, response)=>{
    response.send("Main server succes ok!")
})

server.listen(port,  () =>{
    console.log('server running on ' + port)
})