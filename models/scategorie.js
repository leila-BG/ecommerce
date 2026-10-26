const Categorie =require("./categorie.js");
const scategorieSchema=mongoose.Schema({
nomscategorie:{ type: String, required: true },//requiared = obligatoire
imagescat :{ type: String, required: false },
categorieID: {type:mongoose.Schema.Types.ObjectId,
ref:Categorie}
})
module.exports=mongoose.model('scategorie',scategorieSchema)