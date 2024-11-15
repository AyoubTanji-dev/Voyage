import VoyageurModel from "../models/voyageur.js";

export async function getAllVoyageur(){
    const voyageurs=await VoyageurModel.find();
    return voyageurs;
}

export async function addVoyageur(voyageur){
    return await VoyageurModel.create(voyageur);
    
}

export async function getVoyageurById(idV){
    return await VoyageurModel.findById(idV);
}

export async function deleteVoyageur(idV){
    return await VoyageurModel.findByIdAndRemove(idV);
}

export async function updateVoyageur(idV,voyageur){
    return await VoyageurModel.findByIdAndUpdate(idV,voyageur);
}