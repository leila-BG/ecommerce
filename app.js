
//les importes mon besoin
const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose =require("mongoose")
dotenv.config()
app.use(express.json());


const categorieRouter =require("./routes/categorie.route")// 2



// Connexion à la base données
mongoose.connect(process.env.databasecloud) //meme dans .envs 
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit(); });



app.use('/api/categorie', categorieRouter);// 1
app.listen(process.env.PORT)

