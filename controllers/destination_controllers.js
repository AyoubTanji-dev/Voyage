import * as destinationService from "../services/destination_services";

export async function getAllDestinations(req,res){
    try{
        const destinations=await destinationService.getAllDestinations();
        res.status(200).json(destinations);
    }catch(err){
        res.status(500).json({message:err.message})
}
}

export async function addDestination(req,res){
    try{
    const destination =await destinationService.addDestinbation(req.body);
    res.status(201).json(destination);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function deleteDestinationById(req,res){
    try{
    const destination=await destinationService.deleteDestination(req.params.id);
    res.status(204).json({ message: `The destination with id: ${req.params.id} has been deleted`, destination });
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function getDestinationById(req,res){
    try{
    const destination=await destinationService.getDestinationById(req.params.id);
    res.json(destination);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}

export async function updateDestination(req,res){
    try{
    const destination=await destinationService.updateDestination(req.params.id,req.body);
    res.status(201).json(destination);
    }catch(err){
        res.status(500).json({message:err.message})
        }
}