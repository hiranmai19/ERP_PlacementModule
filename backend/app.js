const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const fast2sms = require('fast-two-sms');

dotenv.config({path:"./config.env"})

const express = require("express")

const app = express()

const DB = process.env.DATABASE 
const PATH = process.env.CONNECTIONPATH 


app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(express.json({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(cookieParser())
app.use(cors())
app.use(require("./routerRoute/auth"))

 

require("./db/connection")

app.listen(PATH, ()=>{
  console.log("Server Started!")
}) 

//Callback function implemented
app.post('/SendMessage', async (req,res)=>{
  const response = await fast2sms.sendMessage({authorisation: process.env.API_KEY, message : req.body.message ,  numbers : ['9182367767','7780328312']})
  res.json({message:{response}})
})



app.get("/", (request, response)=>{
  setTimeout(()=>{
    response.send("Hello World!")
  }, 5000)
})