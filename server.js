
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const nodemailer= require('nodemailer');
const app = express();
app.use(cors({ origin: true })); app.use(helmet()); app.use(compression()); app.use(express.json()); app.use(express.urlencoded({ extended: false }));
//  const v1Router = require("../api/routes/v1.route"); 
 app.use("/api/sendEmail", (req,res)=>{
     console.log(`request body`,req.body);
    var val = Math.floor(100000 + Math.random() * 900000); 
    console.log(`otp`,val);
        const options={
                from:"sahuabinash17@gmail.com",
                to:`${req.body.Email}`,
                subject:"sending Mail",
                text:`${val}`
            };
            
            const transporter = nodemailer.createTransport({
                service:"gmail",
                auth:{
                    user:"sahuabinash17@gmail.com",
                    pass:"8637294845"
                }
            });
            
        transporter.sendMail(options, (err,info) =>{
            if(err){
                console.log(err);
                res.json({
                    status:-1,
                    statusDesc:err
                })
            }else{

                console.log("sent: " + info.response);
                res.json({
                    status:0,
                    statusDesc:"Emails sent succesfully"
                })
                
            }
            

           
        })
     

 }); 
 app.use("/api/verifyEmail",async(req,res)=> 

 
 module.exports = app;

