const { response } = require("express");
const express = require ("express");
const router = express.Router();

router.get("/", (request, response)=>{
    console.log("request get to /nama")
    response.send("/nama diterima")
})

router.get("/:id", (request, response)=>{
    console.log("request nama by id", request.params.id)
    response.send("request by id diterima " + request.params.id)
})
module.exports = router;