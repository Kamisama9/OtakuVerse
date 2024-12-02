const express=require("express");
const app=express();

PORT=8000

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.listen(PORT,()=>{
    console.log("Server Started Sucessfully");
})