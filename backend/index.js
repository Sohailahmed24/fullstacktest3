
const express=require("express")
const app=express()
const port=process.env.PORT || 8000;


app.get("/",(req,res)=>{
    res.send("Server Start Now")
})

app.listen(port,()=>{
    console.log(`server run on port  ${port}`)
})