
const express=require("express")
const app=express()
const port=process.env.PORT || 8000;


app.get("/",(req,res)=>{
    res.send("Server Start Now")
})

app.get("/api/product",(req,res)=>{
    const product=[{id:1,name:"pro1"},{id:2,name:"pro2"},{id:3,name:"pro3"}]
    res.send(product)
})

app.listen(port,()=>{
    console.log(`server run on port  ${port}`)
})