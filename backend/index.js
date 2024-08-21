
const express = require('express');
const cors = require('cors');
const request = require('request');
const dotenv = require('dotenv');
const url = require('url');
dotenv.config();

const app = express();

const corsOptions = {
    origin:['http://localhost:1234', "https://noon-backend.vercel.app/","http://localhost:8000","https://react-planet.vercel.app/"],
   methods: ['GET', 'POST'],
   allowedHeaders: ['Content-Type', 'Authorization', 'X-Addresskey', 'X-Content', 'X-Experience', 'X-Lat', 'X-Lng', 'X-Locale', 'X-Mp', 'X-Platform', 'X-Visitor-Id'],
   credentials: true
};


app.use(cors(corsOptions));
/* app.use('/', (req, res) => {
    const url = req.url.substring(1);
    req.pipe(request(url)).pipe(res);
}); */

/* app.use('/', (req, res) => {
    const url = req.url.substring(1);
    const fullUrl = url.startsWith('http') ? url : `https://${url}`;  // Ensure correct protocol is used
    req.pipe(request(fullUrl)).pipe(res);
}); */

/* app.get("/",(req,res)=>{
    res.send("Server Start Now")
}) */

  /*   app.use('/', (req, res) => {
        let requestedUrl = req.url.substring(1); // Remove leading slash
    
        // Check if URL starts with http or https, if not prepend it with "http://"
        if (!requestedUrl.startsWith('http')) {
            requestedUrl = `http://${requestedUrl}`;
        }
    
        // Parse and resolve the URL
        const parsedUrl = url.parse(requestedUrl);
    
        // Ensure that we have a valid URL
        if (!parsedUrl.protocol || !parsedUrl.host) {
            return res.status(400).send('Invalid URL');
        }
    
        // Pipe the request to the target URL
        req.pipe(request(requestedUrl)).pipe(res);
    }); */
app.get("/api/product",(req,res)=>{
    const product=[{id:1,name:"pro1"},{id:2,name:"pro2"},{id:3,name:"pro3"}]
    res.send(product)
})

const port=process.env.PORT || 8000;


app.listen(port,()=>{
    console.log(`server run on port  ${port}`)
})