import DestinationModel from "../models/destination.js";
import ReservationModel from "../models/reservation.js";
export async function getAlldestinations(){
    const destinations=await DestinationModel.find();
    return destinations;
}

export async function addDestinbation(destination){
    return await DestinationModel.create(destination);
    
}

export async function getDestinationById(idD){
    return await DestinationModel.findById(idD);
}

export async function deleteDestination(idD){
    return await DestinationModel.findByIdAndRemove(idD);
}

export async function updateDestination(IdD, updateData) {
        const updatedDestination = await DestinationModel.findByIdAndUpdate(
            IdD,
            updateData,
            { new: true }
        );

        if (!updatedDestination) {
            throw new Error("Destination not found.");
        }

        const { prixParNuit } = updatedDestination;

        const reservations = await ReservationModel.find({ IdD });

        const updatePromises = reservations.map(async (reservation) => {
            const startDate = new Date(reservation.dateDebut);
            const endDate = new Date(reservation.dateFin);
            const numNights = (endDate - startDate) / (1000 * 60 * 60 * 24); 

            const prixTotal = numNights * prixParNuit; 

            return ReservationModel.findByIdAndUpdate(reservation._id, { prixTotal }, { new: true });
        });

        await Promise.all(updatePromises);

        return updatedDestination;
    }