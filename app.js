//les importes
const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose =require("mongoose")
dotenv.config()

// Connexion à la base données
//mongoose.connect(process.env.databaselocal)
//.then(() => {console.log("DataBase Successfully Connected");})
//.catch(err => { console.log("Unable to connect to database", err);
//process.exit(); });

app.get("/", (req,res)=>{
    res.send("page d'acceil")
})//app.get(route,fonction a executer)

app.get("/contact",(req,res)=>{
    res.send("Page de contact")
})
app.listen(process.env.PORT)

