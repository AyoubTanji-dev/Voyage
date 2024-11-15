import mongoose from "mongoose";

const destinationSchema=new mongoose.Schema({
    nom:{type:String,required:true},
    pays:{type:String,required:true},
    prixParNuit:{type:Number,required:true},
    Description:{type:String,required:false}
});

const DestinationModel=mongoose.model("destination",destinationSchema);

export default DestinationModel;