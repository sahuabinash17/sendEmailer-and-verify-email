// const nodemailer= require('nodemailer');




// const express= require('express');
// const app=express();

// app.use(express.json());

// app.post('/',(req,res)=>{
//     const options={
//         from:"sahuabinash17@gmail.com",
//         to:"lenkaharekrushna1@gmail.com",
//         subject:"test nodemailer",
//         text:"562489"
//     };
    
//     const transporter = nodemailer.createTransport({
//         service:"gmail",
//         auth:{
//             user:"sahuabinash17@gmail.com",
//             pass:"8637294845"
//         }
//     });
    
// transporter.sendMail(options, (err,info) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("sent: " + info.response);
// })
    
// })

// app.listen(port,()=>{

//     console.log(`App running on port ${port}`)
// })
const app = require("./server")

app.listen(3000,()=>{

    console.log(`App running on port ${3000}`)
})