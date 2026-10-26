const mongoose =require("mongoose")//mongoos oblige qui tout les document a meme skima(mem champ)

const categorieSchema=mongoose.Schema({
nomcategorie:{ type: String, required: true,unique:true },
imagecategorie :{ type: String, required: false }
})
module.exports=mongoose.model('categorie',categorieSchema)
