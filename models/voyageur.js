import mongoose from "mongoose";

const voyageurSchema=new mongoose.Schema({
    nom:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    telephone:{type:String,required:false}
});

const VoyageurModel=mongoose.model("voyageur",voyageurSchema);

export default VoyageurModel;