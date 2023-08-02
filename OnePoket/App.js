const express = require("express");
const route = require("./Router/route")
const app= express();

app.use(express.json())
app.use(route);

app.listen(3000,()=>{
    console.log("Program is running on port 3000")
});