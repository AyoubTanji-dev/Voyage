import * as voyageurService from "../services/voyageur_services";

export async function getAllvoyageurs(req,res){
    try{
    const voyageurs=await voyageurService.getAllVoyageur();
    res.status(200).json(voyageurs);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function addvoyageur(req,res){
    try{
    const voyageur =await voyageurService.addVoyageur(req.body);
    res.status(201).json(voyageur);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function deleteVoyageurById(req,res){
    try{
    const voyageur=await voyageurService.deleteVoyageur(req.params.id);
    res.status(204).json({ message: `The voyageur with id: ${req.params.id} has been deleted`, voyageur });
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function getVoyageurById(req,res){
    try{
    const voyageur=await voyageurService.getVoyageurById(req.params.id);
    res.status(200).json(voyageur);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function updatevoyageur(req,res){
    try{
    const voyageur=await voyageurService.updateVoyageur(req.params.id,req.body);
    res.status(201).json(voyageur);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}