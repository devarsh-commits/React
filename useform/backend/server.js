import express from "express";
// import bodyParser from "body-parser";
import cors from 'cors';
const app=express();
const port=3000;
app.use(cors())
app.use(express.json()) //for incoming data conversion into json in @version 5 drectly express.json
app.get('/',(req,res)=>{
    res.send('hello')
})
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('hello ')
})
app.listen(port,()=>{
    console.log('your server is running')
})