import * as reservationService from "../services/reservation_services";

export async function getAllreservations(req,res){
    try {
    const reservations=await resService.reservationService();
    res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
        }
}

export async function addreservation(req, res) {
    try {
        const reservation = await reservationService.addReservation(req.body);
        res.status(201).json(reservation);
        } catch (error) {
            res.status(500).json({ message: error.message });
            }
}

export async function deleteReservationById(req,res){
    try {
    const reservation=await reservationService.deleteReservation(req.params.id);
    res.status(204).json({ message: `The reservation with id: ${req.params.id} has been deleted`, reservation });
    } catch (error) {
        res.status(500).json({ message: error.message });
        }
}

export async function getEeservationById(req,res){
    try {
    const reservation=await reservationService.getReservationById(req.params.id);
    res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
        }
}

export async function updateReservation(req,res){
    try {
    const reservation=await reservationService.updateReservation(req.params.id,req.body);
    res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
        }
}

