import ReservationModel from "../models/reservation.js";
import DestinationModel from "../models/destination.js";
export async function getAllReservation(){
    const reservations=await ReservationModel.find();
    return reservations;
}


export async function getReservationById(idR){
    return await ReservationModel.findById(idR);
}

export async function deleteReservation(idR){
    return await ReservationModel.findByIdAndDelete(idR);;
}


export async function addReservation(reservation) {
    const { dateDebut, dateFin, nombrePersonnes, destinationId, voyageurId } = reservation;
    
    if (!dateDebut || !dateFin || !destinationId) {
        throw new Error("dateDebut, dateFin, and destinationId are required.");
    }
    
    const startDate = new Date(dateDebut);
    const endDate = new Date(dateFin);
    const numNights = (endDate - startDate) / (1000 * 60 * 60 * 24); 
    
    if (numNights <= 0) {
        throw new Error("dateFin should be after dateDebut.");
    }

        const destination = await DestModel.findById(destinationId);
        if (!destination) {
            throw new Error("Destination not found.");
        }

        const prixTotal = numNights * destination.prixParNuit;

        const newReservation = new ReservationModel({
            dateDebut,
            dateFin,
            nombrePersonnes,
            prixTotal,
            destinationId,
            voyageurId
        });

        return await newReservation.save();
}


export async function updateReservation(idR,reservation){
    const { dateDebut, dateFin, destinationId } = reservation;
    
    if (!dateDebut || !dateFin || !destinationId) {
        throw new Error("dateDebut, dateFin, and destinationId are required.");
    }
    
    const startDate = new Date(dateDebut);
    const endDate = new Date(dateFin);
    const numNights = (endDate - startDate) / (1000 * 60 * 60 * 24); 
    
    if (numNights <= 0) {
        throw new Error("dateFin should be after dateDebut.");
    }

        const destination = await DestinationModel.findById(destinationId);
        if (!destination) {
            throw new Error("Destination not found.");
        }

        const prixTotal = numNights * destination.prixParNuit;

        

        return await ReservationModel.findByIdAndUpdate(idR, {
            ...reservation,
            prixTotal, 
        },
        { new: true });
}

