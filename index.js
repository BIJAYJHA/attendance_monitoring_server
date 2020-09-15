const express= require('express');
const app= express();
const bodyParser= require('body-parser');
const cors=require('cors');
const mongodbConection=require('./connection/mongo-connect');
const port= process.env.port || 3000;


app.use(cors());
mongodbConection.connectMONGODB();
app.use(bodyParser());



app.listen(port,()=>{
    console.log("server is running on port ", port);
})