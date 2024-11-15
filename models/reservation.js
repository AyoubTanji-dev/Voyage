import mongoose from "mongoose";

const reservationSchema=new mongoose.Schema({
    dateDebut:{type:Date,required:true},
    dateFin:{type:Date,required:true},
    nombrePersonnes:{type:Number,required:true},
    prixTotal:{type:Number,default:0},
    destination:[{
        type:mongoose.Types.ObjectId,
        ref:"destination",
    }],
    voyageur:[{
        type:mongoose.Types.ObjectId,
        ref:"voyageur"
    }]
});

const ReservationModel=mongoose.model("reservation",reservationSchema);

export default ReservationModel;