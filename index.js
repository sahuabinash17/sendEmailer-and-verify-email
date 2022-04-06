// const nodemailer= require('nodemailer');




// const express= require('express');
// const app=express();

// app.use(express.json());


const app = require("./server")

app.listen(3000,()=>{

    console.log(`App running on port ${3000}`)
})
